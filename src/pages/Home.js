import React from "react";
import Navbar from "../components/Navbar";
import bgvideo from "../assets/images/disaster.mp4";
import buydgirl from "../assets/images/buydgirl.svg";
import fire from "../assets/images/fire.gif";
import moltov from "../assets/images/moltov.gif";
import bomb from "../assets/images/bomb.gif";
import taxes from "../assets/images/taxes.svg";
import solana from "../assets/images/solana.svg";
import buynow from "../assets/images/buynow.svg";
import burnt from "../assets/images/burnt.svg";
import girl from "../assets/images/girl.png";
import phantom from "../assets/images/phantom.svg";
import darkgirl from "../assets/images/darkgirl.png";
import sol from "../assets/images/sol.svg";
import radyum from "../assets/images/radyum.svg";
import footerbg from "../assets/images/footer.gif";
import twitter from "../assets/images/twitter.svg";
import telegram from "../assets/images/telegram.svg";
function Home() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <section className="relative 992:!min-h-[500px] video-height 1440:min-h-[700px] min-h-[1036px] flex items-center ">
        <video
          src={bgvideo}
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 -z-[1] w-full h-full object-cover"
        ></video>
        <div className="bg-content z-[999] mx-auto w-full px-[16px] 1240:!max-w-[992px] max-w-[1240px]">
          <h1 className="font-bubblegum 992:!text-[40px] 1440:text-[70px] text-[97px] text-white">
            this is <br /> hella lit.
          </h1>
          <img
            src={buydgirl}
            className="mt-[20px] 992:!max-w-[160px] 1440:max-w-[220px] max-w-[290px] w-full"
            alt=""
          />
        </div>
        <img src={fire} className="fire-left absolute" alt="" />
        <img src={fire} className="fire-bottom-right absolute" alt="" />
        {/* Add content overlay here if needed */}
      </section>
      <section className="fire-section relative 1440:pt-[70px]  pt-[90px] 1440:pb-[200px] pb-[270px] px-[20px]">
        <div className="fire-box relative 1240:!max-w-[800px] max-w-[1100px] mx-auto bg-[#FFE7EB] border-[#EE3B6E] border-[6px] 1240:!rounded-[80px] rounded-[133px] 1440:pt-[120px] 1240:!pt-[60px] 1240:!pb-[40px] 1440:pb-[80px]   pt-[210px] pb-[150px] 1440:px-[100px] 1240:!px-[60px] px-[150px]">
          <h2 className="font-firestar text-[#EE3B6E] 1440:text-[90px] 1240:!text-[70px] text-[125px] 1240:!mb-[40px] mb-[60px] text-center">
            THIS GIRL <br />
            IS ON FIRE
          </h2>
          <p className="font-fixedsys 1440:text-[27px] 1240:!text-[24px] 1240:!max-w-[700px] text-[30px] mx-w-[810px] text-center mx-auto">
            Own a piece of internet history with the Disaster Girl Token!
            Inspired by the legendary meme that defined a generation, this
            crypto collectible brings a touch of iconic nostalgia to the
            blockchain. Don’t just watch the flames—be part of the story.
            Limited supply, unlimited impact. Get yours now!
          </p>
          <img src={moltov} className="box-moltov absolute" alt="" />
          <img src={fire} className="left-fire-2 absolute" alt="" />
          <img src={fire} className="right-fire-1 absolute" alt="" />
          <img src={fire} className="right-fire-2 absolute" alt="" />
        </div>
        <img src={fire} className="big-bottom-left-fire absolute" alt="" />
      </section>
      <section className="relative video-sec 1240:pt-[70px] 1240:pb-[100px] pt-[100px] px-[20px] pb-[150px]">
        <div className="1240:max-w-[680px] videodiv max-w-[740px] mx-auto">
          <div className="w-full min-h-[444px] relative">
            <video
              src={bgvideo}
              autoPlay
              muted
              loop
              playsInline
              className="absolute top-0 left-0 -z-[1] w-full h-full object-cover"
            ></video>
            <img src={bomb} className="bomb-left absolute" alt="" />
            <img src={fire} className="fire-video-left absolute" alt="" />
            <img src={fire} className="fire-video-right absolute" alt="" />
            <img src={taxes} className="taxes-video-top absolute" alt="" />
            <img src={solana} className="solana-video-right absolute" alt="" />
            <img src={buynow} className="buynow-video-right absolute" alt="" />
            <img src={burnt} className="burnt-video-bottom absolute" alt="" />
          </div>
        </div>
      </section>
      <section className="relative copy-sec 1440:pt-[100px] pt-[150px] 1440:pb-[60px] pb-[80px] px-[20px]">
        <div className="max-w-[1150px] 1240:max-w-[800px] mx-auto">
          <div className="flex copy-imgs max-auto justify-center translate-y-[100px] w-fit mx-auto relative">
            <img src={fire} className="absolute girl-fire-1" alt="" />
            <img src={fire} className="absolute girl-fire-2" alt="" />
            <img
              src={girl}
              className="1240:max-w-[300px]  copygirl max-w-[377px]"
              alt=""
            />
            <img src={fire} className="absolute girl-fire-3" alt="" />
          </div>
          <div className="1240:pt-[22px] pt-[29px] 1240:pl-[50px] pl-[84px] 1240:pb-[22px] pb-[29px] 1240:pr-[20px] pr-[27px] bg-[#E3E3E3] copy-token relative 1240:rounded-[40px] rounded-[61px] flex items-center 1240:gap-[25px] gap-[35px] border-[3px] border-solid border-[#000]">
            <span className="text-[37px] 1240:text-[24px] font-fixedsys ">
              2qEHjDLDLbuBgRYvsxhc5D6uDWAivNFZGan56P1tpump
            </span>{" "}
            <button className="bg-[#EE3B6E] 1240:min-w-[140px] min-w-[170px] 1240:min-h-[55px] min-h-[64px] 1240:text-[25px] text-[37px] font-fixedsys text-[#fff] flex items-center justify-center rounded-[60px] border-[3px] border-solid border-[#000]">
              copy
            </button>
          </div>
        </div>
      </section>
      <section className="relative howtobuy 1240:!pt-[40px] 1440:pt-[65px] pt-[80px] px-[20px]">
        <div className="max-w-[1320px] howtobuy-div px-[30px] 1240:max-w-[992px] relative icon-boxes-bg mx-auto bg-[#FAA21B] border-[3px] border-solid border-[#000] 1240:rounded-[80px] rounded-[170px] 1440:pt-[60px] 1240:!pt-[40px] 1440:pb-[160px] 1240:!pb-[70px] pt-[100px] pb-[220px]">
          <h2 className="font-firestar text-[#EE3B6E] 1440:text-[90px] 1240:!text-[60px] 1240:!mb-[40px] 1440:mb-[60px] text-[125px] mb-[110px] text-center">
            HOW TO BUY <br />
            DISASTER GIRL
          </h2>
          <div className="flex items-baseline gap-[20px] ">
            <div className="w-1/2 text-center">
              <img
                src={phantom}
                className="1240:!max-w-[120px] 1440:max-w-[180px] max-w-[250px] mx-auto"
                alt=""
              />
              <h3 className="font-firestar 1240:!text-[24px] 1440:text-[30px] 1440:mt-[28px] text-[38px] mt-[35px] text-[#000]">
                1. DOWNLOAD PHANTOM
              </h3>
              <p className="font-fixedsys 1240:!text-[20px] 1440:text-[26px] text-[30px] 1240:!pt-[20px] 1440:pt-[30px] pt-[59px] 1440:max-w-[480px] max-w-[520px] mx-auto">
                Download Phantom or your wallet of choice from the store.
                Desktop users, download the google chrome extension by going to
                phantom.app.
              </p>
            </div>
            <div className="w-1/2 text-center">
              <img
                src={sol}
                className=" 1240:!max-w-[120px] 1440:max-w-[180px] max-w-[224px] mx-auto"
                alt=""
              />
              <h3 className="font-firestar 1240:!text-[24px] 1440:text-[30px] 1440:mt-[28px] text-[38px] mt-[35px] text-[#000]">
                2. GET SOME SOL
              </h3>
              <p className="font-fixedsys 1240:!text-[20px] 1440:text-[26px] text-[30px] 1240:!pt-[20px] 1440:pt-[30px] pt-[59px] 1440:max-w-[480px] max-w-[520px] mx-auto">
                If you don’t have any SOL, you can buy directly on Phantom,
                transfer from another wallet, or buy on another exchange and
                send it to your wallet.
              </p>
            </div>
          </div>
          <div className="flex items-baseline gap-[20px]  mt-[100px]">
            <div className="w-1/2 text-center">
              <img
                src={radyum}
                className="1240:!max-w-[120px] 1440:max-w-[180px] max-w-[250px] mx-auto"
                alt=""
              />
              <h3 className="font-firestar 1240:!text-[24px] 1440:text-[30px] 1440:mt-[28px] text-[38px] mt-[35px] text-[#000]">
                3. GO TO RAYDIUM.IO
              </h3>
              <p className="font-fixedsys 1240:!text-[20px] 1440:text-[26px] text-[30px] 1240:!pt-[20px] 1440:pt-[30px] pt-[59px] 1440:max-w-[480px] max-w-[520px] mx-auto">
                Now that you have some Solana, head to Raydium.io (or Jup.ag if
                you prefer) to be able to swap your $SOL for some $PNUT.
              </p>
            </div>
            <div className="w-1/2 text-center">
              <div className="w-fit mx-auto relative">
                <img src={fire} className="absolute girl-fire-box-1" alt="" />
                <img src={fire} className="absolute girl-fire-box-2" alt="" />
                <img
                  src={girl}
                  className="1240:!max-w-[160px] 1440:max-w-[180px] max-w-[220px] relative z-10 mx-auto"
                  alt=""
                />
              </div>
              <h3 className="font-firestar 1240:!text-[24px] 1440:text-[30px] 1440:mt-[28px] text-[38px] mt-[35px] text-[#000]">
                4. BUY $DISASTER GIRL
              </h3>
              <p className="font-fixedsys 1240:!text-[20px] 1440:text-[26px] text-[30px] 1240:!pt-[20px] 1440:pt-[30px] pt-[59px] 1440:max-w-[480px] max-w-[520px] mx-auto">
                Paste the token address (CA) into Raydium and switch SOL for
                $DGIRL. There's zero taxes so you don’t need to worry.
              </p>
            </div>
          </div>
        </div>
      </section>
      <footer>
        <img src={footerbg} className="w-full relative footerbg" alt="" />
        <div className="absolute footer-content">
          <div>
            <img
              src={darkgirl}
              className="1440:max-w-[140px] max-w-[190px]"
              alt=""
            />
          </div>
          <div className="flex items-center 1440:mt-[40px] mt-[56px] gap-[14px]">
            <img
              src={telegram}
              className="1440:w-[60px] 1440:h-[60px] w-[114px] h-[114px] object-contain"
              alt=""
            />
            <img
              src={twitter}
              className="1440:w-[60px] 1440:h-[60px] w-[114px] h-[114px] object-contain"
              alt=""
            />
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
