import dbData from "../data/data";

import { useParams } from "react-router-dom";
const PostDetails = () => {
  const { id } = useParams();

  let arr = [];
  dbData.map((data) => {
    // console.log(data);
    if (id == data.id) {
      const post = dbData.filter((post) => post.id == id);
      post.forEach((realData) => {
        // console.log(realData);
        return realData;
      });

      arr = post;
    }
  });
  // console.log(arr);
  const appendDiv = arr.map((data, index) => {
    return (
      <div key={index}>
        <h3>{data.title}</h3>
        <h3>content</h3>
        <h3>author</h3>
      </div>
    );
  });
  return <div className="text-black">{appendDiv}</div>;
};

export default PostDetails;
