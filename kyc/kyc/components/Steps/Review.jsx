const Review = () => {
  return (
    <div className="w-full h-full flex flex-col">
      <p className=" text-xl font-[300] tracking-[1px]">Review</p>
      <p className="text-[#505050] text-sm font-[200]">Verification Step</p>
      <div className="w-full h-full flex">
        <div className="w-[50%] flex items-center  h-full">
          <h2 className="text-5xl  font-extralight">
            Your KYC Verification is{" "}
            <span className="font-bold"> being processed</span>
          </h2>
        </div>
        <div className="w-[50%]">
          <div class="grid grid-cols-2 gap-4">
            <div class="w-36 h-36 rounded-lg p-4 bg-[#E0E0E0]"></div>
            <div class="w-36 h-36 rounded-lg p-4 bg-[#E0E0E0]"></div>
            <div class="w-36 h-36 rounded-lg p-4 bg-[#E0E0E0]"></div>
            <div class="w-36 h-36 rounded-lg p-4 bg-[#E0E0E0]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
