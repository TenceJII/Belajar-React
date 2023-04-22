import React from "react";
import Layout from "components/Layout";
import { Link } from "react-router-dom";
import karl from 'assets/image/karl.jpg'
import Ridgo from 'assets/image/ridgo.jpg'
import jasper from 'assets/image/Jasper.jpg'
import China from 'assets/image/China.jpg'
import Grave from 'assets/image/Grave.jpg'
import Smoke from 'assets/image/Smoke.jpg'
import japan from 'assets/image/japan.jpg'
import Slider from "react-slick";




const ImagePage = () => {


    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: < SampleNextArrow />,
        nextArrow: < SamplePrevArrow />,
        autoplay: false,
        autoplaySpeed: 2000,
        pauseOnHover: true
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
            <section >
                <div className="h-[586px] w-full   ">
                    <div className="absolute w-full ">
                        <img className="object-cover opacity-30 blur-md  w-full h-[586px] " src={China} alt=""></img>
                    </div>
                    <div className="flex justify-between overflow-auto pt-7 w-full p-0 lg:p-8 ">
                        <ul className="flex p-4 gap-4 ">
                            <li className="relative w-auto">
                                <Link className="py-3 px-6 font-bold text-lg hover:bg-slate-400 bg-transparent hover:bg-opacity-30 rounded-lg text-black cursor-pointer">
                                    All
                                </Link>
                            </li>
                            <li className="relative w-auto">
                                <Link className="py-3 px-6 font-bold text-lg hover:bg-slate-400 bg-transparent hover:bg-opacity-30 rounded-lg text-black cursor-pointer">
                                    Art
                                </Link>
                            </li>
                            <li className="relative w-auto">
                                <Link className="py-3 px-6 font-bold text-lg hover:bg-slate-400 bg-transparent hover:bg-opacity-30 rounded-lg text-black cursor-pointer">
                                    Membership
                                </Link>
                            </li>
                            <li className="relative w-auto">
                                <Link className="py-3 px-6 font-bold text-lg hover:bg-slate-400 bg-transparent hover:bg-opacity-30 rounded-lg text-black cursor-pointer">
                                    Gaming
                                </Link>
                            </li>
                            <li className="relative w-auto">
                                <Link className="py-3 px-6 font-bold text-lg hover:bg-slate-400 bg-transparent hover:bg-opacity-30 rounded-lg text-black cursor-pointer">
                                    Photography
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <Slider {...settings} className="m-auto max-w-screen-2xl p-4 relative px-4">
                        <div className="" >
                            <img className="w-full p-3 h-[332px] rounded-lg" src={jasper} alt=""></img>
                        </div>
                        <div>
                            <img className="  w-full p-3 h-[332px] rounded-lg bg-cover " src={China} alt=""></img>
                        </div>
                        <div>
                            <img className="w-full p-3 h-[332px] rounded-lg " src={China} alt=""></img>
                        </div>

                    </Slider>

                </div >

                <div className=" -mt-20 max-w-7xl m-auto md:p-5 p-0">
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="grid gap-4">
                            <div>
                                <img className="h-auto max-w-full  sm:w-full  " src={China} alt=""></img>
                            </div>
                            <div>
                                <img className="h-auto max-w-full  sm:w-full  " src={Grave} alt=""></img>
                            </div>
                            <div>
                                <img className="h-auto max-w-full  sm:w-full " src={Ridgo} alt=""></img>
                            </div>
                        </div>
                        <div className="grid gap-4">
                            <div>
                                <img className="h-auto max-w-full " src={Grave} alt=""></img>
                            </div>
                            <div>
                                <img className="h-auto max-w-full  " src={Smoke} alt=""></img>

                            </div>
                            <div>
                                <img className="h-auto max-w-full " src={karl} alt=""></img>
                            </div>
                        </div>
                        <div className="grid gap-4">
                            <div>
                                <img className="h-auto max-w-full  " src={Ridgo} alt=""></img>

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

            </section >
        </Layout >
    );
};

export default ImagePage;
