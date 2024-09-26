import React from "react";
import "./App.css";
import Hall from "./pages/Hall";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Admin from "./pages/Admin";
import { Routes, Route } from "react-router-dom";

function App() {
  const [data, setData] = React.useState({});

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://shfe-diplom.neto-server.ru/alldata"
      );
      const result = await response.json();

      setData(result.result);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              films={data.films || []}
              halls={data.halls || []}
              seances={data.seances || []}
            />
          }
        />
        <Route
          path="/hall"
          element={
            <Hall
              films={data.films || []}
              halls={data.halls || []}
              seances={data.seances || []}
            />
          }
        />
        <Route path="/login" element={<Login />} />
        <Route
          path="/admin"
          element={<Admin halls={data.halls || []} onChange={fetchData} />}
        />
      </Routes>
    </>
  );
}

export default App;
