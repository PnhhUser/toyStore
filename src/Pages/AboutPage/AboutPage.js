import { Link } from "react-router-dom";
import img from "../../Assets/Images/image/img_8.jpg";
import { useEffect } from "react";
import Aos from "aos";

export default function AboutPage() {
  return (
    <div className="px-4">
      <Breadcrumb />
      <Intro />
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
        About
      </Link>
    </div>
  );
};

const Intro = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);
  return (
    <div className="my-6 md:flex md:items-center">
      <div className="flex items-center flex-col my-10 flex-1 px-10">
        <h1 className="text-2xl mt-2"> Introducing ToyStore </h1>
        <p className="text-center mt-4 text-stone-500">
          A successful marketing plan relies heavily on the pulling-power of
          advertising copy. Writing result-oriented ad copy is difficult, as it
          must appeal to, entice, and convince consumers to take action. A
          successful marketing plan relies heavily on the pulling-power of
          advertising copy. Writing result-oriented ad copy is difficult, as it
          must appeal to, entice, and convince consumers to take action. A
          successful marketing plan relies heavily on the pulling-power of
          advertising copy. Writing result-oriented ad copy is difficult, as it
          must appeal to, entice, and convince consumers to take action.
        </p>
      </div>
      <div className="md:w-full md:h-5/6 rounded-xl overflow-hidden flex-1">
        <img src={img} alt="copy" className="w-full h-full object-cover" />
      </div>
    </div>
  );
};
