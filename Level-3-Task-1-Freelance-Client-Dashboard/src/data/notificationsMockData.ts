import type { NotificationType } from "../context/NotificationContext";

const notificationsMockData: NotificationType[] = [
    {
        id: 0,
        datetime: "2025-10-12T18:23:00Z",
        message:
            "New message from client ‘Ayesha Digital’ regarding the ‘E-Commerce Store UI’ project.",
        status: "unread",
    },
    {
        id: 1,
        datetime: "2025-10-11T15:45:00Z",
        message:
            "Payment of $250 has been successfully released for ‘Nextjs Blog Site’.",
        status: "read",
    },
    {
        id: 2,
        datetime: "2025-10-10T10:12:00Z",
        message:
            "Client ‘Techify Solutions’ left a 5-star review on your completed project.",
        status: "read",
    },
    {
        id: 3,
        datetime: "2025-10-09T21:30:00Z",
        message:
            "Milestone ‘Backend Integration’ has been marked as complete for the ‘Inventory Management System’.",
        status: "read",
    },
    {
        id: 4,
        datetime: "2025-10-08T13:55:00Z",
        message:
            "Client ‘DesignVerse Studio’ requested a revision on the homepage layout mockup.",
        status: "unread",
    },
    {
        id: 5,
        datetime: "2025-10-07T08:10:00Z",
        message:
            "New project invite: ‘Landing Page Development for AI Startup’.",
        status: "read",
    },
    {
        id: 6,
        datetime: "2025-10-06T22:40:00Z",
        message:
            "Your withdrawal request of $500 is being processed and will reflect in your account within 24 hours.",
        status: "read",
    },
    {
        id: 7,
        datetime: "2025-10-05T17:05:00Z",
        message:
            "Client ‘NextGen Apps’ uploaded new design assets for your ongoing project.",
        status: "read",
    },
    {
        id: 8,
        datetime: "2025-10-05T11:32:00Z",
        message:
            "System update: Dark mode and new notification center are now available on your dashboard.",
        status: "read",
    },
];

export default notificationsMockData;
