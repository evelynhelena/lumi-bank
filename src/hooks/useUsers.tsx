import api from '@/api/api';
import { reactQueryKeys } from '@/utils/reactQueryKeys';
import { useQuery } from '@tanstack/react-query';

interface User {
  userId: number;
  name: string;
  urlAvatar: string;
}

async function fetchUsers(): Promise<User> {
  const res = await api.get('/users?userId=1');
  return res.data[0];
}

export function useUsers() {
  return useQuery<User, Error>({
    queryKey: [reactQueryKeys.GET_USER_BY_ID],
    queryFn: fetchUsers,
  });
}