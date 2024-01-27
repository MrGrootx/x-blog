import img from "../assets/home/2.png";
import Typed from "typed.js";
import React from "react";
import BlogPage from "./BlogPage";
const Home = () => {
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        `to <span style="color: #35ac9b; font-weight: 600;">Groot</span> Blog...`,
      ],
      typeSpeed: 100,
      backSpeed: 50,
      cursorChar: "🖊",
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div>
      <main className="bg-ctm3 md:w-screen w-full xl:h-[600px]  h-96 p-6 xl:p-0">
        <section className=" container mx-auto pt-12 grid grid-cols-1  xl:px-0">
          <div className="flex justify-center border px-4 border-np1 shadow-[rgba(17,_17,_26,_0.1)_0px_0px_3px] shadow-np2">
            <div className="my-auto">
              <div className="m-2 p-4 md:m-0">
                <h1 className="xl:text-6xl text-4xl font-semibold text-center xl:text-start m-3  ">
                  Welcome!
                </h1>
                <h2 className="xl:text-5xl text-1xl text-center xl:text-start">
                  <span ref={el} />
                </h2>
                <p className="text-gray-400 md:ml-4 mt-3">
                  Are Developer and recently started your own business Already
                  made website to ensure presence wants to develop.
                </p>
              </div>
            </div>
            <div className="hidden lg:block text-sm">
              <img src={img} alt="img" className="" />
            </div>
          </div>
        </section>
      </main>

      <BlogPage />
    </div>
  );
};

export default Home;
