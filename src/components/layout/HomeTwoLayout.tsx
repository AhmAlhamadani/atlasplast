import { Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Loader from "../common/Loader";
import NavbarTwo from "../shared/NavbarTwo";
import FooterTwo from "../shared/FooterTwo";



const HomeTwoLayout = () => {
    const location = useLocation();
    const [isLoading, setIsLoading] = useState(false);
  
    useEffect(() => {
      const currentPath = location.pathname;
      const visitedPaths = JSON.parse(sessionStorage.getItem("visitedPaths") || "[]");
  
      if (!visitedPaths.includes(currentPath)) {
        setIsLoading(true);
        const timer = setTimeout(() => {
          setIsLoading(false);
          sessionStorage.setItem("visitedPaths", JSON.stringify([...visitedPaths, currentPath]));
        }, 1000);
  
        return () => clearTimeout(timer);
      }
  
      setIsLoading(false);
    }, [location.pathname]);

  return (
    <>
      {isLoading && <Loader />}
      {!isLoading && (
        <>
          <NavbarTwo />
          <Outlet />
          <FooterTwo />
        </>
      )}
    </>
  );
};

export default HomeTwoLayout;
