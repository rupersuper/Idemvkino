import Cards from "../components/Cards";
import Header from "../components/Header";
import SeanceData from "../components/SeanceData";

const Home = ({ films, halls, seances }) => {
  return (
    <div className="bg-[url('./assets/77987fbb92422660c7bd27edcefc669d.jpeg')] bg-cover bg-no-repeat w-full h-full bg-fixed">
      <div className="max-w-5xl my-0 mx-auto min-h-screen flex flex-col">
        <Header />
        <SeanceData />
        <div className="w-full flex-1">
          {films.map((film) => {
            return (
              <Cards
                key={film.id}
                film={film}
                halls={halls}
                seances={seances}
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
