"use client";

import { ToastContainer, toast } from "react-toastify";
import { Transaction, useDeleteTransaction, useTransaction } from "@/hooks/useTransaction";
import { useEffect, useState } from "react";

import { ModalEditTransaction } from "@/components/ModalEditTransaction";
import { formatDateTime } from "@/utils/formatValues";
import { translateTransactionType } from "@/utils/traslateTransactionType";

export default function TransactionPage() {
  const [showModal, setShowModal] = useState(false);
  const [transactionByID,setTransactionByID] = useState<Transaction>();
  const {
    data: transactions,
    error,
    isLoading: isLoadingTransactionData,
  } = useTransaction();

  const { mutate: deleteTransaction } = useDeleteTransaction();

  const handleDeleteTransaction = (id?: string) => {
    deleteTransaction(id || "");
  };

  const handleEditTransaction = async (transactionByID: Transaction) => {
    setTransactionByID(transactionByID);
    setShowModal(true);
  };

  useEffect(() => {
    if (error) {
      toast.error("Erro ao carregar transação");
    }
  },[error]);

  return (
    <>
      <div className="w-full bg-gray-color-purple p-5 rounded-xl color-text-gray flex flex-col gap-5 overflow-auto mt-27">
        {isLoadingTransactionData ? (
          <div>Carregando...</div>
        ) : (
          <>
            <div className="color-text-gray text-xl">Transações</div>
            {transactions?.map((transaction) => (
              <div key={transaction.id}>
                <div className="mb-5">
                  <div className="mb-2.5 flex justify-between">
                    <span className="text-sm font-medium">
                      {formatDateTime(new Date(transaction?.date || ""))}
                    </span>
                    <div className="flex gap-2.5">
                      <i className="ri-pencil-line text-2xl cursor-pointer color-text-gray"  
                      onClick={() => handleEditTransaction(transaction)}/>
                      <i
                        className="ri-delete-bin-6-line text-2xl cursor-pointer color-text-gray"
                        onClick={() => handleDeleteTransaction(transaction.id)}
                      />
                    </div>
                  </div>
                  <div className="flex justify-between items-end mt-7">
                    <span className="text-xl">
                      {translateTransactionType(transaction.transactionType)}
                    </span>

                    <div className="flex flex-col text-end">
                      <span className="font-bold text-xl">
                        {transaction.valueTransaction}
                      </span>
                    </div>
                  </div>
                </div>
                <hr />
              </div>
            ))}
          </>
        )}
      </div>
      {showModal && <ModalEditTransaction setShowModal={setShowModal} transaction={transactionByID}/>}
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
