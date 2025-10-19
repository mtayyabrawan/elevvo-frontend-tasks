import type { ReactNode } from "react";
import { Toaster } from "sonner";

function BaseLayout({
    children,
    height,
}: {
    children: ReactNode;
    height: "screen" | "auto";
}) {
    const heights = {
        screen: "h-screen",
        auto: "h-auto",
    };
    return (
        <div className="w-full bg-zinc-300 text-black dark:bg-zinc-800 dark:text-white">
            <div
                className={`relative mx-auto ${heights[height]} w-full max-w-[1540px] min-w-[320px]`}
            >
                <Toaster position="top-center" />
                {children}
            </div>
        </div>
    );
}

export default BaseLayout;
