import Image from "next/image";
import img from "../../../../public/elefent.png";

const FilterCategory = () => {
  return (
    <div className="mt-[71px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-[42px]">
      <div>
        <div className="border-[#141414] rounded-full">
          <Image src={img} alt="" width={160} height={191}></Image>
        </div>
        <h2 className="uppercase text-lg font-normal pt-[14px] text-center">
          Elephant
        </h2>
      </div>
      <div>
        <div className="stroke-[#141414] rounded-full">
          <Image src={img} alt="" width={160} height={191}></Image>
        </div>
        <h2 className="uppercase text-lg font-normal pt-[14px] text-center">
          Elephant
        </h2>
      </div>
      <div>
        <div className="stroke-[#141414] rounded-full">
          <Image src={img} alt="" width={160} height={191}></Image>
        </div>
        <h2 className="uppercase text-lg font-normal pt-[14px] text-center">
          Elephant
        </h2>
      </div>
      <div>
        <div className="stroke-[#141414] rounded-full">
          <Image src={img} alt="" width={160} height={191}></Image>
        </div>
        <h2 className="uppercase text-lg font-normal pt-[14px] text-center">
          Elephant
        </h2>
      </div>
      <div>
        <div className="stroke-[#141414] rounded-full">
          <Image src={img} alt="" width={160} height={191}></Image>
        </div>
        <h2 className="uppercase text-lg font-normal pt-[14px] text-center">
          Elephant
        </h2>
      </div>
      <div>
        <div className="stroke-[#141414] rounded-full">
          <Image src={img} alt="" width={160} height={191}></Image>
        </div>
        <h2 className="uppercase text-lg font-normal pt-[14px] text-center">
          Elephant
        </h2>
      </div>
    </div>
  );
};

export default FilterCategory;
