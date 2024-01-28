import BlogCategory from "../components/BlogCategory";

import blogimg from "../assets/blog/blog1.webp";
import logo from "../assets/img/profile.png";

import { FaRegClock } from "react-icons/fa6";
import BlogTags from "../layouts/BlogTags";

import datas from "../data/data";
import { Link } from "react-router-dom";

const BlogPage = () => {
  const posts = datas.map((data) => {
    return (
      <div key={data.id}>
        <div className=" xl:flex mt-3 xl:mt-0 bg-ctm8 p-3 rounded mb-3">
          <div className="my-auto">
            <img src={data.image ? data.image : blogimg} alt="blogImg" className="object-cover" />
          </div>
          <div className="mx-auto">
            <div className="font-semibold text-xl p-3 hover:underline">
              <Link to={"/post/"+data.id} rel="noopener noreferrer">
                {data.title}
              </Link>
            </div>
            <p className="p-4 xl:p-2 cursor-pointer text-gray-400">
              {data.content}
            </p>

            <div className="ml-3">
              <div className="flex items-center">
                <div>
                  <img
                    src={logo}
                    className="w-10 h-10 rounded-full object-cover "
                    alt="logo"
                  />
                </div>

                <div className="ml-2">
                  <span>{data.author}</span>
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
      </div>
    );
  });

  return (
    <main className="">
      <section className="bg-[#283043] w-full md:p-6 xl:p-0">
        <div className="md:p-6  container mx-auto my-auto">
          <div className=" px-3 md:0 pt-4 md:pt-0">
            <div>
              <h3 className="text-2xl font-semibold">Latest Blog Post</h3>
            </div>
            <BlogCategory />
          </div>

          <main className="xl:flex gap-x-5 p-2 mt-6 mx-auto">
            <section className="max-w-96 md:max-w-[700px]  w-full text-black mx-auto">
              <BlogTags />
            </section>

            <section className="xl:grid grid-cols-1 mx-auto justify-between gap-y-4 mt-4 xl:mt-0">
              <div>{posts}</div>
            </section>
          </main>
        </div>
      </section>
    </main>
  );
};

export default BlogPage;
