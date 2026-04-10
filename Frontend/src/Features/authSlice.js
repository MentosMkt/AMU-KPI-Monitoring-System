import { createSlice } from '@reduxjs/toolkit';

const getAuthFromStorage = () => {
  if (typeof window === 'undefined') return null;

  try {
    const stored = localStorage.getItem('auth');
    return stored ? JSON.parse(stored) : null;
  } catch {
    return null;
  }
};

const persistedAuth = getAuthFromStorage();

const initialState = persistedAuth || {
  user: null,
  token: null,
  status: 'idle',
  error: null,
  isAuthenticated: true,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials(state, action) {
      const { user, token } = action.payload;
      state.user = user;
      state.token = token;
      state.status = 'succeeded';
      state.error = null;
    },
    logout(state) {
      state.user = null;
      state.token = null;
      state.status = 'idle';
      state.error = null;
      if (typeof window !== 'undefined') {
        localStorage.removeItem('auth');
      }
    },
    setUser(state, action) {
      state.user = action.payload;
    },
    setAuthError(state, action) {
      state.error = action.payload;
      state.status = 'failed';
    },
  },
});

export const { setCredentials, logout, setUser, setAuthError } = authSlice.actions;

export default authSlice.reducer;
