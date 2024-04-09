function Alert() {
  return (
    <div className="text-white bg-[#4488ED] h-12 w-full flex items-center justify-center">
      <p className=" text-center text-xs">
        Enable browser notifications to avoid missing out on important activity
      </p>
      <button className="absolute top-2 flex gap-1 right-10 p-2 text-xs rounded-sm bg-[#1267E3]">
        <img
          src="/src/assets/alarm.png"
          className="invert inset-0"
          width={16}
          alt="alarm"
        />
        Enable notifications
      </button>
      <div className="absolute top-3 right-4">X</div>
    </div>
  );
}

export default Alert;
