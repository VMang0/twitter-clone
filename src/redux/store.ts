import { configureStore } from '@reduxjs/toolkit';

import loaderReducer from '@redux/slices/loaderSlice';
import modalReducer from '@redux/slices/modalSlice';
import themeReducer from '@redux/slices/themeSlice';
import userReducer from '@redux/slices/userSlice';

export const store = configureStore({
  reducer: {
    modal: modalReducer,
    user: userReducer,
    theme: themeReducer,
    loader: loaderReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk = (dispatch: AppDispatch) => void;
