import { RootState } from '../../store/store';
import { CountryState } from '../../store/slices/countrySlices';

export const getCountries = (state: RootState): CountryState => {
  return state.countries;
};
