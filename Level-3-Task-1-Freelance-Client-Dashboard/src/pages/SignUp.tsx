/* eslint-disable react-hooks/exhaustive-deps */
import useAuth from "../hooks/useAuth";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { IconLoaderQuarter } from "@tabler/icons-react";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import SignUpSchema, { type SignUpType } from "../schemas/SignUpSchema";

function SignUp() {
    const navigator = useNavigate();
    const { signup, loggedIn } = useAuth();

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
    } = useForm({
        resolver: zodResolver(SignUpSchema),
        defaultValues: { name: "", email: "", password: "" },
    });

    function formSubmit({ name, email, password }: SignUpType) {
        signup({ name, email, password });
        reset();
    }

    useEffect(() => {
        if (loggedIn === true) navigator("/dashboard");
    }, []);

    return (
        <div className="w-full p-2">
            <form
                onSubmit={handleSubmit(formSubmit)}
                noValidate
                autoComplete="off"
                className="mx-auto mt-10 h-auto w-1/3 space-y-3 rounded-md bg-slate-400/40 px-4 py-8 text-sm shadow-[0px_0px_3px_1px_black]"
            >
                <h1 className="text-center text-lg font-medium">Sign Up</h1>
                <div className="relative flex w-full flex-col items-center justify-center gap-2">
                    {errors.name && (
                        <p className="absolute top-1 right-4 text-xs text-nowrap text-red-500 dark:text-red-400">
                            {errors.name.message}
                        </p>
                    )}
                    <label htmlFor="name" className="w-[93%]">
                        Name
                    </label>
                    <input
                        type="text"
                        {...register("name")}
                        id="name"
                        autoComplete="off"
                        className={`w-[95%] rounded-md bg-slate-100 p-2 text-center ring-[1px] focus-visible:outline-hidden dark:bg-slate-950 ${errors.name ? "ring-red-500 dark:ring-red-400" : "ring-slate-500 dark:ring-slate-400"}`}
                    />
                </div>
                <div className="relative flex w-full flex-col items-center justify-center gap-2">
                    {errors.email && (
                        <p className="absolute top-1 right-4 text-xs text-nowrap text-red-500 dark:text-red-400">
                            {errors.email.message}
                        </p>
                    )}
                    <label htmlFor="email" className="w-[93%]">
                        Email
                    </label>
                    <input
                        type="email"
                        {...register("email")}
                        id="email"
                        autoComplete="off"
                        className={`w-[95%] rounded-md bg-slate-100 p-2 text-center ring-[1px] focus-visible:outline-hidden dark:bg-slate-950 ${errors.email ? "ring-red-500 dark:ring-red-400" : "ring-slate-500 dark:ring-slate-400"}`}
                    />
                </div>
                <div className="relative flex w-full flex-col items-center justify-center gap-2">
                    {errors.password && (
                        <p className="absolute top-1 right-4 text-xs text-nowrap text-red-500 dark:text-red-400">
                            {errors.password.message}
                        </p>
                    )}
                    <label htmlFor="password" className="w-[93%]">
                        Password
                    </label>
                    <input
                        type="password"
                        {...register("password")}
                        id="password"
                        autoComplete="off"
                        className={`w-[95%] rounded-md bg-slate-100 p-2 text-center ring-[1px] focus-visible:outline-hidden dark:bg-slate-950 ${errors.password ? "ring-red-500 dark:ring-red-400" : "ring-slate-500 dark:ring-slate-400"}`}
                    />
                </div>
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="transile mx-auto flex w-[95%] cursor-pointer items-center justify-center gap-1 rounded-sm bg-slate-400 p-1.5 hover:bg-slate-400/70 focus-visible:outline-hidden dark:bg-slate-800 dark:hover:bg-slate-800/70"
                >
                    <p>SignUp</p>
                    {isSubmitting && (
                        <IconLoaderQuarter className="animate-load size-4" />
                    )}
                </button>
            </form>
        </div>
    );
}

export default SignUp;
