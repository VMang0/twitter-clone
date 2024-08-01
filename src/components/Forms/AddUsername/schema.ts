import { object, string } from 'yup';

export const addUsernameSchema = object().shape({
  username: string()
    .required('Username is required')
    .matches(/^[A-Za-zА-Яа-я\s]+$/, 'Username can only contain Latin and Russian letters.'),
});
