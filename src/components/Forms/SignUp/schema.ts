import { object, string } from 'yup';

export const signUpSchema = object().shape({
  name: string()
    .required('Name is required')
    .matches(/^[A-Za-zА-Яа-я\s]+$/, 'Name can only contain Latin and Russian letters.'),
  phoneNumber: string()
    .required('Phone number is required')
    .matches(/^\+?\d{10,15}$/, 'Invalid phone number. Example: +375447339153'),
  email: string().required('Email is required').email('Invalid email.'),
  password: string()
    .required('Password is required')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z0-9]{8,}$/,
      'Password must be at least 8 characters long, containing at least one uppercase letter, one lowercase letter, and one number.',
    ),
  month: string().required(''),
  day: string().required(''),
  year: string().required(''),
});
