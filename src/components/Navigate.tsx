const Navigate = () => {
  return (
    <div className="w-full flex justify-between min-h-8 mt-2 mb-8 text-xs">
      <button className="bg-white/90 py-3 px-5 min-w-32 rounded-sm active:min-w-60 active:font-black text-left">
        <span>
          Сегодня
          <br />
        </span>
        <span>Пн, </span>
        <span>31</span>
      </button>
      <button className="bg-white/90 py-3 px-5 min-w-32 rounded-sm active:min-w-60 active:font-black text-left">
        <span>
          Вт,
          <br />
        </span>
        <span>1</span>
      </button>
      <button className="bg-white py-3 px-5 min-w-32 rounded-sm active:min-w-60 active:font-black text-left">
        <span>
          Ср,
          <br />
        </span>
        <span>2</span>
      </button>
      <button className="bg-white/90 py-3 px-5 min-w-32 rounded-sm active:min-w-60 active:font-black text-left">
        <span>
          Чт,
          <br />
        </span>
        <span>3</span>
      </button>
      <button className="bg-white/90 py-3 px-5 min-w-32 rounded-sm active:min-w-60 active:font-black text-left">
        <span>
          Пт,
          <br />
        </span>
        <span>4</span>
      </button>
      <button className="bg-white/90 py-3 px-5 min-w-32 rounded-sm active:min-w-60 active:font-black text-left">
        <span>
          Сб,
          <br />
        </span>
        <span>5</span>
      </button>
      <button className="bg-white/90 py-3 px-5 min-w-32 relative rounded-sm text-left">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="3"
          stroke="currentColor"
          className="size-5 left-1/3 absolute top-1/3 w-12"
        >
          <path
            stroke-linecap="square"
            stroke-linejoin="square"
            d="m8.25 4.5 7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>
    </div>
  );
};

export default Navigate;
