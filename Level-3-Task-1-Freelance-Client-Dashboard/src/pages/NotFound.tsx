import { IconHome } from "@tabler/icons-react";
import { useEffect } from "react";
import { Link } from "react-router";

function NotFound() {
    useEffect(() => {
        document.documentElement.classList.toggle(
            "dark",
            localStorage.freelance_dashboard_theme === "dark" ||
                (!("freelance_dashboard_theme" in localStorage) &&
                    window.matchMedia("(prefers-color-scheme: dark)").matches)
        );
    }, []);

    return (
        <div className="flex h-screen w-screen items-center justify-center bg-slate-300 dark:bg-zinc-800">
            <div className="flex flex-col items-center justify-center gap-3">
                <h1 className="text-center text-2xl font-bold text-red-500 dark:text-red-400">
                    404
                </h1>
                <h2 className="text-center text-xl font-medium dark:text-white">
                    Page not found!
                </h2>
                <Link
                    to="/"
                    className="flex w-fit items-center justify-center gap-2 rounded-sm bg-zinc-800 px-2 py-1.5 text-xs font-medium text-white dark:bg-slate-300 dark:text-black"
                >
                    <IconHome className="size-4" /> <span>Home</span>
                </Link>
            </div>
        </div>
    );
}

export default NotFound;
