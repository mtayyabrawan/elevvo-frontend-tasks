import { z } from "zod";

const newsLetter = z.object({
    email: z.email("Emails is required"),
});

export type NewsLetterSchema = z.infer<typeof newsLetter>;

export default newsLetter;
