import Image from "next/image";
import img from "../../../../public/elefent.png";

const FilterCategory = () => {
  return (
    <div className="mt-[71px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-[42px]">
      <div>
        <div className="border border-[#141414] bg-[#050505] rounded-lg w-[160px] h-[191px] mx-auto">
          <Image src={img} alt="" width="" height="" ></Image>
        </div>
        <h2 className="uppercase text-lg font-normal pt-[14px] text-center">
          Elephant
        </h2>
      </div>
      <div>
        <div className="border border-[#141414] bg-[#050505] rounded-lg w-[160px] h-[191px] mx-auto">
          <Image src={img} alt="" width="" height="" ></Image>
        </div>
        <h2 className="uppercase text-lg font-normal pt-[14px] text-center">
          Elephant
        </h2>
      </div>
      <div>
        <div className="border border-[#141414] bg-[#050505] rounded-lg w-[160px] h-[191px] mx-auto">
          <Image src={img} alt="" width="" height="" ></Image>
        </div>
        <h2 className="uppercase text-lg font-normal pt-[14px] text-center">
          Elephant
        </h2>
      </div>
      <div>
        <div className="border border-[#141414] bg-[#050505] rounded-lg w-[160px] h-[191px] mx-auto">
          <Image src={img} alt="" width="" height="" ></Image>
        </div>
        <h2 className="uppercase text-lg font-normal pt-[14px] text-center">
          Elephant
        </h2>
      </div>
      <div>
        <div className="border border-[#141414] bg-[#050505] rounded-lg w-[160px] h-[191px] mx-auto">
          <Image src={img} alt="" width="" height="" ></Image>
        </div>
        <h2 className="uppercase text-lg font-normal pt-[14px] text-center">
          Elephant
        </h2>
      </div>
      <div>
        <div className="border border-[#141414] bg-[#050505] rounded-lg w-[160px] h-[191px] mx-auto">
          <Image src={img} alt="" width="" height="" ></Image>
        </div>
        <h2 className="uppercase text-lg font-normal pt-[14px] text-center">
          Elephant
        </h2>
      </div>
     
    </div>
  );
};

export default FilterCategory;
