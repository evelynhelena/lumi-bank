import CardBalance from "./components/CardBalance";
import CardTransaction from "./components/CardTransaction";

export default function Home() {
  return (
    <div>  
      <span className="text-[#2E335B] text-3xl">Olá, Samanta</span>
      <CardBalance/>

      <div className="text-[#2E335B] text-lg mt-16"><span>Últimas transações</span></div>
      <CardTransaction/>
    </div>
  );
}
