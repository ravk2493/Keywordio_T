import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./Pages/Home";
import RootLayout from "./Pages/Root";
import TextAd from "./Pages/TextAd";
import MediaAds from "./Pages/MediaAds";
import CreateAds from "./Pages/CreateAds";
import Submit from "./Pages/Submit";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/mediaad", element: <MediaAds /> },
      { path: "/textad", element: <TextAd /> },
      { path: "/createads", element: <CreateAds /> },
      { path: "/submit", element: <Submit /> },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
