import { MdDarkMode } from "react-icons/md";
import { useState } from "react";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <>
      <nav className="bg-white whitespace-nowrap fixed top-0 left-0 right-0 w-screen z-[9999] p-4 grid grid-cols-2  items-center  ">
        <div>
          <h1 className="text-[10px] md:text-sm">Mochamad Naufal Aufa Rifqi</h1>
        </div>
        <span className="flex justify-end mr-8">
          <MdDarkMode />
        </span>
      </nav>
    </>
  );
};

export default Navbar;
