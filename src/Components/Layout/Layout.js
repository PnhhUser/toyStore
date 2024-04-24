import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { ProductProvider } from "../../Context/productContext";

export default function Layout() {
  return (
    <div>
      <ProductProvider>
        <Header />
        <Outlet />
        <Footer />
      </ProductProvider>
    </div>
  );
}
