"use client";
import React, { useState } from "react";

const AddCategoryModal = () => {
  const [isCategoryModalOpen, setCategoryModalOpen] = useState(false);
  return (
    <div>
      <button
        className="text-lg font-normal px-5 py-[14px] border border-[#FFF] rounded-full"
        onClick={() => setCategoryModalOpen(true)}
      >
        Add Category
      </button>

      {isCategoryModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] max-w-md">
            <h2 className="text-lg font-bold mb-4">Add Category</h2>
            <p>Category modal content goes here.</p>
            <button
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg"
              onClick={() => setCategoryModalOpen(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddCategoryModal;
