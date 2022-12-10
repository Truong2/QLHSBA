import { Link, Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
const SharedLayout = () => {
  return (
    <>
      <Header />
      <section className="section">
        <Outlet />
      </section>
      {/* Footer */}
      <Footer />
    </>
  );
};
export default SharedLayout;
