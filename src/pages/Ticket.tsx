import Header from "../components/Header";

const Ticket = () => {
  return (
    <div className="bg-[url('./assets/77987fbb92422660c7bd27edcefc669d.jpeg')] bg-cover bg-no-repeat w-full h-screen bg-fixed">
      <div className="max-w-5xl my-0 mx-auto ">
        <Header />
        <div className="w-full border_dotted pt-[2.6px] pb-[3px] -mb-[1px]">
          <div className="relative font-bold text-2xl uppercase text-amber-600 p-6 bg-[#F1EBE6]/95 ">
            Электронный билет
          </div>
        </div>
        <div className="w-full  border_dotted py-[2.6px] -mt-[1px]">
          <div className="bg-[#F1EBE6]/95 p-6">
            <div className="mb-2">
              На фильм:&nbsp;
              <span className="font-bold">
                Звёздные войны XXIII: Атака клонированных клонов
              </span>
            </div>
            <div className="mb-2">
              Места:&nbsp;
              <span className="font-bold">6,7</span>
            </div>
            <div className="mb-2">
              В зале:&nbsp;
              <span className="font-bold">1</span>
            </div>
            <div className="mb-2">
              Начало сеанса:&nbsp;
              <span className="font-bold">18:30</span>
            </div>
            <div>
              <img
                className="mx-auto my-6"
                src=".\src\assets\qr-code.png"
                alt=""
              />
            </div>
            <div className="text-sm font-light">
              <span>
                Покажите QR-код нашему контроллеру для подтверждения
                бронирования.
              </span>
              <br />
              <span>Приятного просмотра!</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ticket;
