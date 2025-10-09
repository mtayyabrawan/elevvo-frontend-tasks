import { useForm } from "react-hook-form";
import useAuth from "../hooks/useAuth";
import type { User } from "../context/AuthContext";
import capitalize from "../utility/capitalize";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
    emailSchema,
    nameSchema,
    usernameSchema,
} from "../schemas/BaseSchemas";

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
                          : usernameSchema,
            })
        ),
        defaultValues: { value: userData[modalId as keyof User] },
    });
    function formSubmit({
        value,
    }: {
        value: z.infer<
            typeof emailSchema | typeof usernameSchema | typeof nameSchema
        >;
    }) {
        updateUser({ [modalId]: value });
        reset();
        toggleModal("", false);
    }
    return (
        <div className="fixed top-0 left-1/2 z-50 h-full w-full max-w-[1540px] -translate-x-1/2 bg-black/20 backdrop-blur-xs">
            <form
                className="mx-auto mt-28 h-auto w-1/3 space-y-4 rounded-sm bg-slate-400/40 p-4 shadow-[0px_0px_3px_1px_black]"
                noValidate
                onSubmit={handleSubmit(formSubmit)}
            >
                <div className="relative flex w-full flex-col items-center justify-center gap-2 text-sm">
                    {errors.value && (
                        <p className="absolute top-1 right-4 text-xs text-nowrap text-red-500 dark:text-red-400">
                            {errors.value.message}
                        </p>
                    )}
                    <label htmlFor="value" className="w-[93%]">
                        {capitalize(modalId)}
                    </label>
                    <input
                        type={modalId === "email" ? modalId : "text"}
                        id="value"
                        {...register("value")}
                        className={`w-[95%] rounded-md bg-slate-100 p-2 text-center ring-[1px] focus-visible:outline-hidden dark:bg-slate-950 ${errors.value ? "ring-red-500 dark:ring-red-400" : "ring-slate-500 dark:ring-slate-400"}`}
                    />
                </div>
                <div className="mx-auto flex w-[95%] items-center justify-end gap-4">
                    <button
                        type="button"
                        onClick={() => toggleModal("")}
                        className="cursor-pointer rounded-sm bg-red-400 p-1 text-xs font-medium focus-visible:outline-hidden dark:bg-red-500"
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="cursor-pointer rounded-sm bg-blue-700 p-1 text-xs font-medium text-white focus-visible:outline-hidden dark:bg-blue-400"
                    >
                        Update
                    </button>
                </div>
            </form>
        </div>
    );
}

export default EditModal;
