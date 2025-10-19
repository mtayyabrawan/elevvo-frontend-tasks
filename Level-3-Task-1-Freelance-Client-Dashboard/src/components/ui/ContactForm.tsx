import { IconLoaderQuarter, IconSend2 } from "@tabler/icons-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import contactSchema from "../../schemas/ContactFormSchema";
import type { ContactType } from "../../schemas/ContactFormSchema";

function ContactForm() {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
    } = useForm<ContactType>({
        resolver: zodResolver(contactSchema),
        defaultValues: {
            name: "",
            subject: "",
            email: "",
            message: "",
        },
    });

    function formSubmit(data: ContactType) {
        console.log(data);
        reset();
    }

    return (
        <form
            className="w-full max-w-3xl rounded-md bg-slate-400/40 p-6 shadow-[0px_0px_3px_1px_black] sm:p-8"
            onSubmit={handleSubmit(formSubmit)}
            noValidate
        >
            <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                <div className="relative flex flex-col gap-2 text-sm">
                    {errors.name && (
                        <p className="absolute top-0 right-0 text-xs whitespace-nowrap text-red-500 dark:text-red-400">
                            {errors.name.message}
                        </p>
                    )}
                    <label htmlFor="name" className="block text-sm font-medium">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        {...register("name")}
                        className={`w-full rounded-md bg-slate-100 p-2 ring-[1px] focus-visible:outline-none dark:bg-slate-950 ${
                            errors.name
                                ? "ring-red-500 dark:ring-red-400"
                                : "ring-slate-500 dark:ring-slate-400"
                        }`}
                    />
                </div>

                <div className="relative flex flex-col gap-2 text-sm">
                    {errors.subject && (
                        <p className="absolute top-0 right-0 text-xs whitespace-nowrap text-red-500 dark:text-red-400">
                            {errors.subject.message}
                        </p>
                    )}
                    <label
                        htmlFor="subject"
                        className="block text-sm font-medium"
                    >
                        Subject
                    </label>
                    <input
                        type="text"
                        id="subject"
                        {...register("subject")}
                        className={`w-full rounded-md bg-slate-100 p-2 ring-[1px] focus-visible:outline-none dark:bg-slate-950 ${
                            errors.subject
                                ? "ring-red-500 dark:ring-red-400"
                                : "ring-slate-500 dark:ring-slate-400"
                        }`}
                    />
                </div>

                <div className="relative flex flex-col gap-2 text-sm">
                    {errors.email && (
                        <p className="absolute top-0 right-0 text-xs whitespace-nowrap text-red-500 dark:text-red-400">
                            {errors.email.message}
                        </p>
                    )}
                    <label
                        htmlFor="email"
                        className="block text-sm font-medium"
                    >
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        {...register("email")}
                        className={`w-full rounded-md bg-slate-100 p-2 ring-[1px] focus-visible:outline-none dark:bg-slate-950 ${
                            errors.email
                                ? "ring-red-500 dark:ring-red-400"
                                : "ring-slate-500 dark:ring-slate-400"
                        }`}
                    />
                </div>

                <div className="relative flex flex-col gap-2 text-sm md:col-span-2">
                    {errors.message && (
                        <p className="absolute top-0 right-0 text-xs whitespace-nowrap text-red-500 dark:text-red-400">
                            {errors.message.message}
                        </p>
                    )}
                    <label
                        htmlFor="message"
                        className="block text-sm font-medium"
                    >
                        Message
                    </label>
                    <textarea
                        id="message"
                        {...register("message")}
                        className={`h-32 w-full resize-none rounded-md bg-slate-100 p-2 ring-[1px] focus-visible:outline-none dark:bg-slate-950 ${
                            errors.message
                                ? "ring-red-500 dark:ring-red-400"
                                : "ring-slate-500 dark:ring-slate-400"
                        }`}
                    />
                </div>
            </div>

            <div className="mt-4 flex justify-end">
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center gap-2 rounded-sm bg-slate-400 px-3 py-2 text-sm font-medium hover:bg-slate-400/70 focus-visible:outline-none disabled:opacity-60 dark:bg-slate-800 dark:hover:bg-slate-800/70"
                >
                    <span>Send</span>
                    {isSubmitting ? (
                        <IconLoaderQuarter className="h-4 w-4 animate-spin" />
                    ) : (
                        <IconSend2 className="h-4 w-4" />
                    )}
                </button>
            </div>
        </form>
    );
}

export default ContactForm;
