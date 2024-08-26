import { Control, FieldErrors } from 'react-hook-form';

import { SignUpFormType } from '@components/Forms/SignUp/types';
import { OptionType } from '@components/Select/types';

export type FormSelectPropsType = {
  name: keyof SignUpFormType;
  placeholder: string;
  options: OptionType[];
  control: Control<SignUpFormType>;
  errors: FieldErrors<SignUpFormType>;
};
