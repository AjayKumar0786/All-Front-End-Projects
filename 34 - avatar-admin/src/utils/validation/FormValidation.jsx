import * as yup from 'yup';

const validateLogin = yup.object({
  email: yup
    .string()
    .required('Email is required.')
    .email('Please enter a valid email address.'),
  password: yup
    .string()
    .required('Password is required.')
    .min(5, 'Password must be at least 5 characters'),
});

export { validateLogin };
