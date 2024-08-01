import { useSelector } from 'react-redux';

import { useAppDispatch } from '@hooks/useAppDispatch';
import { setLoadingState } from '@redux/slices/loaderSlice';
import { isLoadingSelector } from '@redux/slices/loaderSlice/selectors';

export const useLoader = () => {
  const dispatch = useAppDispatch();
  const isLoading = useSelector(isLoadingSelector);

  const showLoader = () => {
    dispatch(setLoadingState(true));
  };

  const hideLoader = () => {
    dispatch(setLoadingState(false));
  };

  return { isLoading, showLoader, hideLoader };
};
