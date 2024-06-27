import React from "react";
import imaged from "../assets/images/image-web-3-desktop.jpg";
import imagem from "../assets/images/image-web-3-mobile.jpg";
import image01 from "../assets/images/image-retro-pcs.jpg";
import image02 from "../assets/images/image-top-laptops.jpg";
import image03 from "../assets/images/image-gaming-growth.jpg";

function Home() {
  return (
    <div>
      {/* Sección 1 */}
      <section>
        <div className="grid sm:grid-cols-3 sm:gap-6 gap-4">
          <img className="col-span-2 hidden sm:block" src={imaged} alt="" />
          <img className="sm:hidden" src={imagem} alt="" />
          <div className="text-[40px] font-bold sm:text-[64px] leading-none">
            The Bright Future of Web 3.0?
          </div>
          <div className="text-[19px] grid">
            <p>
              We dive into the next evolution of the web that claims to put the
              power of the platforms back into the hands of the people. But is
              it really fulfilling its promise?
            </p>
            <div className="flex items-end">
              <button className="bg-SoftRed text-black hover:bg-black hover:text-white font-bold px-[56px] py-2 uppercase flex items-end tracking-widest mt-6">
                Read More
              </button>
            </div>
          </div>

          <div className="row-span-2 sm:row-start-1 sm:col-start-3 border bg-black text-white p-5 mt-20 sm:mt-0">
            <h1 className="text-SoftOrange font-semibold text-[40px] py-5">
              New
            </h1>
            <div className="grid grid-rows-3">
              <div className="py-6 text-[15px] sm:text-[19px]">
                <button className="text-[19px] sm:text-[25px] font-bold hover:text-SoftOrange">
                  Hydrogen VS Electric Cars
                </button>
                <p className="text-GrayishBlue">
                  Will hydrogen-fueled cars ever catch up to EVs?
                </p>
              </div>
              <div className="border-y border-DarkGrayishBlue py-6 text-[15px] sm:text-[19px]">
                <button className="text-[19px] sm:text-[25px] font-bold hover:text-SoftOrange">
                  The Downsides of AI Artistry
                </button>
                <p className="text-GrayishBlue">
                  What are the possible adverse effects of on-demand AI image
                  generation?
                </p>
              </div>
              <div className="py-6 text-[15px] sm:text-[19px]">
                <button className="text-[19px] sm:text-[25px] font-bold hover:text-SoftOrange">
                  {" "}
                  Is VC Funding Drying Up?
                </button>
                <p className="text-GrayishBlue">
                  Private funding by VC firms is down 50% YOY. We take a look at
                  what that means.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Sección 2 */}
      <section className="sm:flex justify-center mt-32 gap-9 text-[15px] sm:text-[16px] grid mb-20">
        <div className="flex gap-5">
          <img
            className="w-[110px] h-[145px] sm:w-[140px] sm:h-[180px]"
            src={image01}
            alt=""
          />
          <div className="grid place-content-center gap-4">
            <h1 className="text-SoftRed font-semibold text-4xl sm:text-5xl">
              01
            </h1>
            <button className="font-bold hover:text-SoftRed text-[18px] text-start">
              Reviving Retro PCs
            </button>
            <p>What happens when old PCs are given modern upgrades?</p>
          </div>
        </div>
        <div className="flex gap-5">
          <img
            className="w-[110px] h-[145px] sm:w-[140px] sm:h-[180px]"
            src={image02}
            alt=""
          />
          <div className="grid place-content-center gap-4">
            <h1 className="text-SoftRed font-semibold text-4xl sm:text-5xl">
              02
            </h1>
            <button className="-mx-1 font-bold hover:text-SoftRed text-[18px] text-start">
              Top 10 Laptops of 2022
            </button>
            <p>Our best picks for various needs and budgets.</p>
          </div>
        </div>
        <div className="flex gap-5">
          <img
            className="w-[110px] h-[145px] sm:w-[140px] sm:h-[180px]"
            src={image03}
            alt=""
          />
          <div className="grid place-content-center gap-4">
            <h1 className="text-SoftRed font-semibold text-4xl sm:text-5xl">
              03
            </h1>
            <button className="font-bold hover:text-SoftRed text-[18px] text-start">
              The Growth of Gaming
            </button>
            <p>How the pandemic has sparked fresh opportunities.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
