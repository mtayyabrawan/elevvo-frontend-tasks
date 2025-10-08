import { IconLogout } from "@tabler/icons-react";
import useAuth from "../hooks/useAuth";

function LogoutButton() {
    const { logout } = useAuth();
    return <IconLogout onClick={logout} className="size-5 cursor-pointer" />;
}

export default LogoutButton;
