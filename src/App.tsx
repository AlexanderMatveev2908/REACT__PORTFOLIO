import { FC } from "react";
import Header from "./common/Header";
import Hero from "./common/Hero/Hero";

const App: FC = () => {
  return (
    <main className="w-full min-h-screen  flex flex-col items-center">
      <Header />
      <Hero />
    </main>
  );
};

export default App;
