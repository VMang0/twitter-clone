import { RemoveTweetContainer } from '@components/Forms/RemoveTweet/styled';
import { useAddUsername } from '@hooks/useAddUsername';
import { PrimaryButton } from '@styled/components/button/styled';
import { Input } from '@styled/components/input/styled';
import { Loader } from '@styled/components/loader/styled';
import { ErrorText, Text } from '@styled/components/typography/styled';

export const AddUsername = () => {
  const { handleSubmit, isSubmitting, errors, register } = useAddUsername();

  return (
    <RemoveTweetContainer onSubmit={handleSubmit}>
      <Text fontSize="m" mediumSize="m" smallSize="s">
        Add the user name that you will use in the application
      </Text>
      <Input {...register('username')} placeholder="Username" isError={!!errors.username} />
      {errors.username && <ErrorText>{errors.username.message}</ErrorText>}
      <PrimaryButton type="submit">{isSubmitting ? <Loader /> : 'Add'}</PrimaryButton>
    </RemoveTweetContainer>
  );
};
