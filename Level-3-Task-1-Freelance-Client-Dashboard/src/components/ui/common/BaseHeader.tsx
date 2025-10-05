import type { ReactNode } from "react";
import { Link } from "react-router";

function BaseHeader({ children, link }: { children: ReactNode; link: string }) {
    return (
        <header className="sticky top-0 flex h-12 items-center justify-between bg-slate-400 px-2 dark:bg-slate-800">
            <Link to={link} className="text-base font-medium">
                Freelance Dashboard
            </Link>
            {children}
        </header>
    );
}

export default BaseHeader;
