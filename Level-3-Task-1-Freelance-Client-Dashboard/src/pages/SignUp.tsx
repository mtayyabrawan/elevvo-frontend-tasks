import type { FormEvent } from "react";
import useAuth from "../hooks/useAuth";

function SignUp() {
    const { signup } = useAuth();
    function fromSubmit(evt: FormEvent<HTMLFormElement>) {
        evt.preventDefault();
        const formData = new FormData(evt.currentTarget);
        const name = formData.get("name") as string;
        const email = formData.get("email") as string;
        const password = formData.get("password") as string;
        signup({ name, email, password });
    }
    return (
        <form onSubmit={fromSubmit}>
            <input type="text" name="name" />
            <input type="email" name="email" id="email" />
            <input type="password" name="password" id="password" />
            <button>SignUp</button>
        </form>
    );
}

export default SignUp;
