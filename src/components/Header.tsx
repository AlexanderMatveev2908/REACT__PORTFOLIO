import { FC } from "react";
import { Link } from "react-router-dom";

const Header: FC = () => {
  return (
    <header className="w-full grid grid-cols-[40px_1fr] py-[16px] h-fit items-start">
      <div className="w-full flex justify-start txt__b_0">
        <h1 className="txt__blue_0 font-bold">A.M.</h1>
      </div>
      <div className="w-full flex justify-end gap-[32px] items-center txt txt__b_0 txt__yell_0 font-semibold">
        <Link to="">My Portfolio</Link>
        <Link to="">About me</Link>
      </div>
    </header>
  );
};

export default Header;
