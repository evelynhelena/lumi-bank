import Image from "next/image"
import Logo from '../../../public/assets/logo.svg';
import Avatar from '../../../public/assets/avatar.avif';

export default function Header(){
    return(
        <div className="bg-white p-10 justify-between shadow-lg flex items-center">
            <Image src={Logo} alt="Logo excrito LumiPay" width={196}/>
            <div className="flex items-center gap-5">
                <span className="text-[18px] text-[#2E335B]">Samanta Rodrigues</span>  
                <Image 
                    className="inline-block size-8 rounded-full ring-2 ring-white" 
                    width={54} 
                    height={54} 
                    src={Avatar} 
                    alt="Imagem de perfil de mulher morena"
                />
            </div>
        </div>
    )
}