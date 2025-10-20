import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import useAuth from "../hooks/useAuth";
import { IconLoaderQuarter, IconX } from "@tabler/icons-react";
import {
    emailSchema,
    nameSchema,
    profilePictureSchema,
    usernameSchema,
} from "../schemas/BaseSchemas";
import type { User } from "../context/AuthContext";

function EditModal({
    modalId,
    toggleModal,
}: {
    modalId: string;
    toggleModal: (id: string, status?: boolean) => void;
}) {
    const { userData, updateUser } = useAuth();
    const {
        handleSubmit,
        register,
        reset,
        formState: { errors, isSubmitting },
    } = useForm({
        resolver: zodResolver(
            z.object({
                value:
                    modalId === "email"
                        ? emailSchema
                        : modalId === "name"
                          ? nameSchema
                          : modalId === "username"
                            ? usernameSchema
                            : profilePictureSchema,
            })
        ),
        defaultValues: { value: userData[modalId as keyof User] },
    });

    function formSubmit({
        value,
    }: {
        value: z.infer<
            | typeof emailSchema
            | typeof usernameSchema
            | typeof nameSchema
            | typeof profilePictureSchema
        >;
    }) {
        updateUser({ [modalId]: value });
        reset();
        toggleModal("", false);
    }

    return (
        <div className="fixed inset-0 z-50 flex items-start justify-center bg-black/20 px-4 backdrop-blur-xs">
            <form
                className="mt-28 w-full max-w-md space-y-4 rounded-sm bg-slate-400/40 p-4 shadow-[0px_0px_3px_1px_black] dark:bg-slate-800/40"
                noValidate
                onSubmit={handleSubmit(formSubmit)}
            >
                <div className="flex items-center justify-between">
                    <h3 className="text-lg font-medium capitalize">
                        {modalId.replace(/([A-Z])/g, " $1").trim()}
                    </h3>
                    <button
                        type="button"
                        onClick={() => toggleModal("", false)}
                        className="rounded-full p-1 hover:bg-slate-300/20"
                    >
                        <IconX className="h-5 w-5" />
                    </button>
                </div>

                <div className="relative">
                    {errors.value && (
                        <p className="absolute -top-5 right-0 text-xs text-red-500">
                            {errors.value.message}
                        </p>
                    )}
                    <input
                        type={modalId === "email" ? "email" : "text"}
                        {...register("value")}
                        className="w-full rounded-md bg-slate-100 p-2 text-center ring-1 focus-visible:outline-none dark:bg-slate-950"
                    />
                </div>

                <div className="flex justify-end gap-2">
                    <button
                        type="button"
                        onClick={() => toggleModal("", false)}
                        className="rounded px-3 py-1.5 text-sm hover:bg-slate-300/20"
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="inline-flex items-center gap-2 rounded bg-blue-600 px-3 py-1.5 text-sm text-white hover:bg-blue-700 disabled:opacity-50"
                    >
                        Save
                        {isSubmitting && (
                            <IconLoaderQuarter className="h-4 w-4 animate-spin" />
                        )}
                    </button>
                </div>
            </form>
        </div>
    );
}

export default EditModal;
