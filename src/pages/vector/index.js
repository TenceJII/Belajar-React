import Layout from "components/Layout";
import React from "react";
import { Link } from "react-router-dom";
import paris from "assets/image/paris.jpg";
import PC1 from "assets/image/PC1.png";
import Slider from "react-slick";
import cross from "assets/image/Cross.jpg";
import Setup1 from "assets/image/Setup 1.jpg";
import AI from "assets/image/AI.jpg";

const VectorPage = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };
  return (
    <Layout title="vector">
      <section>
        <Slider
          {...settings}
          className="m-auto max-w-[1120px] flex mt-24 items-center"
        >
          <div className=" relative p-2 flex  outline-none justify-center items-center transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0">
            <img
              src={PC1}
              className="rounded-md  outline-none lg:w-full lg:h-[332px] bg-black"
              alt=""
            ></img>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
              <div className="text-white leading-5 font-bold tracking-widest">
                SHIBAKATENSEI
              </div>
              <Link to={"/"}>
                <div className="p-1 px-0.5 py-1 text-sm text-black backdrop-blur hover:backdrop-blur-none duration-300 font-semibold bg-slate-400 bg-opacity-30 rounded-lg cursor-pointer">
                  TENSEI
                </div>
              </Link>
            </div>
          </div>
          <div className=" relative p-2 flex outline-none justify-center items-center transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0">
            <img
              src={PC1}
              className="rounded-md  lg:w-full outline-none lg:h-[332px] bg-black"
              alt=""
            ></img>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
              <div className="text-white leading-5 font-bold tracking-widest">
                SHIBAKATENSEI
              </div>
              <Link to={"/"}>
                <div className="p-1 px-0.5 py-1 text-sm text-black backdrop-blur hover:backdrop-blur-none duration-300 font-semibold bg-slate-400 bg-opacity-30 rounded-lg cursor-pointer">
                  TENSEI
                </div>
              </Link>
            </div>
          </div>
          <div className=" relative flex p-2 outline-none justify-center items-center transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0">
            <img
              src={PC1}
              className="rounded-md  lg:w-full outline-none lg:h-[332px] bg-black"
              alt=""
            ></img>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
              <div className="text-white leading-5 font-bold tracking-widest">
                SHIBAKATENSEI
              </div>
              <Link to={"/"}>
                <div className="p-1 px-0.5 py-1 text-sm text-black backdrop-blur hover:backdrop-blur-none duration-300 font-semibold bg-slate-400 bg-opacity-30 rounded-lg cursor-pointer">
                  TENSEI
                </div>
              </Link>
            </div>
          </div>
        </Slider>
        <div className="relative max-w-[983px] cursor-pointer">
          <div className="relative flex flex-col justify-end rounded-lg">
            <img
              src={Setup1}
              alt=""
              className="object-cover absolute top-0 left-0  h-[297px] transition-all opacity-95 hover:opacity-100 ease-in-out delay-150 hover:translate-y-1 hover:scale-100 duration-300"
            ></img>
            <p className=""></p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default VectorPage;
