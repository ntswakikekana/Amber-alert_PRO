import { createSlice } from '@reduxjs/toolkit';
import { registerUserAction, loginUserAction } from './authActions.js';

const initialState = {
  user: null,
  loading: false,
  error: null,
  success: false,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerUserAction.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(registerUserAction.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
      })
      .addCase(registerUserAction.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.error || 'Registration failed';
        state.success = false;
      })
      .addCase(loginUserAction.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(loginUserAction.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.success = true;
      })
      .addCase(loginUserAction.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.error || 'Login failed';
        state.success = false;
      })
  }
})

export default authSlice.reducer;
