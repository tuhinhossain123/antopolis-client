import Link from "next/link";

const AllCategory = () => {
  return (
    <div className="mt-10 lg:mt-[102px] px-4 flex flex-col lg:flex-row justify-between items-center gap-12 lg:gap-0">
      <div>
        <ul className="flex flex-col lg:flex-row items-center lg:gap-6 gap-10">
          <li>
            <Link
              href=""
              className="text-lg text-[#EF0D0D] border border-[#EF0D0D] rounded-full pl-6 pt-[14px] pr-5 pb-[14px]"
            >
              Land Animal
            </Link>
          </li>
          <li>
            <Link
              href=""
              className="text-lg text-[#EF0D0D] border border-[#EF0D0D] rounded-full pl-6 pt-[14px] pr-5 pb-[14px]"
            >
              Bird
            </Link>
          </li>
          <li>
            <Link
              href=""
              className="text-lg text-[#EF0D0D] border border-[#EF0D0D] rounded-full pl-6 pt-[14px] pr-5 pb-[14px]"
            >
              Fish
            </Link>
          </li>
          <li>
            <Link
              href=""
              className="text-lg text-[#EF0D0D] border border-[#EF0D0D] rounded-full pl-6 pt-[14px] pr-5 pb-[14px]"
            >
              Land Animal
            </Link>
          </li>
        </ul>
      </div>
      <div className="flex items-center gap-4">
        <button className="text-lg font-normal px-5 py-[14px] border border-[#FFF] rounded-full">
          Add Animal
        </button>
        <button className="text-lg font-normal px-5 py-[14px] border border-[#FFF] rounded-full">
          Add Category
        </button>
      </div>
    </div>
  );
};

export default AllCategory;
