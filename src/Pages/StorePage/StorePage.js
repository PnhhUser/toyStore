import { Link, NavLink } from "react-router-dom";
import flower from "../../Assets/Images/toys/toy_2.png";

export default function StorePage() {
  return (
    <div className="ps-2 pe-4">
      <Breadcrumb />
      <Catalog />
      <Toys />
    </div>
  );
}

const Breadcrumb = () => {
  return (
    <div className="flex h-8 mt-6 my-2 gap-1">
      <Link
        className="text-sm bg-pink-300 text-white h-8 w-auto ps-2 pe-4 text-center leading-8 rounded-e-xl"
        to="/"
      >
        Home
      </Link>
      <Link
        className="text-sm bg-pink-300 text-white h-8 w-auto ps-2 pe-4 text-center leading-8 rounded-e-xl"
        to="/"
      >
        Catalog
      </Link>
    </div>
  );
};

const Catalog = () => {
  return (
    <div className="flex my-6">
      <div className="flex-1">
        <h3 className="capitalize font-semibold text-lg hidden md:block">
          All toys
        </h3>
      </div>
      <div className="flex md:flex-1 flex-col w-full items-end gap-5 md:gap-8 md:flex-row">
        <NavLink className="bg-pink-300 w-auto px-6 text-center text-white h-10 rounded-full leading-10">
          {" "}
          All Toys{" "}
        </NavLink>
        <NavLink> Wooden Toys </NavLink>
        <NavLink> stuffed Animals </NavLink>
      </div>
    </div>
  );
};

const Toys = () => {
  return (
    <div className="px-6 my-10">
      <div className="flex flex-col md:flex-row md:gap-4">
        <Link
          to="/toy/1"
          className="w-full md:w-64 h-96 md:h-72 bg-white shadow-xl my-3 rounded-2xl flex flex-col gap-2"
        >
          <div className="flex justify-center">
            <img src={flower} alt="copy" className="w-72 md:w-40" />
          </div>
          <div className="flex flex-col items-center gap-2">
            <h5 className="text-xl font-semibold"> Teddy bear </h5>
            <div className="w-24 h-8 bg-pink-300 text-white flex justify-center items-center rounded-full text-sm">
              <span>30.00</span> USD
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};
