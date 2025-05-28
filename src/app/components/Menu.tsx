
import Link from 'next/link';

export default function Menu() {

    return (
        <div className="h-[100vh] p-6 w-[246px] mt-[105px] rounded-tr-[100px] fixed bg-white shadow-2xl hidden md:block">

            <div className="text-[#2E335B]  font-semibold mt-15">
                <span>LumiPay Instituição de Pagamentos</span>
            </div>
            <div className="mt-8">
                <ul>
                    <Link href="/">
                        <li className="
                        text-[#2E335B] text-[20px] font flex gap-1.5 items-center mb-8">
                            <i className="ri-home-4-line" />
                            Home
                        </li>
                    </Link>
                    <Link href="/transaction">
                        <li className="
                      text-[#2E335B] text-[20px] font flex gap-1.5 items-center mb-8">
                            <i className="ri-exchange-dollar-line" />
                            Transações
                        </li>
                    </Link>
                </ul>
            </div>
        </div>
    )
}