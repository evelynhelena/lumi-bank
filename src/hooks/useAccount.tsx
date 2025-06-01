import api from '@/api/api';
import { reactQueryKeys } from '@/utils/reactQueryKeys';
import { useQuery } from '@tanstack/react-query';

export interface AccountProps{
  userId: number;
  accountType: string;
  balance: string;
}

async function fetchAccount(userId: number): Promise<AccountProps> {
  const res = await api.get(`/accounts?userId=${userId}`);
  return res.data[0];
}

export function useAccount(userId: number) {
  return useQuery<AccountProps, Error>({
    queryKey: [reactQueryKeys.GET_ACCOUNT_BY_USER_ID],
    queryFn: () => fetchAccount(userId),
  });
}