const StepsKYC = () => {
  return (
    <div className="w-full h-full flex flex-col">
      <p className=" mb-8 text-xl">Steps to complete your KYC Verification</p>
      <div className="w-full h-full flex justify-center gap-x-4">
        <div className="w-[33%] flex flex-col justify-start items-center border-white border-[1px] rounded-lg ">
          <div className="w-full h-[130px] bg-[#D9D9D9] rounded-t-lg"></div>
          <div className="py-1">
            <h3 className="text-lg text-center font-[200]">Personal Details</h3>
            <p className="text-xs text-center px-4 text-[#A0A0A0] mb-2">
              Fill your Personal Details like Name, Date of Birth, Address,
              Annual Income Range and Type of Employment
            </p>
          </div>
        </div>

        <div className="w-[33%] flex flex-col justify-start items-center border-white border-[1px] rounded-lg ">
          <div className="w-full h-[50%] bg-[#D9D9D9] rounded-t-lg"></div>
          <div className="py-1">
            <h3 className="text-lg text-center font-[200]">Video KYC</h3>
            <p className="text-xs text-center px-4 text-[#A0A0A0] mb-2">
              Record a video of you holding your Aadhaar Card or PAN Card
            </p>
          </div>
        </div>

        <div className="w-[33%] flex flex-col justify-start items-center border-white border-[1px] rounded-lg ">
          <div className="w-full h-[50%] bg-[#D9D9D9] rounded-t-lg"></div>
          <div className="py-1 flex flex-col justify-start  h-[50%]">
            <h3 className="text-lg text-center font-[200] ">
              Upload Documents
            </h3>
            <p className="text-xs text-center px-4 text-[#A0A0A0] mb-2">
              Upload your Aadhaar Card or PAN Card in the form of PDF
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepsKYC;
