"use client";
import { useEffect } from "react";

// Toast component
export default function Toast({
  message,
  duration,
  onClose,
}: {
  message: string;
  duration: number;
  onClose: () => void;
}) {
  // Set up a timer to automatically close the toast after the specified duration
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
