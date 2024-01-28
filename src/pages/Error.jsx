import { Link } from "react-router-dom";

import errorImg from "../assets/img/errorimg.png";

const Error = () => {
  // const { status, statusText } = useRouteError();
  // console.log(status, statusText);
  // console.log(useRouteError());

  return (
    <section className="bg-ctm3 h-screen flex">
      <div className="  mx-auto my-auto">
        <img
          src={errorImg}
          alt="errorImg"
          className="animate-bounce delay-700 duration-700"
        />

        <ul className="w-full flex md:justify-end justify-center">
        <li>
            <Link to="/" className="bg-red-500 px-3 py-1 rounded outline-none">
              return to homePage
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Error;
{
  /* <li>
<Link to="/" className="text-red-500 underline">return to home Page</Link>
</li> */
}
