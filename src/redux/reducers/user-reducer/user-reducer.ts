// All cases regarding user reducer are defined here

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Each slice/sub-reducer file should define a type for its initial state value, so that createSlice can correctly infer the type of state in each case reducer.
interface User {
  id: number;
  userName: string;
}

interface UserState {
  users: User[];
}

const initialState: UserState = {
  users: [{ id: 1, userName: "Sarmad" }],
};

const userSlice = createSlice({
  name: "userSlice",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<User>) => {
      state.users.push(action.payload);
    },
    updateUser: (state, action: PayloadAction<User>) => {
      const index = state.users.findIndex(
        (user) => user.id === action.payload.id
      );
      if (index !== -1) {
        state.users[index] = action.payload;
      }
    },
    deleteUser: (state, action: PayloadAction<number>) => {
      const index = state.users.findIndex((user) => user.id === action.payload);
      if (index !== -1) {
        state.users.splice(index, 1);
      }

      // state.users = state.users.filter((user) => user.id !== action.payload);
    },
    deleteAllUsers: (state) => {
      state.users = [];
    },
  },
});

export const { addUser, updateUser, deleteUser, deleteAllUsers } =
  userSlice.actions;
export default userSlice.reducer;
