import { useMutation, useQuery } from '@tanstack/react-query';

import api from '@/api/api';
import { queryClient } from '@/lib/react-query-client';
import { reactQueryKeys } from '@/utils/reactQueryKeys';

export interface Transaction {
  id?: string;
  date?: Date;
  userId?: number;
  transactionType: string;
  valueTransaction: string;
}

async function createTransaction(transaction: Transaction): Promise<Transaction> {
  const res = await api.post('/transactions', transaction);
  return res.data;
}

async function editTransaction(transaction: Transaction): Promise<Transaction> {
  const res = await api.put(`/transactions/${transaction.id}`, transaction);
  return res.data;
}

async function deleteTransaction(id?: string){
  const res = await api.delete(`/transactions/${id}`, );
  return res.data;
}

async function fetchTransactions(): Promise<Transaction[]> {
  const res = await api.get('/transactions?userId=1');
  const sorted = res.data.sort((a: Transaction, b: Transaction) =>
    new Date(b.date || '').getTime() - new Date(a.date || '').getTime()
  );
  return sorted;
}

export function useEditTransaction() {
  return useMutation<Transaction, Error, Transaction>({
    mutationFn: editTransaction,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [reactQueryKeys.GET_TRANSACTIONS] });
    },
  });
}

export function useCreateTransaction() {
  return useMutation<Transaction, Error, Transaction>({
    mutationFn: createTransaction,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [reactQueryKeys.GET_TRANSACTIONS] });
    },
  });
}

export function useDeleteTransaction() {
  return useMutation<string,Error,string>({
    mutationFn: (id?:string) => deleteTransaction(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [reactQueryKeys.GET_TRANSACTIONS] });
    },
  });
}

export function useTransaction() {
  return useQuery<Transaction[], Error>({
    queryKey: [reactQueryKeys.GET_TRANSACTIONS],
    queryFn: fetchTransactions,
  });
}