import { useEffect } from "react";
import { Link } from "react-router";

function NotFound() {
    useEffect(() => {
        document.documentElement.classList.toggle(
            "dark",
            localStorage.taskeep_theme === "dark" ||
                (!("taskeep_theme" in localStorage) &&
                    window.matchMedia("(prefers-color-scheme: dark)").matches)
        );
    }, []);

    return (
        <div className="flex h-screen w-full items-center justify-center bg-radial-[at_50%_65%] from-neutral-100 from-0% to-neutral-400 to-100% text-neutral-800 dark:from-stone-800 dark:to-stone-700 dark:text-neutral-300">
            <div className="flex flex-col items-center justify-start gap-3">
                <h1 className="text-lg font-medium text-shadow-[0px_1px_4px_var(--color-neutral-800)] dark:text-shadow-[0px_1px_4px_var(--color-neutral-300)]">
                    Page Not Found
                </h1>
                <Link
                    to="/"
                    className="transile w-fit rounded-sm bg-neutral-800 px-2 py-1.5 text-xs font-medium text-neutral-300 hover:bg-neutral-600 dark:bg-neutral-300 dark:text-neutral-800 hover:dark:bg-neutral-400"
                >
                    Home
                </Link>
            </div>
        </div>
    );
}

export default NotFound;
