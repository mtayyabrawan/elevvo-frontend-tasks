import { IconCircleFilled } from "@tabler/icons-react";

function PricingSection() {
    return (
        <div className="w-full space-y-16">
            <h2 className="text-center text-xl font-medium">Pricing</h2>
            <div className="grid h-fit min-h-[22rem] w-full grid-cols-3 grid-rows-1 justify-items-center">
                <div className="flex h-full w-[85%] flex-col items-center justify-between rounded-4xl bg-stone-200 px-4 py-5 ring-1 dark:bg-stone-700">
                    <h3 className="text-lg font-medium">Free</h3>
                    <div className="flex h-[80%] w-full flex-col items-center justify-start gap-3 p-4">
                        <div className="flex w-full items-center justify-start gap-4 text-sm">
                            <IconCircleFilled size={10} />
                            <span>100 Task / Day</span>
                        </div>
                        <div className="flex w-full items-center justify-start gap-4 text-sm">
                            <IconCircleFilled size={10} />
                            <span>Weekly Remainders</span>
                        </div>
                        <div className="flex w-full items-center justify-start gap-4 text-sm">
                            <IconCircleFilled size={10} />
                            <span>1000 API Repuests / Day</span>
                        </div>
                        <div className="flex w-full items-center justify-start gap-4 text-sm">
                            <IconCircleFilled size={10} />
                            <span>5 Devices</span>
                        </div>
                        <div className="flex w-full items-center justify-start gap-4 text-sm">
                            <IconCircleFilled size={10} />
                            <span>Chat Bot Support</span>
                        </div>
                    </div>
                    <button className="transile w-full cursor-pointer rounded-xl bg-stone-700 p-2 text-sm font-medium text-neutral-200 hover:bg-stone-500 focus-visible:outline-hidden dark:bg-stone-200 dark:text-neutral-800 dark:hover:bg-stone-400">
                        Free
                    </button>
                </div>
                <div className="flex h-full w-[85%] flex-col items-center justify-between rounded-4xl bg-stone-200 px-4 py-5 ring-1 dark:bg-stone-700">
                    <h3 className="text-lg font-medium">Pro</h3>
                    <div className="flex h-[80%] w-full flex-col items-center justify-start gap-3 p-4">
                        <div className="flex w-full items-center justify-start gap-4 text-sm">
                            <IconCircleFilled size={10} />
                            <span>250 Task / Day</span>
                        </div>
                        <div className="flex w-full items-center justify-start gap-4 text-sm">
                            <IconCircleFilled size={10} />
                            <span>Daily Remainders</span>
                        </div>
                        <div className="flex w-full items-center justify-start gap-4 text-sm">
                            <IconCircleFilled size={10} />
                            <span>50000 API Repuests / Day</span>
                        </div>
                        <div className="flex w-full items-center justify-start gap-4 text-sm">
                            <IconCircleFilled size={10} />
                            <span>10 Devices</span>
                        </div>
                        <div className="flex w-full items-center justify-start gap-4 text-sm">
                            <IconCircleFilled size={10} />
                            <span>Chat Bot Support</span>
                        </div>
                        <div className="flex w-full items-center justify-start gap-4 text-sm">
                            <IconCircleFilled size={10} />
                            <span>Community Support</span>
                        </div>
                    </div>
                    <button className="transile w-full cursor-pointer rounded-xl bg-stone-700 p-2 text-sm font-medium text-neutral-200 hover:bg-stone-500 focus-visible:outline-hidden dark:bg-stone-200 dark:text-neutral-800 dark:hover:bg-stone-400">
                        $15 / Month
                    </button>
                </div>
                <div className="flex h-full w-[85%] flex-col items-center justify-between rounded-4xl bg-stone-200 px-4 py-5 ring-1 dark:bg-stone-700">
                    <h3 className="text-lg font-medium">Team</h3>
                    <div className="flex h-[80%] w-full flex-col items-center justify-start gap-3 p-4">
                        <div className="flex w-full items-center justify-start gap-4 text-sm">
                            <IconCircleFilled size={10} />
                            <span>500 Task / Day</span>
                        </div>
                        <div className="flex w-full items-center justify-start gap-4 text-sm">
                            <IconCircleFilled size={10} />
                            <span>Hourly Remainders</span>
                        </div>
                        <div className="flex w-full items-center justify-start gap-4 text-sm">
                            <IconCircleFilled size={10} />
                            <span>100000 API Repuests / Day</span>
                        </div>
                        <div className="flex w-full items-center justify-start gap-4 text-sm">
                            <IconCircleFilled size={10} />
                            <span>20 Accounts</span>
                        </div>
                        <div className="flex w-full items-center justify-start gap-4 text-sm">
                            <IconCircleFilled size={10} />
                            <span>Chat Bot Support</span>
                        </div>
                        <div className="flex w-full items-center justify-start gap-4 text-sm">
                            <IconCircleFilled size={10} />
                            <span>Community Support</span>
                        </div>
                    </div>
                    <button className="transile w-full cursor-pointer rounded-xl bg-stone-700 p-2 text-sm font-medium text-neutral-200 hover:bg-stone-500 focus-visible:outline-hidden dark:bg-stone-200 dark:text-neutral-800 dark:hover:bg-stone-400">
                        $25 / Month
                    </button>
                </div>
            </div>
        </div>
    );
}

export default PricingSection;
