import Alert from "./components/Alert";
import LeftSideBar from "./components/LeftSideBar";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <>
      <Alert />
      <main className="relative bg-light-900 dark:bg-dark-100">
        <div className="flex">
          <LeftSideBar />
          <section className="flex min-h-screen flex-1 flex-col px-6 pb-6 pt-6 max-md:pb-14 sm:px-14">
            <HomePage />
          </section>
        </div>
      </main>
    </>
  );
}

export default App;
