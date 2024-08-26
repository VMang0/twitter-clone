import { FormField } from '@components/Forms/SignUp/components/FormField';
import { FormSelect } from '@components/Forms/SignUp/components/FormSelect';
import { RegistrationForm, RegistrationLogo, SelectsContainer } from '@components/Forms/SignUp/styled';
import { Days, Months, Years } from '@constants/date';
import { Paths } from '@constants/paths';
import { useSignUp } from '@hooks/useSignUp';
import { PrimaryButton } from '@styled/components/button/styled';
import { Link } from '@styled/components/link/styled';
import { Loader } from '@styled/components/loader/styled';
import { TwitterLogo } from '@styled/components/logo/styled';
import { ErrorText, Text } from '@styled/components/typography/styled';

export const SignUp = () => {
  const { register, control, handleSubmit, errors, isSubmitting } = useSignUp();

  const dayError = errors.day && errors.day.type !== 'required';

  return (
    <RegistrationForm onSubmit={handleSubmit}>
      <TwitterLogo margin="xxxs" width="w40" height="w38" align="auto" />
      <RegistrationLogo>Create an account</RegistrationLogo>
      <FormField name="name" placeholder="Name" register={register} errors={errors} />
      <FormField name="phoneNumber" placeholder="Phone number" register={register} errors={errors} />
      <FormField name="email" placeholder="Email" type="email" register={register} errors={errors} />
      <FormField name="password" placeholder="Password" type="password" register={register} errors={errors} />
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
        <FormSelect name="month" placeholder="Month" options={Months} control={control} errors={errors} />
        <FormSelect name="day" placeholder="Day" options={Days} control={control} errors={errors} />
        <FormSelect name="year" placeholder="Year" options={Years} control={control} errors={errors} />
      </SelectsContainer>
      {dayError && <ErrorText>{errors?.day?.message}</ErrorText>}
      <PrimaryButton type="submit" disabled={isSubmitting}>
        {isSubmitting ? <Loader /> : 'Register'}
      </PrimaryButton>
    </RegistrationForm>
  );
};
