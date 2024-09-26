import Halls from "../components/Halls";

const Cards = ({ film, halls, seances }) => {
  const filteredHalls = halls.filter((hall) =>
    seances.some(
      (seance) =>
        seance.seance_hallid === hall.id && seance.seance_filmid === film.id
    )
  );

  if (filteredHalls.length === 0) {
    return null;
  }

  return (
    <>
      <div className="mb-8 p-4 bg-white/90 py-3 px-5 rounded-sm">
        <div className="flex gap-4
        ">
          <div className="min-w-32 before:absolute before:translate-x-32 before:content-[''] before:bg-slate-700 before:w-2 before:h-6 before:block">
            <img className="w-32 h-44" src={film.film_poster} alt="poster" />
          </div>
          <div>
            <div className="font-bold text-base leading-none">{film.film_name}</div>
            <div className="font-normal text-sm">{film.film_description}</div>
            <span className="font-light text-sm">
              {film.film_duration} минут
            </span>
            <br />
            <span className="font-light text-sm">{film.film_origin}</span>
          </div>
        </div>
        {filteredHalls.map((hall) => (
          <Halls
            key={hall.id}
            hall={hall}
            seances={seances.filter(
              (seance) => seance.seance_filmid === film.id
            )}
          />
        ))}
      </div>
    </>
  );
};
export default Cards;
