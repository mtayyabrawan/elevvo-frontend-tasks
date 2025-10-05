import type { ReactNode } from "react";

function BaseLayout({ children }: { children: ReactNode }) {
    return (
        <div className="w-full bg-zinc-300 text-black dark:bg-zinc-800 dark:text-white">
            <div className="relative mx-auto h-screen w-full max-w-[1540px]">
                {children}
            </div>
        </div>
    );
}

export default BaseLayout;
