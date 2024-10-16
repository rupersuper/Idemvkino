import React from "react";
import { format, addDays } from "date-fns";
import { ru } from "date-fns/locale";

const SeanceData = () => {
  const [activeData, setActiveData] = React.useState(0);

  const handleClick = (number) => {
    setActiveData(number);
  };

  const arrDays = [];
  const arrWeekofDay = [];

  (function pushDay() {
    for (let i = 0; i < 6; i++) {
      arrDays.push(format(addDays(new Date(), i), "d"));
      arrWeekofDay.push(
        format(addDays(new Date(), i), "EEEEEE", { locale: ru })
      );
    }
  })();

  return (
    <div className="w-full flex justify-between items-center mt-2 mb-8 text-xs">
      {arrDays.map((day, i) => {
        const isToday = day === format(new Date(), "d");
        return (
          <button
            key={i}
            onClick={() => handleClick(i)}
            className={`bg-white/90 py-3 px-5 min-w-32 rounded-sm h-14 ${
              activeData === i
                ? "min-w-60 min-h-[60px] font-black bg-white "
                : null
            } text-left`}
          >
            {isToday ? (
              <>
                <span>
                  Сегодня
                  <br />
                </span>
                <span>
                  {arrWeekofDay[i].charAt(0).toUpperCase() +
                    arrWeekofDay[i].slice(1)}
                  ,{" "}
                </span>
                <span>{day}</span>
              </>
            ) : null}
            {!isToday ? (
              <>
                <span>
                  {arrWeekofDay[i].charAt(0).toUpperCase() +
                    arrWeekofDay[i].slice(1)}
                  ,{" "}
                </span>
                <br />
                <span>{day}</span>
              </>
            ) : null}
          </button>
        );
      })}
      <button className="bg-white/90 py-3 px-5 min-w-32 h-14 relative rounded-sm text-left">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="3"
          stroke="currentColor"
          className="size-5 left-1/3 absolute top-1/3 w-12"
        >
          <path
            strokeLinecap="square"
            strokeLinejoin="miter"
            d="m8.25 4.5 7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>
    </div>
  );
};

export default SeanceData;
