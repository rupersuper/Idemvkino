import React from "react";
import { useNavigate } from "react-router-dom";

const AuthForm = () => {
  const navigate = useNavigate();
  const [data, setData] = React.useState({});

  const handleChange = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("https://shfe-diplom.neto-server.ru/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      if (result.success) {
        localStorage.setItem("isLogin", "true");
        navigate("/admin");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <>
      <div className="mx-auto w-[480px]">
        <div className="">
          <div className="p-4 bg-[#63536C] text-center">
            <span className="text-white text-xl uppercase font-bold">
              Авторизация
            </span>
          </div>
          <form
            className="flex flex-col gap-2 bg-[#B7B7B7] py-9 px-24"
            onSubmit={handleSubmit}
          >
            <div className="flex flex-col">
              <label className="text-[#848484]" htmlFor="email">
                E-mail
              </label>
              <input
                required
                onChange={handleChange}
                className="p-1 focus:outline-none focus:shadow-[0_0_0_2px_black_inset]"
                type="email"
                name="login"
                placeholder="example@domain.xyz"
                id="email"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-[#848484]" htmlFor="password">
                Пароль
              </label>
              <input
                required
                onChange={handleChange}
                className="p-1 focus:outline-none focus:shadow-[0_0_0_2px_black_inset]"
                type="password"
                name="password"
                id="password"
              />
            </div>

            <button className="mt-5 mx-auto w-44 focus:outline-none text-white bg-teal-600 hover:bg-teal-800 focus:ring-1 focus:ring-teal-300 shadow font-medium rounded-sm uppercase text-sm px-5 py-3">
              Авторизоваться
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AuthForm;
