import { IconBellFilled } from "@tabler/icons-react";
import ThemeToggle from "./ThemeToggle";

function Header() {
    return (
        <div className="sticky top-0 flex h-12 items-center justify-between bg-slate-400 px-2 dark:bg-slate-800">
            <h1>Freelance Dashboard</h1>
            <div className="flex items-center justify-center gap-4">
                <IconBellFilled className="size-5 cursor-pointer" />
                <ThemeToggle />
            </div>
        </div>
    );
}

export default Header;
