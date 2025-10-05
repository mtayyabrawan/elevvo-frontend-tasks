import { z } from "zod";

const contactSchema = z.object({
    name: z
        .string({ error: "Name is required" })
        .regex(/^[\w\s]+$/, { error: "Name can only have letters and spaces" })
        .min(3, { error: "Name must have at least 3 characters" })
        .max(20, { error: "Name can only contain max 20 characters" }),
    subject: z
        .string({ error: "Subject is required" })
        .regex(/^[\w\d\s]+$/, {
            error: "Subject can only have letters, digits and spaces",
        })
        .min(3, { error: "Subject must have at least 3 characters" })
        .max(20, { error: "Subject can only contain max 20 characters" }),
    email: z.email({ error: "Email is required" }),
    message: z
        .string({ error: "Message is required" })
        .regex(/^[\w\d\s]+$/, {
            error: "Message can only have letters, digit and spaces",
        })
        .min(10, { error: "Message must have at least 10 characters" })
        .max(150, { error: "Message can only contain max 20 characters" }),
});

export type ContactType = z.infer<typeof contactSchema>;

export default contactSchema;
