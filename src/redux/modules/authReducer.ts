import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export type AuthState = Readonly<{
  token: string | null;
  refreshToken: string | null;
}>;

export const initialState: AuthState = {
  token: null,
  refreshToken: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    authSuccess(state, action: PayloadAction<any>) {
      console.log(action);
      state.token = action.payload.auth_token || null;
      state.refreshToken = action.payload.auth_token || null;
      //   state.refreshToken = action.payload.refresh_token || null;
    },
    authFailure() {
      return initialState;
    },

    logout() {
      return initialState;
    },
  },
});

const {actions, reducer} = authSlice;
export const {authSuccess, authFailure, logout} = actions;
export default reducer;
