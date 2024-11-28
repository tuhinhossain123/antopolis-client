"use client"
import React, { useState } from "react";
import Link from "next/link";
import AnimalAddModal from "@/components/Modal/AnimalAddModal/AnimalAddModal";
import AddCategoryModal from "@/components/Modal/AddCategoryModal/AddCategoryModal";

const AllCategory = () => {
  return (
    <div className="mt-10 lg:mt-[102px] px-4 flex flex-col lg:flex-row justify-between items-center gap-12 lg:gap-0">
      {/* Category Links */}
      <div>
        <ul className="flex flex-col lg:flex-row items-center lg:gap-6 gap-10">
          <li>
            <Link
              href="#"
              className="text-lg text-[#EF0D0D] border border-[#EF0D0D] rounded-full pl-6 pt-[14px] pr-5 pb-[14px]"
            >
              Land Animal
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="text-lg text-[#EF0D0D] border border-[#EF0D0D] rounded-full pl-6 pt-[14px] pr-5 pb-[14px]"
            >
              Bird
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="text-lg text-[#EF0D0D] border border-[#EF0D0D] rounded-full pl-6 pt-[14px] pr-5 pb-[14px]"
            >
              Fish
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="text-lg text-[#EF0D0D] border border-[#EF0D0D] rounded-full pl-6 pt-[14px] pr-5 pb-[14px]"
            >
              Land Animal
            </Link>
          </li>
        </ul>
      </div>

      {/* Buttons */}
      <div className="flex items-center gap-4">
        <AnimalAddModal></AnimalAddModal>
        <AddCategoryModal></AddCategoryModal>
      </div>
    </div>
  );
};

export default AllCategory;
