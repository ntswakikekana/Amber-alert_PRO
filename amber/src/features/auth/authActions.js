import { registerUser, loginUser } from '../../api/apiService.js';
import { createAsyncThunk } from '@reduxjs/toolkit';


export const registerUserAction = createAsyncThunk(
  'auth/registerUser',
  async (userData, { rejectWithValue }) => {
    try {
      const response = await registerUser(userData);
      return response;
    } catch (error) {
      return rejectWithValue({ error: error.message });
    }
  }
);

export const loginUserAction = createAsyncThunk(
  'auth/loginUser',
  async (userData, { rejectWithValue }) => {
    try {
      const response = await loginUser(userData);
      return response;
    } catch (error) {
      return rejectWithValue({ error: error.message });
    }
  }
);
