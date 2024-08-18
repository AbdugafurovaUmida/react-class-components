import { formsReducer } from '../store/slices/formSlice';
import { countriesReducer } from '../store/slices/countrySlices';

export interface StateSchema {
  forms: typeof formsReducer;
  countries: typeof countriesReducer;
}
