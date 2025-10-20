import { useState, type MouseEvent } from "react";
import useAuth from "../hooks/useAuth";
import { IconPencil } from "@tabler/icons-react";
import EditModal from "../components/EditModal";
import EditButton from "../components/ui/EditButton";

function Profile() {
    const { userData } = useAuth();
    const [modal, setModal] = useState<{ id: string; status: boolean }>({
        id: "",
        status: false,
    });

    function toggleModal(id: string, status?: boolean) {
        setModal({ id: id, status: status || !modal.status });
    }

    function editAction(evt: MouseEvent<HTMLButtonElement>) {
        toggleModal(evt.currentTarget.id);
    }

    return (
        <div className="h-full w-full">
            {modal.status && (
                <EditModal modalId={modal.id} toggleModal={toggleModal} />
            )}
            <div className="mx-auto h-auto w-full max-w-2xl space-y-6 px-4 py-4 sm:w-[85%] md:w-[75%]">
                <div className="relative mx-auto h-20 w-20 sm:h-24 sm:w-24">
                    <img
                        src={userData.profilePicture}
                        alt={userData.username}
                        className="h-full w-full rounded-full object-cover"
                    />
                    <button
                        id="profilePicture"
                        onClick={editAction}
                        className="absolute right-0 bottom-0 cursor-pointer rounded-full bg-blue-700 p-1 hover:bg-blue-600 focus-visible:outline-hidden dark:bg-blue-400"
                    >
                        <IconPencil className="h-4 w-4 text-white" />
                    </button>
                </div>

                {userData.username && (
                    <p className="text-center text-sm font-medium sm:text-base">
                        {userData.username}
                    </p>
                )}

                <div className="w-full space-y-8 p-2">
                    <div className="flex w-full flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                        <EditButton id="name" action={editAction} />
                        <EditButton id="email" action={editAction} />
                    </div>
                    <div className="flex w-full flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                        <EditButton id="username" action={editAction} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;
