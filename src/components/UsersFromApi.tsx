import { useGetUsersQuery } from "../redux/reducers/user-reducer/users-api-slice";

const UsersFromApi = () => {
  const { data, isLoading, isFetching, isError, error } = useGetUsersQuery();
  //   if (data) {
  //     console.table(data.users);
  //   }

  if (isLoading || isFetching) {
    return <div className="text-center text-3xl my-10">Loading...</div>;
  }

  if (isError) {
    // console.log("in component: ", { error });
    if ("status" in error) {
      return (
        <div className="text-center text-red-500 text-3xl my-10">
          Error: {error.status}
        </div>
      );
    }

    return (
      <div className="text-center text-red-500 text-3xl my-10">
        Error occurred.
      </div>
    );
  }

  const cellClass = "px-4 py-2 border border-black";

  return (
    <div className="w-11/12 mx-auto my-10">
      <table className="min-w-full border-2 border-black">
        <thead className="bg-gray-200">
          <tr>
            <th className={cellClass}>ID</th>
            <th className={cellClass}>Image</th>
            <th className={cellClass}>Name</th>
            <th className={cellClass}>Email</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {data?.users.map((user) => (
            <tr key={user.id} className="hover:bg-gray-100">
              <td className={cellClass}>{user.id}</td>
              <td className={cellClass}>
                <img
                  src={user.image}
                  alt={user.firstName}
                  className="size-5 rounded-full block mx-auto"
                />
              </td>
              <td
                className={
                  cellClass
                }>{`${user.firstName} ${user.lastName}`}</td>
              <td className={cellClass}>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersFromApi;
