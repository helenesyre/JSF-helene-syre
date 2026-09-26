"use client";
import { X } from "lucide-react";
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
    <div className="flex items-center bg-stone-900 text-stone-50 p-4 rounded font-medium shadow-lg">
      {message}
      <X className="ml-4 cursor-pointer" onClick={onClose} />
    </div>
  );
}
