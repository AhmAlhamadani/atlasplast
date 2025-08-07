
import { useEffect, useRef, useCallback } from "react";
import { cn } from "../../lib/utils";
import logo from "../../assets/logo/logo.svg";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  const sidebarRef = useRef<HTMLDivElement>(null);

  // Memoized event handler to avoid re-creation on each render
  const handleClickOutside = useCallback(
    (e: MouseEvent) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(e.target as Node)
      ) {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    if (!isOpen) return;

    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup on unmount or when isOpen changes
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, handleClickOutside]);

  return (
    <>
      {/* Overlay */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ease-in-out",
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
      />

      {/* Sidebar */}
      <div
        ref={sidebarRef}
        className={cn(
          "fixed top-0 right-0 h-full w-[400px] bg-white shadow-lg z-50 transform transition-transform duration-500 ease-in-out",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="p-10">
          <img src={logo} alt="putech logo" />
          <p className="mt-10">
            Putech – Business & IT Solutions is a sleek and modern React template
            designed for startups, SaaS, and tech businesses.
          </p>

          <div className="space-y-6 mt-6">
            {/* Email */}
            <div>
              <h4 className="font-semibold mb-1">Email</h4>
              <p>hasibulhasan40420@gmail.com</p>
              <p>support@gmail.com</p>
            </div>

            {/* Phone */}
            <div>
              <h4 className="font-semibold mb-1">Phone</h4>
              <p>+88 01790170749</p>
              <p>+88 01516370422</p>
            </div>

            {/* Location */}
            <div>
              <h4 className="font-semibold mb-1">Location</h4>
              <p>55 Main Street, 2nd block</p>
              <p>Dhaka, Bangladesh</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
