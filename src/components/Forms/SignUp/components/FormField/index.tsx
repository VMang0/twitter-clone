import { FC } from 'react';

import { FormFieldPropsType } from '@components/Forms/SignUp/components/FormField/types';
import { Input } from '@styled/components/input/styled';
import { ErrorText } from '@styled/components/typography/styled';

export const FormField: FC<FormFieldPropsType> = ({ name, placeholder, type = 'text', register, errors }) => {
  const error = errors[name] && errors[name]?.type !== 'required';

  return (
    <>
      <Input {...register(name)} placeholder={placeholder} type={type} isError={!!errors[name]} />
      {error && <ErrorText>{errors[name]?.message}</ErrorText>}
    </>
  );
};
