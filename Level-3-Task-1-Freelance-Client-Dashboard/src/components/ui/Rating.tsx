import { IconStarFilled } from "@tabler/icons-react";

function Rating({ rating }: { rating: number }) {
    const stars = [
        <IconStarFilled className="size-3" />,
        <IconStarFilled className="size-3" />,
        <IconStarFilled className="size-3" />,
        <IconStarFilled className="size-3" />,
        <IconStarFilled className="size-3" />,
    ];

    return (
        <p className="flex items-center justify-center gap-1.5 text-amber-400">
            {stars.slice(0, rating)}
        </p>
    );
}

export default Rating;
