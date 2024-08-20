import { Outlet, useNavigation } from "react-router-dom";
import { Navbar, Header, Footer } from "../components";

const HomeLayout = () => {
  return (
    <div className="bg-green97">
      <div className="bg-darkGreen15 font-primary">
        <Header />
        <Navbar />
      </div>

      <section>
        <Outlet />
      </section>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default HomeLayout;
