import { createContext } from "react";

export type LoginStatus = boolean | "pending";
export interface BaseAuthParams {
    email: string;
    password: string;
}
export interface SignUpParams extends BaseAuthParams {
    name: string;
}

export interface User {
    name: string;
    username: string;
    email: string;
    profilePicture: string;
    password: string;
}

export interface AuthValues {
    loggedIn: LoginStatus;
    userData: User;
    login: (params: BaseAuthParams) => void;
    logout: () => void;
    signup: (params: SignUpParams) => void;
    updateUser: (userData: User) => void;
}

const AuthContext = createContext<AuthValues>({
    loggedIn: "pending",
    userData: {
        name: "",
        username: "",
        email: "",
        password: "",
        profilePicture: "",
    },
    login: () => {},
    logout: () => {},
    signup: () => {},
    updateUser: () => {},
});

export default AuthContext;
