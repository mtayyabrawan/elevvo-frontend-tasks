/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState, type ReactNode } from "react";
import { useNavigate } from "react-router";
import { toast } from "sonner";
import AuthContext, {
    type BaseAuthParams,
    type LoginStatus,
    type SignUpParams,
    type User,
} from "../context/AuthContext";
import useLocal from "../hooks/useLocal";
import userMockData from "../data/userMockData";

function AuthProvider({ children }: { children: ReactNode }) {
    const naviagtor = useNavigate();
    const { getLocal, setLocal, removeLocal } = useLocal();

    const [userData, setUserData] = useState<User>({
        name: "",
        username: "",
        email: "",
        password: "",
        profilePicture: "",
    });

    const [loggedIn, setLoggedIn] = useState<LoginStatus>("pending");

    function login({ email, password }: BaseAuthParams) {
        const allUserData = getLocal<User[]>(
            "freelance_dashboard_all_userdata"
        );
        if (!allUserData) {
            toast.error("User not found");
        } else {
            const userExist = allUserData.find((user) => {
                return user.email === email;
            });
            if (userExist && userExist.password) {
                if (userExist?.password === password) {
                    setLoggedIn(true);
                    setUserData(userExist);
                    setLocal({
                        key: "freelance_dashboard_userdata",
                        value: true,
                    });
                    setLocal({
                        key: "freelancer_dashboard_login_status",
                        value: userExist,
                    });
                    toast.success("Login successfull");
                    setTimeout(() => {
                        naviagtor("/dashboard");
                    }, 1000);
                    return true;
                } else {
                    toast.error("Invalid credentials");
                }
            } else {
                toast.error("User not found");
            }
        }
        return false;
    }

    function logout() {
        setLocal({
            key: "freelancer_dashboard_login_status",
            value: false,
        });
        removeLocal("freelance_dashboard_userdata");
        toast.success("Logged out successfully");
        setTimeout(() => {
            setLoggedIn(false);
        }, 1000);
    }

    function signup({ name, email, password }: SignUpParams) {
        const allUserData = getLocal<SignUpParams[]>(
            "freelance_dashboard_all_userdata"
        );
        if (!allUserData) {
            setLocal({
                key: "freelance_dashboard_all_userdata",
                value: [{ name, email, password }],
            });
        } else {
            allUserData.push({ name, email, password });
            setLocal({
                key: "freelance_dashboard_all_userdata",
                value: allUserData,
            });
        }
        toast.success("Sign up successfull");
        setTimeout(() => {
            naviagtor("/login");
        }, 1000);
    }

    function updateUser({
        name,
        username,
        email,
        password,
        profilePicture,
    }: User) {
        // TODO: implement update user
        console.log(name, username, email, password, profilePicture);
    }

    useEffect(() => {
        const loginStatus = getLocal<boolean>(
            "freelancer_dashboard_login_status"
        );
        if (loginStatus === true) {
            setLoggedIn(true);
            const localUserData = getLocal<SignUpParams>(
                "freelance_dashboard_userdata"
            );
            if (localUserData) {
                setUserData(userMockData);
            } else {
                setUserData(userMockData);
            }
        } else {
            setLoggedIn(false);
        }
    }, []);
    return (
        <AuthContext.Provider
            value={{ loggedIn, userData, login, logout, signup, updateUser }}
        >
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;
