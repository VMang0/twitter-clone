import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { signUpUserWithEmail } from '@api/auth/sign-up';
import { RegistrationForm, RegistrationLogo, SelectsContainer } from '@components/Forms/SignUp/styled';
import { SignUpFormType } from '@components/Forms/SignUp/types';
import { Select } from '@components/Select';
import { Days, Months, Years } from '@constants/date';
import { Paths } from '@constants/paths';
import { useAppDispatch } from '@hooks/useAppDispatch';
import { showNotification } from '@redux/slices/modalSlice';
import { PrimaryButton } from '@styled/components/button/styled';
import { Input } from '@styled/components/input/styled';
import { Link } from '@styled/components/link/styled';
import { Loader } from '@styled/components/loader/styled';
import { TwitterLogo } from '@styled/components/logo/styled';
import { Text } from '@styled/components/typography/styled';
import { convertAndValidateDate } from '@utils/convertAndValidateDate';
import { handleAsyncFunc } from '@utils/handleAsyncFunc';

export const SignUp = () => {
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

  return (
    <RegistrationForm onSubmit={handleSubmit(onSubmit)}>
      <TwitterLogo margin="xxxs" width="w40" height="w38" align="auto" />
      <RegistrationLogo>Create an account</RegistrationLogo>
      <Input
        {...register('name', {
          required: true,
          pattern: {
            value: /^[A-Za-zА-Яа-я\s]+$/,
            message: 'Name can only contain Latin and Russian letters.',
          },
        })}
        placeholder="Name"
        isError={!!errors.name}
      />
      {errors.name && errors.name.type !== 'required' && <span>{errors.name.message}</span>}
      <Input
        {...register('phoneNumber', {
          required: true,
          pattern: {
            value: /^\+?\d{10,15}$/,
            message: 'Invalid phone number. Example: +375447339153',
          },
        })}
        placeholder="Phone number"
        isError={!!errors.phoneNumber}
      />
      {errors.phoneNumber && errors.phoneNumber.type !== 'required' && <span>{errors.phoneNumber.message}</span>}
      <Input
        {...register('email', {
          required: true,
          pattern: {
            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: 'Invalid email.',
          },
        })}
        placeholder="Email"
        type="email"
        isError={!!errors.email}
      />
      {errors.email && errors.email.type !== 'required' && <span>{errors.email.message}</span>}
      <Input
        {...register('password', {
          required: true,
          pattern: {
            value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z0-9]{8,}$/,
            message:
              'Password must be at least 8 characters long, containing at least one uppercase letter, one lowercase letter, and one number.',
          },
        })}
        placeholder="Password"
        type="password"
        isError={!!errors.password}
      />
      {errors.password && errors.password.type !== 'required' && <span>{errors.password.message}</span>}
      <Link to={Paths.SIGNIN} fontSize="s" color={800}>
        Use email
      </Link>
      <Text fontWeight={700} fontSize="s" fontFamily="secondary">
        Date of birth
      </Text>
      <Text fontSize="xs" lineHeight="m">
        Facilisi sem pulvinar velit nunc, gravida scelerisque amet nibh sit. Quis bibendum ante phasellus metus, magna
        lacinia sed augue. Odio enim nascetur leo mauris vel eget. Pretium id ullamcorper blandit viverra dignissim eget
        tellus. Nibh mi massa in molestie a sit. Elit congue.
      </Text>
      <SelectsContainer>
        <Controller
          name="month"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <Select
              placeholder="Month"
              options={Months}
              value={field.value}
              onChange={field.onChange}
              isError={!!errors.month}
            />
          )}
        />
        <Controller
          name="day"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <Select
              placeholder="Day"
              options={Days}
              value={field.value}
              onChange={field.onChange}
              isError={!!errors.day}
            />
          )}
        />
        <Controller
          name="year"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <Select
              placeholder="Year"
              options={Years}
              value={field.value}
              onChange={field.onChange}
              isError={!!errors.year}
            />
          )}
        />
      </SelectsContainer>
      {errors && errors.day && <span>{errors.day.message}</span>}
      <PrimaryButton type="submit" disabled={isSubmitting}>
        {isSubmitting ? <Loader /> : 'Register'}
      </PrimaryButton>
    </RegistrationForm>
  );
};
