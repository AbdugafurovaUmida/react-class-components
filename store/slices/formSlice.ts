import { createSlice } from '@reduxjs/toolkit';

interface FormData {
  name: string;
  age: number;
  email: string;
  password: string;
  gender: string;
  termsAccepted: boolean;
  picture: string;
  country: string;
}

interface FormState {
  controlledFormData: FormData | null;
  uncontrolledFormData: FormData | null;
}

const initialState: FormState = {
  controlledFormData: null,
  uncontrolledFormData: null,
};

const formSlice = createSlice({
  name: 'forms',
  initialState,
  reducers: {
    submitControlledForm: (state, action) => {
      state.controlledFormData = action.payload;
    },
    submitUncontrolledForm: (state, action) => {
      state.uncontrolledFormData = action.payload;
    },
  },
});

export const { submitControlledForm, submitUncontrolledForm } = formSlice.actions;
export default formSlice.reducer;
