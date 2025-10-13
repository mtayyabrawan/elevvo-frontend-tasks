import { IconCheckbox, IconTrash } from "@tabler/icons-react";
import useNotification from "../hooks/useNotification";

function Notifications() {
    const { notifications, markAsRead, deleteOne } = useNotification();
    return (
        <div className="h-full w-full space-y-4 p-4">
            {notifications.map((notification) => (
                <div
                    id={`${notification.id}`}
                    className="flex h-fit w-full items-center justify-between rounded-sm bg-slate-300 p-4 text-sm ring-[1px] dark:bg-slate-600"
                >
                    <p className="w-[70%]">{notification.message}</p>
                    <div className="flex items-center justify-center gap-4">
                        {notification.status === "unread" && (
                            <IconCheckbox
                                className="size-5 cursor-pointer"
                                onClick={() =>
                                    markAsRead(notification?.id as number)
                                }
                            />
                        )}
                        <IconTrash
                            className="size-5 cursor-pointer"
                            onClick={() =>
                                deleteOne(notification?.id as number)
                            }
                        />
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Notifications;
