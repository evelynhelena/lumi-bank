
'use client';

import { useTransaction } from "@/hooks/useTransaction";
import { formatDateTime } from "@/utils/formatValues";
import { translateTransactionType } from "@/utils/traslateTransactionType";

export default function CardTransaction() {

    const { data: transactions, error, isLoading: isLoadingTransactionData } = useTransaction();

    if (isLoadingTransactionData) {
        return <div>Carregando...</div>;
    }

    if (error) {
        return <div>Erro ao carregar os dados da transação: {error.message}</div>;
    }


    return (
        <div className="w-full bg-[#F5F5F5] p-5 rounded-xl text-[#2E335B] flex flex-col gap-5 max-h-[465px] overflow-auto">

            {transactions?.map(transaction => (
                <div key={transaction.id}>
                    <div>
                        <div>
                            <span className={`text-sm font-medium`}>{formatDateTime(new Date(transaction?.date || ''))}</span>
                        </div>
                        <div className="flex justify-between items-end">
                            <span>{translateTransactionType(transaction.transactionType)}</span>

                            <div className="flex flex-col text-end">
                                <span className="font-bold text-sm">{transaction.valueTransaction}</span>
                            </div>
                        </div>
                    </div>
                    <hr />
                </div>
            ))}



        </div>
    )
}