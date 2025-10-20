import { Bar } from "react-chartjs-2";
import {
    BarElement,
    CategoryScale,
    Chart as ChartJs,
    Legend,
    LinearScale,
    Title,
    Tooltip,
} from "chart.js";
import useProject from "../hooks/useProject";
import type { ProjectType } from "../context/ProjectsContext";

function EarningsChart() {
    ChartJs.register(
        CategoryScale,
        LinearScale,
        BarElement,
        Title,
        Tooltip,
        Legend
    );
    const { projects } = useProject();
    const completedProjects: ProjectType[] = projects.filter(
        (project) => project.status === "completed"
    );

    const Months = {
        0: "Jan",
        1: "Feb",
        2: "Mar",
        3: "Apr",
        4: "May",
        5: "Jun",
        6: "Jul",
        7: "Aug",
        8: "Sep",
        9: "Oct",
        10: "Nov",
        11: "Dec",
    };

    const barData = {
        labels: completedProjects.map(
            (project) =>
                Months[
                    new Date(
                        project.duration.to
                    ).getMonth() as keyof typeof Months
                ]
        ),
        data: completedProjects.map((project) => project.price),
    };

    return (
        <div className="h-[300px] w-full sm:h-[350px] lg:h-[400px]">
            <Bar
                options={{
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            display: true,
                            position: "top" as const,
                            labels: {
                                color: "white",
                                font: {
                                    size: window.innerWidth < 768 ? 10 : 12,
                                },
                            },
                        },
                        title: {
                            display: true,
                            text: "Monthly Earnings",
                            color: "white",
                            font: { size: window.innerWidth < 768 ? 14 : 16 },
                        },
                    },
                    scales: {
                        y: {
                            ticks: {
                                color: "white",
                                font: {
                                    size: window.innerWidth < 768 ? 10 : 12,
                                },
                            },
                        },
                        x: {
                            ticks: {
                                color: "white",
                                font: {
                                    size: window.innerWidth < 768 ? 10 : 12,
                                },
                            },
                        },
                    },
                }}
                data={{
                    labels: barData.labels,
                    datasets: [
                        {
                            label: "Earnings ($)",
                            data: barData.data,
                            backgroundColor: "oklch(82.8% 0.189 84.429)",
                            borderRadius: 4,
                        },
                    ],
                }}
            />
        </div>
    );
}

export default EarningsChart;
