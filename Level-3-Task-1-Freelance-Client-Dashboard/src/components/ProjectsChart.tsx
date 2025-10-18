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
        <div className="flex h-72 w-full items-center justify-center">
            <Pie
                options={{
                    responsive: true,
                    plugins: {
                        legend: {
                            position: "bottom",
                            labels: { color: "white" },
                        },
                    },
                }}
                className="h-full w-full p-2"
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
                            hoverOffset: 4,
                        },
                    ],
                }}
            />
        </div>
    );
}

export default ProjectsChart;
