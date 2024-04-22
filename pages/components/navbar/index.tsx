import React from "react";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="border-b border-gray-400 sticky top-0 bg-black">
      <div className="flex flex-row justify-between items-center py-4 max-w-[1100px] mx-auto px-4">
        <div className="flex items-center gap-6 font-bold text-xl">
          <Image
            src="/menu.png"
            alt="menu"
            height={30}
            width={30}
            className="bg-white"
          />
          <p className="text-white">dropset</p>
        </div>
        <div>
          <button className="bg-[#2e2e33] text-white px-6 py-2 rounded-xl font-medium">
            Download
          </button>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
