import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { UsersResponse } from "../../../types/types"; // Importing the interface for type safety. This is an interface that defines the structure of the response you expect from the API.

export const usersApiSlice = createApi({
  //creates a new API slice
  reducerPath: "usersFromAPI", // This is the unique key name of the slice in the Redux store where the API slice's state will be stored.
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com/" }), // This sets the base URL for API requests.
  tagTypes: ["Users"], // Define a tag type for user data.
  endpoints: (builder) => ({
    // This defines the endpoints for your API i.e. API calls. Each call can be a query (to fetch data) or a mutation (to modify or change data).
    getUsers: builder.query<UsersResponse, void>({
      // Defines a 'getUsers' query
      query: () => "users", // The API endpoint to call when this query is dispatched. This is the actual API endpoint to call when you want to fetch users. It appends "users" to the base URL.
      providesTags: ["Users"], // This query provides the Users tag.
    }),

    createUser: builder.mutation({
      query: (newUser) => ({
        url: `users/add`, // Relative URL since baseUrl is already set
        method: "POST",
        body: newUser, // Include the new user data in the request body
      }),
      invalidatesTags: ["Users"], // This mutation invalidates the Users tag.
    }),

    // updateUser: builder.mutation({
    //   query: (id, newUser) => ({
    //     url: `users/${id}`,
    //     method: "PUT",
    //     body: newUser,
    //   }),
    //   invalidatesTags: ["Users"],
    // }),

    // deleteUser: builder.mutation({
    //   query: (id) => ({
    //     url: `users/${id}`,
    //     method: "DELETE",
    //   }),
    //   invalidatesTags: ["Users"],
    // }),
  }),
});

// Exports a hook for using the query and Mutations in your components
export const {
  useGetUsersQuery,
  useCreateUserMutation,
  // useUpdateUserMutation,
  // useDeleteUserMutation,
} = usersApiSlice;
