"use client";

import { ToastContainer, toast } from "react-toastify";

import Avatar from "../../public/assets/avatar.avif";
import Image from "next/image";
import Logo from "../../public/assets/logo.svg";
import { useEffect } from "react";
import { useUsers } from "@/hooks/useUsers";

export default function Header() {
  const { data: user, error } = useUsers();

  useEffect(() => {
    if (error) {
      toast.error("Erro ao carregar os dados do usuário");
    }
  },[error]);

  return (
    <>
      <div className="bg-white p-10 justify-between shadow-lg flex items-center fixed w-full z-10 md:z-0">
        <Image src={Logo} alt="Logo excrito LumiPay" width={196} />
        <div className="flex items-center gap-5">
          <span className="text-[18px] color-text-gray hidden md:block">
            {user?.name}
          </span>
          <Image
            className="inline-block size-8 rounded-full ring-2 ring-white"
            width={54}
            height={54}
            src={Avatar}
            alt="Imagem de perfil de mulher morena"
          />
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
