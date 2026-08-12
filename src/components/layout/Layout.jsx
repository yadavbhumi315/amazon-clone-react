import Navbar from "./Navbar";
import Footer from "./Footer";
import MenuBar from "../MenuBar/MenuBar";

function Layout({ children }) {
  return (
    <>
      <Navbar />
      <MenuBar />
      {children}
      <Footer />
    </>
  );
}

export default Layout;