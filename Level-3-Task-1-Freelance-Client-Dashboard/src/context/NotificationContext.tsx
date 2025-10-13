import { createContext } from "react";

export interface NotificationType {
    id: number;
    datetime: string;
    message: string;
    status: "unread" | "read";
}

const NotificationsContext = createContext<{
    notifications: NotificationType[];
    getOne: (id: number) => NotificationType | undefined;
    markAsRead: (id: number) => void;
    deleteOne: (id: number) => void;
}>({
    notifications: [],
    getOne: () => undefined,
    markAsRead: () => {},
    deleteOne: () => {},
});

export default NotificationsContext;
