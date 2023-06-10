import React from "react";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import Slider from "react-slick";
import {
  bannerImg,
  sliderImgFive,
  sliderImgFour,
  sliderImgThree,
  sliderImgTwo,
  sliderImgOne,
} from "../public/assets/images";
import Image from "next/image";
import BannerText from "./BannerText";
import ButttonPrimary from "./ButttonPrimary";

function SampleNextArrow(props: any) {
  const { onClick } = props;
  return (
    <div
      className="absolute bottom-12 left-6 w-12 h-8 border-[1px] shadow-md border-black text-black bg-white text-xl flex items-center justify-center rounded-md 
    hover:bg-blue-500 hover:border-transparent hover:text-white cursor-pointer duration-300 z-10
    "
      onClick={onClick}
    >
      <BsArrowLeft />
    </div>
  );
}

function SamplePrevArrow(props: any) {
  const { onClick } = props;
  return (
    <div
      className="absolute bottom-12 right-6 w-12 h-8 border-[1px] shadow-md border-black text-black bg-white text-xl flex items-center justify-center rounded-md 
    hover:bg-blue-500 hover:border-transparent hover:text-white cursor-pointer duration-300 z-10
    "
      onClick={onClick}
    >
      <BsArrowRight />
    </div>
  );
}

const Banner = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div className="w-full bg-white px-4 py-6 flex gap-4 border-b-[1px]">
      <div className="w-2/3 rounded-lg h-[410px] shadow-md relative">
        <Slider {...settings}>
          <div className="w-full h-[410px] relative">
            <Image
              className="w-full h-full object-cover rounded-lg"
              src={sliderImgOne}
              alt="sliderImg"
              priority
            />
            <BannerText
              className="absolute w-60 h-full top-6 left-4 flex flex-col gap-3 text-white"
              title="Spring fashion in Bloom"
              description="
            New trends & Styles to turn heads anytime, on any budget"
              btnText="Shop Now"
            />
          </div>
          <div className="w-full h-[410px] relative">
            <Image
              className="w-full h-full object-cover rounded-lg"
              src={sliderImgTwo}
              alt="sliderImg"
              priority
            />
            <BannerText
              className="absolute w-60 h-full top-6 left-4 flex flex-col gap-3 text-white"
              title="Spring fashion in Bloom"
              description="
            New trends & Styles to turn heads anytime, on any budget"
              btnText="Shop Now"
            />
          </div>
          <div className="w-full h-[410px] relative">
            <Image
              className="w-full h-full object-cover rounded-lg"
              src={sliderImgThree}
              alt="sliderImg"
              priority
            />
            <BannerText
              className="absolute w-60 h-full top-6 left-4 flex flex-col gap-3 text-gray-700"
              title="Spring fashion in Bloom"
              description="
            New trends & Styles to turn heads anytime, on any budget"
              btnText="Shop Now"
            />
          </div>
          <div className="w-full h-[410px] relative">
            <Image
              className="w-full h-full object-cover rounded-lg"
              src={sliderImgFour}
              alt="sliderImg"
              priority
            />
            <BannerText
              className="absolute w-60 h-full top-6 left-4 flex flex-col gap-3 text-gray-700"
              title="Spring fashion in Bloom"
              description="
            New trends & Styles to turn heads anytime, on any budget"
              btnText="Shop Now"
            />
          </div>
          <div className="w-full h-[410px] relative">
            <Image
              className="w-full h-full object-cover rounded-lg"
              src={sliderImgFive}
              alt="sliderImg"
              priority
            />
            <BannerText
              className="absolute w-60 h-full top-6 left-4 flex flex-col gap-3 text-gray-600"
              title="Spring fashion in Bloom"
              description="
            New trends & Styles to turn heads anytime, on any budget"
              btnText="Shop Now"
            />
          </div>
        </Slider>
      </div>
      <div className="w-1/3 border-[1px] border-gray-200 rounded-lg shadow-md p-4 flex flex-col justify-between">
        <div className="flex justify-between">
          <h2 className="text-xl font-semibold text-black">
            Flash pick of the Day
          </h2>
          <p>View All</p>
        </div>
        <Image className="h-60 object-cover" src={bannerImg} alt="flashsales" />
        <ButttonPrimary />
        <p className="text-lg text-black font-semibold">From $199.99</p>
        <p className="text-base text-gray-500 -mt-1">
          Sony TV Stand Cabinet for Living Room....
        </p>
      </div>
    </div>
  );
};

export default Banner;
