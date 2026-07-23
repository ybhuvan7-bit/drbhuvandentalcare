"use client";

import { useEffect, useState } from "react";
import { Star } from "lucide-react";

export default function GoogleReviews() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadReviews() {
      try {
        const res = await fetch("/api/reviews");

        if (!res.ok) {
          throw new Error("Failed to fetch reviews");
        }

        const result = await res.json();
        console.log("Google Reviews:", result);

        setData(result);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    loadReviews();
  }, []);

  if (loading) {
    return (
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-orange-50">
        <div className="text-center text-lg text-gray-500">
          Loading Google Rating...
        </div>
      </section>
    );
  }

  if (!data || data.error) {
    return (
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-orange-50">
        <div className="text-center text-red-500 text-lg">
          Unable to load Google Rating.
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-orange-50">
      <div className="max-w-5xl mx-auto px-6">
        <div className="bg-white rounded-3xl shadow-2xl p-10 text-center">

          {/* Google Logo */}
          <div className="flex justify-center mb-5">
            <svg
              width="56"
              height="56"
              viewBox="0 0 48 48"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#FFC107"
                d="M43.6 20.5H42V20H24v8h11.3C33.7 32.7 29.3 36 24 36c-6.6 0-12-5.4-12-12S17.4 12 24 12c3 0 5.7 1.1 7.8 2.9l5.7-5.7C34.1 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.4-.4-3.5z"
              />
              <path
                fill="#FF3D00"
                d="M6.3 14.7l6.6 4.8C14.7 15.5 18.9 12 24 12c3 0 5.7 1.1 7.8 2.9l5.7-5.7C34.1 6.1 29.3 4 24 4c-7.7 0-14.3 4.3-17.7 10.7z"
              />
              <path
                fill="#4CAF50"
                d="M24 44c5.2 0 10-2 13.5-5.2l-6.2-5.2C29.2 35.1 26.8 36 24 36c-5.3 0-9.8-3.3-11.4-8l-6.5 5C9.4 39.5 16.1 44 24 44z"
              />
              <path
                fill="#1976D2"
                d="M43.6 20.5H42V20H24v8h11.3c-1.1 3-3.5 5.3-6.7 6.6l6.2 5.2C38.3 36.5 44 31 44 24c0-1.3-.1-2.4-.4-3.5z"
              />
            </svg>
          </div>

          <h2 className="text-4xl font-bold text-gray-900">
            Google Rating
          </h2>

          <p className="text-gray-600 mt-3 mb-8">
            Trusted by hundreds of happy patients.
          </p>

          <div className="text-6xl font-extrabold text-blue-700">
            {data.rating}
          </div>

          <div className="flex justify-center gap-1 mt-4">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                className="w-8 h-8 fill-yellow-400 text-yellow-400"
              />
            ))}
          </div>

          <p className="mt-5 text-xl font-semibold text-gray-700">
            {data.userRatingCount}+ Google Reviews
          </p>

          <a
            href="https://g.page/r/Cb9Tvhf5l8RPEBM/review"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-8 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition duration-300 shadow-lg hover:shadow-xl"
          >
            ⭐ Read Google Reviews
          </a>

        </div>
      </div>
    </section>
  );
}