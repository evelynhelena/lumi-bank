"use client";

import { ToastContainer, toast } from "react-toastify";

import { currencyFormat, formatDateTime } from "@/utils/formatValues";
import { translateTransactionType } from "@/utils/traslateTransactionType";
import { useEffect } from "react";
import { useTransaction } from "@/hooks/useTransaction";

export default function CardTransaction() {
  const {
    data: transactions,
    error,
    isLoading: isLoadingTransactionData,
  } = useTransaction();

  useEffect(() => {
    if (error) {
      toast.error("Erro ao carregar transação");
    }
  },[error]);

  return (
    <>
      <div className="w-full bg-gray-color-purple p-5 rounded-xl color-text-gray flex flex-col gap-5 max-h-[485px] overflow-auto">
        {isLoadingTransactionData ? (
          <div>Carregando...</div>
        ) : (
          transactions?.map((transaction) => (
            <div key={transaction.id}>
              <div className="mb-2.5">
                <div>
                  <span className={`text-sm font-medium`}>
                    {formatDateTime(new Date(transaction?.date || ""))}
                  </span>
                </div>
                <div className="flex justify-between items-end">
                  <span>
                    {translateTransactionType(transaction.transactionType)}
                  </span>

                  <div className="flex flex-col text-end">
                    <span className="font-bold text-sm">
                      {currencyFormat(parseFloat(transaction.valueTransaction))}
                    </span>
                  </div>
                </div>
              </div>
              <hr />
            </div>
          ))
        )}
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
