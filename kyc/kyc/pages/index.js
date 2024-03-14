import Image from "next/image";
import { BiSolidUserCircle } from "react-icons/bi";
import ContentLoader from "@/components/ContentLoader";
import StepsLoader from "@/components/StepsLoader";
import { useState } from "react";
export default function Home() {
  const [counter, setCounter] = useState(1);
  return (
    <main className="flex text-white  min-h-screen w-screen bg-black flex-col items-center justify-between p-32">
      <div className="flex flex-col items-start w-[80%] h-full">
        <h2 className="text-2xl text-[#C0C0C0]">KYC Verification</h2>
        <p className="text-[#505050]">Verify your identity and get started</p>
        <div className="flex w-full mt-16">
          <div className="w-[30%]">
            <StepsLoader stepCount={counter} />
          </div>
          <div className="w-[70%]">
            <ContentLoader stepCount={counter} />
          </div>
        </div>
        <div className="ml-auto mt-24 flex gap-x-3">
          {counter > 1 && (
            <button
              onClick={() => {
                setCounter(counter - 1);
              }}
              className=" px-4 py-1 text-black bg-white rounded-md font-[400] "
            >
              Previous
            </button>
          )}
          {counter < 5 && (
            <button
              onClick={() => {
                setCounter(counter + 1);
              }}
              className=" px-4 py-1 text-black bg-white rounded-md font-[400] "
            >
              Next
            </button>
          )}
        </div>
      </div>
    </main>
  );
}
