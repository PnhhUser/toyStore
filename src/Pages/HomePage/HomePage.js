import { Link } from "react-router-dom";
import { useSpring, animated } from "@react-spring/web";
import bg from "../../Assets/Images/image/img_7.jpg";
import bgAbout from "../../Assets/Images/image/img_8.jpg";
import teddy from "../../Assets/Images/toys/toy_1.png";
import flower from "../../Assets/Images/toys/toy_2.png";
import { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { UilArrowRight } from "@iconscout/react-unicons";
import instagram_1 from "../../Assets/Images/image/img_1.jpg";
import instagram_2 from "../../Assets/Images/image/img_2.jpg";
import instagram_3 from "../../Assets/Images/image/img_3.jpg";
import instagram_4 from "../../Assets/Images/image/img_4.jpg";
import instagram_5 from "../../Assets/Images/image/img_5.jpg";
import instagram_6 from "../../Assets/Images/image/img_6.jpg";

const instagrams = [
  instagram_1,
  instagram_2,
  instagram_3,
  instagram_4,
  instagram_5,
  instagram_6,
];

export default function HomePage() {
  return (
    <div>
      <Banner />
      <ShopNow />
      <StuffedAnimals />
      <WoodenToys />
      <AboutShop />
      <Instagram />
    </div>
  );
}

const Banner = function () {
  const [openCatalog] = useSpring(() => {
    return {
      from: {
        scale: 0,
        opacity: 0,
      },
      to: {
        scale: 1,
        opacity: 1,
      },
      delay: 800,
    };
  });

  return (
    <div
      className="w-full bg-no-repeat bg-cover bg-center flex justify-center items-center px-2"
      style={{
        backgroundImage: "url(" + bg + ")",
        height: 500,
      }}
    >
      <animated.div
        style={{ ...openCatalog }}
        className="bg-white w-96 h-72 rounded-xl shadow-xl flex flex-col justify-center items-center gap-4"
      >
        <p className="text-pink-300 font-semibold">Welcome to the toy store</p>
        <h1 className="text-4xl text-center px-20">
          Choose a toy for your baby
        </h1>
        <Link
          to="/"
          className="capitalize bg-pink-300 text-white h-12 w-44 rounded-full p-2 flex justify-center items-center"
        >
          Open catalog
        </Link>
      </animated.div>
    </div>
  );
};

const ShopNow = function () {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);

  return (
    <div id="typeToys" className="flex flex-col px-4 py-16 gap-20 md:flex-row">
      <div
        className="w-full h-96 rounded-3xl flex flex-col items-center gap-4 md:h-48 md:w-1/2 md:flex-row"
        style={{ backgroundColor: "#ffc12c" }}
        data-aos="zoom-in"
      >
        <div className="relative -top-14 h-1/2 flex-1">
          <img src={teddy} alt="copy" className="w-64" />
        </div>
        <div className="flex flex-col items-center h-1/2 gap-4 flex-1">
          <h3 className="text-white" style={{ fontSize: 22 }}>
            Stuffed Animals
          </h3>
          <div
            className="bg-white font-semibold w-28 h-10 rounded-full text-center leading-10 capitaliz"
            style={{
              color: "#ffc12c",
            }}
          >
            shop now
          </div>
        </div>
      </div>
      <div
        className="w-full h-96 rounded-3xl flex flex-col items-center gap-4 md:h-48 md:w-1/2 md:flex-row"
        style={{ backgroundColor: "#fb416b" }}
        data-aos="zoom-in"
      >
        <div className="relative -top-14 h-1/2 flex-1">
          <img src={flower} alt="copy" className="w-64" />
        </div>
        <div className="flex flex-col items-center h-1/2 gap-4 flex-1">
          <h3 className="text-white" style={{ fontSize: 22 }}>
            Wooden Toys
          </h3>
          <div
            className="bg-white font-semibold w-28 h-10 rounded-full text-center leading-10 capitaliz"
            style={{
              color: "#fb416b",
            }}
          >
            shop now
          </div>
        </div>
      </div>
    </div>
  );
};

