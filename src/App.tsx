import { FC } from "react";
import Header from "./common/Header";
import Hero from "./common/Hero/Hero";
import PortoFolio from "./components/PortoFolio/PortoFolio";

const App: FC = () => {
  return (
    <main className="w-full min-h-screen  flex flex-col items-center pb-[100px]">
      <Header />
      <Hero />
      <PortoFolio />
    </main>
  );
};

export default App;
