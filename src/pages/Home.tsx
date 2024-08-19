import Cards from "../components/Cards";
import Header from "../components/Header";
import Navigate from "../components/Navigate";

const Home = () => {
  return (
    <div className="bg-[url('./assets/77987fbb92422660c7bd27edcefc669d.jpeg')] bg-cover bg-no-repeat w-full h-full bg-fixed">
      <div className="max-w-5xl my-0 mx-auto">
        <Header />
        <Navigate />
        <div className="w-full">
          <Cards />
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
