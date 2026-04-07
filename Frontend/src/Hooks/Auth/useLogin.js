import { useMutation, useQueryClient } from '@tanstack/react-query';

import { useDispatch } from 'react-redux';

import { api } from '../../api/axios';

export const useLogin = () => {
  const dispatch = useDispatch();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (credentials) => {
      const { UserName, password } = credentials;
      const { data } = await api.post('/auth/login', { UserName, password });
      return data;
    },

    onSuccess: (data) => {
      // Save token in Redux

      // Save user in React Query cache
      queryClient.setQueryData(['user'], data.user);
    },
  });
};
