import Header from "../components/Header";
import "./App.css";

const hall = [
  [
    "disabled",
    "disabled",
    "disabled",
    "disabled",
    "disabled",
    "disabled",
    "disabled",
    "disabled",
    "disabled",
    "disabled",
  ],
  [
    "standart",
    "standart",
    "standart",
    "disabled",
    "disabled",
    "disabled",
    "disabled",
    "standart",
    "standart",
    "standart",
  ],
  [
    "standart",
    "standart",
    "standart",
    "standart",
    "standart",
    "standart",
    "standart",
    "standart",
    "standart",
    "standart",
  ],
  [
    "standart",
    "standart",
    "standart",
    "standart",
    "standart",
    "standart",
    "standart",
    "standart",
    "standart",
    "standart",
  ],
  [
    "standart",
    "standart",
    "standart",
    "standart",
    "vip",
    "vip",
    "standart",
    "standart",
    "standart",
    "standart",
  ],
  [
    "standart",
    "standart",
    "standart",
    "vip",
    "vip",
    "vip",
    "vip",
    "standart",
    "standart",
    "standart",
  ],
  [
    "standart",
    "standart",
    "standart",
    "vip",
    "vip",
    "vip",
    "vip",
    "standart",
    "standart",
    "standart",
  ],
  [
    "standart",
    "standart",
    "standart",
    "standart",
    "standart",
    "standart",
    "standart",
    "standart",
    "standart",
    "standart",
  ],
  [
    "standart",
    "standart",
    "standart",
    "standart",
    "standart",
    "standart",
    "standart",
    "standart",
    "standart",
    "standart",
  ],
  [
    "standart",
    "standart",
    "standart",
    "standart",
    "vip",
    "vip",
    "standart",
    "standart",
    "standart",
    "standart",
  ],
];

