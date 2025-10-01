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
            className="flex h-fit w-52 gap-1 sm:w-72 sm:gap-1.5 md:w-80 md:gap-3"
        >
            <input
                type="email"
                placeholder="adam@mail.com"
                autoComplete="off"
                {...register("email")}
                className={`transile w-full rounded-2xl bg-stone-500 p-1 indent-1 text-[0.65rem] placeholder:text-stone-400 focus-visible:outline-hidden focus-visible:drop-shadow-xs focus-visible:drop-shadow-stone-600 sm:p-1.5 sm:text-xs md:indent-3 md:text-sm dark:bg-stone-700 dark:focus-visible:drop-shadow-stone-950 ${errors.email ? "ring-[0.5px] ring-red-500" : ""}`}
            />
            <button
                type="submit"
                disabled={isSubmitting}
                className="transile cursor-pointer rounded-2xl bg-neutral-400 px-1.5 text-[0.5rem] font-medium hover:bg-neutral-600/50 focus-visible:outline-hidden disabled:cursor-progress disabled:bg-neutral-600/50 sm:px-2 sm:text-[0.65rem] md:text-xs dark:bg-neutral-950 dark:hover:bg-neutral-950/50 dark:disabled:bg-neutral-950/50"
            >
                Subscribe
            </button>
        </form>
    );
}

export default NewsLetter;
