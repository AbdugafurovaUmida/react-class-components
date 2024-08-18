import { ConvertedFormInputs } from '../../types/formTypes';
import { RootState } from '../../store/store';
import { Identificator } from '../../store/slices/formSlice';

export const getControllForm = (state: RootState): ConvertedFormInputs[] => {
  return state.forms.controllForm;
};

export const getUnControllForm = (state: RootState): ConvertedFormInputs[] => {
  return state.forms.unControlledForm;
};

export const getFormsIdentificator = (state: RootState): Identificator | null => {
  return state.forms.lastFormId;
};
