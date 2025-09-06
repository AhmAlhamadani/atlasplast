
import { createBrowserRouter } from "react-router-dom";
import HomeTwo from "../pages/HomeTwo";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Project from "../pages/Project";
import ProjectDetails from "../pages/ProjectDetails";
import Service from "../pages/Service";
import ServiceDetails from "../pages/ServiceDetails";
import NotFound from "../pages/NotFound";
import Blog from "../pages/Blog";
import BlogDetails from "../pages/BlogDetails";
import TermsAndConditions from "../pages/TermsAndConditions";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import Brands from "../pages/Brands";
import HomeTwoLayout from "../components/layout/HomeTwoLayout";
import InnerPageLayout from "../components/layout/InnerPageLayout";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <HomeOneLayout />,
//     children: [
//       { path: "/", element: <Home /> },
//     ],
//   },
//   {
//     path: "/home-two",
//     element: <HomeTwoLayout />,
//     children: [
//       { path: "/home-two", element: <HomeTwo /> },
//     ],
//   },
//   {
//     path: "/",
//     element: <InnerPageLayout />,
//     children: [
//       { path: "/about", element: <About /> },
//       { path: "/contact", element: <Contact /> },
//       { path: "/project", element: <Project /> },
//       { path: "/project/:slug", element: <ProjectDetails /> },
//       { path: "/service", element: <Service /> },
//       { path: "/service/:slug", element: <ServiceDetails /> },
//       { path: "/blog", element: <Blog /> },
//       { path: "/blog/:slug", element: <BlogDetails /> },
//       { path: "/terms-condition", element: <TermsAndConditions /> },
//       { path: "/privacy-policy", element: <PrivacyPolicy /> },
//       { path: "*", element: <NotFound /> },
//     ],
//   },
// ]);

const router = createBrowserRouter([
  // HomeTwo Layout (Main Home Page)
  {
    path: "/",
    element: <HomeTwoLayout />,
    children: [
      { index: true, element: <HomeTwo /> },
    ],
  },
  // Inner Pages Layout
  {
    element: <InnerPageLayout />,
    children: [
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
      { path: "project", element: <Project /> },
      { path: "project/:slug", element: <ProjectDetails /> },
      { path: "service", element: <Service /> },
      { path: "service/:slug", element: <ServiceDetails /> },
      { path: "blog", element: <Blog /> },
      { path: "blog/:slug", element: <BlogDetails /> },
      { path: "brands", element: <Brands /> },
      { path: "terms-condition", element: <TermsAndConditions /> },
      { path: "privacy-policy", element: <PrivacyPolicy /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);


export default router;
