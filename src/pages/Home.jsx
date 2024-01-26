import img from "../assets/home/2.png";
import Typed from "typed.js";
import React from "react";
const Home = () => {
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [`to <span style="color: #35ac9b; font-weight: 600;">Groot</span> Blog...`],
      typeSpeed: 100,
      backSpeed: 50,
      cursorChar: '🖊',
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <main className="bg-ctm3 w-screen h-[600px] ">
      <section className=" container mx-auto pt-12 grid grid-cols-1">
        <div className="flex justify-center border px-4 border-np1 shadow-[rgba(17,_17,_26,_0.1)_0px_0px_3px] shadow-np2 ">
          <div className="my-auto">
            <h1 className="text-6xl font-semibold">Welcome!</h1>
            <h2 className="text-5xl">
            <span ref={el} />
            </h2>
            <p className="text-gray-400 ml-4 mt-3">
              Are Developer and recently started your own business Already made
              website to ensure presence wants to develop.
            </p>
          </div>
          <div className="">
            <img src={img} alt="img" className="" />
          </div>
        </div>
      </section>
      
    </main>
  );
  
};

export default Home;
