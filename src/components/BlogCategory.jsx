import datas from "../data/data";

const BlogCategory = () => {
  const D = datas.map((value, index) => {
    return (
      <ul className="" key={index}>
        <li type="button" className="bg-ctm6 text-center rounded w-full px-2 py-2 overflow-hidden   hover:shadow-[0px_1.0px_0px_0px_#f7fafc] duration-200 cursor-pointer">
          {value.category}
        </li>
      </ul>
    );
  });

  return (
    <section className="">
      <h5 className="pt-4 font-bold text-ctm5 text-xl">Categories</h5>

      <main className="grid md:grid-cols-4 2xl:grid-cols-9 grid-cols-1 w-full gap-y-2 mt-4 gap-x-3">
        {D}
      </main>
    </section>
  );
};

export default BlogCategory;
