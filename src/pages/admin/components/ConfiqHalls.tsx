import baseChair from "C:/Users/админ/Desktop/idemvkino/src/assets/base__chair.png";
import vipChair from "C:/Users/админ/Desktop/idemvkino/src/assets/vip__chair.png";
import noChair from "C:/Users/админ/Desktop/idemvkino/src/assets/no__chair.png";
import React from "react";

const confiqHall = ({ halls }) => {
  const [selectedHall, setSelectedHall] = React.useState(halls[0]);

  const handleHallChange = (hall) => {
    setSelectedHall(hall);
  };
  console.log("залы", halls);

  console.log(selectedHall);
  return (
    <div className="w-[962px] bg-[#EAE9EB] bg-opacity-95 mx-auto">
      <div className="p-7 flex items-center h-24 bg-[#63536C] text-white font-bold text-2xl uppercase">
        <h3>Конфиграция залов</h3>
      </div>
      <div className="p-7">
        {" "}
        <div className="">
          <h4 className="mb-2">Выберите зал для конфигурации:</h4>
          <ol className="flex gap-2 mb-6">
            {halls.map((hall) => {
              return (
                <ul
                  key={hall.id}
                  className="font-medium text-base uppercase leading-7"
                >
                  <button
                    onClick={() => handleHallChange(hall)}
                    className="focus:outline-none text-black bg-white hover:bg-[#63536C] hover:text-white shadow-md font-medium rounded-sm text-sm px-2 py-2"
                  >
                    {" "}
                    {hall.hall_name}
                  </button>
                </ul>
              );
            })}
          </ol>
        </div>
        <div>
          <p className="mb-1">
            Укажите количество рядов и максимальное количество кресел в ряду:
          </p>
          <div className="flex gap-3 text-[#848484] mb-6">
            <div className="flex flex-col">
              <label htmlFor="rows">Рядов, шт</label>
              <input
                className="p-1 w-[100px]"
                type="text"
                id="rows"
                placeholder="10"
              />
            </div>
            <p className="self-end leading-loose">X</p>
            <div className="flex flex-col">
              {" "}
              <label htmlFor="seats">Мест, шт</label>
              <input className="p-1 w-[100px]" type="text" placeholder="10" />
            </div>
          </div>
        </div>
        <div>
          <p className="mb-2">
            Теперь вы можете указать типы кресел на схеме зала:
          </p>
          <div className="flex gap-4 text-[#848484] mb-2">
            <div className="flex">
              <img src={baseChair} alt="" />
              &nbsp;- обычные кресла
            </div>
            <div className="flex">
              <img src={vipChair} alt="" />
              &nbsp;- VIP кресла
            </div>
            <div className="flex">
              <img src={noChair} alt="" />
              &nbsp;- заблокированные (нет кресла)
            </div>
          </div>

          <p className="text-[#848484]">
            Чтобы изменить вид кресла, нажмите по нему левой кнопкой мыши
          </p>
          <div className="border border-black w-full h-[450px] my-4 flex items-center flex-col">
            <div className="uppercase tracking-[1.19em] mt-5 ">экран</div>
            <div className="mt-5">
              <div className="grid gap-1 mb-7 mx-auto w-max grid-cols-[repeat(11,_minmax(0,_1fr))]">
                <button className="w-7 h-7"><img src={vipChair} alt="" /></button>
                <button className="w-7 h-7"><img src={vipChair} alt="" /></button>
                <button className="w-7 h-7"><img src={baseChair} alt="" /></button>
                <button className="w-7 h-7"><img src={vipChair} alt="" /></button>
                <button className="w-7 h-7"><img src={vipChair} alt="" /></button>
                <button className="w-7 h-7"><img src={vipChair} alt="" /></button>
                <button className="w-7 h-7"><img src={vipChair} alt="" /></button>
                <button className="w-7 h-7"><img src={vipChair} alt="" /></button>
                <button className="w-7 h-7"><img src={vipChair} alt="" /></button>
                <button className="w-7 h-7"><img src={baseChair} alt="" /></button>
                <button className="w-7 h-7"><img src={baseChair} alt="" /></button>
                <button className="w-7 h-7"><img src={baseChair} alt="" /></button>
                <button className="w-7 h-7"><img src={baseChair} alt="" /></button>
                <button className="w-7 h-7"><img src={baseChair} alt="" /></button>
                <button className="w-7 h-7"><img src={baseChair} alt="" /></button>
                <button className="w-7 h-7"><img src={baseChair} alt="" /></button>
                <button className="w-7 h-7"><img src={baseChair} alt="" /></button>
                <button className="w-7 h-7"><img src={baseChair} alt="" /></button>
                <button className="w-7 h-7"><img src={baseChair} alt="" /></button>
                <button className="w-7 h-7"><img src={baseChair} alt="" /></button>
                <button className="w-7 h-7"><img src={baseChair} alt="" /></button>
                <button className="w-7 h-7"><img src={baseChair} alt="" /></button>
                <button className="w-7 h-7"><img src={baseChair} alt="" /></button>
                <button className="w-7 h-7"><img src={baseChair} alt="" /></button>
                <button className="w-7 h-7"><img src={baseChair} alt="" /></button>
                <button className="w-7 h-7"><img src={baseChair} alt="" /></button>
                <button className="w-7 h-7"><img src={baseChair} alt="" /></button>
                <button className="w-7 h-7"><img src={baseChair} alt="" /></button>
                <button className="w-7 h-7"><img src={baseChair} alt="" /></button>
                <button className="w-7 h-7"><img src={baseChair} alt="" /></button>
                <button className="w-7 h-7"><img src={baseChair} alt="" /></button>
                <button className="w-7 h-7"><img src={baseChair} alt="" /></button>
                <button className="w-7 h-7"><img src={baseChair} alt="" /></button>
                <button className="w-7 h-7"><img src={baseChair} alt="" /></button>
                <button className="w-7 h-7"><img src={baseChair} alt="" /></button>
                <button className="w-7 h-7"><img src={noChair} alt="" /></button>
                <button className="w-7 h-7"><img src={noChair} alt="" /></button>
                <button className="w-7 h-7"><img src={noChair} alt="" /></button>
                <button className="w-7 h-7"><img src={noChair} alt="" /></button>
                <button className="w-7 h-7"><img src={noChair} alt="" /></button>
                <button className="w-7 h-7"><img src={noChair} alt="" /></button>
                <button className="w-7 h-7"><img src={noChair} alt="" /></button>
                <button className="w-7 h-7"><img src={noChair} alt="" /></button>
                <button className="w-7 h-7"><img src={noChair} alt="" /></button>
                <button className="w-7 h-7"><img src={noChair} alt="" /></button>
                <button className="w-7 h-7"><img src={noChair} alt="" /></button>
                <button className="w-7 h-7"><img src={noChair} alt="" /></button>
                <button className="w-7 h-7"><img src={noChair} alt="" /></button>
                <button className="w-7 h-7"><img src={noChair} alt="" /></button>
                <button className="w-7 h-7"><img src={noChair} alt="" /></button>
                <button className="w-7 h-7"><img src={noChair} alt="" /></button>
                <button className="w-7 h-7"><img src={noChair} alt="" /></button>
                <button className="w-7 h-7"><img src={noChair} alt="" /></button>
                <button className="w-7 h-7"><img src={noChair} alt="" /></button>
                <button className="w-7 h-7"><img src={noChair} alt="" /></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default confiqHall;
