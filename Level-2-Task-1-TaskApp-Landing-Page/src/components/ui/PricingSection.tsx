import { IconCircleFilled } from "@tabler/icons-react";

function PricingSection() {
    return (
        <div className="w-full space-y-6 md:space-y-10 lg:space-y-16">
            <h2 className="text-center text-sm font-medium sm:text-lg md:text-xl">
                Pricing
            </h2>
            <div className="grid h-fit min-h-[18rem] w-full grid-cols-1 grid-rows-3 justify-items-center gap-4 md:grid-cols-3 md:grid-rows-1 md:gap-0 lg:min-h-[22rem]">
                <div className="flex h-full w-[80%] flex-col items-center justify-between rounded-2xl bg-stone-200 px-2 py-3 ring-1 sm:w-1/2 md:w-[95%] lg:w-[85%] lg:rounded-4xl lg:px-4 lg:py-5 dark:bg-stone-700">
                    <h3 className="text-sm font-medium md:text-base lg:text-lg">
                        Free
                    </h3>
                    <div className="flex h-[80%] w-full flex-col items-center justify-start gap-3 p-2 lg:p-4">
                        <div className="flex w-full items-center justify-start gap-4 text-xs lg:text-sm">
                            <IconCircleFilled size={10} />
                            <span>100 Task / Day</span>
                        </div>
                        <div className="flex w-full items-center justify-start gap-4 text-xs lg:text-sm">
                            <IconCircleFilled size={10} />
                            <span>Weekly Remainders</span>
                        </div>
                        <div className="flex w-full items-center justify-start gap-4 text-xs lg:text-sm">
                            <IconCircleFilled size={10} />
                            <span>1000 API Repuests / Day</span>
                        </div>
                        <div className="flex w-full items-center justify-start gap-4 text-xs lg:text-sm">
                            <IconCircleFilled size={10} />
                            <span>5 Devices</span>
                        </div>
                        <div className="flex w-full items-center justify-start gap-4 text-xs lg:text-sm">
                            <IconCircleFilled size={10} />
                            <span>Chat Bot Support</span>
                        </div>
                    </div>
                    <button className="transile w-full cursor-pointer rounded-lg bg-stone-700 p-1 text-xs font-medium text-neutral-200 hover:bg-stone-500 focus-visible:outline-hidden lg:rounded-xl lg:p-2 lg:text-sm dark:bg-stone-200 dark:text-neutral-800 dark:hover:bg-stone-400">
                        Free
                    </button>
                </div>
                <div className="flex h-full w-[80%] flex-col items-center justify-between rounded-2xl bg-stone-200 px-2 py-3 ring-1 sm:w-1/2 md:w-[95%] lg:w-[85%] lg:rounded-4xl lg:px-4 lg:py-5 dark:bg-stone-700">
                    <h3 className="text-sm font-medium md:text-base lg:text-lg">
                        Pro
                    </h3>
                    <div className="flex h-[80%] w-full flex-col items-center justify-start gap-3 p-2 lg:p-4">
                        <div className="flex w-full items-center justify-start gap-4 text-xs lg:text-sm">
                            <IconCircleFilled size={10} />
                            <span>250 Task / Day</span>
                        </div>
                        <div className="flex w-full items-center justify-start gap-4 text-xs lg:text-sm">
                            <IconCircleFilled size={10} />
                            <span>Daily Remainders</span>
                        </div>
                        <div className="flex w-full items-center justify-start gap-4 text-xs lg:text-sm">
                            <IconCircleFilled size={10} />
                            <span>50000 API Repuests / Day</span>
                        </div>
                        <div className="flex w-full items-center justify-start gap-4 text-xs lg:text-sm">
                            <IconCircleFilled size={10} />
                            <span>10 Devices</span>
                        </div>
                        <div className="flex w-full items-center justify-start gap-4 text-xs lg:text-sm">
                            <IconCircleFilled size={10} />
                            <span>Chat Bot Support</span>
                        </div>
                        <div className="flex w-full items-center justify-start gap-4 text-xs lg:text-sm">
                            <IconCircleFilled size={10} />
                            <span>Community Support</span>
                        </div>
                    </div>
                    <button className="transile w-full cursor-pointer rounded-lg bg-stone-700 p-1 text-xs font-medium text-neutral-200 hover:bg-stone-500 focus-visible:outline-hidden lg:rounded-xl lg:p-2 lg:text-sm dark:bg-stone-200 dark:text-neutral-800 dark:hover:bg-stone-400">
                        $15 / Month
                    </button>
                </div>
                <div className="flex h-full w-[80%] flex-col items-center justify-between rounded-2xl bg-stone-200 px-2 py-3 ring-1 sm:w-1/2 md:w-[95%] lg:w-[85%] lg:rounded-4xl lg:px-4 lg:py-5 dark:bg-stone-700">
                    <h3 className="text-sm font-medium md:text-base lg:text-lg">
                        Team
                    </h3>
                    <div className="flex h-[80%] w-full flex-col items-center justify-start gap-3 p-2 lg:p-4">
                        <div className="flex w-full items-center justify-start gap-4 text-xs lg:text-sm">
                            <IconCircleFilled size={10} />
                            <span>500 Task / Day</span>
                        </div>
                        <div className="flex w-full items-center justify-start gap-4 text-xs lg:text-sm">
                            <IconCircleFilled size={10} />
                            <span>Hourly Remainders</span>
                        </div>
                        <div className="flex w-full items-center justify-start gap-4 text-xs lg:text-sm">
                            <IconCircleFilled size={10} />
                            <span>100000 API Repuests / Day</span>
                        </div>
                        <div className="flex w-full items-center justify-start gap-4 text-xs lg:text-sm">
                            <IconCircleFilled size={10} />
                            <span>20 Accounts</span>
                        </div>
                        <div className="flex w-full items-center justify-start gap-4 text-xs lg:text-sm">
                            <IconCircleFilled size={10} />
                            <span>Chat Bot Support</span>
                        </div>
                        <div className="flex w-full items-center justify-start gap-4 text-xs lg:text-sm">
                            <IconCircleFilled size={10} />
                            <span>Community Support</span>
                        </div>
                    </div>
                    <button className="transile w-full cursor-pointer rounded-xl bg-stone-700 p-1 text-xs font-medium text-neutral-200 hover:bg-stone-500 focus-visible:outline-hidden lg:p-2 lg:text-sm dark:bg-stone-200 dark:text-neutral-800 dark:hover:bg-stone-400">
                        $25 / Month
                    </button>
                </div>
            </div>
        </div>
    );
}

export default PricingSection;
