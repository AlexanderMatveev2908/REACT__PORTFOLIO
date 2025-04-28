import { FC } from "react";

const Header: FC = () => {
  return (
    <header className="w-full grid grid-cols-[40px_1fr] py-[16px] h-fit items-start px-[32px] sm:px-[128px]">
      <div className="w-full flex justify-start txt__b_0">
        <h1 className="txt__blue_0 font-bold">A.M.</h1>
      </div>
      <div className="w-full flex justify-end gap-[32px] items-center txt txt__b_0 txt__yell_0 font-semibold">
        <a href="#myPortfolio">My Portfolio</a>
        <a href="#aboutMe">About me</a>
      </div>
    </header>
  );
};

export default Header;
