const Halls = ({ hall, seances }) => {
  const filteredSeances = seances.filter(
    (seance) => seance.seance_hallid === hall.id
  );
  return (
    <div className="mb-4">
      <div className="font-bold text-base mb-2">{`Зал ${hall.hall_name}`}</div>
      <div className="flex gap-1">
        {filteredSeances.map((seance) => (
          <button 
            className="text-base p-2 bg-white rounded-sm shadow-md"
            key={seance.id}
          >
            {seance.seance_time}
          </button>
        ))}

        {/* {seances.map((seance) => (
          <button
            className="text-base p-2 bg-white rounded-sm shadow-md"
            key={seance.id}
          >
            {seance.seance_time}
          </button>
        ))} */}
      </div>
    </div>
  );
};

export default Halls;
