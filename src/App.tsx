import { FC } from "react";
import Header from "./common/Header";
import Hero from "./common/Hero/Hero";
import PortoFolio from "./common/PortoFolio/PortoFolio";
import AboutMe from "./common/AboutMe/AboutMe";
import Footer from "./common/Footer/Footer";

const App: FC = () => {
  return (
    <main className="w-full min-h-screen  flex flex-col items-center">
      <Header />
      <Hero />
      <PortoFolio />
      <AboutMe />
      <Footer />
    </main>
  );
};

export default App;
