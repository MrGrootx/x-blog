import { Link, useRouteError } from "react-router-dom";

const Error = () => {
  const { status, statusText } = useRouteError();
  console.log(status, statusText);
  console.log(useRouteError());

  return (
    <div>
      <h4>oops Page not found</h4>
      <div>
        <li>
         <Link to={"/"} className="text-red-500 underline">return to home Page</Link>
        </li>
      </div>
    </div>
  );
};

export default Error;
