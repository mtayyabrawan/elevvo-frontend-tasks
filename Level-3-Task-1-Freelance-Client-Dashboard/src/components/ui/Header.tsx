import { IconBellFilled, IconLogout } from "@tabler/icons-react";
import Profile from "../Profile";
import ThemeToggle from "./ThemeToggle";
import { useNavigate } from "react-router";

function Header() {
    const navigator = useNavigate();
    function handleLogout() {
        navigator("/");
    }
    return (
        <header className="sticky top-0 flex h-12 items-center justify-between bg-slate-400 px-2 dark:bg-slate-800">
            <h1 className="text-base font-medium">Freelance Dashboard</h1>
            <div className="flex items-center justify-center gap-4">
                <IconLogout
                    onClick={handleLogout}
                    className="size-5 cursor-pointer"
                />
                <Profile />
                <IconBellFilled className="size-5 cursor-pointer" />
                <ThemeToggle />
            </div>
        </header>
    );
}

export default Header;
