import { useState } from "react";
import Profile from "../Profile";
import ThemeToggle from "./ThemeToggle";
import BaseHeader from "./common/BaseHeader";
import LogoutButton from "../LogoutButton";
import NotificationDropdown from "../NotificationManager";

function Header() {
    const [open, setOpen] = useState(false);

    return (
        <BaseHeader link="/dashboard">
            <div className="hidden items-center justify-center gap-4 md:flex">
                <LogoutButton />
                <Profile />
                <NotificationDropdown />
                <ThemeToggle />
            </div>
            <div className="flex items-center md:hidden">
                <button
                    aria-label="Toggle header menu"
                    aria-expanded={open}
                    onClick={() => setOpen((s) => !s)}
                    className="h-fit cursor-pointer rounded-md bg-slate-200 px-1 py-0.5 focus-visible:outline-hidden dark:bg-slate-700"
                >
                    {open ? "✕" : "☰"}
                </button>
            </div>
            {open && (
                <div className="absolute top-12 right-4 left-4 z-50 rounded-md bg-white p-4 shadow-md md:hidden dark:bg-slate-800">
                    <div className="mt-3 flex flex-col gap-3">
                        <div>
                            <LogoutButton />
                        </div>
                        <div>
                            <NotificationDropdown />
                        </div>
                        <div>
                            <Profile />
                        </div>
                        <div>
                            <ThemeToggle />
                        </div>
                    </div>
                </div>
            )}
        </BaseHeader>
    );
}

export default Header;
