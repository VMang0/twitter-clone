import { RootState } from '@redux/store';

export const isLoadingSelector = (state: RootState) => state.loader.isLoading;
