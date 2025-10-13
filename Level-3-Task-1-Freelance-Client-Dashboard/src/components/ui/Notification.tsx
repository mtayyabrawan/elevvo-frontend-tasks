import { IconCheckbox } from "@tabler/icons-react";
import useNotification from "../../hooks/useNotification";
import { HashLink } from "react-router-hash-link";

function Notification({ id }: { id: number }) {
    const { getOne, markAsRead } = useNotification();
    const notification = getOne(id);
    return (
        <HashLink
            smooth
            to={`/dashboard/notifications#${id}`}
            className="flex w-full items-center justify-between rounded-sm bg-neutral-300 px-1 py-2 ring ring-neutral-800 dark:bg-neutral-700 dark:ring-neutral-200"
        >
            <p className="line-clamp-1 w-[90%] text-xs">
                {notification?.message}
            </p>
            <IconCheckbox
                className="size-4 cursor-pointer"
                onClick={() => markAsRead(notification?.id as number)}
            />
        </HashLink>
    );
}

export default Notification;
