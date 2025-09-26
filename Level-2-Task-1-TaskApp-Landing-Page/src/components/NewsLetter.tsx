import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import newsLetter, { type NewsLetterSchema } from "../schemas/newsLetter";

function NewsLetter() {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
    } = useForm({
        defaultValues: {
            email: "",
        },
        resolver: zodResolver(newsLetter),
    });

    async function submitForm(data: NewsLetterSchema) {
        console.log(data);
        reset();
    }

    return (
        <form
            noValidate
            autoComplete="off"
            onSubmit={handleSubmit(submitForm)}
            className="flex h-fit w-80 gap-3"
        >
            <input
                type="email"
                placeholder="adam@mail.com"
                autoComplete="off"
                {...register("email")}
                className={`transile w-full rounded-2xl bg-stone-600 p-1.5 indent-3 text-sm placeholder:text-stone-400 focus-visible:outline-hidden focus-visible:drop-shadow-xs focus-visible:drop-shadow-stone-950 ${errors.email ? "ring-[0.5px] ring-red-500" : ""}`}
            />
            <button
                type="submit"
                disabled={isSubmitting}
                className="transile cursor-pointer rounded-2xl bg-neutral-950 px-2 text-xs font-medium hover:bg-neutral-950/50 focus-visible:outline-hidden disabled:cursor-progress disabled:bg-neutral-950/50"
            >
                Subscribe
            </button>
        </form>
    );
}

export default NewsLetter;
