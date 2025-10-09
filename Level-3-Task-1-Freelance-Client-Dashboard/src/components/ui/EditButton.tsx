import { IconPencil } from "@tabler/icons-react";
import type { MouseEvent } from "react";

function EditButton({
    action,
    id,
}: {
    action: (evt: MouseEvent<HTMLButtonElement>) => void;
    id: string;
}) {
    return (
        <button
            id={id}
            onClick={action}
            className="flex w-fit cursor-pointer items-center justify-center gap-1 rounded-sm bg-blue-700 px-2 py-1 text-xs font-medium text-white focus-visible:outline-hidden dark:bg-blue-400"
        >
            <span>Edit</span> <IconPencil className="size-4" />
        </button>
    );
}

export default EditButton;
