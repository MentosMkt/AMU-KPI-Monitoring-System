import axios from 'axios';

const authClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || '',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const login = async ({ email, password }) => {
  const response = await authClient.post('/auth/login', { email, password });
  return response.data;
};

export const fetchCurrentUser = async () => {
  const response = await authClient.get('/auth/me');
  return response.data;
};
