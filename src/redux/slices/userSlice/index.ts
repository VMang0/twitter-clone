import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { UserType } from '@type/user';

type UserSliceInitialStateType = {
  isAuthenticated: boolean;
  userData: null | UserType;
};

const storedUser = localStorage.getItem('user');
const userData: UserType | null = storedUser ? (JSON.parse(storedUser) as UserType) : null;

const initialState: UserSliceInitialStateType = {
  isAuthenticated: !!userData,
  userData,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    authorizeUser: (state, action: PayloadAction<UserType>) => {
      state.isAuthenticated = true;
      state.userData = action.payload;
    },
    logoutUser: (state) => {
      state.isAuthenticated = false;
      state.userData = null;
    },
  },
});

export const { logoutUser, authorizeUser } = userSlice.actions;
export default userSlice.reducer;
