import { useState, type MouseEvent } from "react";
import EditButton from "../components/ui/EditButton";
import useAuth from "../hooks/useAuth";
import EditModal from "../components/EditModal";

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
        <div className="h-full">
            {modal.status && (
                <EditModal modalId={modal.id} toggleModal={toggleModal} />
            )}
            <div className="mx-auto h-auto w-[75%] space-y-6 py-4">
                <img
                    src={userData.profilePicture}
                    alt={userData.username}
                    className="mx-auto block h-20 w-20 rounded-full object-cover"
                />
                {userData.username && (
                    <p className="text-center text-sm font-medium">
                        {userData.username}
                    </p>
                )}
                <div className="w-full space-y-8 p-2">
                    <div className="flex w-full items-center justify-between">
                        <p className="text-base font-medium">{userData.name}</p>
                        <EditButton id="name" action={editAction} />
                    </div>
                    <div className="flex w-full items-center justify-between">
                        <p className="text-base font-medium">
                            {userData.email}
                        </p>
                        <EditButton id="email" action={editAction} />
                    </div>
                    <div className="flex w-full items-center justify-between">
                        <p className="text-base font-medium">
                            {userData.username}
                        </p>
                        <EditButton id="username" action={editAction} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;
