import { FC } from 'react';
import { Controller } from 'react-hook-form';

import { FormSelectPropsType } from '@components/Forms/SignUp/components/FormSelect/types';
import { Select } from '@components/Select';

export const FormSelect: FC<FormSelectPropsType> = ({ name, placeholder, options, control, errors }) => (
  <Controller
    name={name}
    control={control}
    render={({ field }) => (
      <Select
        placeholder={placeholder}
        options={options}
        value={field.value}
        onChange={field.onChange}
        isError={!!errors[name]}
      />
    )}
  />
);
