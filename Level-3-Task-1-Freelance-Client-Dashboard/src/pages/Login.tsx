/* eslint-disable react-hooks/exhaustive-deps */
import useAuth from "../hooks/useAuth";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import LoginSchema, { type LoginType } from "../schemas/LoginSchema";
import { IconLoaderQuarter, IconLogin } from "@tabler/icons-react";
import { useEffect } from "react";
import { useNavigate } from "react-router";

function Login() {
    const navigator = useNavigate();
    const { login, loggedIn } = useAuth();

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
    } = useForm<LoginType>({
        resolver: zodResolver(LoginSchema),
        defaultValues: { email: "", password: "" },
    });

    function formSubmit({ email, password }: LoginType) {
        if (login({ email, password })) reset();
    }

    useEffect(() => {
        if (loggedIn === true) navigator("/dashboard");
    }, [loggedIn]);

    return (
        <div className="w-full p-2">
            <form
                onSubmit={handleSubmit(formSubmit)}
                noValidate
                autoComplete="off"
                className="mx-auto mt-10 h-auto w-full max-w-md space-y-3 rounded-md bg-slate-400/40 px-4 py-8 text-sm shadow-[0px_0px_3px_1px_black] sm:max-w-lg md:max-w-xl lg:max-w-[480px]"
            >
                <h1 className="text-center text-lg font-medium">Login</h1>
                <div className="relative flex w-full flex-col items-center justify-center gap-2">
                    {errors.email && (
                        <p className="absolute top-1 right-4 text-xs whitespace-nowrap text-red-500 dark:text-red-400">
                            {errors.email.message}
                        </p>
                    )}
                    <label htmlFor="email" className="w-full max-w-[420px]">
                        Email
                    </label>
                    <input
                        type="email"
                        {...register("email")}
                        id="email"
                        autoComplete="off"
                        className={`w-full max-w-[420px] rounded-md bg-slate-100 p-2 text-center ring-[1px] focus-visible:outline-none dark:bg-slate-950 ${errors.email ? "ring-red-500 dark:ring-red-400" : "ring-slate-500 dark:ring-slate-400"}`}
                    />
                </div>
                <div className="relative flex w-full flex-col items-center justify-center gap-2">
                    {errors.password && (
                        <p className="absolute top-1 right-4 text-xs whitespace-nowrap text-red-500 dark:text-red-400">
                            {errors.password.message}
                        </p>
                    )}
                    <label htmlFor="password" className="w-full max-w-[420px]">
                        Password
                    </label>
                    <input
                        type="password"
                        {...register("password")}
                        id="password"
                        autoComplete="off"
                        className={`w-full max-w-[420px] rounded-md bg-slate-100 p-2 text-center ring-[1px] focus-visible:outline-none dark:bg-slate-950 ${errors.password ? "ring-red-500 dark:ring-red-400" : "ring-slate-500 dark:ring-slate-400"}`}
                    />
                </div>
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="transile mx-auto flex w-full max-w-[420px] cursor-pointer items-center justify-center gap-1 rounded-sm bg-slate-400 p-1.5 hover:bg-slate-400/70 focus-visible:outline-none dark:bg-slate-800 dark:hover:bg-slate-800/70"
                >
                    <p>Login</p>
                    {isSubmitting ? (
                        <IconLoaderQuarter className="h-4 w-4 animate-spin" />
                    ) : (
                        <IconLogin className="h-4 w-4" />
                    )}
                </button>
            </form>
        </div>
    );
}

export default Login;
