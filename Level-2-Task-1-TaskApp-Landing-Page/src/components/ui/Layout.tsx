import { Outlet } from "react-router";
import Navbar from "./primary/Navbar";
import Footer from "./primary/Footer";

function Layout() {
    return (
        <div className="bg-radial-[at_50%_65%] from-neutral-100 from-0% to-neutral-400 to-100% text-neutral-800 dark:from-stone-800 dark:to-stone-700 dark:text-neutral-300">
            <main className="relative mx-auto max-w-[1540px] min-w-[320px] p-1">
                <Navbar />
                <main className="mt-3.5 min-h-[calc(100vh-16.875rem)]">
                    <Outlet />
                </main>
                <Footer />
            </main>
        </div>
    );
}

export default Layout;
