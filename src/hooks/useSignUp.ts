import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { signUpUserWithEmail } from '@api/auth/sign-up';
import { signUpSchema } from '@components/Forms/SignUp/schema';
import { SignUpFormType } from '@components/Forms/SignUp/types';
import { Paths } from '@constants/paths';
import { useAppDispatch } from '@hooks/useAppDispatch';
import { showNotification } from '@redux/slices/modalSlice';
import { convertAndValidateDate } from '@utils/convertAndValidateDate';
import { handleAsyncFunc } from '@utils/handleAsyncFunc';

export const useSignUp = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const {
    register,
    control,
    handleSubmit,
    setError,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<SignUpFormType>({
    mode: 'onBlur',
    resolver: yupResolver(signUpSchema),
    defaultValues: {
      month: '',
      day: '',
      year: '',
    },
  });

  const onSubmit: SubmitHandler<SignUpFormType> = async ({ month, day, year, email, password, phoneNumber, name }) => {
    const birthDate = convertAndValidateDate(Number(year), Number(month), Number(day));
    if (!birthDate) {
      setError('day', { type: 'manual', message: 'Check the correctness of the selected date!' });
      return;
    }

    await handleAsyncFunc(
      async () => {
        await signUpUserWithEmail({ email, password, birthDate, phoneNumber, name });
        dispatch(
          showNotification('The account has been successfully created. Check your email for account verification!'),
        );
        navigate(Paths.SIGNIN);
      },
      dispatch,
      () => reset(),
    );
  };

  return {
    register,
    control,
    handleSubmit: handleSubmit(onSubmit),
    errors,
    isSubmitting,
  };
};
