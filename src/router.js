import Layout from "./Components/Layout/Layout";
import HomePage from "./Pages/HomePage/HomePage";

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
        <Route index element={<HomePage />}></Route>
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default Router;
