import React from "react";
import "./style.css";

const About = () => {
  return (
    <section id="about" className="flex p-32 max-lg:flex-col max-lg:px-4">
      {/* col untuk text */}
      <div className="w-1/2 flex flex-col items-center max-lg:w-full">
        <h2 className="title -mb-8 max-lg:text-6xl max-lg:text-center">
          Discover
        </h2>
        <h4 className="sub-title z-10 max-lg:text-5xl max-lg:mt-1 max-lg:text-center">
          our store
        </h4>

        <span className="text-lg mt-10 mb-4 text-gray-400">* * *</span>

        <p className="text-center text-gray-400 text-sm px-20 leading-relaxed max-lg:px-4">
          Voluptatibus quaerat laboriosam fugit non Ut consequatur animi est
          molestiae enim a voluptate totam natus modi debitis dicta impedit
          voluptatum quod sapiente illo saepe explicabo quisquam perferendis
          labore et illum suscipit
        </p>

        <div className="btn-about py-8">
          <a
            href="#"
            className="uppercase border-b-2 border-black transition duration-200 hover:border-yellow-500"
          >
            About
          </a>
        </div>
      </div>

      {/* col untuk img */}
      <div className="w-1/2 flex justify-center max-lg:w-full">
        <img
          src="https://demos.onepagelove.com/html/resto/img/img_1.jpg"
          alt="Gambar Orang"
          className="w-5/6 object-cover"
        />
      </div>
    </section>
  );
};

export default About;
