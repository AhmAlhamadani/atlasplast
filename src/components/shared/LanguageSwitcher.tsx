import { RxGlobe } from "react-icons/rx";
import { useTranslation } from "react-i18next";

interface LanguageSwitcherProps {
  langOpen: boolean;
  setLangOpen: (open: boolean) => void;
  width?: string;
  height?: string;
}

const LanguageSwitcher = ({
  langOpen,
  setLangOpen,
  width = "w-15",
  height = "h-15",
}: LanguageSwitcherProps) => {
  const { i18n } = useTranslation();

  const languages = [
    { code: "en", label: "English" },
    { code: "ar", label: "العربية" },
    { code: "ku", label: "کوردی" },
    { code: "tr", label: "Türkçe" },
  ];

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setLangOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setLangOpen(!langOpen)}
        className={`${width} ${height} rounded-full bg-white flex justify-center items-center hover:bg-primaryBlue hover:text-white duration-300 ease-in-out cursor-pointer`}
      >
        <RxGlobe size={24} />
      </button>

      {/* Dropdown */}
      <div
        className={`absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-lg py-2 z-50 transform transition-all duration-300 ease-in-out origin-top-right
          ${langOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}
        `}
      >
        {languages.map((lang) => (
          <button
            key={lang.code}
            onClick={() => changeLanguage(lang.code)}
            className="w-full text-left px-4 py-2 hover:bg-gray-100"
          >
            {lang.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default LanguageSwitcher;
