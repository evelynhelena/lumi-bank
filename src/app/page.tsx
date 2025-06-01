'use client';

import CardBalance from "@/components/CardBalance";
import { CardNewTransaction } from "@/components/CardNewTransaction";
import CardTransaction from "@/components/CardTransaction";
import { useUsers } from "@/hooks/useUsers";

export default function Home() {

  const { data: user, error, isLoading: isLoadingUserData } = useUsers();

  if (isLoadingUserData) {
    return <div>Carregando...</div>;
  }

  if (error) {
    return <div>Erro ao carregar os posts: {error.message}</div>;
  }

  return (
    <>
      <div className="mt-27">
        <span className="text-[#2E335B] text-3xl">Olá, {user?.name}</span>
      </div>

      <div className="flex gap-9 flex-col md:flex-row items-start mt-8">
        <div className="w-full flex flex-col gap-12">
          {!user?.userId ? <div>ID do usuário não encontrado</div> : <CardBalance userId={user.userId}/>}
          <CardNewTransaction />
        </div>
        <div className="w-full">
          <CardTransaction />
        </div>
      </div>
    </>
  );
}
