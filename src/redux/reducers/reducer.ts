// Main reducer file
import { combineReducers } from "@reduxjs/toolkit";

// importing all reducers here
import userReducer from "./user-reducer/user-reducer";
import { usersApiSlice } from "./user-reducer/users-api-slice";

const rootReducer = combineReducers({
  userStates: userReducer,
  [usersApiSlice.reducerPath]: usersApiSlice.reducer,
});

export default rootReducer;
