import { z } from "zod";
import { emailSchema, passwordSchema } from "./BaseSchemas";

const LoginSchema = z.object({
    email: emailSchema,
    password: passwordSchema,
});

export type LoginType = z.infer<typeof LoginSchema>;

export default LoginSchema;
