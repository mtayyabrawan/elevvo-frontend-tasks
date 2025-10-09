import { z } from "zod";
import { emailSchema, nameSchema } from "./BaseSchemas";

const contactSchema = z.object({
    name: nameSchema,
    subject: z
        .string({ error: "Subject is required" })
        .regex(/^[\w\d\s]+$/, {
            error: "Subject can only have letters, digits and spaces",
        })
        .min(3, { error: "Subject must have at least 3 characters" })
        .max(20, { error: "Subject can only contain max 20 characters" }),
    email: emailSchema,
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
