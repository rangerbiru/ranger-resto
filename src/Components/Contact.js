import React from "react";
import "./style.css";

const Contact = () => {
  return (
    <section id="contact" className="flex p-32 max-lg:px-4 max-lg:flex-col">
      {/* bagian kiri */}
      <div className="w-1/2 max-lg:w-full flex flex-col items-center">
        <h2 className="title -mb-8">Contact</h2>
        <h4 className="sub-title z-10 max-lg:text-center">Let's Chat</h4>

        <p className="text-center text-gray-400 text-sm px-20 leading-relaxed mt-8 max-lg:px-4">
          Voluptatibus quaerat laboriosam fugit non Ut consequatur animi est
          molestiae enim a voluptate totam natus modi debitis dicta impedit
          voluptatum quod sapiente illo saepe explicabo quisquam perferendis
          labore et illum suscipit
        </p>
      </div>

      {/* Bagian Kanan */}
      <div className="w-1/2 max-lg:w-full px-10 max-lg:mt-5 max-lg:px-2">
        <form>
          <div className="flex flex-col">
            <label className="text-gray-400">Your Name</label>
            <input
              type="text"
              className="rounded-md my-2 border-gray-400 focus:border-none"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-gray-400">Your Email</label>
            <input
              type="text"
              className="rounded-md my-2 border-gray-400 focus:border-none"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-gray-400">Your Message</label>
            <textarea
              cols="30"
              rows="10"
              className="rounded-md my-2 border-gray-400 focus:border-none"
            ></textarea>
          </div>

          <div className="mt-2 max-lg:w-full">
            <button className="uppercase py-3 px-8 rounded-full bg-orange-400 text-white text-sm">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
