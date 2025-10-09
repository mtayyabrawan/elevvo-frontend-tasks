import { z } from "zod";
import { emailSchema, nameSchema, passwordSchema } from "./BaseSchemas";

const SignUpSchema = z.object({
    name: nameSchema,
    email: emailSchema,
    password: passwordSchema,
});

export type SignUpType = z.infer<typeof SignUpSchema>;

export default SignUpSchema;
