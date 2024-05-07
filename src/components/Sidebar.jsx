import { FaHome, FaBlog } from "react-icons/fa";
import { GoProject } from "react-icons/go";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();
  return (
    <section>
      <div className="fixed right-1 bottom-0 bg-white p-2 rounded-xl shadow-sm shadow-slate-400 w-[50px] h-[200px] grid place-items-center ">
        <div className="w-full ">
          <FaHome onClick={() => navigate("/")} className=" m-auto" />
        </div>
        <div className="w-full">
          <FaBlog onClick={() => navigate("/blog")} className=" m-auto" />
        </div>
        <div className="w-full ">
          <GoProject className=" m-auto" />
        </div>
      </div>
    </section>
  );
};

export default Sidebar;
