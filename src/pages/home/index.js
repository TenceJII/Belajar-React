import React from "react";
import Layout from "components/Layout";
import { Link } from "react-router-dom";
import image from "assets/image/Mr.bear.jpg";
import MrRabbit from "assets/image/Mr.Rabbit.jpg";
import ilustrator from "assets/image/ilustrator.jpg";
import karl from "assets/image/karl.jpg";
import jasper from "assets/image/Jasper.jpg";
import kouji from "assets/image/kouji.jpg";
import Ridgo from "assets/image/ridgo.jpg";
import ChatGPT from "assets/image/ChatGPT.jpg";
import frepik from "assets/image/freepik.jpg";
import masjid from "assets/image/Cartoon masjid.jpg";
import senja from "assets/image/afternoon.jpg";
import China from "assets/image/China.jpg";
import beach from "assets/image/beach.jpg";
import paris from "assets/image/paris.jpg";
import jakarta from "assets/image/jakarta.jpg";
import Snow from "assets/image/Snow.jpg";
import Nature from "assets/image/Nature Image.jpg";
import kolase from "assets/image/kolase.png";
import PC from "assets/image/PC.jpg";
import Slider from "react-slick";
import PC1 from "assets/image/PC1.png";

import Setup from "assets/image/Setup.jpg";

