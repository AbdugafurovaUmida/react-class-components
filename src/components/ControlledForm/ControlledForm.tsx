import { FC } from 'react';
import { useForm } from 'react-hook-form';
import './ControlledForm.css';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from '../../../utils/validation/validationSchema';
import { FormInputs } from '../../../types/formTypes';
import { useAppDispatch } from '../../../hooks/useAppDispatch';
import { addFControllForm } from '../../../store/slices/formSlice';
import { useAppSelector } from '../../../hooks/useAppSelector';
import { getCountries } from '../../../utils/countries/getCountries';
import { useNavigate } from 'react-router-dom';
import { imageToBase64 } from '../../../utils/imageToBase/imageToBase';

export const ControlledForm: FC = () => {
  const dispatch = useAppDispatch();
  const { countries } = useAppSelector(getCountries);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm<FormInputs>({
    resolver: yupResolver(schema),
    mode: 'all',
    defaultValues: {
      gender: 'male', // Initial value for gender
    },
  });

  const onSubmitHandler = async (data: FormInputs) => {
    const imageBase64 = await imageToBase64(data.file[0]);
    const convertedData = { ...data, file: imageBase64 };

    dispatch(addFControllForm(convertedData));
    reset();
    navigate('/');
  };
  return (
    <form className="controlled-wrapper" onSubmit={handleSubmit(onSubmitHandler)}>
      <h1 className="controlled-title">Controlled Form</h1>
      <div className="input-field ">
        <label htmlFor="name">Name</label>
        <input {...register('name')} className="usual-field" id="name" type="text" />
        <p className="errors">{errors.name?.message}</p>
      </div>
      <div className="input-field ">
        <label htmlFor="age">Age</label>
        <input {...register('age')} className="usual-field" id="age" type="number" />
        <p className="errors">{errors.age?.message}</p>
      </div>
      <div className="input-field ">
        <label htmlFor="email">Email</label>
        <input {...register('email')} className="usual-field" id="email" type="text" />
        <p className="errors">{errors.email?.message}</p>
      </div>
      <div className="input-field ">
        <label htmlFor="password">Password</label>
        <input {...register('password')} className="usual-field" id="password" type="password" autoComplete="true" />
        <p className="errors">{errors.password?.message}</p>
      </div>
      <div className="input-field">
        <label htmlFor="confirm-password">Confirm Password</label>
        <input
          {...register('confirm')}
          className="usual-field"
          id="confirm-password"
          type="password"
          autoComplete="true"
        />
        <p className="errors">{errors.confirm?.message}</p>
      </div>
      <div className="input-field">
        <label>Gender</label>
        <div style={{ display: 'flex', marginBottom: '20px' }}>
          <label htmlFor="gender">Male</label>
          <input {...register('gender')} name="gender" id="male" type="radio" value="male" />
          <label htmlFor="femail">Female</label>
          <input {...register('gender')} name="gender" id="femail" type="radio" value="female" />
        </div>
        <p className="errors">{errors.gender?.message}</p>
      </div>
      <div className="input-field">
        <label htmlFor="terms" className="marginBottom">
          <input {...register('terms')} name="terms" id="terms" type="checkbox" />I accept Terms and Conditions
        </label>
        <p className="errors">{errors.terms?.message}</p>
      </div>
      <div className="input-field">
        <label htmlFor="image">Upload picture</label>
        <input {...register('file')} className="usual-field" id="image" type="file" alt="image" />
        <p className="errors">{errors.file?.message}</p>
      </div>
      <div className="input-field">
        <label htmlFor="country">Country</label>
        <input {...register('country')} className="usual-field" id="country" type="text" list="countries-list" />
        <p className="errors">{errors.country?.message}</p>
      </div>
      <div className="input-field">
        <datalist className="usual-field" id="countries-list">
          {countries.map(country => {
            return <option key={country}>{country}</option>;
          })}
        </datalist>
      </div>

      <button className="btn" type="submit" disabled={!isValid}>
        Submit
      </button>
    </form>
  );
};
