import Cards from "../components/Cards";
import Header from "../components/Header";
import SeanceData from "../components/SeanceData";

const Home = ({ films, halls, groupedSeances }) => {
  console.log(groupedSeances);

  return (
    <div className="bg-[url('./assets/77987fbb92422660c7bd27edcefc669d.jpeg')] bg-cover bg-no-repeat w-full h-full bg-fixed">
      <div className="max-w-5xl my-0 mx-auto">
        <Header />
        <SeanceData />
        <div className="w-full">
          {films.map((film) => {
            const seancesByHall = groupedSeances[film.id] || {};
            return (
              <Cards
                key={film.id}
                film={film}
                halls={halls}
                seances={seancesByHall}
              />
            );
          })}
        </div>
        <div className="p-4 w-full text-center">
          <a className="mx-auto" href="#">
            Copyright © 2024
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
