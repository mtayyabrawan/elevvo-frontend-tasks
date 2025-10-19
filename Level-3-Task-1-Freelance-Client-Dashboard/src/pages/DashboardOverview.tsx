import Charts from "../components/Charts";
import RecentActivity from "../components/RecentActivity";

function DashboardOverview() {
    return (
        <div className="h-full w-full p-3">
            <Charts />
            <RecentActivity />
        </div>
    );
}

export default DashboardOverview;
