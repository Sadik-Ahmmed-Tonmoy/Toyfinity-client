import React from 'react';
import Carousel from '../../Components/Carousel/Carousel';
import PhotoGallery from '../../Components/PhotoGallery/PhotoGallery';
import ReactTab from '../../Components/ReactTab/ReactTab';
import { Helmet } from 'react-helmet';
import Lottie from "lottie-react";
import robot from "../../assets/98303-little-robot-icon.json";
import Flicking from "@egjs/react-flicking";
import "@egjs/react-flicking/dist/flicking.css";
// Or, if you have to support IE9
// import "@egjs/react-flicking/dist/flicking-inline.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ScrollRestoration } from 'react-router-dom';
AOS.init();

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home | Toyfinity</title>
      </Helmet>
      <Carousel></Carousel>

      <div className='md:mx-12 md:my-14 mt-4'>
        <div data-aos="zoom-in-down">
          <h1 className='text-center font-bold text-3xl'>Unleash Your Inner Hero</h1>
          <p className='text-center mb-2'>Dive into the Exciting Universe of Action Figures</p>
        </div>

        <div className="flex flex-col w-full lg:flex-row ">
          <div data-aos="fade-right" className="grid p-3 card rounded-box place-items-center md:w-6/12 text-center">
            <p>Are you ready to embark on an adventure like no other? Dive into the captivating realm of action figures, where imagination knows no bounds and heroes come to life! Whether you're a seasoned collector or a curious enthusiast, action figures offer an unparalleled experience of creativity, nostalgia, and endless fun.<span className='md:block hidden'>At our website, we celebrate the rich tapestry of action figures, catering to fans of all ages and interests. From iconic superheroes and legendary characters to thrilling movie replicas and video game champions, our extensive collection is sure to ignite your passion and transport you to extraordinary worlds. </span> </p>
          </div>
          <div className="divider lg:divider-horizontal"></div>
          <div data-aos="fade-left" className="grid card rounded-box md:ps-16 md:w-6/12">
            <img className='md:h-72' src="https://i.ibb.co/j5696dn/t.png" alt="" />
          </div>
        </div>

      </div>
      <h4 className='md:mt-6 font-bold text-4xl text-center'>Shop by category</h4>
      <ReactTab></ReactTab>
      <Lottie data-aos="zoom-in-down" className='h-80' animationData={robot} loop={true} />
      <p data-aos="zoom-out-up" className='border rounded-md mb-3 md:w-7/12 mx-auto p-2 text-center'>Immerse yourself in a universe of possibilities as you explore the vast range of action figures available. Relive classic battles with vintage figures, or embrace the cutting-edge designs of modern releases that push the boundaries of detail and articulation. Each figure is a work of art, meticulously crafted to capture the essence and personality of its source material.</p>
      <h4 className='m-3  font-bold text-4xl text-center'>Toy Gallery</h4>
      <div className='p-3 my-3 border rounded-md '>
        <PhotoGallery></PhotoGallery>
      </div>
      <ScrollRestoration />
    </>
  );
};

export default Home;