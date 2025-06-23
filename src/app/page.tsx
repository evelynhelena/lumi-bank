"use client";

import { ToastContainer, toast } from "react-toastify";

import CardBalance from "@/components/CardBalance";
import { CardNewTransaction } from "@/components/CardNewTransaction";
import CardTransaction from "@/components/CardTransaction";
import { useEffect } from "react";
import { useUsers } from "@/hooks/useUsers";

export default function Home() {
  const { data: user, error, isLoading: isLoadingUserData } = useUsers();
  
  useEffect(() => {
    if (error) {
      toast.error("Erro ao carregar os dados do usuário");
    }
  },[error]);

  return (
    <>
      {isLoadingUserData ? (
        <div>Carregando...</div>
      ) : (
        <>
          <div className="mt-27">
            <span className="color-text-gray text-3xl">Olá, {user?.name}</span>
          </div>

          <div className="flex gap-9 flex-col md:flex-row items-start mt-8">
            <div className="w-full flex flex-col gap-12">
              {!user?.id ? (
                <div>ID do usuário não encontrado</div>
              ) : (
                <CardBalance userId={user.id} />
              )}
              <CardNewTransaction />
            </div>
            <div className="w-full">
              <CardTransaction />
            </div>
          </div>
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
        </>
      )}
    </>
  );
}