const Hall = () => {
  return (
    <>
      <div className="bg-[url('./assets/77987fbb92422660c7bd27edcefc669d.jpeg')] bg-cover bg-no-repeat w-full h-full bg-fixed">
        <div className="max-w-5xl my-0 mx-auto h-screen">
        <Header />
          <div className="w-full bg-white/90">
            <div className="p-3">
              <h1 className="font-bold text-base">
                Звёздные войны XXIII: Атака клонированных клонов
              </h1>
              <div className="font-light text-sm">
                <span>Начало сеанса: </span>
                <span>18:30</span>
              </div>
              <div className="font-bold text-base">Зал 1</div>
            </div>
            <div className="bg-slate-900">
              <div className="w-72 mx-auto">
                <div className="relative p-4 mb-6">
                  <svg
                    className="absolute right-0"
                    width="285.000000"
                    height="16.533936"
                    viewBox="0 0 285 16.5339"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs />
                    <path
                      d="M284.5 5.99L284.5 15.99C242.23 12.69 190.31 11.17 142.5 11.49C66.31 11.99 0.5 15.99 0.5 15.99L0.5 5.99C111.06 -1.49 173.55 -1.18 284.5 5.99Z"
                      stroke="#C5C5C5"
                      stroke-opacity="1.000000"
                      stroke-width="1.000000"
                    />
                  </svg>
                  <div className=" text-white absolute top-3 right-1/2 translate-x-1/2 text-xs">
                    экран
                  </div>
                </div>
                <div className="grid gap-1 grid-cols-10 mb-7 mx-auto w-max">
                  {hall.map((seats) =>
                    seats.map((seat) => <button className={seat}></button>)
                  )}
                </div>
                {/* /* <div className="grid gap-1 grid-cols-12 mb-7 justify-items-center">
                  <button className="w-5 h-5 bg-white rounded-s rounded-e border-solid border-x border-y border-neutral-600"></button>
                  <button className="w-5 h-5 bg-white rounded-s rounded-e border-solid border-x border-y border-neutral-600"></button>
                  <button className="w-5 h-5 bg-white rounded-s rounded-e border-solid border-x border-y border-neutral-600"></button>
                  <button className="w-5 h-5 bg-white rounded-s rounded-e border-solid border-x border-y border-neutral-600"></button>
                  <button className="w-5 h-5 bg-white rounded-s rounded-e border-solid border-x border-y border-neutral-600"></button>
                  <button className="w-5 h-5 bg-white rounded-s rounded-e border-solid border-x border-y border-neutral-600"></button>
                  <button className="w-5 h-5 bg-white rounded-s rounded-e border-solid border-x border-y border-neutral-600"></button>
                  <button className="w-5 h-5 bg-white rounded-s rounded-e border-solid border-x border-y border-neutral-600"></button>
                  <button className="w-5 h-5 bg-white rounded-s rounded-e border-solid border-x border-y border-neutral-600"></button>
                  <button className="w-5 h-5 bg-white rounded-s rounded-e border-solid border-x border-y border-neutral-600"></button>
                  <button className="w-5 h-5 bg-white rounded-s rounded-e border-solid border-x border-y border-neutral-600"></button>
                  <button className="w-5 h-5 bg-white rounded-s rounded-e border-solid border-x border-y border-neutral-600"></button>
                  <button className="w-5 h-5 bg-white rounded-s rounded-e border-solid border-x border-y border-neutral-600"></button>
                  <button className="w-5 h-5  rounded-s rounded-e border-solid border-x border-y border-neutral-600"></button>
                  <button className="w-5 h-5 bg-white rounded-s rounded-e border-solid border-x border-y border-neutral-600"></button>
                  <button className="w-5 h-5 bg-white rounded-s rounded-e border-solid border-x border-y border-neutral-600"></button>
                  <button className="w-5 h-5 bg-white rounded-s rounded-e border-solid border-x border-y border-neutral-600"></button>
                  <button className="w-5 h-5 bg-white rounded-s rounded-e border-solid border-x border-y border-neutral-600"></button>
                  <button className="w-5 h-5 bg-white rounded-s rounded-e border-solid border-x border-y border-neutral-600"></button>
                  <button className="w-5 h-5 bg-white rounded-s rounded-e border-solid border-x border-y border-neutral-600"></button>
                  <button className="w-5 h-5 bg-white rounded-s rounded-e border-solid border-x border-y border-neutral-600"></button>
                  <button className="w-5 h-5 bg-white rounded-s rounded-e border-solid border-x border-y border-neutral-600"></button>
                  <button className="w-5 h-5 bg-white rounded-s rounded-e border-solid border-x border-y border-neutral-600"></button>
                  <button className="w-5 h-5 bg-white rounded-s rounded-e border-solid border-x border-y border-neutral-600"></button>
                  <button className="w-5 h-5 bg-white rounded-s rounded-e border-solid border-x border-y border-neutral-600"></button>
                  <button className="w-5 h-5 bg-white rounded-s rounded-e border-solid border-x border-y border-neutral-600"></button>
                  <button className="w-5 h-5 bg-white rounded-s rounded-e border-solid border-x border-y border-neutral-600"></button>
                  <button className="w-5 h-5 bg-white rounded-s rounded-e border-solid border-x border-y border-neutral-600"></button>
                  <button className="w-5 h-5 bg-white rounded-s rounded-e border-solid border-x border-y border-neutral-600"></button>
                  <button className="w-5 h-5 bg-white rounded-s rounded-e border-solid border-x border-y border-neutral-600"></button>
                  <button className="w-5 h-5  rounded-s rounded-e border-solid border-x border-y border-neutral-600"></button>
                  <button className="w-5 h-5 bg-white rounded-s rounded-e border-solid border-x border-y border-neutral-600"></button>
                  <button className="w-5 h-5 bg-white rounded-s rounded-e border-solid border-x border-y border-neutral-600"></button>
                  <button className="w-5 h-5 bg-white rounded-s rounded-e border-solid border-x border-y border-neutral-600"></button>
                  <button className="w-5 h-5 bg-white rounded-s rounded-e border-solid border-x border-y border-neutral-600"></button>
                  <button className="w-5 h-5 bg-white rounded-s rounded-e border-solid border-x border-y border-neutral-600"></button>
                  <button className="w-5 h-5 bg-white rounded-s rounded-e border-solid border-x border-y border-neutral-600"></button>
                  <button className="w-5 h-5 bg-orange-500 rounded-s rounded-e border-solid border-x border-y border-neutral-600"></button>
                  <button className="w-5 h-5 bg-white rounded-s rounded-e border-solid border-x border-y border-neutral-600"></button>
                  <button className="w-5 h-5 bg-cyan-400 shadow-costom rounded-s rounded-e border-solid border-x border-y border-neutral-600"></button>
                  <button className="w-5 h-5 bg-white rounded-s rounded-e border-solid border-x border-y border-neutral-600"></button>
                  <button className="w-5 h-5  rounded-s rounded-e border-solid border-x border-y border-neutral-600"></button>
                  <button className="w-5 h-5  rounded-s rounded-e border-solid border-x border-y border-neutral-600"></button>
                  <button className="w-5 h-5 bg-white rounded-s rounded-e border-solid border-x border-y border-neutral-600"></button>
                  <button className="w-5 h-5 bg-white rounded-s rounded-e border-solid border-x border-y border-neutral-600"></button>
                  <button className="w-5 h-5 bg-white rounded-s rounded-e border-solid border-x border-y border-neutral-600"></button>
                  <button className="w-5 h-5 bg-white rounded-s rounded-e border-solid border-x border-y border-neutral-600"></button>
                  <button className="w-5 h-5 bg-white rounded-s rounded-e border-solid border-x border-y border-neutral-600"></button>
                  <button className="w-5 h-5 bg-white rounded-s rounded-e border-solid border-x border-y border-neutral-600"></button>
                  <button className="w-5 h-5 bg-white rounded-s rounded-e border-solid border-x border-y border-neutral-600"></button>
                  <button className="w-5 h-5 bg-white rounded-s rounded-e border-solid border-x border-y border-neutral-600"></button>
                  <button className="w-5 h-5 bg-white rounded-s rounded-e border-solid border-x border-y border-neutral-600"></button>
                  <button className="w-5 h-5 bg-white rounded-s rounded-e border-solid border-x border-y border-neutral-600"></button>
                  <button className="w-5 h-5 bg-white rounded-s rounded-e border-solid border-x border-y border-neutral-600"></button>
                  <button className="w-5 h-5 bg-white rounded-s rounded-e border-solid border-x border-y border-neutral-600"></button>
                  <button className="w-5 h-5 bg-white rounded-s rounded-e border-solid border-x border-y border-neutral-600"></button>
                  <button className="w-5 h-5 bg-white rounded-s rounded-e border-solid border-x border-y border-neutral-600"></button>
                  <button className="w-5 h-5 bg-white rounded-s rounded-e border-solid border-x border-y border-neutral-600"></button>
                  <button className="w-5 h-5 bg-white rounded-s rounded-e border-solid border-x border-y border-neutral-600"></button>
                  <button className="w-5 h-5 bg-white rounded-s rounded-e border-solid border-x border-y border-neutral-600"></button>
                  <button className="w-5 h-5 bg-white rounded-s rounded-e border-solid border-x border-y border-neutral-600"></button>
                  <button className="w-5 h-5 bg-white rounded-s rounded-e border-solid border-x border-y border-neutral-600"></button>
                  <button className="w-5 h-5 bg-white rounded-s rounded-e border-solid border-x border-y border-neutral-600"></button>
                  <button className="w-5 h-5 bg-white rounded-s rounded-e border-solid border-x border-y border-neutral-600"></button>
                  <button className="w-5 h-5 bg-white rounded-s rounded-e border-solid border-x border-y border-neutral-600"></button>
                  <button className="w-5 h-5 bg-white rounded-s rounded-e border-solid border-x border-y border-neutral-600"></button>
                  <button className="w-5 h-5 bg-white rounded-s rounded-e border-solid border-x border-y border-neutral-600"></button>
                  <button className="w-5 h-5 bg-white rounded-s rounded-e border-solid border-x border-y border-neutral-600"></button>
                  <button className="w-5 h-5 bg-white rounded-s rounded-e border-solid border-x border-y border-neutral-600"></button>
                  <button className="w-5 h-5 bg-white rounded-s rounded-e border-solid border-x border-y border-neutral-600"></button>
                  <button className="w-5 h-5 bg-white rounded-s rounded-e border-solid border-x border-y border-neutral-600"></button>
                  <button className="w-5 h-5 bg-white rounded-s rounded-e border-solid border-x border-y border-neutral-600"></button>
                  <button className="w-5 h-5 bg-white rounded-s rounded-e border-solid border-x border-y border-neutral-600"></button>
                  <button className="w-5 h-5 bg-white rounded-s rounded-e border-solid border-x border-y border-neutral-600"></button>
                  <button className="w-5 h-5 bg-white rounded-s rounded-e border-solid border-x border-y border-neutral-600"></button>
                  <button className="w-5 h-5 bg-white rounded-s rounded-e border-solid border-x border-y border-neutral-600"></button>
                  <button className="w-5 h-5 bg-white rounded-s rounded-e border-solid border-x border-y border-neutral-600"></button>
                  <button className="w-5 h-5 bg-white rounded-s rounded-e border-solid border-x border-y border-neutral-600"></button>
                  <button className="w-5 h-5 bg-white rounded-s rounded-e border-solid border-x border-y border-neutral-600"></button>
                  <button className="w-5 h-5 bg-white rounded-s rounded-e border-solid border-x border-y border-neutral-600"></button>
                  <button className="w-5 h-5 bg-white rounded-s rounded-e border-solid border-x border-y border-neutral-600"></button>
                  <button className="w-5 h-5 bg-white rounded-s rounded-e border-solid border-x border-y border-neutral-600"></button>
                  <button className="w-5 h-5 bg-white rounded-s rounded-e border-solid border-x border-y border-neutral-600"></button>
                  <button className="w-5 h-5 bg-white rounded-s rounded-e border-solid border-x border-y border-neutral-600"></button>
                  <button className="w-5 h-5 bg-white rounded-s rounded-e border-solid border-x border-y border-neutral-600"></button>
                  <button className="w-5 h-5 bg-white rounded-s rounded-e border-solid border-x border-y border-neutral-600"></button>
                  <button className="w-5 h-5 bg-white rounded-s rounded-e border-solid border-x border-y border-neutral-600"></button>
                  <button className="w-5 h-5 bg-white rounded-s rounded-e border-solid border-x border-y border-neutral-600"></button>
                  <button className="w-5 h-5 bg-white rounded-s rounded-e border-solid border-x border-y border-neutral-600"></button>
                  <button className="w-5 h-5 bg-white rounded-s rounded-e border-solid border-x border-y border-neutral-600"></button>
                  <button className="w-5 h-5 bg-white rounded-s rounded-e border-solid border-x border-y border-neutral-600"></button>
                  <button className="w-5 h-5 bg-white rounded-s rounded-e border-solid border-x border-y border-neutral-600"></button>
                  <button className="w-5 h-5 bg-white rounded-s rounded-e border-solid border-x border-y border-neutral-600"></button>
                  <button className="w-5 h-5 bg-white rounded-s rounded-e border-solid border-x border-y border-neutral-600"></button>
                  <button className="w-5 h-5 bg-white rounded-s rounded-e border-solid border-x border-y border-neutral-600"></button>
                  <button className="w-5 h-5 bg-white rounded-s rounded-e border-solid border-x border-y border-neutral-600"></button>
                  <button className="w-5 h-5 bg-white rounded-s rounded-e border-solid border-x border-y border-neutral-600"></button>
                  <button className="w-5 h-5 bg-white rounded-s rounded-e border-solid border-x border-y border-neutral-600"></button>
                  <button className="w-5 h-5 bg-white rounded-s rounded-e border-solid border-x border-y border-neutral-600"></button>
                  <button className="w-5 h-5 bg-white rounded-s rounded-e border-solid border-x border-y border-neutral-600"></button>
                  <button className="w-5 h-5 bg-white rounded-s rounded-e border-solid border-x border-y border-neutral-600"></button>
                  <button className="w-5 h-5 bg-white rounded-s rounded-e border-solid border-x border-y border-neutral-600"></button>
                  <button className="w-5 h-5 bg-white rounded-s rounded-e border-solid border-x border-y border-neutral-600"></button>
                  <button className="w-5 h-5 bg-white rounded-s rounded-e border-solid border-x border-y border-neutral-600"></button>
                  <button className="w-5 h-5 bg-white rounded-s rounded-e border-solid border-x border-y border-neutral-600"></button>
                  <button className="w-5 h-5 bg-white rounded-s rounded-e border-solid border-x border-y border-neutral-600"></button>
                  <button className="w-5 h-5 bg-white rounded-s rounded-e border-solid border-x border-y border-neutral-600"></button>
                  <button className="w-5 h-5 bg-white rounded-s rounded-e border-solid border-x border-y border-neutral-600"></button>
                  <button className="w-5 h-5 bg-white rounded-s rounded-e border-solid border-x border-y border-neutral-600"></button>
                  <button className="w-5 h-5 bg-white rounded-s rounded-e border-solid border-x border-y border-neutral-600"></button>
                  <button className="w-5 h-5 bg-white rounded-s rounded-e border-solid border-x border-y border-neutral-600"></button>
                  <button className="w-5 h-5 bg-white rounded-s rounded-e border-solid border-x border-y border-neutral-600"></button>
                  <button className="w-5 h-5 bg-white rounded-s rounded-e border-solid border-x border-y border-neutral-600"></button>
                  <button className="w-5 h-5 bg-white rounded-s rounded-e border-solid border-x border-y border-neutral-600"></button>
                  <button className="w-5 h-5 bg-white rounded-s rounded-e border-solid border-x border-y border-neutral-600"></button>
                  <button className="w-5 h-5 bg-white rounded-s rounded-e border-solid border-x border-y border-neutral-600"></button>
                  <button className="w-5 h-5 bg-white rounded-s rounded-e border-solid border-x border-y border-neutral-600"></button>
                  <button className="w-5 h-5 bg-white rounded-s rounded-e border-solid border-x border-y border-neutral-600"></button>
                  <button className="w-5 h-5 bg-white rounded-s rounded-e border-solid border-x border-y border-neutral-600"></button>
                  <button className="w-5 h-5 bg-white rounded-s rounded-e border-solid border-x border-y border-neutral-600"></button>
                </div>  */}
                <div className="flex text-white text-sm font-light justify-center gap-3 pb-3">
                  <div>
                    <div className="flex gap-2 items-center mb-2">
                      <div className="w-5 h-5 bg-white rounded-s rounded-e border-solid border-x border-y border-neutral-600"></div>
                      <span>Свободно (250руб)</span>
                    </div>
                    <div className="flex gap-2 items-center">
                      <div className="w-5 h-5 bg-orange-500 rounded-s rounded-e border-solid border-x border-y border-neutral-600"></div>
                      <span>Свободно VIP (350руб)</span>
                    </div>
                  </div>
                  <div>
                    <div className="flex gap-2 items-center mb-2">
                      <div className="w-5 h-5  rounded-s rounded-e border-solid border-x border-y border-neutral-600"></div>
                      <span>Занято</span>
                    </div>
                    <div className="flex gap-2 items-center">
                      <div className="w-5 h-5 bg-cyan-400 shadow-costom rounded-s rounded-e border-solid border-x border-y border-neutral-600"></div>
                      <span>Выбрано</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center">
              <button className="my-8 focus:outline-none text-white bg-teal-500 hover:bg-teal-600 focus:ring-1 focus:ring-teal-300 shadow-md font-medium rounded-sm uppercase text-sm px-8 py-3">
                Забронировать
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hall;
