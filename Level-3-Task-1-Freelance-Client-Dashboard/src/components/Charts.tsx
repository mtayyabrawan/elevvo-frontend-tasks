import EarningsChart from "./EarningsChart";
import ProjectsChart from "./ProjectsChart";

function Charts() {
    return (
        <div className="grid grid-cols-2 grid-rows-1 gap-3">
            <EarningsChart />
            <ProjectsChart />
        </div>
    );
}

export default Charts;
