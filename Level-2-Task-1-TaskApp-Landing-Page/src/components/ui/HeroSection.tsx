import { IconBasketCheck } from "@tabler/icons-react";

function HeroSection() {
    return (
        <div className="flex h-60 w-full items-center justify-center rounded-md bg-[url(/hero.png)] bg-cover bg-center">
            <div className="flex h-full w-full flex-col items-start justify-center gap-4 rounded-md bg-stone-50/20 pl-28 backdrop-blur-[2px] dark:bg-stone-500/60">
                <div className="flex items-center justify-start gap-6 px-4">
                    <IconBasketCheck size={50} />
                    <h1 className="text-2xl font-medium">TasKeep</h1>
                </div>
                <p className="w-1/4 text-sm leading-loose font-thin">
                    A next generation Task Tracker app where you can keep track
                    of all your tasks and stay upto date.
                </p>
                <a
                    href="#get-started"
                    className="transile ml-4 w-fit rounded-2xl bg-neutral-400 px-3 py-1.5 text-sm font-medium hover:bg-neutral-600/50 dark:bg-neutral-900 dark:hover:bg-neutral-900/50"
                >
                    Get Started
                </a>
            </div>
        </div>
    );
}

export default HeroSection;
