"use client";

import { ToastContainer, toast } from "react-toastify";
import { Transaction, useEditTransaction } from "@/hooks/useTransaction";
import { useEffect, useState } from "react";

import { currencyFormat } from "@/utils/formatValues";
import { useUsers } from "@/hooks/useUsers";

interface ModalEditTransactionProps{
    setShowModal: (value:boolean) => void;
    transaction?: Transaction
}

export function ModalEditTransaction({setShowModal,transaction}:ModalEditTransactionProps) {
  const [valueTransaction, setValueTransaction] = useState(transaction?.valueTransaction || "");
  const [selectedTransactionType, setSelectedTransactionType] = useState(transaction?.transactionType || "");
  const { data: user, error } = useUsers();
  const { mutate } = useEditTransaction();

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
        id: transaction?.id,
        date: transaction?.date,
        userId: user?.id,
        transactionType: selectedTransactionType,
        valueTransaction: valueTransaction,
      },
      {
        onError: () => {
          toast.error("Erro ao editar transação");
        },
      }
    );

    setValueTransaction("");
    setSelectedTransactionType("");
    setShowModal(false);
  };

  return (
    <>
    <div className="w-[100vw] h-[100vh] fixed top-0 left-0 flex justify-center items-center bg-black/50">
      <div className="w-[500px] bg-gray-color-purple p-5 rounded-xl color-text-gray flex flex-col gap-5 pointer-none">
        <div className="flex justify-between items-center">
            <span className="text-xl font-medium">Editar transação</span>
            <i className="ri-close-circle-line text-2xl cursor-pointer" onClick={() => setShowModal(false)}/>
        </div>
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
            onClick={() => setShowModal(false)}
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
