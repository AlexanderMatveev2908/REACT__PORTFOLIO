import { FC } from "react";
import Header from "./common/Header";
import Hero from "./common/Hero/Hero";
import PortoFolio from "./common/PortoFolio/PortoFolio";
import AboutMe from "./common/AboutMe/AboutMe";

const App: FC = () => {
  return (
    <main className="w-full min-h-screen  flex flex-col items-center pb-[100px]">
      <Header />
      <Hero />
      <PortoFolio />
      <AboutMe />
    </main>
  );
};

export default App;
