"use client";
import { useState } from "react";

const AnimalAddModal = () => {
  const [isAnimalModalOpen, setAnimalModalOpen] = useState(false);
  return (
    <div>
      <button
        className="text-lg font-normal px-5 py-[14px] border border-[#FFF] rounded-full"
        onClick={() => setAnimalModalOpen(true)}
      >
        Add Animal
      </button>
      {/* Modals */}
      {isAnimalModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] max-w-md">
            <h2 className="text-lg font-bold mb-4">Add Animal</h2>
            <p>Animal modal content goes here.</p>
            <button
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg"
              onClick={() => setAnimalModalOpen(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AnimalAddModal;
