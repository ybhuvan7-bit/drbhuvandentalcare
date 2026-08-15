"use client";

export default function WhatsAppButton({
  children,
  className = "",
}) {
  const handleClick = () => {
    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      window.gtag("event", "conversion", {
        send_to: "AW-18310496002/-QlPCKz71OEcEIL-j5tE",
        value: 1,
        currency: "INR",
      });
    }
  };

  return (
    <a
      href="https://wa.me/918074528763"
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className={className}
    >
      {children}
    </a>
  );
}