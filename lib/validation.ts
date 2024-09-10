import { z } from "zod";

// export const VisitorFormValidation = z.object({
//   fName: z
//     .string()
//     .min(2, "Name must be at least 2 characters")
//     .max(50, "Name must be at most 50 characters"),
//   lName: z
//     .string()
//     .min(2, "Name must be at least 2 characters")
//     .max(50, "Name must be at most 50 characters"),
//   email: z.string().email("Invalid email address"),
//   message: z.string(),
// });

// Define validation schema using Zod
export const VisitorFormValidation = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email().min(1, "Name is required"),
  message: z.string().min(1, "Message is required"),
});

// email: z.string().email("Invalid email address"),
