import { useState } from "react";
import BaseHeader from "./BaseHeader";
import ThemeToggle from "../ThemeToggle";
import { Link } from "react-router";
import AuthButtons from "../../AuthButtons";

function Navbar() {
    const [open, setOpen] = useState(false);
    const navlinks = [{ name: "Contact", href: "/contact" }];

    return (
        <BaseHeader link="/">
            <div className="flex items-center gap-4">
                <nav className="hidden items-center gap-4 md:flex">
                    {navlinks.map((link, idx) => (
                        <Link
                            key={idx}
                            to={link.href}
                            className="rounded-sm bg-slate-200 px-2 py-1 text-[0.80rem] shadow-[0px_0px_10px_-1px_var(--color-slate-600)] hover:bg-slate-300 dark:bg-slate-600 dark:shadow-[0px_0px_10px_-1px_var(--color-slate-900)] dark:hover:bg-slate-700"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <AuthButtons />
                    <ThemeToggle />
                </nav>
                <div className="flex items-center md:hidden">
                    <button
                        aria-label="Toggle menu"
                        aria-expanded={open}
                        onClick={() => setOpen((s) => !s)}
                        className="h-fit rounded-md bg-slate-200 px-1 py-0.5 focus-visible:outline-hidden dark:bg-slate-700"
                    >
                        {open ? "✕" : "☰"}
                    </button>
                </div>
                {open && (
                    <div className="absolute top-12 right-4 left-4 z-50 rounded-md bg-white p-4 shadow-md md:hidden dark:bg-slate-800">
                        <div className="flex flex-col gap-3">
                            {navlinks.map((link, idx) => (
                                <Link
                                    key={idx}
                                    to={link.href}
                                    onClick={() => setOpen(false)}
                                    className="block rounded px-3 py-2 text-sm hover:bg-slate-100 dark:hover:bg-slate-700"
                                >
                                    {link.name}
                                </Link>
                            ))}

                            <div className="border-t pt-2 dark:border-slate-700">
                                <div className="mb-2 flex gap-2">
                                    <AuthButtons />
                                </div>
                                <div>
                                    <ThemeToggle />
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </BaseHeader>
    );
}

export default Navbar;
