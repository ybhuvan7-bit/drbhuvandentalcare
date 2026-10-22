import { NextResponse } from "next/server";
import { createClient as createServerClient } from "@/lib/supabase/server";
import { createClient } from "@supabase/supabase-js";

export async function POST(request) {
  try {
    // Current logged-in user
    const supabase = await createServerClient();

    const {
      data: { user },
      error: userError,
    } = await supabase.auth.getUser();

    if (userError || !user) {
      return NextResponse.json(
        { error: "You must be logged in." },
        { status: 401 }
      );
    }

    // Check current user's role
    const { data: currentProfile, error: profileError } =
      await supabase
        .from("user_profiles")
        .select("role")
        .eq("id", user.id)
        .single();

    if (profileError || currentProfile?.role !== "doctor") {
      return NextResponse.json(
        { error: "Only a doctor can create staff accounts." },
        { status: 403 }
      );
    }

    // Read form data
    const body = await request.json();

    const fullName = body.fullName?.trim();
    const email = body.email?.trim().toLowerCase();
    const role = body.role;
    const password = body.password;

    const allowedRoles = [
      "assistant_doctor",
      "receptionist",
      "dental_assistant",
    ];

    if (!fullName || !email || !role || !password) {
      return NextResponse.json(
        { error: "Please fill all required fields." },
        { status: 400 }
      );
    }

    if (!allowedRoles.includes(role)) {
      return NextResponse.json(
        { error: "Invalid staff role." },
        { status: 400 }
      );
    }

    if (password.length < 8) {
      return NextResponse.json(
        { error: "Password must contain at least 8 characters." },
        { status: 400 }
      );
    }

    // SERVER ONLY — never expose this key to browser
    const admin = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL,
      process.env.SUPABASE_SERVICE_ROLE_KEY,
      {
        auth: {
          autoRefreshToken: false,
          persistSession: false,
        },
      }
    );

    // Create Supabase Auth account
    const {
      data: authData,
      error: authError,
    } = await admin.auth.admin.createUser({
      email,
      password,
      email_confirm: true,
    });

    if (authError) {
      return NextResponse.json(
        { error: authError.message },
        { status: 400 }
      );
    }

    const userId = authData.user.id;

    // Create staff profile
    const { error: insertError } = await admin
      .from("user_profiles")
      .insert({
        id: userId,
        full_name: fullName,
        email,
        role,
        is_active: true,
      });

    // If profile creation fails, remove the newly-created Auth user
    if (insertError) {
      await admin.auth.admin.deleteUser(userId);

      return NextResponse.json(
        { error: insertError.message },
        { status: 400 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Staff account created successfully.",
      staff: {
        id: userId,
        full_name: fullName,
        email,
        role,
      },
    });
  } catch (error) {
    console.error("Create staff error:", error);

    return NextResponse.json(
      { error: "Something went wrong while creating the staff account." },
      { status: 500 }
    );
  }
}