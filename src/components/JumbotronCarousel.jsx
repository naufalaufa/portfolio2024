/* eslint-disable react/no-unescaped-entities */
import { Button, Carousel, Form, Input } from "antd";
import NaufalImageTwoCarousel from "../assets/img/WhatsApp Image 2024-05-03 at 14.40.25_070edd5b.jpg";
import ImageJumbotron from "../assets/img/heheaw.png";
import { useState } from "react";

const JumbotronCarousel = () => {
  const [conditionText, setConditionText] = useState(false);
  return (
    <div>
      <Carousel>
        <div>
          <img
            className="object-contain transform  aspect-square scale-125 relative bg-center h-[600px] w-screen "
            src={NaufalImageTwoCarousel}
            alt={NaufalImageTwoCarousel}
          />
          <div className="absolute top-0  bg-black/40 w-full h-full grid place-content-center ">
            <div className="max-w-[300px]  md:max-w-[500px] ">
              <h1 className="text-white my-3 text-3xl">
                <span className="font-bold text-5xl">C</span>onsole.log ("Hi!"){" "}
              </h1>
              <p className="text-white text-[10px] leading-4">
                Lorem ipsum dolor sit amet, don't forget to explore and stay up
                to date
              </p>
              <p className="text-white text-center font-bold mt-4">
                モチャマド・ナウファル・アウファ・リフキ
              </p>
              <div className="text-center">
                <Form>
                  <Form.Item>
                    <Input placeholder="Send Message" className="my-3" />
                  </Form.Item>
                  <Button className="bg-black text-white ">
                    <a href="tel:085156802452">Submit</a>
                  </Button>
                </Form>
              </div>
            </div>
            <div className=" shadow-lg shadow-slate-700 grid place-content-center text-black bg-white gap-2 w-[100px] h-[100px] rounded-full">
              <div className="bg-black  w-[80px] h-[80px] rounded-full">
                <div className="bg-white  w-[60px] h-[60px] grid place-content-center rounded-full">
                  <img
                    className="rounded-full"
                    src={ImageJumbotron}
                    alt={ImageJumbotron}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="absolute top-[81%] w-full">
            <p className=" text-[9px]  text-white text-center">
              use your imagination bitch
            </p>
            <div className="grid grid-cols-4 place-content-center place-items-center gap-4 my-2">
              <div className="bg-white p-2 rounded-lg w-[65px]">
                <p className="text-center">GET</p>
              </div>
              <div className="bg-white p-2 rounded-lg w-[65px]">
                <p className="text-center font-extrabold">SET</p>
              </div>
              <div className="bg-white p-2 rounded-lg w-[65px]">
                <p className="text-center">GET</p>
              </div>
              <div className="bg-white p-2 rounded-lg w-[65px]">
                <p className="text-center font-extrabold">SET</p>
              </div>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default JumbotronCarousel;
