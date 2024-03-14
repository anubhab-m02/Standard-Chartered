const PersonalDetails = () => {
  return (
    <div className="w-full h-full flex flex-col">
      <p className="text-xl font-[200] tracking-[1px] text-[#E0E0E0]">
        Personal Details
      </p>
      <p className="text-[#505050] font-[200]">
        Provide basic information about yourself
      </p>
      <div className="mt-4 flex gap-x-4 w-full">
        <div className="w-[50%]">
          <h3 className="">First Name</h3>
          <input
            placeholder="Guddu"
            className="mt-2 bg-black rounded-xl border-[1px] border-[#A0A0A0] w-full p-2 text-[#A0A0A0]"
          />
        </div>
        <div className="w-[50%]">
          <h3 className="">Last Name</h3>
          <input
            placeholder="Mishra"
            className="mt-2 bg-black rounded-xl border-[1px] border-[#A0A0A0] w-full p-2 text-[#A0A0A0]"
          />
        </div>
      </div>
      <div className="w-full">
        <h3 className="mt-2">Address</h3>
        <input
          placeholder="5128, Estancia, Guduvancherry, Chennai - 603203"
          className="mt-2 bg-black rounded-xl border-[1px] border-[#A0A0A0] w-full p-2 text-[#A0A0A0]"
        />
      </div>
      <div className="mt-4 flex gap-x-4 w-full">
        <div className="w-[30%]">
          <h3 className="">Date of Birth</h3>
          <input
            placeholder="dd/mm/yyyy"
            className="mt-2 bg-black rounded-xl border-[1px] border-[#A0A0A0] w-full p-2 text-[#A0A0A0]"
          />
        </div>
        <div className="w-[30%]">
          <h3 className="">Income Range</h3>
          <input
            placeholder="10000 - 20000"
            className="mt-2 bg-black rounded-xl border-[1px] border-[#A0A0A0] w-full p-2 text-[#A0A0A0]"
          />
        </div>
        <div className="w-[30%]">
          <h3 className="">Employment Type</h3>
          <input
            placeholder="E.g - Intern"
            className="mt-2 bg-black rounded-xl border-[1px] border-[#A0A0A0] w-full p-2 text-[#A0A0A0]"
          />
        </div>
      </div>
      <div className="w-full">
        <h3 className="mt-2">ID Number</h3>
        <input
          placeholder="E.g - 1010-1010-1010-1010"
          className="mt-2 bg-black rounded-xl border-[1px] border-[#A0A0A0] w-full p-2 text-[#A0A0A0]"
        />
      </div>
    </div>
  );
};

export default PersonalDetails;
