const ConfiqPrice = () => {
  return (
    <div className="w-[962px] bg-[#EAE9EB] bg-opacity-95 mx-auto">
      <div className="p-7 flex items-center h-24 bg-[#63536C] text-white font-bold text-2xl uppercase">
        <h3>Конфигурация цен</h3>
      </div>
      <div>
        <h4>Доступные залы:</h4>
        <ol>
          <ul>-Зал 1</ul>
          <ul>-Зал 2</ul>
        </ol>
        <button className="my-8 focus:outline-none text-white bg-teal-500 hover:bg-teal-600 focus:ring-1 focus:ring-teal-300 shadow-md font-medium rounded-sm uppercase text-sm px-8 py-3">
          Создать зал
        </button>
      </div>
    </div>
  );
};

export default ConfiqPrice;
