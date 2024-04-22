import { NavLink } from "react-router-dom";
import { UilFacebookF } from "@iconscout/react-unicons";
import { UilTwitter } from "@iconscout/react-unicons";
import { UilInstagramAlt } from "@iconscout/react-unicons";
import { UilYoutube } from "@iconscout/react-unicons";

export default function Footer() {
  return (
    <div className="bg-pink-300 w-full h-44 md:h-36">
      <div className="flex flex-col md:flex-row pt-8 px-2 md:items-end md:flex-wrap gap-3">
        <h3 className="text-white text-xl w-1/2 md:pl-2">Toy_Store</h3>
        <nav className="text-white flex gap-4 w-1/2">
          <NavLink to="/"> Home </NavLink>
          <NavLink to="/"> Catelog </NavLink>
          <NavLink to="/"> Delivery </NavLink>
          <NavLink to="/"> About </NavLink>
          <NavLink to="/"> Contact </NavLink>
        </nav>
        <nav className="flex gap-4 text-white  md:justify-center mt-4">
          <NavLink to="/">
            <UilFacebookF />
          </NavLink>
          <NavLink to="/">
            <UilTwitter />
          </NavLink>
          <NavLink to="/">
            <UilInstagramAlt />
          </NavLink>
          <NavLink to="/">
            <UilYoutube />
          </NavLink>
        </nav>
      </div>
    </div>
  );
}
