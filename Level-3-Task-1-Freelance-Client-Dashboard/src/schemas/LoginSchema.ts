import { z } from "zod";

const LoginSchema = z.object({
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

export type LoginType = z.infer<typeof LoginSchema>;

export default LoginSchema;
