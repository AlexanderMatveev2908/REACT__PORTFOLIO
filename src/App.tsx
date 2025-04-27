import { FC } from "react";
import Header from "./components/Header";

const App: FC = () => {
  return (
    <main className="w-full grid justify-items-center min-h-screen px-[32px] sm:px-[128px]">
      <Header />
    </main>
  );
};

export default App;
