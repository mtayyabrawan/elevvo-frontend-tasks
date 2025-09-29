import {
    IconBellRinging,
    IconChartBar,
    IconChecklist,
    IconDeviceLaptop,
    IconUsers,
} from "@tabler/icons-react";
import Feature from "./Feature";

function FeaturesSection() {
    const features = [
        {
            title: "Smart Task Organization",
            icon: <IconChecklist size={26} />,
            description:
                "Taskeep helps you break down chaos into clarity. Organize tasks into projects, lists, or categories without friction. No more scrolling endlessly through a messy todo list everything stays structured and accessible. Add priorities, tags, and deadlines to get a bird’s-eye view of your workload. Whether it’s personal errands, office work, or side hustles, Taskeep keeps your tasks in order and easy to navigate every single day.",
            imageSrc: "/hero-image.png",
            position: "left",
        },
        {
            title: "Seamless Collaboration",
            icon: <IconUsers size={26} />,
            description:
                "Working with a team? Taskeep makes it effortless. Share tasks, assign roles, and track progress in real time. No confusing group chats, just focused teamwork where everyone knows what needs to be done. Notifications keep teammates updated without overwhelming them. From small groups to full teams, collaboration feels natural. Everyone’s efforts come together in one space, so you can move projects forward without worrying about missed messages or miscommunication.",
            imageSrc: "/hero-image.png",
            position: "right",
        },
        {
            title: "Smart Reminders & Notifications",
            icon: <IconBellRinging size={26} />,
            description:
                "Deadlines slip when life gets busy but Taskeep’s reminders keep you on track. Create smart notifications for daily tasks, long term goals, or repeating habits. You’ll never forget important events again. The reminders adapt to your schedule, popping up at the right moment instead of annoying you constantly. With gentle nudges and clear alerts, Taskeep ensures you meet deadlines without stress. Think of it as your personal productivity assistant in your pocket.",
            imageSrc: "/hero-image.png",
            position: "left",
        },
        {
            title: "Progress Tracking & Analytics",
            icon: <IconChartBar size={26} />,
            description:
                "Taskeep isn’t just about tasks it’s about growth. Track your progress with clean charts and insights that highlight productivity patterns. See how much you’ve completed this week, which projects eat your time, and where bottlenecks slow you down. By understanding your workflow, you can improve it. These analytics aren’t boring spreadsheets; they’re intuitive visuals that make progress feel rewarding. Watching tasks turn into completed streaks gives you motivation to keep pushing forward.",
            imageSrc: "/hero-image.png",
            position: "right",
        },
        {
            title: "Cross-Platform Sync",
            icon: <IconDeviceLaptop size={26} />,
            description:
                "Taskeep follows you everywhere. Start planning on your laptop, check tasks on your phone, and review progress on your tablet all perfectly synced in real time. Forget emailing lists to yourself or worrying about device compatibility. Whether you’re online or offline, Taskeep keeps your data consistent and secure. When inspiration strikes on the go, you can jot it down instantly, knowing it will be waiting across all your devices.",
            imageSrc: "/hero-image.png",
            position: "left",
        },
    ];
    return (
        <div className="space-y-4">
            {features.map((feature) => (
                <Feature
                    title={feature.title}
                    icon={feature.icon}
                    description={feature.description}
                    imageSrc={feature.imageSrc}
                    position={feature.position as "left" | "right"}
                />
            ))}
        </div>
    );
}

export default FeaturesSection;
