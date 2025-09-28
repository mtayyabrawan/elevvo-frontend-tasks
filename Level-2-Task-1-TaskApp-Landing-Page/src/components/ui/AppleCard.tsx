import { IconBrandAppstore } from "@tabler/icons-react";

function AppleCard() {
    return (
        <div className="flex h-14 w-44 items-center justify-center gap-1.5 rounded-lg bg-stone-100 pl-2 shadow-[0px_0px_4px_-1px_black] ring-1 ring-stone-600 dark:bg-stone-900">
            <IconBrandAppstore size={30} />
            <div className="flex w-full flex-col items-start justify-center gap-0.5">
                <p className="text-xs font-medium text-nowrap">App Store</p>
                <div className="text-[0.65rem] text-nowrap">
                    Download & install for free
                </div>
            </div>
        </div>
    );
}

export default AppleCard;
