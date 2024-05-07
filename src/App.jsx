import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Blog, LandingHome, Project } from "./pages";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      name: "landinghome",
      element: <LandingHome />,
    },
    {
      path: "/project",
      name: "project",
      element: <Project />,
    },
    {
      path: "/blog",
      name: "blog",
      element: <Blog />,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
