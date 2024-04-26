import { Link, useSearchParams } from "react-router-dom";
import { useProducts } from "../../Context/productContext";
import { UilArrowCircleLeft } from "@iconscout/react-unicons";

const TYPE = {
  STUFFED: "stuffed",
  WOODEN: "wooden",
};

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
        to="/"
        className="bg-pink-300 text-white h-8 w-auto ps-2 pe-4 rounded-e-xl flex items-center"
      >
        <UilArrowCircleLeft />
      </Link>
    </div>
  );
};

const Catalog = () => {
  const [searchParams] = useSearchParams();

  const type = searchParams.get("type");

  const active =
    "bg-pink-300 w-auto px-6 text-center text-white h-10 rounded-full leading-10";

  const typeName =
    (type === null && "All") ||
    (type === TYPE.STUFFED && TYPE.STUFFED) ||
    (type === TYPE.WOODEN && TYPE.WOODEN);

  const isActiveAll = type === null;

  const isActiveWooden = type === "wooden";

  const isActiveStuffed = type === "stuffed";

  return (
    <div className="flex my-6">
      <div className="flex-1">
        <h3 className="capitalize font-semibold text-lg hidden md:block">
          {typeName} toys
        </h3>
      </div>
      <div className="flex md:flex-1 flex-col w-full items-end gap-5 md:gap-8 md:flex-row md:items-center">
        <Link to="." className={isActiveAll ? active : null}>
          All Toys
        </Link>
        <Link to="?type=wooden" className={isActiveWooden ? active : null}>
          Wooden Toys
        </Link>
        <Link to="?type=stuffed" className={isActiveStuffed ? active : null}>
          stuffed Animals
        </Link>
      </div>
    </div>
  );
};

const Toys = () => {
  const [searchParams] = useSearchParams();

  const type = searchParams.get("type");

  const { products } = useProducts();

  const stuffeds = products.init?.filter((item) => item.type === TYPE.STUFFED);

  const woodens = products.init?.filter((item) => item.type === TYPE.WOODEN);

  const all = products.init;

  const dataList =
    (type === null && all) ||
    (type === TYPE.STUFFED && stuffeds) ||
    (type === TYPE.WOODEN && woodens);

  const listAll = dataList?.map((p) => {
    return (
      <Link
        state={{ back: searchParams.get("type") }}
        key={p.id}
        to={`toy/${p.id}`}
        className="w-full md:w-64 h-96 md:h-72 bg-white shadow-xl my-3 rounded-2xl flex flex-col gap-2"
      >
        <div className="flex justify-center">
          <img src={p.urlImg} alt="copy" className="w-72 md:w-40" />
        </div>
        <div className="flex flex-col items-center gap-2">
          <h5 className="text-xl font-semibold">{p.name}</h5>
          <div className="w-24 h-8 bg-pink-300 text-white flex justify-center items-center rounded-full text-sm">
            <span>{p.price}</span> USD
          </div>
        </div>
      </Link>
    );
  });

  return (
    <div className="px-6 my-10">
      <div className="flex flex-col md:flex-row md:gap-4 md:flex-wrap md:justify-center">
        {listAll}
      </div>
    </div>
  );
};
