import { useContext } from "react";
import NotificationsContext from "../context/NotificationContext";

function useNotification() {
    return useContext(NotificationsContext);
}

export default useNotification;
