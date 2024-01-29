import trendingTags from "../data/trendingTags";

const BlogTags = () => {
  // console.log(trendingTags);

  const Tags = trendingTags.map((tag, index) => {
    {
      return (
        <ul className="bg-[#176B87] text-ctm1 rounded inline-grid" key={index}>
          <li className="font-bold p-1 gap-x-3">{tag}</li>
        </ul>
      );
    }
  });

  return (
    <div className="">
      <div className=" bg-[#F3F3F3] rounded p-2 mx-auto">
        <h4 className="font-bold">#Trending Tags</h4>
        <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-4 gap-x-1 gap-y-2 text-center mt-1 overflow-hidden">
          {Tags}
        </div>
      </div>
    </div>
  );
};

export default BlogTags;
