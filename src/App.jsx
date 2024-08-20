import { RouterProvider, createBrowserRouter } from "react-router-dom";

import {
  AboutPage,
  BlogPage,
  Landing,
  ProcessPage,
  PricingPage,
  TeamMembersPage,
  ContactPage,
  HomeLayout,
} from "./pages";

import { ErrorElement } from "./components";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        errorElement: <ErrorElement />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/team",
        element: <TeamMembersPage />,
      },
      {
        path: "/process",
        element: <ProcessPage />,
      },
      {
        path: "/pricing",
        element: <PricingPage />,
      },
      {
        path: "/blog",
        element: <BlogPage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
