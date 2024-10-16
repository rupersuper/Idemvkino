import React from "react";
import "./App.css";
import Hall from "./pages/Hall";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Admin from "./pages/admin/Admin";
import Payment from "./pages/Payment";
import Ticket from "./pages/Ticket";
import { Routes, Route } from "react-router-dom";

export const TicketContext = React.createContext("");

function App() {
  const [ticketData, setTicketData] = React.useState([]);
  const [data, setData] = React.useState({});

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://shfe-diplom.neto-server.ru/alldata"
        // "https://665b7354003609eda460ea2c.mockapi.io/data"
      );
      const result = await response.json();
      // console.log(result);

      setData(result.result);
      // setData(result[0]);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <TicketContext.Provider value={{ ticketData, setTicketData }}>
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
          <Route path="payment" element={<Payment />} />
          <Route path="ticket" element={<Ticket />} />
        </Routes>
      </TicketContext.Provider>
    </>
  );
}

export default App;
