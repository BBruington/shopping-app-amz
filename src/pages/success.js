import Header from "@/components/Header";
import { CheckCircleIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";

export default function Success() {

  const router = useRouter();

  return (
    <div className="bg-gray-100 h-screen">
      <Header />

      <main className="max-w-screen-lg mx-auto mt-5">
        <div className="flex flex-col p-10 bg-white">
          <div className="flex items-center space-x-2 mb-5">
            <CheckCircleIcon />
            <h1 className="text-3xl">Thank you, your order has been confirmed!</h1>
          </div>
          <p className="text-sm items-center">Thank you for shopping with us. We&apos;ll send a confirmation once your item has shipped, if you would like to check the status of your order(s) please press the link below</p>
          <button onClick={() => router.push("/orders")} className="button mt-8">Go to my orders</button>
        </div>
      </main>
    </div>
  )
}