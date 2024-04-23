import { Link } from "react-router-dom";

export default function ContactPage() {
  return (
    <div className="px-4">
      <Breadcrumb />
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
        Contact
      </Link>
    </div>
  );
};

const GGMap = () => {};

const ContactForm = () => {};
