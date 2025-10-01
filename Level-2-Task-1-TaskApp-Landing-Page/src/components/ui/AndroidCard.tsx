import { IconBrandGooglePlay } from "@tabler/icons-react";

function AndroidCard() {
    return (
        <div className="flex h-10 w-36 items-center justify-center gap-1 rounded-lg bg-stone-100 pl-1.5 shadow-[0px_0px_4px_-1px_black] ring-1 ring-stone-600 sm:h-14 sm:w-44 sm:gap-1.5 sm:pl-2 dark:bg-stone-900">
            <IconBrandGooglePlay className="size-5 sm:size-8" />
            <div className="flex w-full flex-col items-start justify-center gap-0 sm:gap-0.5">
                <p className="text-[0.65rem] font-medium text-nowrap sm:text-xs">
                    Google Play Store
                </p>
                <div className="text-[0.5rem] text-nowrap sm:text-[0.65rem]">
                    Download & install for free
                </div>
            </div>
        </div>
    );
}

export default AndroidCard;
