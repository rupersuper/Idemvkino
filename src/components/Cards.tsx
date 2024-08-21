const Cards = ({ film, halls, seances }) => {
  return (
    <>
      <div className="mb-8 p-4 bg-white/90 py-3 px-5 rounded-sm">
        <div className="flex gap-3">
          <div className="min-w-32 before:absolute before:translate-x-32 before:content-[''] before:bg-slate-700 before:w-2 before:h-6 before:block">
            <img className="w-32 h-44" src={film.film_poster} alt="poster" />
          </div>
          <div>
            <div className="font-bold text-base">{film.film_name}</div>
            <div className="font-normal text-sm">{film.film_description}</div>
            <span className="font-light text-sm">
              {film.film_duration} минут{" "}
            </span>
            <br />
            <span className="font-light text-sm">{film.film_origin}</span>
          </div>
        </div>
        {Object.entries(seances).map(([hallId, hallSeances]) => {
          const hall = halls.find(
            (h) => h.id === Number(hallSeances.seance_hallid)
          );
          console.log(seances);

          return (
            <div className="mb-4" key={hallId}>
              <div className="font-bold text-base mb-2">
                {`Зал ${hall.hall_name}`}
              </div>
              <div className="flex gap-1">
                {seances
                  .filter((seance) => seance.seance_hallid === hall.id)
                  .map((seance) => (
                    <button
                      className="text-base p-2 bg-white rounded-sm shadow-md"
                      key={seance.id}
                    >
                      {seance.seance_time}
                    </button>
                  ))}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default Cards;
