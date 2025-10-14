/* eslint-disable react-hooks/exhaustive-deps */
import {
    IconBellFilled,
    IconBellRingingFilled,
    IconCircleXFilled,
} from "@tabler/icons-react";
import { useEffect, useRef, useState } from "react";
import Notification from "./ui/Notification";
import useNotification from "../hooks/useNotification";
import type { NotificationType } from "../context/NotificationContext";

function NotificationManager() {
    const [dropdown, setDropdown] = useState<boolean>(false);
    const [unreadNotifications, setUnreadNotifications] = useState<
        NotificationType[]
    >([]);

    const { notifications } = useNotification();

    function toggleDropdown(value?: boolean) {
        setDropdown(value || !dropdown);
    }

    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleOutside(evt: MouseEvent) {
            if (!dropdownRef.current?.contains(evt.target as Node)) {
                toggleDropdown(false);
            }
        }
        if (dropdown) {
            document.addEventListener("mousedown", handleOutside);
        } else {
            document.removeEventListener("mousedown", handleOutside);
        }
        return () => {
            document.removeEventListener("mousedown", handleOutside);
        };
    }, [dropdown]);

    useEffect(() => {
        setUnreadNotifications(
            notifications.filter(
                (notification) => notification.status === "unread"
            )
        );
    }, [notifications]);
    return (
        <div className="relative" ref={dropdownRef}>
            {unreadNotifications.length ? (
                <IconBellRingingFilled
                    onClick={() => toggleDropdown()}
                    className="size-5 animate-pulse cursor-pointer"
                />
            ) : (
                <IconBellFilled
                    onClick={() => toggleDropdown()}
                    className="size-5 cursor-pointer"
                />
            )}
            {dropdown && (
                <div className="absolute top-[calc(100%+1rem)] left-1/2 z-40 h-[calc(100vh/2)] w-56 -translate-x-1/2 rounded-md bg-neutral-400 dark:bg-neutral-900">
                    <div className="flex h-[10%] w-full items-center justify-between border-b px-3 text-sm font-medium">
                        <h2>Notifications</h2>
                        <IconCircleXFilled
                            onClick={() => toggleDropdown()}
                            className="size-5 cursor-pointer"
                        />
                    </div>
                    <div className="scrollbar-custom flex h-[88%] w-full flex-col items-center justify-start gap-2 overflow-y-auto p-2 text-xs">
                        {unreadNotifications.length ? (
                            unreadNotifications.map((notification, idx) => (
                                <Notification id={notification.id} key={idx} />
                            ))
                        ) : (
                            <p className="text-xs font-medium text-red-500">
                                Notifications list is empty
                            </p>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}

export default NotificationManager;
