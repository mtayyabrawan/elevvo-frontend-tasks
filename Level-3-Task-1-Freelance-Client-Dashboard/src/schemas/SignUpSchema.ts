import { z } from "zod";

const SignUpSchema = z.object({
    name: z
        .string({ error: "Name is required" })
        .regex(/^[\w\s]+$/, { error: "Name can only have letters and spaces" })
        .min(3, { error: "Name must have at least 3 characters" })
        .max(20, { error: "Name can only contain max 20 characters" }),
    email: z.email({ error: "Enter is required" }),
    password: z
        .string()
        .min(8, "Password must be at least 8 characters long")
        .refine(
            (val) => (val.match(/[a-z]/g) || []).length >= 3,
            "Password must contain at least 3 lowercase letters"
        )
        .refine(
            (val) => (val.match(/[A-Z]/g) || []).length >= 2,
            "Password must contain at least 2 uppercase letter"
        )
        .refine(
            (val) => (val.match(/[0-9]/g) || []).length >= 2,
            "Password must contain at least 2 numbers"
        )
        .refine(
            (val) => (val.match(/[^a-zA-Z0-9]/g) || []).length >= 1,
            "Password must contain at least 1 symbol"
        ),
});

export type SignUpType = z.infer<typeof SignUpSchema>;

export default SignUpSchema;
