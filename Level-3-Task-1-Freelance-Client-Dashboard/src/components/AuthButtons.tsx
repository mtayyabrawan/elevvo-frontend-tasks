import { Link } from "react-router";
import useAuth from "../hooks/useAuth";
import LogoutButton from "./LogoutButton";
import Profile from "./Profile";

function AuthButtons() {
    const { loggedIn } = useAuth();
    if (loggedIn === true)
        return (
            <>
                <LogoutButton />
                <Profile />
            </>
        );
    else
        return (
            <>
                <Link
                    to="/auth/login"
                    className="transile rounded-sm bg-slate-200 px-2 py-1 text-[0.80rem] shadow-[0px_0px_10px_-1px_var(--color-slate-600)] hover:bg-slate-300 dark:bg-slate-600 dark:shadow-[0px_0px_10px_-1px_var(--color-slate-900)] dark:hover:bg-slate-700"
                >
                    Login
                </Link>
                <Link
                    to="/auth/signup"
                    className="transile rounded-sm bg-slate-200 px-2 py-1 text-[0.80rem] shadow-[0px_0px_10px_-1px_var(--color-slate-600)] hover:bg-slate-300 dark:bg-slate-600 dark:shadow-[0px_0px_10px_-1px_var(--color-slate-900)] dark:hover:bg-slate-700"
                >
                    SignUp
                </Link>
            </>
        );
}

export default AuthButtons;
