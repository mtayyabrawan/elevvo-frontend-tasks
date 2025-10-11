import z from "zod";

export const nameSchema = z
    .string({ error: "Name is required" })
    .regex(/^[\w\s]+$/, { error: "Name can only have letters and spaces" })
    .min(3, { error: "Name must have at least 3 characters" })
    .max(20, { error: "Name can only contain max 20 characters" });

export const emailSchema = z.email({ error: "Email is required" });

export const passwordSchema = z
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
    );

export const usernameSchema = z
    .string()
    .regex(/^[\w]+$/, {
        error: "Username should be of numbers and lowercase letters",
    })
    .min(4, { error: "Minimum 4 characters are required" })
    .max(15, { error: "Maximum 15 chars are allowed" });

export const profilePictureSchema = z.url({ error: "Image must be a url" });
