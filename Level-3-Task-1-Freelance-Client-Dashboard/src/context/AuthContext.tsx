import { createContext } from "react";

export type LoginStatus = boolean | "pending";
export interface BaseAuthParams {
    email: string;
    password: string;
}
export interface SignUpParams extends BaseAuthParams {
    name: string;
    username?: string;
    profilePicture?: string;
}

export interface User {
    name: string;
    username: string;
    email: string;
    profilePicture: string;
    password: string;
}

export interface UserOptional {
    name?: string;
    username?: string;
    email?: string;
    profilePicture?: string;
    password?: string;
}

export interface AuthValues {
    loggedIn: LoginStatus;
    userData: User;
    login: (params: BaseAuthParams) => boolean;
    logout: () => void;
    signup: (params: SignUpParams) => boolean;
    updateUser: (userData: UserOptional) => void;
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
    login: () => false,
    logout: () => {},
    signup: () => false,
    updateUser: () => {},
});

export default AuthContext;
