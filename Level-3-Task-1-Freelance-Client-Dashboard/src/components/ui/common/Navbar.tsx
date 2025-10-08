import BaseHeader from "./BaseHeader";
import ThemeToggle from "../ThemeToggle";
import { Link } from "react-router";
import AuthButtons from "../../AuthButtons";

function Navbar() {
    const navlinks = [
        { name: "Blog", href: "/blog" },
        { name: "About", href: "/about" },
        { name: "Contact", href: "/contact" },
    ];
    return (
        <BaseHeader link="/">
            <div className="flex items-center justify-center gap-4">
                {navlinks.map((link, idx) => (
                    <Link
                        key={idx}
                        to={link.href}
                        className="transile rounded-sm bg-slate-200 px-2 py-1 text-[0.80rem] shadow-[0px_0px_10px_-1px_var(--color-slate-600)] hover:bg-slate-300 dark:bg-slate-600 dark:shadow-[0px_0px_10px_-1px_var(--color-slate-900)] dark:hover:bg-slate-700"
                    >
                        {link.name}
                    </Link>
                ))}
                <AuthButtons />
                <ThemeToggle />
            </div>
        </BaseHeader>
    );
}

export default Navbar;
