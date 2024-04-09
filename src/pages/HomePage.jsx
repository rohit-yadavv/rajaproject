function HomePage() {
  return (
    <div className="flex min-h-screen w-full items-center flex-col bg-light-900 dark:bg-dark-100">
      <div className="flex w-full justify-between">
        <div className="flex gap-6">
          <p className="text-gray-300"> {"<  >"} </p>
          <p>
            <img
              src="/src/assets/lock.png"
              width={15}
              className="inline "
              alt="lock"
            />{" "}
            My private channel / 👋 Getting started
          </p>
        </div>
        <div className="flex gap-3">
          <p>Share</p>
          <img src="/src/assets/chat.png" width={15} alt="" />
          <img src="/src/assets/star-filled.svg" width={15} alt="" />
          <img src="/src/assets/menu.png" width={15} alt="" />
        </div>
      </div>
      <div className="w-[700px]">
        <h1 className="py-3 text-5xl font-bold text-dark-100 dark:text-light-900">
          Getting Started
        </h1>
        <div className="bg-[#F6F7F9] p-3 my-6 rounded-sm flex gap-2 m-auto">
          <p>🔒</p>
          <p>
            This doc is in your private channel, where you can store your
            private work. You can share docs one by one from here, but to
            properly organize your team&apos;s knowledge base, use workspace
            channels.
            <br />
            <br />
            You can make channels public to make all docs visible to everyone on
            the team, or private if you want the channel&apos;s docs to only be
            visible by a selection of teammates.
          </p>
        </div>
        <h2 className="my-8 text-3xl font-bold">
          Collaborate with your team with these three features
        </h2>
        <p className="font-bold text-2xl">Docs</p>
        <img src="/src/assets/homeimg.png" alt="homeimg" width="700px" />
        <p className="p-2 bg-[#f6f7f9] rounded-sm">
          💡 Give it a go by typing / below
        </p>
      </div>
    </div>
  );
}

export default HomePage;
