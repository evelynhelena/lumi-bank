import { Inter } from 'next/font/google';
const inter = Inter({
    subsets: ['latin'],
    weight: ['400'],
    display: 'swap',
});
export default function Menu() {
    return (
        <div className={`h-[100vh] p-6 bg-[#EDEDED] w-[246px] mt-[-20px] rounded-tr-[100px] fixed`}>
            teste

            <div className="mt-8">
                <ul>
                    <li className={`
                      text-[#2E335B] text-[20px] 
                        ${inter.className} font flex gap-1.5 items-center mb-8`
                    }>
                        <i className="ri-user-fill" />
                        Meus Dados
                    </li>
                    <li className={`
                      text-[#2E335B] text-[20px] 
                        ${inter.className} font flex gap-1.5 items-center mb-8`
                    }>
                        <i className="ri-exchange-dollar-line"/>
                        Transações
                    </li>
                    <li className={`
                      text-[#2E335B] text-[20px] 
                        ${inter.className} font flex gap-1.5 items-center`
                    }>
                        <i className="ri-bank-card-fill"/>
                        Cartões
                    </li>
                </ul>
            </div>
        </div>
    )
}