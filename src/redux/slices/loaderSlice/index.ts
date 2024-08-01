import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type LoaderSliceInitialStateType = {
  isLoading: boolean;
};

const initialState: LoaderSliceInitialStateType = {
  isLoading: false,
};

const loaderSlice = createSlice({
  name: 'loader',
  initialState,
  reducers: {
    setLoadingState: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
});

export const { setLoadingState } = loaderSlice.actions;
export default loaderSlice.reducer;
