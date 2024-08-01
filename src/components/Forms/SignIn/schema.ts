import { object, string } from 'yup';

export const signInSchema = object().shape({
  phoneOrEmail: string().required(''),
  password: string().required(''),
});
