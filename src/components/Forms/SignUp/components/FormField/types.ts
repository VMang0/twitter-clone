import { FieldErrors, UseFormRegister } from 'react-hook-form';

import { SignUpFormType } from '@components/Forms/SignUp/types';

export type FormFieldPropsType = {
  name: keyof SignUpFormType;
  placeholder: string;
  type?: string;
  register: UseFormRegister<SignUpFormType>;
  errors: FieldErrors<SignUpFormType>;
};
