import Image from "next/image";
import asset1 from "@/public/assets/asset1.png";
const WelcomeKYC = () => {
  return (
    <div className="w-full h-full flex gap-8 ">
      <div className="h-full flex flex-col  w-[50%]">
        <p className="mb-8 text-xl">Welcome to KYCV</p>
        <p className="mb-8 text-[#A0A0A0] text-lg">
          To ensure the security of your account and comply with regulations, we
          require a quick and secure KYC verification process.
        </p>
        <p className="mb-8 text-lg">Let's Get You Verified!</p>
      </div>
      <div>
        <Image className="" width={300} height={300} src={asset1} alt="" />
      </div>
    </div>
  );
};

export default WelcomeKYC;
