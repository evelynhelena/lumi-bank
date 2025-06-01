"use client"
import Image from "next/image";
import LogoIcon from "../../public/assets/logo-icon.png";
import { useState } from "react";
import { useAccount } from "@/hooks/useAccount";

interface CardBalanceProps {
    userId: number;
}

export default function CardBalance({ userId }: CardBalanceProps) {
    const [showBalance, setShowBalance] = useState<boolean>(false);
    const {
        data: accountData,
        error: accountError,
        isLoading: isLoadingAccountData
    } = useAccount(userId);

    if (isLoadingAccountData) {
        return <div>Carregando...</div>;
    }

    if (accountError) {
        return <div>Erro ao carregar os posts: {accountError.message}</div>;
    }

    const CircleBlance = () => {
        return (
            <div className="flex gap-1.5 items-center">
                R$
                <i className="ri-circle-fill text-xs" />
                <i className="ri-circle-fill text-xs " />
                <i className="ri-circle-fill text-xs" />
                <i className="ri-circle-fill text-xs" />
            </div>
        )
    }

    return (
        <div className="w-full max-h-56 bg-[#F5F5F5] p-5 rounded-xl text-[#2E335B] flex flex-col gap-5 font-medium">
            <div className="flex items-center text-xl gap-1.5">
                <Image src={LogoIcon} alt="" width={19} height={19} />
                <span>{accountData?.accountType}</span>
            </div>
            <span className="text-xl">Saldo</span>
            <div className="text-xl font-bold antialiased flex justify-between">
                {showBalance ? `R$ ${accountData?.balance}` : CircleBlance()}
                <i className={
                    `${showBalance ? 'ri-eye-line' : 'ri-eye-off-line'} 
                    cursor-pointer`}
                    onClick={() => setShowBalance(!showBalance)}
                />
            </div>
        </div>
    )
}