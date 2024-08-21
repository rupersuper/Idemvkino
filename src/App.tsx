import React from "react";
import "./App.css";
import Hall from "./pages/Hall";
import Home from "./pages/home";

function App() {
  const [data, setData] = React.useState({});
  // const [films, setFilms] = React.useState([]);
  // const [seances, setSeances] = React.useState([]);
  const [groupedSeances, setGroupedSeances] = React.useState({});
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://shfe-diplom.neto-server.ru/alldata"
        );
        const result = await response.json();

        // Группируем сеансы по ID фильма
        const grouped = result.result.seances.reduce((acc, seance) => {
          const filmId = seance.seance_filmid;
          if (!acc[filmId]) {
            acc[filmId] = [];
          }
          acc[filmId].push(seance);
          return acc;
        }, {});

        setGroupedSeances(grouped);
        setData(result.result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  console.log(groupedSeances);
  console.log(data);

  return (
    <>
      {/* <Hall /> */}
      <Home
        films={data.films || []}
        halls={data.halls || []}
        groupedSeances={groupedSeances}
      />
    </>
  );
}

export default App;
