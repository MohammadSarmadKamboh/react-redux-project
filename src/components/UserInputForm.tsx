import { useState } from "react";
import { useForm } from "react-hook-form";
import UserList from "./UserList ";
import { useAppDispatch } from "../custom-hooks/hooks";
import {
  addUser,
  updateUser,
} from "../redux/reducers/user-reducer/user-reducer";

interface FormData {
  userName: string;
}

const UserInputForm = () => {
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormData>();
  const [userId, setUserId] = useState<number | null>(null);

  // Handler to add a new or update an existing user
  const handleUserSubmission = (data: FormData) => {
    const trimmedName = data.userName.trim();
    if (!trimmedName) {
      alert("Please enter a valid user name.");
      return;
    }

    if (userId !== null) {
      dispatch(updateUser({ id: userId, userName: trimmedName }));
    } else {
      dispatch(addUser({ id: Date.now(), userName: trimmedName }));
    }

    setValue("userName", "");
    setUserId(null);
  };

  return (
    <div className="flex gap-5 flex-col items-center text-3xl py-20">
      <form
        onSubmit={handleSubmit(handleUserSubmission)}
        className="flex items-center flex-col gap-5">
        <input
          type="text"
          {...register("userName", {
            required: "User name is required.",
            minLength: { value: 3, message: "Minimum 3 characters required." },
            maxLength: { value: 32, message: "Maximum 32 characters allowed." },
          })}
          placeholder="Enter name to update Redux state"
          className="w-[520px] border-2 border-black px-3 py-1.5 rounded-lg hover:bg-gray-100"
        />

        <button
          type="submit"
          className="border-2 border-black rounded-lg px-4 py-2 bg-gray-400 text-white hover:scale-105 transition-transform">
          {userId ? "Update User" : "Add User"}
        </button>
        {errors.userName && (
          <p className="text-red-500">{errors.userName.message}</p>
        )}
      </form>

      <UserList
        setUserName={(name) => setValue("userName", name)}
        setUserId={setUserId}
      />
    </div>
  );
};

export default UserInputForm;
