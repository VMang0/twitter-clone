import { RootState } from '@redux/store';

export const userDataSelector = (state: RootState) => state.user.userData;
export const isAuthenticatedUserSelector = (state: RootState) => state.user.isAuthenticated;
