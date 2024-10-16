import React from "react";

const ModalHall = ({ active, setActive, onChange }) => {
  const handleClose = (e) => {
    e.preventDefault();
    setActive(false);
  };

  const data = new FormData();
  const handleChange = (e) => {
    data.set("hallName", e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://shfe-diplom.neto-server.ru/hall", {
        method: "POST",
        body: data,
      });
      const result = await response.json();
      if (result.success) {
        e.target[0].value = "";
        setActive(false);
        onChange();
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div
      onClick={() => setActive(false)}
      className={`flex items-center justify-center h-screen w-screen bg-black bg-opacity-40 fixed top-0 left-0 ${
        active ? "scale-1" : "scale-0"
      }`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-[962px] bg-[#EAE9EB] bg-opacity-95 -translate-x-2"
      >
        <div className="p-7 flex items-center h-12 bg-[#63536C] text-white font-bold text-2xl uppercase">
          <h2>Добавление Зала</h2>
        </div>
        <form
          onSubmit={(e) => handleSubmit(e)}
          className="flex flex-col items-center mt-8"
        >
          <div>
            <label className="text-[#848484]">Название зала</label>
            <br />
            <input
              onChange={handleChange}
              className="w-[600px] p-2 focus:outline-none focus:shadow-[0_0_0_2px_black_inset]"
              type="text"
              placeholder="Введите название зала"
            />
          </div>
          <div className="flex gap-3">
            <button className="my-8 focus:outline-none text-white bg-teal-500 hover:bg-teal-600 focus:ring-1 focus:ring-teal-300 shadow-md font-medium rounded-sm uppercase text-sm px-8 py-3">
              Добавить зал
            </button>
            <button
              onClick={(e) => handleClose(e)}
              className="my-8 focus:outline-none text-[#63536C] bg-white hover:bg-[#63536C] hover:text-white shadow-md font-medium rounded-sm uppercase text-sm px-8 py-3"
            >
              Отменить
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default ModalHall;
