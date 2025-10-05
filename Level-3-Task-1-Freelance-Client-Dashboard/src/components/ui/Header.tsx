import { IconBellFilled, IconLogout } from "@tabler/icons-react";
import Profile from "../Profile";
import ThemeToggle from "./ThemeToggle";
import { useNavigate } from "react-router";
import BaseHeader from "./common/BaseHeader";

function Header() {
    const navigator = useNavigate();
    function handleLogout() {
        navigator("/");
    }
    return (
        <BaseHeader link="/dashboard">
            <div className="flex items-center justify-center gap-4">
                <IconLogout
                    onClick={handleLogout}
                    className="size-5 cursor-pointer"
                />
                <Profile />
                <IconBellFilled className="size-5 cursor-pointer" />
                <ThemeToggle />
            </div>
        </BaseHeader>
    );
}

export default Header;
