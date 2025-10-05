import { Outlet } from "react-router";
import Header from "./Header";
import Sidebar from "./Sidebar";
import BaseLayout from "./common/BaseLayout";

function DashboardLayout() {
    return (
        <BaseLayout>
            <Header />
            <div className="flex h-[calc(100%-3rem)] w-full">
                <Sidebar />
                <main className="scrollbar-custom h-full w-[85%] overflow-y-auto">
                    <Outlet />
                </main>
            </div>
        </BaseLayout>
    );
}

export default DashboardLayout;
