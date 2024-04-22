import { Link } from "react-router-dom";
import flower from "../../Assets/Images/toys/toy_2.png";
import { UilArrowRight } from "@iconscout/react-unicons";
import Aos from "aos";
import { useEffect } from "react";

export default function DetailToyPage() {
  return (
    <div className="px-4">
      <Breadcrumb />
      <DetailToy />
      <RelatedToys />
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

const DetailToy = () => {
  return (
    <div className="flex bg-white shadow-2xl px-2 p-3 my-2 flex-col md:flex-wrap rounded-xl">
      <div className="md:flex">
        <div className="w-full h-100">
          <img src={flower} alt="copy" />
        </div>
        <div className="p-2">
          <h3 className="font-bold text-2xl"> Teddy Bear </h3>
          <p className="my-4 text-stone-600">
            A successful marketing plan relies heavily on the pulling-power of
            advertising copy. Writing result-oriented ad copy is difficult, as
            it must appeal to, entice, and convince consumers to take action.
            There is no magic formula to write perfect ad copy. It is based on a
            number of factors.
          </p>
          <p className="text-pink-300 text-xl"> $ 30.00 USD </p>
          <div className="flex gap-2">
            <div className="quantity border-2 w-20 overflow-hidden rounded-full">
              <input
                type="text"
                minLength={1}
                maxLength={2}
                className="w-full h-full text-center outline-0 text-pink-300"
              />
            </div>
            <Link
              to="/"
              className="bg-pink-300 text-white w-32 text-center h-10 leading-10"
            >
              add to cart
            </Link>
          </div>
        </div>
      </div>

      <div className="my-10 p-2">
        <h1 className="text-xl font-semibold border-b-2 py-2">
          Product Details
        </h1>
        <div className="flex flex-col">
          <div>
            <h3 className="font-semibold mt-10">
              Add Your Product Description
            </h3>
            <p className="text-stone-600 my-4">
              The rich text element allows you to create and format headings,
              paragraphs, blockquotes, images, and video all in one place
              instead of having to add and format them individually. Just
              double-click and easily create content. A rich text element can be
              used with static or dynamic content. For static content, just drop
              it into any page and begin editing. For dynamic content, add a
              rich text field to any collection and then connect a rich text
              element to that field in the settings panel. Voila!
            </p>
          </div>
          <div className="border-2 p-5 rounded-xl md:w-96 md:mt-10">
            <div className="border-b-2 p-4 flex justify-between text-sm">
              <span> width</span>
              <span> 38 in </span>
            </div>
            <div className="border-b-2 p-4 flex justify-between text-sm">
              <span> height</span>
              <span> 32 in </span>
            </div>
            <div className="border-b-2 p-4 flex justify-between text-sm">
              <span> Length</span>
              <span> 21.5 in </span>
            </div>
            <div className="border-b-2 p-4 flex justify-between text-sm">
              <span> Width </span>
              <span> 24 oz </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const RelatedToys = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);
  return (
    <div className="px-6 my-10">
      <div className="flex items-center justify-between mb-2 pb-5 border-b-2">
        <h4 className="text-xl font-bold">Related Products</h4>
        <Link to="/" className="flex border-b-2 border-red-400">
          <p className="text-red-400">see all toys</p>
          <UilArrowRight className="text-red-400" />
        </Link>
      </div>
      <div className="flex flex-col md:flex-row md:gap-4">
        <div
          data-aos="zoom-in"
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
        </div>
      </div>
    </div>
  );
};
