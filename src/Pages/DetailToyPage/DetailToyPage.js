import { Link, useLocation, useParams } from "react-router-dom";
import { UilArrowRight, UilArrowCircleLeft } from "@iconscout/react-unicons";
import Aos from "aos";
import { useEffect } from "react";
import { useProducts } from "../../Context/productContext";

export default function DetailToyPage() {
  return (
    <div className="ps-2 pe-4">
      <Breadcrumb />
      <DetailToy />
      <RelatedToys />
    </div>
  );
}

const Breadcrumb = () => {
  const { state } = useLocation();

  const back =
    (state?.back === null && "/store") ||
    (state?.back === "wooden" && `/store?type=${state?.back}`) ||
    (state?.back === "stuffed" && `/store?type=${state?.back}`);
  return (
    <div className="flex h-8 mt-6 my-2 gap-1">
      <Link
        to={back}
        className="bg-pink-300 text-white h-8 w-auto ps-2 pe-4 rounded-e-xl flex items-center"
      >
        <UilArrowCircleLeft />
      </Link>
    </div>
  );
};

const DetailToy = () => {
  const { products } = useProducts();
  const { id } = useParams();
  const toy = products.init?.find((item) => Number(item.id) === Number(id));

  return (
    <div className="flex bg-white shadow-2xl px-2 p-3 my-2 flex-col md:flex-wrap rounded-xl">
      <div className="md:flex">
        <div className="w-full h-100">
          <img src={toy?.urlImg} alt="copy" />
        </div>
        <div className="p-2">
          <h3 className="font-bold text-2xl"> {toy?.name} </h3>
          <p className="my-4 text-stone-600">{toy?.content}</p>
          <p className="text-pink-300 text-xl"> $ {toy?.price} USD </p>
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
            <p className="text-stone-600 my-4">{toy?.describe}</p>
          </div>
          <div className="border-2 p-5 rounded-xl md:w-96 md:mt-10">
            <div className="border-b-2 p-4 flex justify-between text-sm">
              <span> width</span>
              <span> {toy?.width} in </span>
            </div>
            <div className="border-b-2 p-4 flex justify-between text-sm">
              <span> height</span>
              <span> {toy?.height} in </span>
            </div>
            <div className="border-b-2 p-4 flex justify-between text-sm">
              <span> Length</span>
              <span> {toy?.length} in </span>
            </div>
            <div className="border-b-2 p-4 flex justify-between text-sm">
              <span> weight </span>
              <span> {toy?.weight} oz </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const RelatedToys = () => {
  const { products } = useProducts();

  const randomPositionFisrt = Math.floor(Math.random() * 10);

  const positionDefaultstuffed = products.init?.slice(
    randomPositionFisrt,
    randomPositionFisrt + 3
  );

  const listData = positionDefaultstuffed?.map((p) => {
    return (
      <div
        key={p.id}
        data-aos="zoom-in"
        className="w-full md:w-64 h-96 md:h-72 bg-white shadow-xl my-3 rounded-2xl flex flex-col gap-2"
      >
        <div className="flex justify-center">
          <img src={p.urlImg} alt="copy" className="w-72 md:w-40" />
        </div>
        <div className="flex flex-col items-center gap-2">
          <h5 className="text-xl font-semibold"> {p.name} </h5>
          <div className="w-24 h-8 bg-pink-300 text-white flex justify-center items-center rounded-full text-sm">
            <span>{p.price}</span> USD
          </div>
        </div>
      </div>
    );
  });

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
      <div className="flex flex-col md:flex-row md:gap-4">{listData}</div>
    </div>
  );
};
