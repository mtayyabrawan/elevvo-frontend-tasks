import { IconUserFilled } from "@tabler/icons-react";

function Profile() {
    return (
        <div className="flex h-7 w-7 cursor-pointer items-center justify-center rounded-full bg-white dark:bg-black">
            <IconUserFilled className="size-5" />
        </div>
    );
}

export default Profile;
