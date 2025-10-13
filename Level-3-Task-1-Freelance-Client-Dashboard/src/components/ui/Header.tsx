import Profile from "../Profile";
import ThemeToggle from "./ThemeToggle";
import BaseHeader from "./common/BaseHeader";
import LogoutButton from "../LogoutButton";
import NotificationDropdown from "../NotificationManager";

function Header() {
    return (
        <BaseHeader link="/dashboard">
            <div className="flex items-center justify-center gap-4">
                <LogoutButton />
                <Profile />
                <NotificationDropdown />
                <ThemeToggle />
            </div>
        </BaseHeader>
    );
}

export default Header;
