import CardBalance from "./components/CardBalance";
import { CardNewTransaction } from "./components/CardNewTransaction";
import CardTransaction from "./components/CardTransaction";

export default function Home() {
  return (
    <>
      <div className="mt-27">
        <span className="text-[#2E335B] text-3xl">Olá, Samanta</span>
      </div>

      <div className="flex gap-9 flex-col md:flex-row items-start mt-8">
        <div className="w-full flex flex-col gap-12">
          <CardBalance />
          <CardNewTransaction/>
        </div>
        <div className="w-full">
          <CardTransaction />
        </div>
      </div>
    </>
  );
}
