import { NavLink } from "react-router-dom";
import Hall from "../pages/Hall";

const Halls = ({ hall, seances }) => {
  const filteredSeances = seances.filter(
    (seance) => seance.seance_hallid === hall.id
  );
  const handleClick = (seanceId) => {
  };
  return (
    <div className="mb-4">
      <div className="font-bold text-base mb-2">{`Зал ${hall.hall_name}`}</div>
      <div className="flex gap-1">
        {filteredSeances.map((seance) => (
          <NavLink
            to={`/hall?id=${seance.id}`}
            onClick={() => handleClick(seance.id)}
            className="text-base p-2 bg-white rounded-sm shadow-md"
            key={seance.id}
          >
            {seance.seance_time}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Halls;
