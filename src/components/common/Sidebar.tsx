import { useEffect, useRef, useCallback } from "react";
import { cn } from "../../lib/utils";
import logo from "../../assets/logo/logo-white.svg";
import { RxCross2 } from "react-icons/rx";
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import SectionTitle from "./SectionTitle";

interface OfficeLocation {
  address: string;
  phone: string;
  contact: string;
}

interface OfficeData {
  name: string;
  color: string;
  locations: OfficeLocation[];
}

const officeData: OfficeData[] = [
  {
    name: "Baghdad",
    color: "bg-blue-500",
    locations: [
      {
        address: "C94P+F5 Baghdad Sha'ab",
        phone: "+964 783 305 6475",
        contact: "Ahmad Shanshal"
      },
      {
        address: "8F24+GFH, Baghdad, Campsarah",
        phone: "+964 790 166 4058",
        contact: "WaiLl Almusawi"
      }
    ]
  },
  {
    name: "Basra",
    color: "bg-green-500",
    locations: [
      {
        address: "GR7W+R3V, Watan, Basrah",
        phone: "+964 783 700 6314",
        contact: "Haydar Shakir"
      }
    ]
  },
  {
    name: "Erbil",
    color: "bg-purple-500",
    locations: [
      {
        address: "629F+MW6, Erbil",
        phone: "+964 750 834 9833",
        contact: "Mohammed Bajalan"
      }
    ]
  },
  {
    name: "Duhok",
    color: "bg-orange-500",
    locations: [
      {
        address: "VW9P+J2 Duhok",
        phone: "+964 750 991 0065",
        contact: "Sarmad Jawad"
      }
    ]
  }
];

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  const sidebarRef = useRef<HTMLDivElement>(null);

  // Memoized event handler to avoid re-creation on each render
  const handleClickOutside = useCallback(
    (e: MouseEvent) => {
      if (sidebarRef.current && !sidebarRef.current.contains(e.target as Node)) {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    if (!isOpen) return;

    document.addEventListener("mousedown", handleClickOutside);

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
          "fixed top-0 right-0 h-full w-[450px] bg-gradient-to-br from-white to-gray-50 shadow-2xl z-50 transform transition-transform duration-500 ease-in-out overflow-y-auto",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        {/* Header */}
        <div className="bg-primaryBlue p-6 text-white ">
          <div className="flex justify-between items-center">
            <img src={logo} alt="Atlas Plast logo" className="w-32 h-auto" />
            <button
              onClick={onClose}
              className="p-2 hover:bg-white/20 rounded-full transition-colors duration-200"
            >
              <RxCross2 size={24} />
            </button>
          </div>
          <p className="mt-4 text-sm opacity-90 leading-relaxed text-white">
            Atlas Plast is Iraq's trusted supplier of piping systems,
            sanitaryware, ceramics, and innovative water solutions.
          </p>
        </div>

        {/* Content */}
        <div className="p-6">

          {/* Offices */}
          <div className="space-y-4">
            <SectionTitle
              label="Our Offices"
              title=""
              align="left"
              className="mt-5"
            />

            {officeData.map((office, index) => (
              <div key={index} className="bg-white rounded-xl p-5 border border-gray-100 hover:shadow-md transition-shadow duration-200">
                <div className="flex items-center mb-3">
                  <div className={`w-3 h-3 ${office.color} rounded-full mr-3`}></div>
                  <h4 className="font-semibold text-gray-800">{office.name}</h4>
                </div>
                <div className="space-y-2">
                  {office.locations.map((location, locationIndex) => (
                    <div key={locationIndex}>
                      <p className="text-sm text-gray-600 flex items-center">
                        <FaMapMarkerAlt className="mr-2 text-gray-400" size={14} />
                        {location.address}
                      </p>
                      <p className="text-sm text-gray-700 flex items-center">
                        <FaPhoneAlt className="mr-2 text-gray-400" size={14} />
                        {location.phone} - {location.contact}
                      </p>
                      {locationIndex < office.locations.length - 1 && (
                        <hr className="border-gray-200 my-3" />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
