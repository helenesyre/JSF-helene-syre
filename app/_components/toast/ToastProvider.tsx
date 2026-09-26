"use client";

import { useToast } from "@/app/_lib/stores";
import Toast from "./Toast";

export default function ToastProvider() {
  const { messages, removeMessage } = useToast();
  if (messages.length === 0) return null;

  return (
    <div className="fixed top-4 right-4 z-50 flex flex-col gap-2">
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
