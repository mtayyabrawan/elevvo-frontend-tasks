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
        0: "January",
        1: "Feburary",
        2: "March",
        3: "April",
        4: "May",
        5: "June",
        6: "July",
        7: "August",
        8: "September",
        9: "October",
        10: "November",
        11: "December",
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
        <div className="flex h-72 w-full items-center justify-center">
            <Bar
                className="h-full w-full p-2"
                data={{
                    labels: barData.labels,
                    datasets: [
                        {
                            label: "Months",
                            data: barData.data,
                            backgroundColor: "oklch(82.8% 0.189 84.429)",
                        },
                    ],
                }}
            />
        </div>
    );
}

export default EarningsChart;
