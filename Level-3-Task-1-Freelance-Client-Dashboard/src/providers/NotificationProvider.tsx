import { useState, type ReactNode } from "react";
import NotificationsContext, {
    type NotificationType,
} from "../context/NotificationContext";
import notificationsMockData from "../data/notificationsMockData";

function NotificationProvider({ children }: { children: ReactNode }) {
    const [notifications, setNotifications] = useState<NotificationType[]>(
        notificationsMockData
    );

    function getOne(id: number) {
        return notifications.find((notification) => notification.id === id);
    }

    function markAsRead(id: number) {
        const updatedNotifications = notifications.map((notification) => {
            if (id !== notification.id) {
                return notification;
            } else {
                notification.status = "read";
                return notification;
            }
        });
        setNotifications(updatedNotifications);
    }

    function deleteOne(id: number) {
        const updatedNotifications = notifications.filter(
            (notification) => notification.id !== id
        );
        setNotifications(updatedNotifications);
    }

    return (
        <NotificationsContext.Provider
            value={{ notifications, getOne, markAsRead, deleteOne }}
        >
            {children}
        </NotificationsContext.Provider>
    );
}

export default NotificationProvider;
