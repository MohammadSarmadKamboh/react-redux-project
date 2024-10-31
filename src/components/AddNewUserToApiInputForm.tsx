import { useState } from "react";
import { useForm } from "react-hook-form";
import UsersFromApi from "./UsersFromApi";
import { User } from "../types/types";
import { useCreateUserMutation } from "../redux/reducers/user-reducer/users-api-slice";

const AddNewUserToApiInputForm = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<User>();

  const [userId, setUserId] = useState<number | null>(null);

  const [createUser, { isLoading }] = useCreateUserMutation(); // Use the create user mutation hook

  const onSubmit = async (data: User) => {
    const trimmedName = data.firstName.trim();
    console.log("Adding user to API: ", trimmedName);
    if (!trimmedName) {
      alert("Please enter a valid first name.");
      return;
    }
    try {
      const newUser = await createUser({ name: trimmedName }).unwrap();
      console.log("Succeded to create user: ", newUser); // Call the mutation
      setValue("firstName", ""); // Reset the input field
      setUserId(null); // Reset userId
    } catch (error) {
      console.error("Failed to create user: ", error);
      alert("Error creating user");
    }
  };

  return (
    <div className="flex gap-5 flex-col items-center py-20">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex items-center flex-col gap-5 text-3xl">
        <input
          type="text"
          {...register("firstName", {
            required: "First name is required.",
            minLength: { value: 3, message: "Minimum 3 characters required." },
            maxLength: { value: 32, message: "Maximum 32 characters allowed." },
          })}
          placeholder="Enter user to update Redux API state"
          className="w-[520px] border-2 border-black px-3 py-1.5 rounded-lg hover:bg-gray-100"
        />

        <button
          type="submit"
          className="border-2 border-black rounded-lg px-4 py-2 bg-gray-400 text-white hover:scale-105 transition-transform"
          disabled={isLoading} // Disable the button while loading
        >
          {/* {userId ? "Update User" : "Add User"} */}
          {isLoading ? "Creating..." : userId ? "Update User" : "Add User"}
        </button>
        {errors.firstName && (
          <p className="text-red-500">{errors.firstName.message}</p>
        )}
      </form>
      <UsersFromApi />
    </div>
  );
};

export default AddNewUserToApiInputForm;