const HomePage = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
  };

  return (
    <Layout title="HOME PAGE">
      <section>
        <div className="order-1 max-w-full basis-full lg:order-2 h-[100vh] w-full relative block">
          <div className="relative h-full overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
              <Slider {...settings}>
                <div className="relative block">
                  <div className="h-[100vh] cursor-grabbing	 relative w-full block ">
                    <img
                      alt=""
                      src="https://images.unsplash.com/photo-1603189343302-e603f7add05a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
                      className="absolute top-0 left-0 block object-cover object-center w-full h-full max-w-full"
                    ></img>
                  </div>
                </div>
                <div className="relative block ">
                  <div className="h-[100vh] cursor-grabbing	 relative w-full block ">
                    <img
                      alt=""
                      src="https://hair-ici.com/cms/wp-content/uploads/2023/04/main_pc-10-scaled.jpg"
                      className="absolute top-0 left-0 block object-cover object-center w-full h-full max-w-full"
                    ></img>
                  </div>
                </div>
                <div className="relative block ">
                  <div className="h-[100vh] cursor-grabbing	 relative w-full block ">
                    <img
                      alt=""
                      src="https://online-sta.com/cdn/shop/files/top_01_kv_pc_STA_0342_rev01.jpg?v=1662626837"
                      className="absolute top-0 left-0 block object-cover object-center w-full h-full max-w-full"
                    ></img>
                  </div>
                </div>
                <div className="relative block ">
                  <div className="h-[100vh] cursor-grabbing	 relative w-full block ">
                    <img
                      alt=""
                      src="https://images.unsplash.com/flagged/photo-1568988039441-11f295d74d89?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                      className="absolute top-0 left-0 block object-cover object-center w-full h-full max-w-full"
                    ></img>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
        <div className="absolute top-0 left-0 z-10 w-full m-0">
          <div className="flex items-center justify-center mx-auto w-[14.9375rem] md:w-[26.4375rem] h-screen">
            <Link className="relative block break-words">
              <img
                className="w-full"
                src="https://www.junonline.jp/special/ropepicnic_collection_23autumnwinter/assets/img/kv/ttl.png"
                alt=""
              ></img>
            </Link>
          </div>
        </div>
      </section>
      <div className="relative w-full h-full p-[2.08333333vw] ">
        <div className="flex items-end justify-center lg:flex-none">
          <div className="relative w-full font-light text-[15.625vw] lg:text-[11.9vw] lg:h-[1.6em] h-[2.6em] xl:pt-0 block ">
            <div className="block text-right lg:text-left leading-[0.84em]">
              <div className="text-right lg:text-left">
                <span className=" pr-[0.36em] lg:pr-0 font-[HVMuseRegular]">
                  WE
                </span>
                <span className="lg:w-[0.20em] lg:inline-block"></span>
                <span className=" font-[HVMuseRegular] pr-[0.05em] lg:pr-0 lg:ml-0 ml-[-.05em]">
                  MAKE
                </span>
                <span className="lg:w-[0.20em] lg:inline-block"></span>
                <span className="absolute top-[.92em] inline-block left-0 lg:top-0 lg:left-0 lg:relative  font-medium">
                  YOUR
                </span>
              </div>
              <div className="text-left lg:text-right">
                <span className="absolute lg:relative lg:top-0 lg:left-0 top-[0.92em] left-[2.85em] inline-block font-medium">
                  LIFE
                </span>
                <span className="lg:inline-block lg:w-[0.24em]"></span>
                <span className=" absolute bottom-0 right-0 lg:relative pr-[0.05em] lg:pr-0 font-[HVMuseRegular]">
                  ENJOY
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="lg:h-[100vh] overflow-hidden relative">
        <div className="container md:pb-0 max-w-full pb-4 px-10  lg:pt-[9.625rem] ">
          <div className="grid-cols-12 gap-2 sm:grid">
            <div className="flex col-start-2 col-end-6 mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-Linecap="round"
                  stroke-Linejoin="round"
                  d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
                />
              </svg>

              <h1 className="ml-3 font-serif text-lg text-orange-200">
                SHIBAKATENSEI
              </h1>
            </div>
          </div>
          <div className="grid-cols-12 gap-2 sm:grid ">
            <div className="flex col-start-2 col-end-12 mb-9 lg:col-end-7">
              <h3 className="text-lg font-bold duration-1000 md:text-3xl ">
                <p>
                  <span className="block overflow-hidden ">
                    TENSEI, リエイティブな服、
                  </span>
                  <span className="block overflow-hidden">
                    をここで手に入れる
                  </span>
                </p>
              </h3>
            </div>
            <div className="col-start-2 col-end-12 md:col-end-8 ">
              <p className="mb-10 text-base font-semibold md:mb-12">
                Materials, designs, models and appearance
                <br className="overflow-hidden md:block"></br> by showing
                everything you will get everything <br></br> We present all
                these designs
              </p>
              <div className="relative flex items-center w-32 h-10 overflow-hidden duration-1000 lg:w-52">
                <div className="absolute z-30 ml-6 text-sm font-semibold">
                  READ MORE
                </div>
                <div className="absolute top-0 w-full h-full border"></div>
                <div className="absolute top-0 bottom-0 left-0 right-0 w-[calc(100%-6px)] border h-[calc(100%-6px)] m-auto"></div>
                <div className="absolute top-0 bottom-0 h-3 w-7 right-8 "></div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative w-[64.5vw] ml-auto lg:p-1 mt-8 duration-1000 top-0 right-0 h-full lg:absolute  lg:ml-0 lg:w-1/2 md:pb-0 ">
          <div className="relative h-full overflow-hidden lg:w-full aspect-[248/311]">
            <img
              className="absolute top-0 object-cover w-full h-full "
              src="https://images.unsplash.com/photo-1603189343302-e603f7add05a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
              alt=""
            ></img>
          </div>
          <div className="absolute duration-1000  md:w-[21vw] md:left-[-10vw] md:top-[22.5vw] w-[41vw] -left-[22.7vw] top-[18vw] aspect-[156/203] z-10">
            <img
              className="absolute top-0 object-cover w-full"
              alt=""
              src="https://images.unsplash.com/photo-1632149877166-f75d49000351?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80"
            ></img>
          </div>
        </div>
      </section>

      <div className="relative w-full h-full p-[2.08333333vw] ">
        <div className="flex items-end justify-center lg:flex-none">
          <div className="relative w-full font-light text-[15.625vw] lg:text-[11.9vw] h-[2.6em]  lg:h-[2.2em] block ">
            <div className="block text-right lg:text-left leading-[0.84em]">
              <div className="text-right lg:text-left">
                <span className=" pr-[0.36em] lg:pr-0 font-[HVMuseRegular]">
                  WE
                </span>
                <span className="lg:w-[0.20em] lg:inline-block"></span>
                <span className=" font-[HVMuseRegular] pr-[0.05em] lg:pr-0 lg:ml-0 ml-[-.05em]">
                  MAKE
                </span>
                <span className="lg:w-[0.20em] lg:inline-block"></span>
                <span className="absolute top-[.92em] inline-block left-0 lg:top-0 lg:left-0 lg:relative  font-medium">
                  YOUR
                </span>
              </div>
              <div className="text-left lg:text-right">
                <span className="absolute lg:relative lg:top-0 lg:left-0 top-[0.92em] left-[2.85em] inline-block font-medium">
                  LIFE
                </span>
                <span className="lg:inline-block lg:w-[0.24em]"></span>
                <span className=" absolute bottom-0 right-0 lg:relative pr-[0.05em] lg:pr-0 font-[HVMuseRegular]">
                  ENJOY
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto overflow-x-auto md:px-20 md:max-w-7xl">
        <div className="flex items-center px-12 lg:mb-6 lg:justify-center">
          <div className="lg:text-[2.361vw] duration-1000 delay-300 transform font-[HVMuseRegular] text-lg">
            GET IN HIGHLIGHTS
          </div>
        </div>
        <div className="flex lg:grid-cols-4 px-12 lg:px-0 gap-[1.125rem] lg:gap-5 lg:grid">
          <div className="w-[42vw] lg:w-full  flex-none">
            <Link>
              <div className="p-2 border ">
                <div className="relative overflow-hidden">
                  <img
                    src="https://www.notabag.jp/wp/wp-content/uploads/2023/06/index_hero_crossbody_2.jpg"
                    className="object-cover duration-700 hover:opacity-40 w-full h-auto aspect-[244/339] max-w-full"
                    alt=""
                  ></img>
                </div>
              </div>
              <div className="flex items-center mt-2 gap-y-2">
                <p className="text-xs tracking-widest font-[HVMuseRegular]">
                  09.27.2023
                </p>
              </div>
              <p className="mt-1 font-medium font-[HVMuseRegular] text-base">
                WOMEN BAG
              </p>
            </Link>
          </div>
          <div className="w-[42vw] lg:w-full  flex-none">
            <Link>
              <div className="p-2 border ">
                <div className="relative overflow-hidden">
                  <img
                    src="https://storage.googleapis.com/studio-design-asset-files/projects/AXq1Q9RGq7/s-1200x1920_v-frms_webp_0620830d-f1de-4dc6-bad5-06359da38f8a_small.webp"
                    className="object-cover duration-700 hover:opacity-40 w-full h-auto aspect-[244/339] max-w-full"
                    alt="SHOE"
                  ></img>
                </div>
              </div>
              <div className="flex items-center mt-2 gap-y-2">
                <p className="text-xs tracking-widest font-[HVMuseRegular]">
                  09.27.2023
                </p>
              </div>
              <p className="mt-1 font-medium font-[HVMuseRegular] text-base">
                SHOE WOMEN
              </p>
            </Link>
          </div>
          <div className="w-[42vw] lg:w-full  flex-none">
            <Link>
              <div className="p-2 border ">
                <div className="relative overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1661340361967-78385b295e7f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80"
                    className="object-cover duration-700 hover:opacity-40 w-full h-auto aspect-[244/339] max-w-full"
                    alt=""
                  ></img>
                </div>
              </div>
              <div className="flex items-center mt-2 gap-y-2">
                <p className="text-xs tracking-widest font-[HVMuseRegular]">
                  09.27.2023
                </p>
              </div>
              <p className="mt-1 font-medium font-[HVMuseRegular] text-base">
                DRESS WOMEN
              </p>
            </Link>
          </div>
          <div className="w-[42vw] lg:w-full  flex-none">
            <Link>
              <div className="p-2 border ">
                <div className="relative overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
                    className="object-cover duration-700 hover:opacity-40 w-full h-auto aspect-[244/339] max-w-full"
                    alt=""
                  ></img>
                </div>
              </div>
              <div className="flex items-center mt-2 gap-y-2">
                <p className="text-xs tracking-widest font-[HVMuseRegular]">
                  09.27.2023
                </p>
              </div>
              <p className="mt-1 font-medium font-[HVMuseRegular] text-base">
                FASHION MAN
              </p>
            </Link>
          </div>
        </div>
      </div>
      <div className="relative py-10 md:px-20 ">
        <div className="grid grid-cols-12 gap-2">
          <div className="col-start-2 col-end-12">
            <div className="w-full  h-[1px] bg-[#401D01]"></div>
            <div className="flex items-center justify-center my-4">
              <div className="flex text-[#401D01] tracking-widest font-[HVMuseRegular] text-[4.25vw]">
                TOTAL DIRECTION
              </div>
              <div className="h-[7.05em] w-[10.1em]  relative">
                <img
                  className="rounded-full"
                  src="https://basco1989.com/wp-content/themes/mytheme/assets/images/top/history/01.jpg"
                  alt=""
                ></img>
              </div>
            </div>
            <div className="w-full  h-[1px] bg-[#401D01]"></div>
            <div className="flex items-center justify-center my-4">
              <div className="h-[7.05em] w-[10.1em]  relative">
                <img
                  className="rounded-full"
                  src="https://basco1989.com/wp-content/themes/mytheme/assets/images/top/history/01.jpg"
                  alt=""
                ></img>
              </div>
              <div className="flex text-[#401D01] tracking-widest font-[HVMuseRegular] text-[4.25vw]">
                TOTAL DIRECTION
              </div>
            </div>
            <div className="w-full  h-[1px] bg-[#401D01]"></div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
