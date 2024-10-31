import { useAppSelector, useAppDispatch } from "../custom-hooks/hooks";
import {
  deleteUser,
  deleteAllUsers,
} from "../redux/reducers/user-reducer/user-reducer";

const UserList: React.FC<{
  setUserName: (name: string) => void;
  setUserId: (id: number | null) => void;
}> = ({ setUserName, setUserId }) => {
  const dispatch = useAppDispatch();
  const users = useAppSelector((state) => state.userStates.users);

  // delete an existing user handeler
  const deleteExistingUser = (id: number) => {
    dispatch(deleteUser(id));
  };

  // delete all users handeler
  const handleDeleteAllUsers = () => {
    if (window.confirm("Are you sure you want to delete all users?")) {
      dispatch(deleteAllUsers());
    }
  };

  return (
    <>
      <h2 className="w-11/12 font-bold text-center border-b-2 border-black py-2">
        Users List
      </h2>
      <button
        onClick={handleDeleteAllUsers}
        className="border-2 border-black rounded-lg px-4 py-2 bg-red-400 text-white hover:scale-105 transition-transform">
        Delete All Users
      </button>
      <ul className="flex flex-col-reverse border-2 border-black rounded-lg shadow-gray-100 hover:shadow-2xl transition-transform">
        {users &&
          users.length > 0 &&
          users?.map((user) => (
            <li
              key={user.id}
              className="flex items-center justify-between border-b-2 border-black rounded px-3 py-1.5  hover:bg-gray-100 ">
              <span> {user.userName}</span>{" "}
              <span className="flex justify-center items-center">
                <button
                  className="border-2 border-black rounded-lg px-4 py-2 bg-gray-400 text-white hover:scale-105 transition-transform ml-4"
                  onClick={() => {
                    setUserName(user.userName);
                    setUserId(user.id);
                  }}>
                  Edit
                </button>
                <button
                  className="border-2 border-black rounded-lg px-4 py-2 bg-gray-400 text-white hover:scale-105 transition-transform ml-4"
                  onClick={() => deleteExistingUser(user.id)}>
                  Delete
                </button>
              </span>
            </li>
          ))}
      </ul>
    </>
  );
};

export default UserList;
