"use client";

import { ToastContainer, toast } from "react-toastify";
import { useEffect, useState } from "react";

import { currencyFormat } from "@/utils/formatValues";
import { useCreateTransaction } from "@/hooks/useTransaction";
import { useUsers } from "@/hooks/useUsers";

export function CardNewTransaction() {
  const [valueTransaction, setValueTransaction] = useState("");
  const [selectedTransactionType, setSelectedTransactionType] = useState("");
  const { data: user, error } = useUsers();
  const { mutate } = useCreateTransaction();

  useEffect(() => {
    if (!user?.id || error) {
      toast.error("Erro ao carregar os dados do usuário");
    }
  },[error, user?.id]);

  const handleChangeTransactionType = (value: string) => {
    setSelectedTransactionType(value);
  };

  const handleChange = (value: string) => {
    const numericValue = value.replace(/\D/g, "");
    const number = Number(numericValue) / 100 || 0;

    setValueTransaction(currencyFormat(number));
  };

  const handleCreatTransacion = () => {
    mutate(
      {
        date: new Date(),
        userId: user?.id,
        transactionType: selectedTransactionType,
        valueTransaction: valueTransaction,
      },
      {
        onError: () => {
          toast.error("Erro ao inserir transação");
        },
      }
    );

    setValueTransaction("");
    setSelectedTransactionType("");
  };

  const handleCancel = () => {
    setValueTransaction("");
    setSelectedTransactionType("");
  };

  return (
    <>
      <div className="w-full bg-gray-color-purple p-5 rounded-xl color-text-gray flex flex-col gap-5">
        <span className="text-xl font-medium">Nova transação</span>
        <div className="relative inline-block w-full">
          <select
            className="border-gray-400 border-[0.5px] rounded-[5px] p-2 appearance-none w-full"
            value={selectedTransactionType}
            onChange={({ target }) => handleChangeTransactionType(target.value)}
          >
            <option value="" disabled>
              Selecione o tipo de transação
            </option>
            <option value="pix">Pix</option>
            <option value="exchange">Câmbio de Moeda</option>
            <option value="doc-ted">DOC/TED</option>
            <option value="loan">Empréstimo e Financiamento</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-600">
            <i className="ri-arrow-drop-down-fill text-2xl" />
          </div>
        </div>
        <div>
          <input
            onChange={({ target }) => handleChange(target.value)}
            value={valueTransaction}
            placeholder="Valor"
            className="border-gray-400 border-[0.5px] rounded-[5px] p-2 w-full"
          />
        </div>
        <div className="flex gap-2 justify-end">
          <button
            className="bg-[#E1E3EF] cursor-pointer color-text-gray border-2 border-[#cdced4] py-2 p-3 rounded-[8px] font-semibold text-sm"
            onClick={handleCancel}
          >
            Cancelar
          </button>
          <button
            className="bg-[#2E335B] cursor-pointer text-[#E1E3EF] border-2 border-[#2E335B] py-2 p-3 rounded-[8px] font-semibold text-sm"
            onClick={handleCreatTransacion}
          >
            Confirmar
          </button>
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
  );
}
