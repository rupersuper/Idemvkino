import React from "react";
import { useNavigate } from "react-router-dom";
import { TicketContext } from "../App";
import Header from "../components/Header";

const Payment = () => {
  const navigate = useNavigate();
  const { ticketData, setTicketData } = React.useContext(TicketContext);

  if (ticketData.length === 0) {
    navigate("/");
    return null;
  }

  const { filmName, hallName, time } = ticketData[0];

  return (
    <div className="bg-[url('./assets/77987fbb92422660c7bd27edcefc669d.jpeg')] bg-cover bg-no-repeat w-full h-screen bg-fixed">
      <div className="max-w-5xl my-0 mx-auto ">
        <Header />
        <div className="w-full border_dotted pt-[2.6px] pb-[3px] -mb-[1px]">
          <div className="relative font-bold text-2xl uppercase text-amber-600 p-6 bg-[#F1EBE6]/95 ">
            Вы выбрали Билеты:
          </div>
        </div>
        <div className="w-full  border_dotted py-[2.6px] -mt-[1px]">
          <div className="bg-[#F1EBE6]/95 p-6">
            <div className="mb-2">
              На фильм:&nbsp;
              <span className="font-bold">{filmName}</span>
            </div>
            <div className="mb-2">
              Места:&nbsp;
              <span className="font-bold">6,7</span>
            </div>
            <div className="mb-2">
              В зале:&nbsp;
              <span className="font-bold">{hallName}</span>
            </div>
            <div className="mb-2">
              Начало сеанса:&nbsp;
              <span className="font-bold">{time}</span>
            </div>
            <div className="mb-2">
              Стоимость:&nbsp;
              <span className="font-bold">600 </span>
              <span>рублей</span>
            </div>
            <div className="text-center">
              <button className="my-8 focus:outline-none text-white bg-teal-500 hover:bg-teal-600 focus:ring-1 focus:ring-teal-300 shadow-lg font-medium rounded-sm uppercase text-sm px-8 py-3">
                Получить код бронирования
              </button>
            </div>
            <div className="text-sm font-light">
              <span>
                После оплаты билет будет доступен в этом окне, а также придёт
                вам на почту. Покажите QR-код нашему контроллёру у входа в зал.
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

export default Payment;
