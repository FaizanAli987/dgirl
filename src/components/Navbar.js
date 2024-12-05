import React from "react";
import logo from "../assets/images/logo.gif";
import dgirl from "../assets/images/buydgirl.svg";
import twitter from "../assets/images/twitter.svg";
import telegram from "../assets/images/telegram.svg";
function Navbar() {
  return (
    <>
      <div className="flex max-w-[1385px] mx-auto w-full z-[3232] relative bg-white justify-between pt-[36px] 1440:pt-[30px] 1440:pb-[20px] 1440:px-[20px] pb-[30px] px-[30px] items-center">
        <div className="flex items-center gap-[7px]">
          <img
            src={twitter}
            className="1440:w-[36px] 1440:h-[36px] w-[56px] h-[56px] object-contain"
            alt=""
          />
          <img
            src={telegram}
            className="1440:w-[36px] 1440:h-[36px] w-[56px] h-[56px] object-contain"
            alt=""
          />
        </div>
        <div>
          <img
            src={logo}
            className="absolute left-[50%] logo 992:!max-w-[360px] max-w-[848px] -top-[5%] -translate-x-[50%] 1440:max-w-[540px] 1440:top-[10%]"
            alt=""
          />
        </div>
        <div>
          <img src={dgirl} className="992:max-w-[100px] max-w-[194px]" alt="" />
        </div>
      </div>
    </>
  );
}

export default Navbar;
