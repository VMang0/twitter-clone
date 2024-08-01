import { object, string } from 'yup';

export const editProfileInfoSchema = object().shape({
  phoneNumber: string()
    .required('Phone number is required')
    .matches(/^\+?\d{10,15}$/, 'Invalid phone number. Example: +375447339153'),
  name: string()
    .required('Name is required')
    .matches(/^[A-Za-zА-Яа-я\s]+$/, 'Name can only contain Latin and Russian letters.'),
  username: string()
    .required('Username is required')
    .matches(/^[A-Za-zА-Яа-я\s]+$/, 'Username can only contain Latin and Russian letters.'),
  description: string().nullable(),
  image: string().nullable(),
});
