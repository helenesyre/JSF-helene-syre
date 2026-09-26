"use client";
import { useEffect } from "react";

export default function Toast({
  message,
  duration,
  onClose,
}: {
  message: string;
  duration: number;
  onClose: () => void;
}) {
  useEffect(() => {
    const timer = setTimeout(onClose, duration);
    return () => clearTimeout(timer);
  }, [onClose, duration]);

  return (
    <div className="bg-stone-900 text-stone-50 p-4 rounded font-medium shadow-lg">
      {message}
    </div>
  );
}
