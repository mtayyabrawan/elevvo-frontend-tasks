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
    } = useForm({
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
            className="h-auto w-[90%] space-y-3 rounded-md bg-slate-400/40 p-10"
            onSubmit={handleSubmit(formSubmit)}
            noValidate
        >
            <div className="relative flex w-full flex-col items-center justify-center gap-2 text-sm">
                {errors.name && (
                    <p className="absolute top-1 right-4 text-xs text-nowrap text-red-400">
                        {errors.name.message}
                    </p>
                )}
                <label htmlFor="name" className="w-[93%]">
                    Name
                </label>
                <input
                    type="text"
                    id="name"
                    {...register("name")}
                    className={`w-[95%] rounded-md bg-slate-100 p-2 text-center ring-[1px] focus-visible:outline-hidden ${errors.name ? "ring-red-400" : "ring-slate-500"}`}
                />
            </div>
            <div className="relative flex w-full flex-col items-center justify-center gap-2 text-sm">
                {errors.subject && (
                    <p className="absolute top-1 right-4 text-xs text-nowrap text-red-400">
                        {errors.subject.message}
                    </p>
                )}
                <label htmlFor="subject" className="w-[93%]">
                    Subject
                </label>
                <input
                    type="text"
                    id="subject"
                    {...register("subject")}
                    className={`w-[95%] rounded-md bg-slate-100 p-2 text-center ring-[1px] focus-visible:outline-hidden ${errors.subject ? "ring-red-400" : "ring-slate-500"}`}
                />
            </div>
            <div className="relative flex w-full flex-col items-center justify-center gap-2 text-sm">
                {errors.email && (
                    <p className="absolute top-1 right-4 text-xs text-nowrap text-red-400">
                        {errors.email.message}
                    </p>
                )}
                <label htmlFor="email" className="w-[93%]">
                    Email
                </label>
                <input
                    type="email"
                    id="email"
                    {...register("email")}
                    className={`w-[95%] rounded-md bg-slate-100 p-2 text-center ring-[1px] focus-visible:outline-hidden ${errors.email ? "ring-red-400" : "ring-slate-500"}`}
                />
            </div>
            <div className="relative flex w-full flex-col items-center justify-center gap-2 text-sm">
                {errors.message && (
                    <p className="absolute top-1 right-4 text-xs text-nowrap text-red-400">
                        {errors.message.message}
                    </p>
                )}
                <label htmlFor="message" className="w-[93%]">
                    Message
                </label>
                <textarea
                    id="message"
                    {...register("message")}
                    className={`h-28 w-[95%] resize-none rounded-md bg-slate-100 p-2 ring-[1px] focus-visible:outline-hidden ${errors.message ? "ring-red-400" : "ring-slate-500"}`}
                ></textarea>
            </div>
            <button
                type="submit"
                disabled={isSubmitting}
                className="mr-5 flex w-fit cursor-pointer items-center justify-center gap-1 place-self-end rounded-sm bg-slate-400 p-1.5 focus-visible:outline-hidden"
            >
                <p className="text-sm">Send</p>
                {isSubmitting ? (
                    <IconLoaderQuarter className="animate-load size-4" />
                ) : (
                    <IconSend2 className="size-3" />
                )}
            </button>
        </form>
    );
}

export default ContactForm;
