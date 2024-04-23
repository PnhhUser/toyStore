import { UilShoppingCart, UilBars } from "@iconscout/react-unicons";
import { useSpring, animated } from "@react-spring/web";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
// const categories = [
//   { id: 1, name: "Catalog" },
//   { id: 2, name: "Delivery" },
//   { id: 3, name: "About" },
//   { id: 4, name: "Contact" },
// ];

export default function Header() {
  // const listCategoies = categories.map((category) => {
  //   return <li key={category.id}>{category.name}</li>;
  // });

  return <Nav />;
}

const Nav = function () {
  const [isOpen, setIsOpen] = useState(true);
  const [navbar, api] = useSpring(() => {
    return {
      from: { y: 0 },
    };
  });

  const handleOpenBar = function (e) {
    setIsOpen(!isOpen);
    if (isOpen) {
      api.start({
        from: {
          y: 0,
        },
        to: {
          y: 225,
        },
      });
    } else {
      api.start({
        reverse: true,
      });
    }
  };

  return (
    <>
      <div className="flex flex-wrap bg-white h-16 shadow-md relative z-50 md:px-10">
        <div className="w-1/3">
          <Link
            to="/"
            className="text-xl flex justify-center items-center h-16 font-semibold"
          >
            Toy_Store
          </Link>
        </div>
        <div className="w-2/3 flex justify-end items-center h-16 md:justify-between">
          <div className="hidden md:flex gap-6">
            <NavLink
              to="store"
              className="px-3 py-5 hover:bg-pink-200 hover:text-white"
            >
              Catalog
            </NavLink>
            <NavLink
              to="delivery"
              className="px-3 py-5 hover:bg-pink-200 hover:text-white"
            >
              Delivery
            </NavLink>
            <NavLink
              to="about"
              className="px-3 py-5 hover:bg-pink-200 hover:text-white"
            >
              About
            </NavLink>
            <NavLink
              to="contact"
              className="px-3 py-5 hover:bg-pink-200 hover:text-white"
            >
              Contact
            </NavLink>
          </div>
          <div className="p-5 relative bg-pink-300 cursor-pointer">
            <UilShoppingCart className="text-white" />
            <span
              className="absolute top-1/2 left-10 bg-red-500 w-4 h-4 text-center leading-4 text-white rounded-full"
              style={{ fontSize: 10 }}
            >
              0
            </span>
          </div>
          <div className="p-5 md:hidden" onClick={handleOpenBar}>
            <UilBars />
          </div>
        </div>
      </div>
      <animated.div
        style={{ ...navbar }}
        className="flex flex-col md:hidden absolute -top-40 left-0 z-0 bg-white w-full"
      >
        <NavLink to="store" className="border-b py-3 px-6">
          Catalog
        </NavLink>
        <NavLink to="delivery" className="border-b py-3 px-6">
          Delivery
        </NavLink>
        <NavLink to="about" className="border-b py-3 px-6">
          About
        </NavLink>
        <NavLink to="contact" className="border-b py-3 px-6">
          Contact
        </NavLink>
      </animated.div>
    </>
  );
};
