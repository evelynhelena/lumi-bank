"use client";

import { ToastContainer, toast } from "react-toastify";
import { useEffect, useState } from "react";

import { useAccount } from "@/hooks/useAccount";

interface CardBalanceProps {
  userId: number;
}

export default function CardBalance({ userId }: CardBalanceProps) {
  const [showBalance, setShowBalance] = useState<boolean>(false);
  const { data: accountData, error: accountError } = useAccount(userId);

  useEffect(() => {
    if (accountError) {
      toast.error("Erro ao carregar os dados do usuário");
    }
  },[accountError]);

  const CircleBlance = () => {
    return (
      <div className="flex gap-1.5 items-center">
        R$
        <i className="ri-circle-fill text-xs" />
        <i className="ri-circle-fill text-xs " />
        <i className="ri-circle-fill text-xs" />
        <i className="ri-circle-fill text-xs" />
      </div>
    );
  };

  return (
    <>
      <div className="w-full max-h-56 bg-gray-color-purple p-5 rounded-xl color-text-gray flex flex-col gap-5 font-medium">
        <div className="flex items-start text-xl gap-1.5">
          <i className="ri-bank-fill text-xl color-text-purple" />
          <span>{accountData?.accountType}</span>
        </div>
        <span className="text-xl">Saldo</span>
        <div className="text-xl font-bold antialiased flex justify-between">
          {showBalance ? `R$ ${accountData?.balance}` : CircleBlance()}
          <i
            className={`${showBalance ? "ri-eye-line" : "ri-eye-off-line"} 
                    cursor-pointer`}
            onClick={() => setShowBalance(!showBalance)}
          />
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
      </div>
    </>
  );
}
