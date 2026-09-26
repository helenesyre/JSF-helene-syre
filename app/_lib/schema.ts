import z from "zod";

// Contact Form Schema
export const ContactFormSchema = z.object({
  // Name of the person submitting the contact form
  name: z
    .string()
    .trim()
    .min(3, "Name must be at least 3 characters")
    .max(70, "Names cannot be longer than 70 characters"),
  // Email address of the person submitting the contact form
  email: z
    .email({ message: "Invalid email address" })
    .trim()
    .min(5, "Email must be at least 5 characters"),
  // Message content of the contact form
  message: z
    .string()
    .trim()
    .min(10, "Message must be at least 10 characters")
    .max(500, "Message cannot be longer than 500 characters"),
  // Subject of the contact form
  subject: z
    .string()
    .trim()
    .min(3, "Subject must be at least 3 characters")
    .max(100, "Subject cannot be longer than 100 characters"),
});
