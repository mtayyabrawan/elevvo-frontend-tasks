import { Pie } from "react-chartjs-2";
import { Chart as ChartJs, Legend, Tooltip, ArcElement } from "chart.js";
import useProject from "../hooks/useProject";

function ProjectsChart() {
    ChartJs.register(Tooltip, Legend, ArcElement);
    const { projects } = useProject();

    const data = [
        projects.filter((project) => project.status === "completed").length,
        projects.filter((project) => project.status === "cancelled").length,
        projects.filter((project) => project.status === "pending").length,
    ];

    return (
        <div className="h-[300px] w-full sm:h-[350px] lg:h-[400px]">
            <Pie
                options={{
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            position: "bottom" as const,
                            labels: {
                                color: "white",
                                font: {
                                    size: window.innerWidth < 768 ? 10 : 12,
                                },
                                padding: window.innerWidth < 768 ? 10 : 20,
                            },
                        },
                        title: {
                            display: true,
                            text: "Project Status",
                            color: "white",
                            font: { size: window.innerWidth < 768 ? 14 : 16 },
                            padding: {
                                bottom: window.innerWidth < 768 ? 10 : 20,
                            },
                        },
                    },
                }}
                data={{
                    labels: ["Completed", "Cancelled", "Pending"],
                    datasets: [
                        {
                            label: "Projects",
                            data: data,
                            backgroundColor: [
                                "oklch(80.8% 0.330 50.429)",
                                "purple",
                                "skyblue",
                            ],
                            borderWidth: 1,
                            hoverOffset: 4,
                        },
                    ],
                }}
            />
        </div>
    );
}

export default ProjectsChart;
