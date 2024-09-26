import { NavLink } from "react-router-dom";

const AdminHeader = () => {
  const handleClick = () => {
    localStorage.removeItem("isLogin");
  };
  return (
    <div className="flex justify-between items-center py-3 mx-3 mb-14">
      <NavLink
        to="/admin"
        className="text-3xl text-white uppercase font-black leading-6 mt-3"
      >
        <span>Идем</span>
        <span className="font-thin">в</span>
        <span>Кино</span>
        <br />
        <span className="text-xs font-normal tracking-[0.4em]">
          Администраторская
        </span>
      </NavLink>
      <NavLink
        onClick={handleClick}
        to="/"
        className="focus:outline-none text-white bg-teal-700 hover:bg-teal-800 focus:ring-1 focus:ring-teal-300 shadow font-medium rounded-sm uppercase text-sm px-5 py-3"
      >
        Выйти
      </NavLink>
    </div>
  );
};

export default AdminHeader;
