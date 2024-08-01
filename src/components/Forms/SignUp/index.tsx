import { Controller } from 'react-hook-form';

import { RegistrationForm, RegistrationLogo, SelectsContainer } from '@components/Forms/SignUp/styled';
import { Select } from '@components/Select';
import { Days, Months, Years } from '@constants/date';
import { Paths } from '@constants/paths';
import { useSignUp } from '@hooks/useSignUp';
import { PrimaryButton } from '@styled/components/button/styled';
import { Input } from '@styled/components/input/styled';
import { Link } from '@styled/components/link/styled';
import { Loader } from '@styled/components/loader/styled';
import { TwitterLogo } from '@styled/components/logo/styled';
import { ErrorText, Text } from '@styled/components/typography/styled';

export const SignUp = () => {
  const { register, control, handleSubmit, errors, isSubmitting } = useSignUp();

  return (
    <RegistrationForm onSubmit={handleSubmit}>
      <TwitterLogo margin="xxxs" width="w40" height="w38" align="auto" />
      <RegistrationLogo>Create an account</RegistrationLogo>
      <Input {...register('name')} placeholder="Name" isError={!!errors.name} />
      {errors.name && errors.name.type !== 'required' && <ErrorText>{errors.name.message}</ErrorText>}
      <Input {...register('phoneNumber')} placeholder="Phone number" isError={!!errors.phoneNumber} />
      {errors.phoneNumber && errors.phoneNumber.type !== 'required' && (
        <ErrorText>{errors.phoneNumber.message}</ErrorText>
      )}
      <Input {...register('email')} placeholder="Email" type="email" isError={!!errors.email} />
      {errors.email && errors.email.type !== 'required' && <ErrorText>{errors.email.message}</ErrorText>}
      <Input {...register('password')} placeholder="Password" type="password" isError={!!errors.password} />
      {errors.password && errors.password.type !== 'required' && <ErrorText>{errors.password.message}</ErrorText>}
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
      {errors.day && errors.day.type !== 'required' && <ErrorText>{errors.day.message}</ErrorText>}
      <PrimaryButton type="submit" disabled={isSubmitting}>
        {isSubmitting ? <Loader /> : 'Register'}
      </PrimaryButton>
    </RegistrationForm>
  );
};
