"use client";

import { useToast } from "@/app/_lib/stores";
import Toast from "./Toast";

// Toast provider component
export default function ToastProvider() {
  // Access the toast messages and the function to remove a message
  const { messages, removeMessage } = useToast();
  // If there are no messages, do not render the toast container
  if (messages.length === 0) return null;

  return (
    <div className="fixed top-4 right-4 z-50 flex flex-col gap-2">
      {/* Render the list of toast messages */}
      {messages.map((message, index) => (
        <Toast
          key={index}
          message={message.message}
          duration={message.duration}
          onClose={() => removeMessage(index)}
        />
      ))}
    </div>
  );
}
