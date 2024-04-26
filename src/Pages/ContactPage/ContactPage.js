import { Form, Link, NavLink } from "react-router-dom";
import {
  UilFacebookF,
  UilArrowCircleLeft,
  UilYoutube,
  UilInstagramAlt,
  UilTwitter,
} from "@iconscout/react-unicons";

export default function ContactPage() {
  return (
    <div className="ps-2 pe-4">
      <Breadcrumb />
      <ContactForm />
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

const ContactForm = () => {
  return (
    <div className="shadow-xl my-10 container mx-auto flex flex-wrap p-4 rounded-xl">
      <div className="w-full md:w-1/2">
        <h4 className="text-xl mb-8"> Leave a Message</h4>
        <Form>
          <div className="flex flex-col my-2">
            <label htmlFor="fullname" className="text-sm">
              Full Name
            </label>
            <div className="w-full border-2 rounded-full overflow-hidden">
              <input
                className="outline-0 w-full indent-4 py-3 text-sm"
                type="text"
                id="fullname"
                autoComplete="false"
                placeholder="Enter your name"
              />
            </div>
          </div>
          <div className="flex flex-col my-2 ">
            <label htmlFor="email" className="text-sm">
              Email Address
            </label>
            <div className="w-full border-2 rounded-full overflow-hidden">
              <input
                className="outline-0 w-full indent-4 py-3 text-sm"
                type="email"
                id="email"
                autoComplete="false"
                placeholder="Your contact email"
              />
            </div>
          </div>
          <div className="flex flex-col my-2 ">
            <label htmlFor="content" className="text-sm">
              Content
            </label>
            <div className="w-full border-2 h-28 rounded-xl overflow-hidden">
              <textarea
                id="content"
                className="outline-0 w-full h-full resize-none indent-4 py-3 text-sm"
                placeholder="Message text..."
              ></textarea>
            </div>
          </div>
          <div className="my-6">
            <button className="bg-pink-400 text-white w-44 h-12 rounded-xl">
              Send Message
            </button>
          </div>
        </Form>
      </div>
      <div className="w-full md:w-1/2 mt-10 md:p-10 md:ps-24">
        <h4 className="text-lg mb-4"> Contact Info </h4>
        <ul className="text-sm text-stone-700">
          <li>4293 Euclid Avenue, Los Angeles, CA 90012</li>
          <li>+1 213 974-3898</li>
          <li className="underline">toystore@template.com</li>
        </ul>
        <div className="mt-4">
          <h6> Follow us</h6>
          <nav className="flex gap-4 mt-2">
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
    </div>
  );
};
