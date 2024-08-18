import { combineReducers } from '@reduxjs/toolkit';
import { StateSchema } from './stateSchema';
import { formsReducer } from '../store/slices/formSlice';
import { countriesReducer } from '../store/slices/countrySlices';

export const rootReducer = combineReducers<StateSchema>({
  forms: formsReducer,
  countries: countriesReducer,
});
