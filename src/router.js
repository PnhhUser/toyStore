import Layout from "./Components/Layout/Layout";
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
        <Route path="toy/:id" element={<DetailToyPage />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default Router;
