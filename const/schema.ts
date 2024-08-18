import * as yup from 'yup';
import { imageData } from '../types/imageData';

export const schema = yup.object().shape({
  name: yup
    .string()
    .required('Name is required field')
    .min(1, 'Name should be min 1 characters')
    .max(50, 'This name is too long')
    .matches(/^[A-ZА-ЯЁ]{1}[a-zа-яёA-ZА-ЯЁ]+$/, 'Start from capital letter')
    .required(),
  age: yup.number().required().positive().integer(),
  email: yup.string().email().required('Email is required field'),
  password: yup
    .string()
    .required('Password is required field, enter your password.')
    .min(8, 'This password is too short, must be at least 8 characters long')
    .max(50, 'This password is too long')
    .matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{6,}$/,
      '1 number, 1 uppercased letter, 1 lowercased letter, 1 special character, 6 chars min',
    ),
  repeatPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'Wrong input of confirmation password,passwords must match')
    .required('This field is required'),
  sex: yup.string().required(),
  confirm: yup.boolean().oneOf([true], 'Do you agree?'),
  image: yup
    .mixed()
    .test(
      'fileSize and fileType',
      'Upload an image with the actual size and one of the allowed extensions: .jpeg, .jpg, and .png',
      value => {
        return (
          (value as imageData[])[0] &&
          (value as imageData[])[0].size >= 0 &&
          ((value as imageData[])[0].type === 'image/jpeg' || (value as imageData[])[0].type === 'image/png')
        );
      },
    ),
  country: yup.string().required(),
});
