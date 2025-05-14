"use client"
import Image from "next/image";
import LogoIcon from "../../../public/assets/logo-icon.png";
import { useState } from "react";
export default function CardBalance() {
    const [showBalance, setShowBalance] = useState<boolean>(false);


    const CircleBlance = () => {
        return (
            <div className="flex gap-1.5 items-center">
                R$
                <i className="ri-circle-fill text-xs"/>
                <i className="ri-circle-fill text-xs "/>
                <i className="ri-circle-fill text-xs"/>
                <i className="ri-circle-fill text-xs"/>
            </div>
        )
    }

    return (
        <div className="w-[500px] bg-[#F5F5F5] p-4 rounded-xl mt-8 text-[#2E335B] flex flex-col gap-5 font-medium">
            <div className="flex items-center text-xl gap-1.5">
                <Image src={LogoIcon} alt="" width={19} height={19} /> 
                <span>Conta corrente</span>
            </div>
            <span className="text-xl">Saldo</span>
            <div className="text-xl font-bold antialiased flex justify-between">
                {showBalance ? 'R$1.407,44' : CircleBlance()}
                <i className={
                    `${showBalance ? 'ri-eye-line' : 'ri-eye-off-line'} 
                    cursor-pointer`}
                onClick={() => setShowBalance(!showBalance)}
                />
            </div>
            <hr/>
            <div className="flex justify-between cursor-pointer">
                <span className="text-base ">Acessar extrato</span>
                <i className="ri-arrow-right-s-line text-lg"/>
            </div>
        </div>
    )
}