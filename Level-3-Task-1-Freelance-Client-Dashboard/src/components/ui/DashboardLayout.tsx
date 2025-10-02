import { Outlet } from "react-router";
import Header from "./Header";
import Sidebar from "./Sidebar";

function DashboardLayout() {
    return (
        <div className="w-full bg-zinc-300 text-black dark:bg-zinc-800 dark:text-white">
            <div className="relative mx-auto h-screen w-full max-w-[1540px]">
                <Header />
                <div className="flex h-[calc(100%-3rem)] w-full">
                    <Sidebar />
                    <main className="scrollbar-custom h-full w-[88%] overflow-y-auto">
                        <Outlet />
                    </main>
                </div>
            </div>
        </div>
    );
}

export default DashboardLayout;
