import poster from "../assets/poster1.jpg";
import poster2 from "../assets/poster2.jpg";

const Cards = () => {
  return (
    <>
      <div className="mb-8 p-4 bg-white/90 py-3 px-5 rounded-sm">
        <div className="flex gap-3">
          <div className="before:absolute before:translate-x-32 before:content-[''] before:bg-slate-700 before:w-2 before:h-6 before:block">
            <img className="w-32" src={poster} alt="poster" />
          </div>
          <div>
            <div className="font-bold text-base">
              Звёздные войны XXIII: Атака клонированных клонов
            </div>
            <div className="font-normal text-sm">
              Две сотни лет назад малороссийские хутора разоряла шайка
              нехристей-ляхов во главе с могущественным колдуном.
            </div>
            <span className="font-light text-sm">130 минут </span>
            <span className="font-light text-sm">США</span>
          </div>
        </div>
        <div className="mb-4">
          <div className="font-bold text-base mb-2">Зал 1</div>
          <div className="flex gap-1">
            <button className="text-base p-2 bg-white rounded-sm shadow-md">
              10:20
            </button>
            <button className="text-base p-2 bg-white rounded-sm shadow-md">
              14:10
            </button>
            <button className="text-base p-2 bg-white rounded-sm shadow-md">
              18:40
            </button>
            <button className="text-base p-2 bg-white rounded-sm shadow-md">
              22:00
            </button>
          </div>
        </div>
        <div className="mb-4">
          <div className="font-bold text-base mb-2">Зал 2</div>
          <div className="flex gap-1">
            <button className="text-base p-2 bg-white rounded-sm shadow-md">
              11:15
            </button>
            <button className="text-base p-2 bg-white rounded-sm shadow-md">
              14:40
            </button>
            <button className="text-base p-2 bg-white rounded-sm shadow-md">
              16:00
            </button>
            <button className="text-base p-2 bg-white rounded-sm shadow-md">
              18:30
            </button>
            <button className="text-base p-2 bg-white rounded-sm shadow-md">
              18:30
            </button>
            <button className="text-base p-2 bg-white rounded-sm shadow-md">
              21:00
            </button>
            <button className="text-base p-2 bg-white rounded-sm shadow-md">
              23:30
            </button>
          </div>
        </div>
      </div>
      <div className="mb-8 p-4 bg-white/90 py-3 px-5 rounded-sm">
        <div className="flex gap-3">
          <div className="before:absolute before:translate-x-32 before:content-[''] before:bg-slate-700 before:w-2 before:h-6 before:block">
            <img className="w-32" src={poster2} alt="poster" />
          </div>
          <div>
            <div className="font-bold text-base">Альфа</div>
            <div className="font-normal text-sm">
              20 тысяч лет назад Земля была холодным и неуютным местом, в
              котором смерть подстерегала человека на каждом шагу.
            </div>
            <span className="font-light text-sm">96 минут </span>
            <span className="font-light text-sm">Франция</span>
          </div>
        </div>
        <div className="mb-4">
          <div className="font-bold text-base mb-2">Зал 1</div>
          <div className="flex gap-1">
            <button className="text-base p-2 bg-white rounded-sm shadow-md">
              10:20
            </button>
            <button className="text-base p-2 bg-white rounded-sm shadow-md">
              14:10
            </button>
            <button className="text-base p-2 bg-white rounded-sm shadow-md">
              18:40
            </button>
            <button className="text-base p-2 bg-white rounded-sm shadow-md">
              22:00
            </button>
          </div>
        </div>
        <div className="mb-4">
          <div className="font-bold text-base mb-2">Зал 2</div>
          <div className="flex gap-1">
            <button className="text-base p-2 bg-white rounded-sm shadow-md">
              11:15
            </button>
            <button className="text-base p-2 bg-white rounded-sm shadow-md">
              14:40
            </button>
            <button className="text-base p-2 bg-white rounded-sm shadow-md">
              16:00
            </button>
            <button className="text-base p-2 bg-white rounded-sm shadow-md">
              18:30
            </button>
            <button className="text-base p-2 bg-white rounded-sm shadow-md">
              18:30
            </button>
            <button className="text-base p-2 bg-white rounded-sm shadow-md">
              21:00
            </button>
            <button className="text-base p-2 bg-white rounded-sm shadow-md">
              23:30
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Cards;
