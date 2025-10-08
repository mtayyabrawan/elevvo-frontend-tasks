import { IconBellFilled } from "@tabler/icons-react";
import Profile from "../Profile";
import ThemeToggle from "./ThemeToggle";
import BaseHeader from "./common/BaseHeader";
import LogoutButton from "../LogoutButton";

function Header() {
    return (
        <BaseHeader link="/dashboard">
            <div className="flex items-center justify-center gap-4">
                <LogoutButton />
                <Profile />
                <IconBellFilled className="size-5 cursor-pointer" />
                <ThemeToggle />
            </div>
        </BaseHeader>
    );
}

export default Header;
