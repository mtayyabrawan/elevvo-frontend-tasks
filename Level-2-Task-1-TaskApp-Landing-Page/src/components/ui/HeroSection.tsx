import { IconBasketCheck } from "@tabler/icons-react";


function HeroSection() {
    
    return (
        <div
            className="flex h-28 w-full items-center justify-center rounded-md bg-[url(/hero.png)] bg-cover bg-center sm:h-48 md:h-60"
            data-aos="fade-down"
        >
            <div className="flex h-full w-full flex-col items-start justify-center gap-1 rounded-md bg-stone-50/20 pl-4 backdrop-blur-[2px] sm:gap-1.5 sm:pl-14 md:gap-4 md:pl-20 lg:pl-28 dark:bg-stone-500/60">
                <div className="flex items-center justify-start gap-4 px-1 sm:px-4 md:gap-6">
                    <IconBasketCheck className="size-8 sm:size-10 md:size-14" />
                    <h1 className="text-lg font-medium sm:text-xl md:text-2xl">
                        TasKeep
                    </h1>
                </div>
                <p className="w-[95%] text-xs leading-normal font-thin sm:w-[80%] sm:text-sm sm:leading-loose md:w-[50%] lg:w-[40%]">
                    A next generation Task Tracker app where you can keep track
                    of all your tasks and stay upto date.
                </p>
                <a
                    href="#get-started"
                    className="transile ml-2 w-fit rounded-2xl bg-neutral-400 px-2 py-1 text-[0.55rem] font-medium hover:bg-neutral-600/50 sm:ml-4 sm:px-3 sm:py-1.5 sm:text-xs md:text-sm dark:bg-neutral-900 dark:hover:bg-neutral-900/50"
                >
                    Get Started
                </a>
            </div>
        </div>
    );
}

export default HeroSection;
