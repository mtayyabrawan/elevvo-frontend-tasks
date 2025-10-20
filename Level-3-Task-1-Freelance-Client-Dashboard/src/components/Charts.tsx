import EarningsChart from "./EarningsChart";
import ProjectsChart from "./ProjectsChart";

function Charts() {
    return (
        <div className="grid grid-cols-1 gap-3 p-2 md:grid-cols-2">
            <div className="w-full rounded-lg bg-slate-800/50 p-4 shadow-lg">
                <EarningsChart />
            </div>
            <div className="w-full rounded-lg bg-slate-800/50 p-4 shadow-lg">
                <ProjectsChart />
            </div>
        </div>
    );
}

export default Charts;