const StuffedAnimals = function () {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch("/api/product")
      .then((res) => res.json())
      .then((data) => {
        setProduct(data.products);
      });
  }, []);

  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);

  const stuffed = product?.filter((p) => p.type === "stuffed");

  const listStuffed = stuffed?.map((s) => {
    return (
      <Link
        to="/toy/1"
        className="w-full md:w-64 h-96 md:h-72 bg-white shadow-xl my-3 rounded-2xl flex flex-col gap-2"
        data-aos="zoom-in"
        key={s.id}
      >
        <div className="flex justify-center">
          <img src={s.urlImg} alt="copy" className="w-72 md:w-40" />
        </div>
        <div className="flex flex-col items-center gap-2">
          <h5 className="text-xl font-semibold"> {s.name} </h5>
          <div className="w-24 h-8 bg-pink-300 text-white flex justify-center items-center rounded-full text-sm">
            <span>{s.price}</span> USD
          </div>
        </div>
      </Link>
    );
  });

  return (
    <div className="px-6 my-10">
      <div className="flex items-center justify-between mb-2 pb-5 border-b-2">
        <h4 className="text-xl font-bold">Stuffed Animals</h4>
        <Link to="/" className="flex border-b-2 border-red-400">
          <p className="text-red-400">see all toys</p>
          <UilArrowRight className="text-red-400" />
        </Link>
      </div>
      <div className="flex flex-col md:flex-row md:gap-4">{listStuffed}</div>
    </div>
  );
};

const WoodenToys = function () {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);
  return (
    <div className="px-6 my-10">
      <div className="flex items-center justify-between mb-2 pb-5 border-b-2">
        <h4 className="text-xl font-bold">Stuffed Animals</h4>
        <Link to="/" className="flex border-b-2 border-red-400">
          <p className="text-red-400">see all toys</p>
          <UilArrowRight className="text-red-400" />
        </Link>
      </div>
      <div className="flex flex-col md:flex-row md:gap-4">
        <Link
          to="/toy/1"
          className="w-full md:w-64 h-96 md:h-72 bg-white shadow-xl my-3 rounded-2xl flex flex-col gap-2"
          data-aos="zoom-in"
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

const AboutShop = function () {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);
  return (
    <div
      className="w-full bg-no-repeat bg-cover bg-center flex justify-center items-center px-2 my-4 bg-fixed"
      style={{
        backgroundImage:
          "linear-gradient(180deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),url(" +
          bgAbout +
          ")",
        height: 416,
      }}
    >
      <div
        className="w-96 h-72  flex flex-col justify-center items-center gap-4 md:w-2/3"
        data-aos="zoom-in"
      >
        <p className="text-white text-xl font-semibold capitalize md:text-4xl">
          About the shop
        </p>
        <p className="text-md text-white text-center md:text-2xl">
          There is no magic formula to write perfect ad copy. It is based on a
          number of factors, including ad placement, demographic, even the
          consumer’s mood.
        </p>
        <Link
          to="/"
          className="capitalize bg-pink-300 text-white h-12 w-44 rounded-full p-2 flex justify-center items-center"
        >
          Open catalog
        </Link>
      </div>
    </div>
  );
};

const Instagram = function () {
  const listInstagram = instagrams.map((i, k) => {
    return (
      <Link to="/" className="w-32 h-32 rounded-2xl overflow-hidden" key={k}>
        <img src={i} alt="copy" className="w-full h-full" />
      </Link>
    );
  });

  return (
    <div className="flex flex-col my-12">
      <div className="flex justify-center">
        <h3 className="text-2xl font-semibold mb-6"> We're on Instagram! </h3>
      </div>
      <div className="flex flex-wrap justify-center gap-4">{listInstagram}</div>
    </div>
  );
};
