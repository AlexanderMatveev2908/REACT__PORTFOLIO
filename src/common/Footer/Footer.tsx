import { FC } from "react";
import Title from "../../components/Title";
import Btn from "../../components/Btn";
import { icons } from "../../assets/assets";

const Footer: FC = () => {
  return (
    <footer id="myFooter" className="pt-[64px] pb-[128px] px-[128px]">
      <div className="w-full max-w-[555px] grid justify-items-center">
        <div className="w-full grid gap-[64px]">
          <div className="w-full grid gap-[32px]">
            <div className="w-full grid gap-[16px]">
              <Title
                {...{
                  title: "Do you want to contact me?",
                  style: "txt__h_0 txt__yell_0 font-bold justify-center",
                }}
              />

              <div className="w-full flex justify-center">
                <p className="txt__yell_0 txt__btn_0">
                  Let's set up a meeting, talk and see what we can create
                  together.
                </p>
              </div>
            </div>

            <div className="w-full flex justify-center">
              <Btn
                {...{
                  label: "Send Email",
                  href: "https://mail.google.com/mail/?view=cm&fs=1&to=matveevalexander470@gmail.com&su=WORK%20",
                }}
              />
            </div>
          </div>

          <div className="w-full grid justify-items-center gap-[32px]">
            <div className="w-full flex items-center gap-[16px] max-w-[127px]">
              <a
                target="_blank"
                href="https://github.com/AlexanderMatveev2908"
                className="w-[32px] h-[32px]"
              >
                <img src={icons.git} alt="" className="w-full h-full" />
              </a>
            </div>

            <a
              target="_blank"
              href="https://becoder.dev/en/app"
              className="txt__blue_0 txt__b_0"
            >
              © 2025 becoder.dev
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
