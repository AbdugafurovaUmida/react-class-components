import { FC, useRef, useState } from 'react';
import * as yup from 'yup';
import { useAppSelector } from '../../../hooks/useAppSelector';
import { useAppDispatch } from '../../../hooks/useAppDispatch';
import { useNavigate } from 'react-router-dom';
import { schema } from '../../../utils/validation/validationSchema';
import { getCountries } from '../../../utils/countries/getCountries';
import { addFUnControllForm } from '../../../store/slices/formSlice';
import { Errors, FormInputs } from '../../../types/formTypes';
import { imageToBase64 } from '../../../utils/imageToBase/imageToBase';
import './UnControlledForm.css';

export const UnControlledForm: FC = () => {
  const dispatch = useAppDispatch();
  const { countries } = useAppSelector(getCountries);
  const navigate = useNavigate();

  const nameRef = useRef<HTMLInputElement>(null);
  const ageRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const confirmRef = useRef<HTMLInputElement>(null);
  const maleRef = useRef<HTMLInputElement>(null);
  const femaleRef = useRef<HTMLInputElement>(null);
  const termsRef = useRef<HTMLInputElement>(null);
  const fileRef = useRef<HTMLInputElement>(null);
  const countryRef = useRef<HTMLInputElement>(null);

  const [errors, setErrors] = useState<Errors>({});
  //eslint-disable-next-line
  const [_, setPassword] = useState<string>('');

  const onSubmitHandler = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    const formData: FormInputs = {
      name: nameRef.current?.value || '',
      age: Number(ageRef.current?.value) || 0,
      email: emailRef.current?.value || '',
      password: passwordRef.current?.value || '',
      confirm: confirmRef.current?.value || '',
      gender: maleRef.current?.checked ? 'male' : femaleRef.current?.checked ? 'female' : '',
      terms: termsRef.current?.checked || false,
      file: fileRef.current?.files || ({} as FileList),
      country: countryRef.current?.value || '',
    };

    try {
      await schema.validate(formData, { abortEarly: false });
      setErrors({});
      const imageBase64 = await imageToBase64(formData.file[0]);
      const convertedData = { ...formData, file: imageBase64 };
      dispatch(addFUnControllForm(convertedData));
      navigate(`/`);
    } catch (validationErrors) {
      if (validationErrors instanceof yup.ValidationError) {
        const newErrors: Errors = {};
        validationErrors.inner.forEach(error => {
          if (error.path) {
            newErrors[error.path] = error.message;
          }
        });
        setErrors(newErrors);
      } else {
        console.error('Unexpected error:', validationErrors);
      }
    }
  };

  return (
    <form className="uncontrolled-wrapper" onSubmit={onSubmitHandler}>
      <h1 className="uncontrolled-title">Uncontrolled Form</h1>
      <div className="input-field ">
        <label htmlFor="name">Name</label>
        <input ref={nameRef} className="usual-field" id="name" type="text" />
        <p className="errors">{errors.name}</p>
      </div>
      <div className="input-field ">
        <label htmlFor="age">Age</label>
        <input ref={ageRef} className="usual-field" id="age" type="number" />
        <p className="errors">{errors.age}</p>
      </div>
      <div className="input-field ">
        <label htmlFor="email">Email</label>
        <input ref={emailRef} className="usual-field" id="email" type="text" />
        <p className="errors">{errors.email}</p>
      </div>
      <div className="input-field ">
        <label htmlFor="password">Password</label>
        <input
          ref={passwordRef}
          className="usual-field"
          id="password"
          type="password"
          autoComplete="true"
          onChange={() => setPassword(passwordRef.current?.value || '')}
        />
        <p className="errors">{errors.password}</p>
      </div>
      <div className="input-field">
        <label htmlFor="confirm-password">Confirm Password</label>
        <input ref={confirmRef} className="usual-field" id="confirm-password" type="password" autoComplete="true" />
        <p className="errors">{errors.confirm}</p>
      </div>
      <div className="input-field ">
        <label>Gender</label>
        <div style={{ display: 'flex' }}>
          <label htmlFor="gender">Male</label>
          <input ref={maleRef} name="gender" id="male" type="radio" value="male" />
          <label htmlFor="femail">Female</label>
          <input ref={femaleRef} name="gender" id="femail" type="radio" value="female" />
        </div>
        <p className="errors">{errors.gender}</p>
      </div>
      <div className="input-field ">
        <label htmlFor="terms">
          <input ref={termsRef} name="terms" id="terms" type="checkbox" />I accept Terms and Conditions
        </label>
        <p className="errors">{errors.terms}</p>
      </div>
      <div className="input-field ">
        <label htmlFor="image">Upload picture</label>
        <input ref={fileRef} id="image" type="file" alt="image" />
        <p className="errors">{errors.file}</p>
      </div>
      <div className="input-field ">
        <label htmlFor="country">Country</label>
        <input ref={countryRef} className="usual-field" id="country" type="text" list="countries-list" />
        <p className="errors">{errors.country}</p>
      </div>
      <div className="input-field ">
        <datalist className="usual-field" id="countries-list">
          {countries.map(country => {
            return <option key={country}>{country}</option>;
          })}
        </datalist>
      </div>
      <button className="submit-btn" type="submit">
        Submit
      </button>
    </form>
  );
};
