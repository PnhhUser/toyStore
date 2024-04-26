import { Link } from "react-router-dom";
import { UilArrowCircleLeft } from "@iconscout/react-unicons";

export default function DeliveryPage() {
  return (
    <div className="ps-2 pe-4">
      <Breadcrumb />
      <div className="shadow-xl mt-5">
        <DeliveryInfo />
        <Instruction />
      </div>
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

const DeliveryInfo = () => {
  return (
    <div className="p-4 pt-5">
      <h1 className="text-3xl mb-5"> Delivery info </h1>
      <p className="text-stone-700">
        A successful marketing plan relies heavily on the pulling-power of
        advertising copy. Writing result-oriented ad copy is difficult, as it
        must appeal to, entice, and convince consumers to take action. There is
        no magic formula to write perfect ad copy; it is based on a number of
        factors, including ad placement, demographic, even the consumer’s mood
        when they see your ad.
      </p>
    </div>
  );
};

const Instruction = () => {
  return (
    <div className="flex flex-col justify-center px-6 p-10">
      <h2 className="text-3xl"> Instruction </h2>
      <div>
        <div className="relative max-w-sm">
          <p className="mt-6 border-l-4 border-dotted px-4 text-stone-700">
            Begin
          </p>
          <ul className="ps-10 list-decimal border-l-4 border-dotted">
            <li> Now this is a story all about how, my life </li>
            <li> And I'd like to take a minute just sit right there </li>
            <li>
              {" "}
              I'll tell you how I became the prince of a town called Bel-Air{" "}
            </li>
          </ul>
          <div className="absolute top-0 -ml-1.5 h-4 w-4 rounded-full bg-stone-300"></div>
        </div>
        <div className="relative max-w-sm">
          <p className="mt-6 border-l-4 border-dotted px-4 text-stone-700">
            pending
          </p>
          <div className="absolute top-0 -ml-1.5 h-4 w-4 rounded-full bg-stone-300"></div>
        </div>
        <div className="relative max-w-sm">
          <p className="mt-6 border-l-4 border-dotted px-4 text-stone-700">
            Done
          </p>
          <div className="absolute top-0 -ml-1.5 h-4 w-4 rounded-full bg-stone-300"></div>
        </div>
      </div>
    </div>
  );
};
