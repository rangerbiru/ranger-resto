import React, { useEffect } from "react";
import "./style.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    AOS.init();
  });

  return (
    <section id="home">
      <div className="bg-home ">
        <div
          // data-aos="zoom-in"
          className="flex flex-col justify-center items-center h-screen"
        >
          <h2
            className="title -mb-8 text-yellow-600 max-lg:text-6xl"
            data-aos="fade-down"
          >
            Welcome
          </h2>
          <h4
            className="sub-title z-10 text-white max-lg:text-5xl max-lg:mt-1"
            data-aos-delay="1000"
            data-aos="fade-up"
          >
            The Resto
          </h4>

          <p className="text-white text-lg py-2 max-sm:text-sm max-lg:text-center max-lg:px-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia,
            earum!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Home;
