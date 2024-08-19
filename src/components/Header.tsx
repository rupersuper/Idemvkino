const Header = () => {
  return (
    <div className="flex justify-between items-center py-3 mx-4">
      <a href="#" className="text-3xl text-white uppercase font-black ">
        <span>Идем</span>
        <span className="font-thin">в</span>
        <span>Кино</span>
      </a>
      <button className="focus:outline-none text-white bg-teal-700 hover:bg-teal-800 focus:ring-1 focus:ring-teal-300 shadow font-medium rounded-sm uppercase text-sm px-5 py-3">
        Войти
      </button>
    </div>
  );
};

export default Header;
