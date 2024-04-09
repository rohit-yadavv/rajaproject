const LeftSideBar = () => {
  return (
    <section className="custom-scrollbar sticky left-0 top-0 flex h-screen flex-col justify-between overflow-y-auto border-r border-light-800 p-6 pt-2 dark:border-dark-200 dark:shadow-none max-sm:hidden lg:w-[300px] bg-[#F3F4F6]">
      <div className="flex flex-1 flex-col gap-4">
        <div className="flex items-center justify-between">
          <div className="flex gap-2">
            <img
              src="/src/assets/logoo.png"
              width={26}
              className="inline rounded-[50%]"
              alt="lock"
            />
            <p className="text-xl font-bold">refero team</p>
          </div>
          <img src="/src/assets/alarm.png" width={16} alt="alarm" />
        </div>
        <div className="flex gap-3">
          <input
            type="text"
            placeholder="Ask your AI assistant"
            className="p-2 rounded-md"
          />
          <button className="bg-white rounded-md p-3">
            <img src="/src/assets/search.png" alt="search" />
          </button>
        </div>
        <div className="bg-[#d1d1d1] p-2 rounded-md">
          <p className="font-bold">Your team used 8/50 free docs </p>
          <p className="text-xs"> Upgrade to create unlimited docs </p>
        </div>
        <div className="flex-col gap-3">
          <p className="flex items-center pb-2">
            <img
              src="/src/assets/clock.png"
              width={14}
              className="inline mr-2"
              alt="lock"
            />{" "}
            Catch up
          </p>
          <p className="flex items-center pb-2">
            <img
              src="/src/assets/discuss.png"
              width={14}
              className="inline mr-2"
              alt="lock"
            />{" "}
            Discussions
          </p>
        </div>
        <div>
          <p className="font-bold">Favorites</p>
          <p>👋 Getting Started</p>
        </div>
        <div>
          <p className="font-bold flex-col pb-2">My Channels</p>
          <p className="flex items-center pb-2">
            <img
              src="/src/assets/arrow.jpg"
              className="mr-2"
              width={16}
              alt=""
            />
            <img
              src="/src/assets/lock.png"
              width={14}
              className="inline mr-2"
              alt="lock"
            />{" "}
            My Private channel
          </p>
          <p className="bg-[#E5E9F5] p-1 rounded-md">👋 Getting Started</p>
          <p className="flex items-center pb-2">
            <img
              src="/src/assets/arrow.jpg"
              className="mr-2"
              width={16}
              alt=""
            />
            <img
              src="/src/assets/book.png"
              width={14}
              className="inline mr-2"
              alt="lock"
            />{" "}
            Engineering
          </p>
          <p className="flex items-center pb-2">
            <img
              src="/src/assets/arrow.jpg"
              className="mr-2"
              width={16}
              alt=""
            />
            <img
              src="/src/assets/book.png"
              width={14}
              className="inline mr-2"
              alt="lock"
            />{" "}
            Product
          </p>
        </div>
        <div className="absolute bottom-0">
          <p className="flex items-center pb-2">
            <img
              src="/src/assets/add.png"
              width={14}
              className="inline mr-2"
              alt="lock"
            />{" "}
            Add People
          </p>
          <p className="flex items-center pb-2">
            <img
              src="/src/assets/template.png"
              width={14}
              className="inline mr-2"
              alt="lock"
            />{" "}
            Templates
          </p>
          <p className="flex items-center pb-2">
            <img
              src="/src/assets/download.png"
              width={14}
              className="inline mr-2"
              alt="lock"
            />{" "}
            Shared with me
          </p>
          <p className="flex items-center pb-2">
            <img
              src="/src/assets/archive.svg"
              width={14}
              className="inline mr-2"
              alt="lock"
            />{" "}
            Archive
          </p>
        </div>
      </div>
    </section>
  );
};

export default LeftSideBar;
