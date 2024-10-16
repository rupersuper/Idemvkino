import Header from "../components/Header";
import "../App.css";
import React from "react";
import { NavLink, useSearchParams, useLocation } from "react-router-dom";
import { TicketContext } from "../App";

const Hall = ({ films, halls, seances }) => {
  const location = useLocation();
  const { ticketData, setTicketData } = React.useContext(TicketContext);
  const handleClick = (filmName, hallName, seanceTime) => {
    setTicketData((prevData) => [
      { filmName: filmName, hallName: hallName, time: seanceTime },
      ...prevData,
    ]);
  };
  const [selectedSeats, setSelectedSeats] = React.useState([]);

  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");

  let film = null;
  let hall = null;
  let seance = null;

  if (seances.length > 0) {
    const filterSeances = seances.find((seance) => seance.id === Number(id));

    if (filterSeances) {
      const { seance_filmid, seance_hallid, seance_time } = filterSeances;
      seance = seance_time;
      film = films.filter((item) => item.id === seance_filmid)[0];
      hall = halls.filter((item) => item.id === seance_hallid)[0];
    }
  }

  const toggleSeatSelection = (row, seatIndex, seat) => {
    const seatId = `${row}р-${seatIndex}м`;
    if (seat !== "taken" && seat !== "disabled") {
      setSelectedSeats((prevSelectedSeats) =>
        prevSelectedSeats.includes(seatId)
          ? prevSelectedSeats.filter((seat) => seat !== seatId)
          : [...prevSelectedSeats, seatId]
      );
      setTicketData((prevData) => {
        const selected = prevData.some((seat) => seat.seat === seatId);
        return selected
          ? prevData.filter((seat) => seat.seat !== seatId)
          : [...prevData, { seat: seatId, price: seat }];

        // prevData.includes(seatId)
        //   ? prevData.filter((seat) => seat.Место !== seatId)
        //   : [...prevData, { seat: seatId, Стоимость: seat }];
      });
    } else {
      return null;
    }
  };
  React.useEffect(() => {
    setTicketData([]);
  }, [location.pathname]);


  const getSeatClass = (row, seatIndex, seat) => {
    const seatId = `${row}р-${seatIndex}м`;
    const isSelected = selectedSeats.includes(seatId);
    if (isSelected) {
      return "cheked";
    } else {
      return seat;
    }
  };

  if (!film || !hall || !seance) {
    return null;
  }
  console.log(ticketData);
  return (
    <>
      <div className="bg-[url('./assets/77987fbb92422660c7bd27edcefc669d.jpeg')] bg-cover bg-no-repeat w-full h-full bg-fixed">
        <div className="max-w-5xl my-0 mx-auto h-screen">
          <Header />
          <div className="w-full bg-white/90">
            <div className="p-3">
              <h1 className="font-bold text-base">{film.film_name}</h1>

              <div className="font-light text-sm">
                <span>Начало сеанса: </span>
                <span>{seance}</span>
              </div>

              <div className="font-bold text-base">{`Зал ${hall.hall_name}`}</div>
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
                      strokeOpacity="1.000000"
                      strokeWidth="1.000000"
                    />
                  </svg>
                  <div className=" text-white absolute top-3 right-1/2 translate-x-1/2 text-xs">
                    экран
                  </div>
                </div>
                <div
                  className="grid gap-1 grid-cols-10 mb-7 mx-auto w-max"
                  style={{
                    gridTemplateColumns: `repeat(${hall.hall_places}, minmax(0, 1fr))`,
                  }}
                >
                  {hall.hall_config.map((seats, row) =>
                    seats.map((seat, seatIndex) => (
                      <button
                        onClick={() =>
                          toggleSeatSelection(row, seatIndex, seat)
                        }
                        key={`${row}-${seatIndex}`}
                        className={getSeatClass(row, seatIndex, seat)}
                      ></button>
                    ))
                  )}
                </div>
                <div className="flex text-white text-sm font-light justify-center gap-3 pb-3">
                  <div>
                    <div className="flex gap-2 items-center mb-2">
                      <div className="standart"></div>
                      <span>{`Свободно (${hall.hall_price_standart} руб)`}</span>
                    </div>
                    <div className="flex gap-2 items-center">
                      <div className="vip"></div>
                      <span>{`Свободно VIP (${hall.hall_price_vip} руб)`}</span>
                    </div>
                  </div>
                  <div>
                    <div className="flex gap-2 items-center mb-2">
                      <div className="taken"></div>
                      <span>Занято</span>
                    </div>
                    <div className="flex gap-2 items-center">
                      <div className="cheked"></div>
                      <span>Выбрано</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center py-8">
              {ticketData.length === 0 ? (
                <span className="focus:outline-none text-white bg-slate-400 shadow-md font-medium rounded-sm uppercase text-sm px-8 py-3">
                  Забронировать
                </span>
              ) : (
                <NavLink
                  onClick={() =>
                    handleClick(film.film_name, hall.hall_name, seance)
                  }
                  to="/payment"
                  className="focus:outline-none text-white bg-teal-500 hover:bg-teal-600 focus:ring-1 focus:ring-teal-300 shadow-md font-medium rounded-sm uppercase text-sm px-8 py-3"
                >
                  Забронировать
                </NavLink>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hall;
