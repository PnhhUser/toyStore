import Layout from "./Components/Layout/Layout";
import AboutPage from "./Pages/AboutPage/AboutPage";
import ContactPage from "./Pages/ContactPage/ContactPage";
import DeliveryPage from "./Pages/DeliveryPage/DeliveryPage";
import DetailToyPage from "./Pages/DetailToyPage/DetailToyPage";
import HomePage from "./Pages/HomePage/HomePage";
import StorePage from "./Pages/StorePage/StorePage";

const {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} = require("react-router-dom");

function Router() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="store" element={<StorePage />} />
        <Route path="store/toy/:id" element={<DetailToyPage />} />
        <Route path="delivery" element={<DeliveryPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="contact" element={<ContactPage />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default Router;
