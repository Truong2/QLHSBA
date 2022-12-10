import { Link } from "react-router-dom";

const Error = () => {
  return (
    <section className="flex items-center justify-center flex-col my-0 mx-auto w-[100%] h-[100vh]">
      <h2 className="text-9xl">404</h2>
      <p className="text-2xl">Page Not Found</p>
      <Link style={{ fontSize: "1.5rem" }} to="/">
        Back Home
      </Link>
    </section>
  );
};
export default Error;
