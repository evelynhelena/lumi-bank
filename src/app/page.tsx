import CardBalance from "./components/CardBalance";
import { CardNewTransaction } from "./components/CardNewTransaction";
import CardTransaction from "./components/CardTransaction";

export default function Home() {
  return (
    <>
      <div className="mt-27">
        <span className="text-[#2E335B] text-3xl">Olá, Samanta</span>
      </div>

      <div className="flex gap-9">
        <div className="w-full flex flex-col gap-12">
          <CardBalance />
          <CardNewTransaction/>
        </div>
          <CardTransaction />
      </div>
    </>
  );
}
