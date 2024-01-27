import BlogCategory from "../components/BlogCategory";

import blogimg from "../assets/blog/blog1.webp";
import logo from "../assets/img/profile.png";

import { FaRegClock } from "react-icons/fa6";

const BlogPage = () => {
  return (
    <main>
      <section className="bg-[#283043] md:w-screen p-6 xl:p-0">
        <div className="p-6  container mx-auto my-auto">
          <div>
            <h3 className="text-2xl font-semibold">Latest Blog Post</h3>
          </div>
          <BlogCategory />

          <main className="flex gap-x-5 border-red-500  p-2 mt-6 mx-auto">
            <section className="grid grid-cols-1 mx-auto justify-between gap-y-2">
              <div className=" flex bg-ctm8 p-3 rounded">
                <div>
                  <img src={blogimg} alt="blogImg" />
                </div>
                <div className="mx-auto ">
                  <div className="font-semibold text-xl p-3 hover:underline">
                    <a href="http://" target="_blank" rel="noopener noreferrer">
                      Building microservices with Dropwizard, MongoDB & Docker
                    </a>
                  </div>
                  <p className="p-4">
                    This NoSQL database oriented to documents (by documents like
                    JSON) combines some of the features from relational
                    databases, easy to use and the multi-
                  </p>

                  <div className="ml-3">
                    <div className="flex items-center">
                      <div>
                        <img
                          src={logo}
                          className="w-10 h-10 rounded-full "
                          alt="logo"
                        />
                      </div>

                      <div className="ml-2">
                        <span>Mr Groot</span>
                        <div className="flex items-center gap-x-2">
                          <span>Dec 10, 2021</span>
                          <FaRegClock className="text-ctm5" />
                          <span> 2 min</span>
                        </div>
                      </div>

                      <div></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className=" flex bg-ctm8 p-3 rounded">
                <div>
                  <img src={blogimg} alt="blogImg" />
                </div>
                <div className="mx-auto ">
                  <div className="font-semibold text-xl p-3 hover:underline">
                    <a href="http://" target="_blank" rel="noopener noreferrer">
                      Building microservices with Dropwizard, MongoDB & Docker
                    </a>
                  </div>
                  <p className="p-4">
                    This NoSQL database oriented to documents (by documents like
                    JSON) combines some of the features from relational
                    databases, easy to use and the multi-
                  </p>

                  <div className="ml-3">
                    <div className="flex items-center">
                      <div>
                        <img
                          src={logo}
                          className="w-10 h-10 rounded-full "
                          alt="logo"
                        />
                      </div>

                      <div className="ml-2">
                        <span>Mr Groot</span>
                        <div className="flex items-center gap-x-2">
                          <span>Dec 10, 2021</span>
                          <FaRegClock className="text-ctm5" />
                          <span> 2 min</span>
                        </div>
                      </div>

                      <div></div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className=" max-w-96 w-full text-black">
              <div className="border bg-[#F3F3F3] rounded p-2">
                <h4 className="font-bold">#Tags</h4>
                <div className="grid grid-cols-4 gap-x-1 gap-y-2 text-center mt-1">
                  <div className="border border-black  overflow-hidden overflow-ellipsis">Tech</div>
  
                </div>
              </div>
            </section>
          </main>
        </div>
      </section>
    </main>
  );
};

export default BlogPage;
