function RecentActivity() {
    type Activity = {
        id: string;
        icon: string;
        title: string;
        description: string;
        time: string;
    };

    const activities: Activity[] = [
        {
            id: "1",
            icon: "📝",
            title: "Proposal sent",
            description:
                "You sent a proposal to Acme Corp for the redesign project.",
            time: "2h ago",
        },
        {
            id: "2",
            icon: "💬",
            title: "Message received",
            description:
                "Client Jane replied to your question about timelines.",
            time: "5h ago",
        },
        {
            id: "3",
            icon: "✅",
            title: "Milestone completed",
            description: "Completed initial wireframes for Project Orion.",
            time: "1 day ago",
        },
        {
            id: "4",
            icon: "💵",
            title: "Invoice paid",
            description: "Invoice #1024 was paid by Beta LLC.",
            time: "3 days ago",
        },
    ];

    return (
        <div className="mt-6 pb-4">
            <div className="rounded-lg bg-slate-300 p-4 shadow dark:bg-slate-800">
                <div className="mb-3 flex items-center justify-between">
                    <h3 className="text-lg font-semibold">Recent Activity</h3>
                </div>

                <ul className="divide-y divide-gray-100 dark:divide-gray-700">
                    {activities.map((a) => (
                        <li
                            key={a.id}
                            className="flex items-start justify-between py-3"
                        >
                            <div className="flex items-center space-x-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-xl dark:bg-gray-700">
                                    {a.icon}
                                </div>
                                <div>
                                    <div className="text-sm font-medium">
                                        {a.title}
                                    </div>
                                    <div className="text-xs text-gray-500 dark:text-gray-400">
                                        {a.description}
                                    </div>
                                </div>
                            </div>
                            <div className="text-xs text-gray-400">
                                {a.time}
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default RecentActivity;
