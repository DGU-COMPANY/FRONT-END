import * as yup from 'yup'

export const schema = yup.object({
  email: yup
    .string()
    .required('Email is required!')
    .email('Email invalidate!')
    .min(5, 'Length from 5-160 characters!')
    .max(160, 'Length from 5-160 characters!'),

  password: yup
    .string()
    .required('Password is required!')
    .min(6, 'Length from 6-100 characters!')
    .max(100, 'Length from 6-100 characters!'),
  confirm_password: yup
    .string()
    .required('Re-entering password is required!')
    .min(6, 'Length from 6-100 characters!')
    .max(100, 'Length from 6-100 characters!')
    .oneOf([yup.ref('password!')], 'Password does not match!'),
  birthday: yup.string().required('Birthday is required!'),
  gender: yup.number().required('Gender is required!'),
  fullName: yup
    .string()
    .required('FullName is required!')
    .min(4, 'Length from 4-50 characters!')
    .max(50, 'Length from 4-50 characters!'),
})

export type Schema = yup.InferType<typeof schema>
