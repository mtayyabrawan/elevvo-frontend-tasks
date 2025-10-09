import { IconUserFilled } from "@tabler/icons-react";
import { Link } from "react-router";

function Profile() {
    return (
        <Link
            to="/dashboard/profile"
            className="flex h-7 w-7 cursor-pointer items-center justify-center rounded-full bg-white dark:bg-black"
        >
            <IconUserFilled className="size-5" />
        </Link>
    );
}

export default Profile;
