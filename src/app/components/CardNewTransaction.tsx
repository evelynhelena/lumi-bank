
'use client';

import { useState } from "react";
import { currencyFormat } from "../utils/formatValues";
//import { currencyFormat } from "../utils/formatValues";

export function CardNewTransaction() {
    const [valueTransaction, setValueTransaction] = useState("");


    const handleChange = (value: string) => {
        const numericValue = value.replace(/\D/g, "");
        const number = Number(numericValue) / 100 || 0;

        setValueTransaction(currencyFormat(number));
    };



    return (
        <div className="w-full bg-[#F5F5F5] p-5 rounded-xl text-[#2E335B] flex flex-col gap-5">
            <span className="text-xl font-medium">Nova transação</span>
            <div className="relative inline-block w-full">

                <select className="border-gray-400 border-[0.5px] rounded-[5px] p-2 appearance-none w-full">
                    <option value="opcao1" disabled>Selecione o tipo de transação</option>
                    <option value="opcao2">Pix</option>
                    <option value="opcao3">Câmbio de Moeda</option>
                    <option value="opcao4">DOC/TED</option>
                    <option value="opcao5">Empréstimo e Financiamento</option>
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
                    className=" border-gray-400 border-[0.5px] rounded-[5px] p-2 w-full"
                />
            </div>
            <div className="flex gap-2 justify-end">
                <button className="bg-[#E1E3EF] cursor-pointer text-[#2E335B] border-2 border-[#cdced4] py-2 p-3 rounded-[8px] font-semibold text-sm">Cancelar</button>
                <button className="bg-[#2E335B] cursor-pointer text-[#E1E3EF] border-2 border-[#2E335B] py-2 p-3 rounded-[8px] font-semibold text-sm">Confirmar</button>
            </div>
        </div>
    )
}