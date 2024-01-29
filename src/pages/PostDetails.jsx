import dbData from "../data/data";

// import blogimg from "../assets/blog/blog1.webp";
import logo from "../assets/img/icon.png";
import logo2 from "../assets/img/profile.png";

import { FaUser } from "react-icons/fa";
import { FaCalendarDays } from "react-icons/fa6";
import { MdLocationPin } from "react-icons/md";

import { useParams } from "react-router-dom";
import NoDataPage from "../components/NoDataPage";

const PostDetails = () => {
  const { id } = useParams();
  // console.log(id);

  // Logic For Post Filter
  let Arr = [];
  dbData.map((data) => {
    // console.log(data);
    if (id == data.id) {
      const post = dbData.filter((post) => post.id == id);
      post.forEach((postData) => {
        // console.log(realData);
        return postData;
      });

      Arr = post;
    }
  });

  // console.log(Arr.length == 0);
  if (Arr.length == 0) {
    // console.log("no Data");
    return (
      <div>
        <NoDataPage />
      </div>
    );
  } else {
    const appendDiv = Arr.map((data, index) => {
      // console.log(data);
      return (
        <div key={index}>
          <div className="">
            <div className="flex justify-center">
              <img src={`./x-blog/${data.image}`} alt="blogImg" className="object-cover" />
            </div>
            <div className="mt-16">
              <h1 className="font-semibold md:text-2xl text-xl lg:text-4xl  text-ctm1">
                {data.title}
              </h1>
              {/* ICONS */}
              <div className="flex gap-x-3 text-gray-100 mt-3">
                <div className="flex items-center gap-x-1 ">
                  <span>
                    <FaUser className="text-green-600" />
                  </span>
                  <span>{data.author}</span>
                </div>

                <div className="flex items-center gap-x-1">
                  <span>
                    <FaCalendarDays className="text-cyan-600" />
                  </span>
                  <span>{data.date}</span>
                </div>
              </div>

              <div className="px-2 ">
                <p className="text-gray-200 ml-5 mt-6">{data.content}</p>
                <p className="text-gray-200 ml-5 mt-6">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Pariatur numquam dolore officiis consectetur itaque earum ipsa
                  id, eveniet aperiam dolorem maiores ipsam consequatur
                  exercitationem corporis, tenetur veniam quia hic optio!
                </p>

                <p className="text-gray-200 ml-5 mt-6">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Pariatur numquam dolore officiis consectetur itaque earum ipsa
                  id, eveniet aperiam dolorem maiores ipsam consequatur
                  exercitationem corporis, tenetur veniam quia hic optio!
                </p>
              </div>
            </div>
          </div>
        </div>
      );
    });

    // Return For elements
    return (
      <section className="bg-[#283043] w-full md:p-6 xl:p-0">
        <main className="pb-20">
          <div className="container mx-auto border-l border-r border-gray-700 pt-20">
            <main className="xl:flex gap-x-5 p-2 mt-6  md:grid grid-cols-2">
              <section className="max-w-96 md:max-w-[800px] w-full text-black mx-auto ">
                {appendDiv}
              </section>

              <section className="max-w-2xl  md:max-w-[500px] w-full text-black mx-auto hidden md:block">
                {/* Follow Page */}
                <div className="bg-ctm10 rounded">
                  <div className="mx-3">
                    <span className="font-semibold text-gray-100 uppercase tracking-widest text-sm">
                      Owner
                    </span>
                    <div className="flex text-ctm1 items-center ">
                      <div className="">
                        <img
                          src={logo2}
                          className="w-9 h-9 rounded-full object-fill"
                          alt="logoPost"
                        />
                      </div>

                      <div className="ml-1">
                        <div>
                          <h3 className="ml-3 font-bold">Mr Groot</h3>
                        </div>
                        <div className="flex items-center gap-x-2 ">
                          <h3>
                            <MdLocationPin className="text-teal-400" />
                          </h3>

                          <span className="text-gray-200 text-sm">
                            Los Angeles, CA, USA
                          </span>
                        </div>
                      </div>
                    </div>
                    {/* Buttons */}
                    <div className="p-4">
                      <div className="flex justify-center mt-3">
                        <button
                          type="button"
                          className="bg-[#05BFDB] hover:bg-[#37b4c7] duration-700 font-bold px-32 py-1 rounded"
                        >
                          Follow
                        </button>
                      </div>
                      <div className="flex justify-center mt-3">
                        <button
                          type="button"
                          className="bg-[#05BFDB] bg-opacity-5 border border-[#05BFDB] text-ctm1 hover:text-ctm3 hover:bg-[#37b4c7] duration-700 font-bold px-32 py-1 rounded"
                        >
                          Message
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-ctm10 rounded mt-6">
                  <div className="  border-b border-gray-400 border-opacity-30 mx-3">
                    <h3 className="text-center mt-2 text-xl text-ctm1 mb-2 font-bold">
                      Search
                    </h3>
                  </div>
                  <div className="p-3 text-black">
                    <input
                      type="text"
                      placeholder="Search"
                      className="outline-none w-full px-3  rounded py-1 font-semibold "
                    />
                  </div>
                </div>

                <div className="bg-ctm10 rounded mt-6">
                  <div className="p-3">
                    <div className="flex justify-center">
                      <img src={logo} alt="logo" className="w-8" />
                      <h3 className="font-Viga text-2xl text-gray-200">Blog</h3>
                    </div>
                    <div className="text-center text-ctm1 mt-3">
                      <p>
                        Lorem ipsum dolor sit amet, conse tfctetur adipiscing
                        elit. Vel in in donec iaculis tempasus odio nunc laoreet
                        . Libero ullam rgscorper.
                      </p>
                    </div>
                  </div>
                </div>
              </section>
            </main>
          </div>
        </main>
      </section>
    );
  }
};

export default PostDetails;
