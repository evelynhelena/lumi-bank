import api from '@/api/api';
import { reactQueryKeys } from '@/utils/reactQueryKeys';
import { useQuery } from '@tanstack/react-query';

interface User {
  id: number;
  name: string;
  urlAvatar: string;
}

async function fetchUsers(): Promise<User> {
  const res = await api.get('/users/1');
  return res.data;
}

export function useUsers() {
  return useQuery<User, Error>({
    queryKey: [reactQueryKeys.GET_USER_BY_ID],
    queryFn: fetchUsers,
  });
}