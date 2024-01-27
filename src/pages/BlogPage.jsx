import BlogCategory from "../components/BlogCategory";

const BlogPage = () => {
  return (
    <main>
      <section className="bg-[#283043] md:w-screen p-6 xl:p-0">
        <div className="p-6  container mx-auto">
          <div>
            <h3 className="text-2xl font-semibold">Latest Blog Post</h3>
          </div>

          <div className="">
            

            <BlogCategory />
          </div>
        </div>
      </section>
    </main>
  );
};

export default BlogPage;
