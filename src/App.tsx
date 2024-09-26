import { createBrowserRouter, RouterProvider } from "react-router-dom"
import RootLayout from "./components/shared/Layout";
import DashBoardPage from "./pages/DashBoard";
import ProductsPage from "./pages/Products";
import LoginPage from "./pages/Login";

const router = createBrowserRouter([{
  path: "/",
  element: <RootLayout />,
  children: [
    {
      index: true,
      element: <DashBoardPage/>
    },
    {
      path: "/products",
      element: <ProductsPage/>
    }
  ]
}, {
  path: "/login",
  element: <LoginPage/>
}]);

export default function App() {
  return (
    <RouterProvider router={router} />
  )
}