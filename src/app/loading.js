import Image from "next/image";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white">
      <div className="flex flex-col items-center">

        <div className="relative">

          {/* Glow */}
          <div className="absolute inset-0 rounded-full bg-orange-500 opacity-20 blur-3xl animate-pulse"></div>

          {/* Rotating Ring */}
          <div className="absolute -inset-3 rounded-full border-[5px] border-orange-200 border-t-orange-600 animate-spin"></div>

          {/* Logo */}
          <Image
            src="/logo.png"
            alt="Dr. Bhuvan's Dental"
            width={90}
            height={90}
            priority
            className="relative rounded-full"
          />

        </div>

        <h2 className="mt-8 text-3xl font-bold text-orange-600">
          Dr. Bhuvan's Dental
        </h2>

        <p className="mt-2 text-gray-500 text-lg">
          Creating Healthy Smiles...
        </p>

        {/* Progress Bar */}
        <div className="mt-8 w-60 h-2 rounded-full bg-orange-100 overflow-hidden">
          <div className="h-full w-1/2 bg-orange-600 animate-pulse rounded-full"></div>
        </div>

      </div>
    </div>
  );
}