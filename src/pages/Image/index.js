import React from "react";
import Layout from "components/Layout";
import { Link } from "react-router-dom";
import karl from "assets/image/karl.jpg";
import Ridgo from "assets/image/ridgo.jpg";
import jasper from "assets/image/Jasper.jpg";
import China from "assets/image/China.jpg";
import Grave from "assets/image/Grave.jpg";
import Smoke from "assets/image/Smoke.jpg";
import japan from "assets/image/japan.jpg";
import Slider from "react-slick";
import ReactPlayer from "react-player";
import PC1 from "assets/image/PC1.png";
import cross from "assets/image/Cross.jpg";

const ImagePage = () => {
  const settings = {
    arrows: false,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <SampleNextArrow />,
    nextArrow: <SamplePrevArrow />,
    autoplay: false,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };
  function SampleNextArrow(props) {
    const { className, onClick } = props;
    return (
      <div
        className={`${className} bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full`}
        type="button"
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, onClick } = props;
    return (
      <div
        className={`${className} bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full`}
        type="button"
        onClick={onClick}
      />
    );
  }

  return (
    <Layout title="Image City">
      <section>
        <Slider
          {...settings}
          className="flex items-center m-auto mt-24 max-w-screen-2xl"
        >
          <div className="relative flex items-center justify-center p-2 ">
            <img
              src={cross}
              alt=""
              className="rounded-sm w-full h-[332px] bg-black"
            ></img>
          </div>
        </Slider>

        <div className="p-0 m-auto  max-w-7xl md:p-5">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <div className="grid gap-4">
              <div>
                <img
                  className="h-auto max-w-full sm:w-full "
                  src={China}
                  alt=""
                ></img>
              </div>
              <div>
                <img
                  className="h-auto max-w-full sm:w-full "
                  src={Grave}
                  alt=""
                ></img>
              </div>
              <div>
                <img
                  className="h-auto max-w-full sm:w-full "
                  src={Ridgo}
                  alt=""
                ></img>
              </div>
            </div>
            <div className="grid gap-4">
              <div>
                <img className="h-auto max-w-full " src={Grave} alt=""></img>
              </div>
              <div>
                <img className="h-auto max-w-full " src={Smoke} alt=""></img>
              </div>
              <div>
                <img className="h-auto max-w-full " src={karl} alt=""></img>
              </div>
            </div>
            <div className="grid gap-4">
              <div>
                <img className="h-auto max-w-full " src={Ridgo} alt=""></img>
              </div>
              <div>
                <img className="h-auto max-w-full " src={China} alt=""></img>
              </div>
              <div>
                <img className="h-auto max-w-full " src={Grave} alt=""></img>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ImagePage;
