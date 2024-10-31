// Main store file

import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers/reducer";
import { usersApiSlice } from "./reducers/user-reducer/users-api-slice";

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(usersApiSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
