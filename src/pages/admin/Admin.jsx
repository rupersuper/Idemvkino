import { useNavigate } from "react-router-dom";
import AdminHeader from "../../components/AdminHeader";
import ModalHall from "../../components/ModalHall";
import ConfiqHalls from "./components/ConfiqHalls";
import React from "react";
import { lastDayOfMonth } from "date-fns";


const Admin = ({ halls, onChange }) => {
  console.log(halls);

  const [modalActive, setModalActive] = React.useState(false);
  const navigate = useNavigate();
  const isAdmin = localStorage.getItem("isLogin") === "true";
  if (!isAdmin) {
    navigate("/login");
    return null;
  }
  const handleDelete = (id) => async () => {
    try {
      const response = await fetch(
        `https://shfe-diplom.neto-server.ru/hall/${id}`,
        {
          method: "DELETE",
        }
      );
      const result = await response.json();
      if (result.success) {
        onChange();
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  return (
    <div className="bg-[url('./assets/login_desktop.png')] bg-cover bg-no-repeat w-full bg-fixed">
      <div className="max-w-5xl my-0 mx-auto">
        <AdminHeader />
        <div>
          <section>
            <div className="w-[962px] bg-[#EAE9EB] bg-opacity-95 mx-auto">
              <div className="p-7 flex items-center h-24 bg-[#63536C] text-white font-bold text-2xl uppercase">
                <h3>Управление залами</h3>
              </div>
              <div className="p-7">
                <h4 className="mb-2">Доступные залы:</h4>
                <ol>
                  {halls.map((hall) => {
                    return (
                      <ul
                        key={hall.id}
                        className="font-medium text-base uppercase leading-7"
                      >
                        {"- "}
                        {hall.hall_name}{" "}
                        <button
                          onClick={handleDelete(hall.id)}
                          className="align-super bg-[url('./assets/delete.png')] w-3 h-3 bg-white p-[10px] bg-no-repeat bg-center rounded"
                        ></button>
                      </ul>
                    );
                  })}
                </ol>
                <button
                  onClick={() => setModalActive(true)}
                  className="my-5 focus:outline-none text-white bg-teal-500 hover:bg-teal-600 focus:ring-1 focus:ring-teal-300 shadow-md font-medium rounded-sm uppercase text-sm px-8 py-3"
                >
                  Создать зал
                </button>
                <ModalHall
                  active={modalActive}
                  setActive={setModalActive}
                  onChange={onChange}
                />
              </div>
            </div>
          </section>
          <section>
            <ConfiqHalls halls={halls} />
            {/* <div className="w-[962px] bg-[#EAE9EB] bg-opacity-95 mx-auto">
              <div className="p-7 flex items-center h-24 bg-[#63536C] text-white font-bold text-2xl uppercase">
                <h3>Конфиграция залов</h3>
              </div>
              <div className="p-7">
                {" "}
                <div className="">
                  <h4 className="mb-2">Выберите зал для конфигурации:</h4>
                  <ol className="flex gap-2 mb-6">
                    {halls.map((hall) => {
                      return (
                        <ul
                          key={hall.id}
                          className="font-medium text-base uppercase leading-7"
                        >
                          <button className="focus:outline-none text-black bg-white hover:bg-[#63536C] hover:text-white shadow-md font-medium rounded-sm text-sm px-2 py-2">
                            {" "}
                            {hall.hall_name}
                          </button>
                        </ul>
                      );
                    })}
                  </ol>
                </div>
                <div>
                  <p className="mb-1">
                    Укажите количество рядов и максимальное количество кресел в
                    ряду:
                  </p>
                  <div className="flex gap-3 text-[#848484] mb-6">
                    <div className="flex flex-col">
                      <label htmlFor="rows">Рядов, шт</label>
                      <input
                        className="p-1 w-[100px]"
                        type="text"
                        id="rows"
                        value={10}
                      />
                    </div>
                    <p className="self-end leading-loose">X</p>
                    <div className="flex flex-col">
                      {" "}
                      <label htmlFor="seats">Мест, шт</label>
                      <input className="p-1 w-[100px]" type="text" value={10} />
                    </div>
                  </div>
                </div>
                <div>
                  <p className="mb-2">
                    Теперь вы можете указать типы кресел на схеме зала:
                  </p>
                  <div className="flex gap-4 text-[#848484] mb-2">
                    <div className="flex">
                      <img src={baseChair} alt="" />
                      &nbsp;- обычные кресла
                    </div>
                    <div className="flex">
                      <img src={vipChair} alt="" />
                      &nbsp;- VIP кресла
                    </div>
                    <div className="flex">
                      <img src={noChair} alt="" />
                      &nbsp;- заблокированные (нет кресла)
                    </div>
                  </div>

                  <p className="text-[#848484]">
                    Чтобы изменить вид кресла, нажмите по нему левой кнопкой
                    мыши
                  </p>
                  <div className="border border-black w-full h-[450px] my-4 flex items-center flex-col">
                    <div className="uppercase tracking-[1.19em] mt-5 ">
                      экран
                    </div>
                    <div className="mt-5">
                      <div className="grid gap-1 mb-7 mx-auto w-max grid-cols-[repeat(11,_minmax(0,_1fr))]">
                        <button className="standart"></button>
                        <button className="standart"></button>
                        <button className="standart"></button>
                        <button className="standart"></button>
                        <button className="standart"></button>
                        <button className="standart"></button>
                        <button className="standart"></button>
                        <button className="standart"></button>
                        <button className="standart"></button>
                        <button className="standart"></button>
                        <button className="standart"></button>
                        <button className="standart"></button>
                        <button className="standart"></button>
                        <button className="standart"></button>
                        <button className="standart"></button>
                        <button className="standart"></button>
                        <button className="standart"></button>
                        <button className="standart"></button>
                        <button className="standart"></button>
                        <button className="standart"></button>
                        <button className="standart"></button>
                        <button className="standart"></button>
                        <button className="standart"></button>
                        <button className="standart"></button>
                        <button className="standart"></button>
                        <button className="standart"></button>
                        <button className="standart"></button>
                        <button className="standart"></button>
                        <button className="standart"></button>
                        <button className="standart"></button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
          </section>
          <section>
            <div className="w-[962px] bg-[#EAE9EB] bg-opacity-95 mx-auto">
              <div className="p-7 flex items-center h-24 bg-[#63536C] text-white font-bold text-2xl uppercase">
                <h3>Конфигурация цен</h3>
              </div>
              <div>
                <h4>Доступные залы:</h4>
                <ol>
                  <ul>-Зал 1</ul>
                  <ul>-Зал 2</ul>
                </ol>
                <button className="my-8 focus:outline-none text-white bg-teal-500 hover:bg-teal-600 focus:ring-1 focus:ring-teal-300 shadow-md font-medium rounded-sm uppercase text-sm px-8 py-3">
                  Создать зал
                </button>
              </div>
            </div>
          </section>
          <section>
            <div className="w-[962px] bg-[#EAE9EB] bg-opacity-95 mx-auto">
              <div className="p-7 flex items-center h-24 bg-[#63536C] text-white font-bold text-2xl uppercase">
                <h3>Сетка сеансов</h3>
              </div>
              <div>
                <h4>Доступные залы:</h4>
                <ol>
                  <ul>-Зал 1</ul>
                  <ul>-Зал 2</ul>
                </ol>
                <button className="my-8 focus:outline-none text-white bg-teal-500 hover:bg-teal-600 focus:ring-1 focus:ring-teal-300 shadow-md font-medium rounded-sm uppercase text-sm px-8 py-3">
                  Создать зал
                </button>
              </div>
            </div>
          </section>
          <section>
            <div className="w-[962px] bg-[#EAE9EB] bg-opacity-95 mx-auto">
              <div className="p-7 flex items-center h-24 bg-[#63536C] text-white font-bold text-2xl uppercase">
                <h3>Открыть продажи</h3>
              </div>
              <div>
                <h4>Доступные залы:</h4>
                <ol>
                  <ul>-Зал 1</ul>
                  <ul>-Зал 2</ul>
                </ol>
                <button className="my-8 focus:outline-none text-white bg-teal-500 hover:bg-teal-600 focus:ring-1 focus:ring-teal-300 shadow-md font-medium rounded-sm uppercase text-sm px-8 py-3">
                  Создать зал
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Admin;
