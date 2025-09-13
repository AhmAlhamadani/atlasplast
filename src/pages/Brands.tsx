import { useState, useRef, useCallback, useEffect } from "react";
import { useTranslation } from "react-i18next";
import Container from "../components/common/Container";
import SectionTitle from "../components/common/SectionTitle";
import Button from "../components/common/Button";
import image1 from "../assets/company/image1.jpg";
import image2 from "../assets/company/image2.jpg";
import Breadcrumb from "../components/common/Breadcrumb";
import { brandsData } from "../data/brandsData";

interface BrandModalProps {
  brand: typeof brandsData[0];
  isOpen: boolean;
  onClose: () => void;
}

const BrandModal = ({ brand, isOpen, onClose }: BrandModalProps) => {
  const { t, i18n } = useTranslation();
  const modalRef = useRef<HTMLDivElement>(null);
  const isRTL = i18n.language === "ar" || i18n.language === "ku";
  const isArabic = isRTL;

  const handleOutsideClick = useCallback(
    (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, handleOutsideClick]);



  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm transition-all duration-300">
      <div
        ref={modalRef}
        className={`relative w-[90%] max-w-4xl bg-white rounded-[20px] overflow-hidden shadow-xl transition-all duration-300 max-h-[90vh] overflow-y-auto ${isRTL ? "text-right" : "text-left"}`}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className={`absolute top-4 text-white bg-primaryBlue rounded-full w-10 h-10 flex items-center justify-center z-10 hover:bg-secondaryColor transition-colors duration-300 ${isRTL ? "left-4" : "right-4"}`}
        >
          ✕
        </button>

        {/* Modal Content */}
        <div className="p-8 mt-5">
          {/* Header */}
          <div className={`flex items-center gap-4 mb-2 ${isRTL ? "flex-row-reverse" : ""}`}>
            <div>
              <h2 className={`text-3xl font-bold text-secondaryColor ${isArabic ? 'font-arabic' : ''}`}>
                {brand.name}
              </h2>
            </div>
          </div>

          {/* Description */}
          <div className="mb-6">
            <p className={`text-textColor text-lg leading-8 ${isArabic ? 'font-arabic' : ''}`}>
              {isArabic ? brand.description.ar : brand.description.en}
            </p>
          </div>

          {/* Products Section */}
          <div className="bg-sectionBg border border-primaryBorder rounded-[20px] p-6">
            <h3 className={`text-xl font-semibold text-secondaryColor mb-4 ${isArabic ? 'font-arabic' : ''}`}>
              {t("brands.products_sold")}
            </h3>
            <div className={`flex flex-wrap gap-2 ${isRTL ? "justify-end" : "justify-start"}`}>
              {(isArabic ? brand.products.ar : brand.products.en).map((product, idx) => (
                <span
                  key={idx}
                  className="bg-primaryBlue text-white px-3 py-2 rounded-full text-sm font-medium"
                >
                  {product}
                </span>
              ))}
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-8 bg-sectionBg border border-primaryBorder rounded-[20px] p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              <div>
                <h4 className={`text-lg font-semibold text-secondaryColor mb-2 ${isArabic ? 'font-arabic' : ''}`}>
                  {t("brands.manufactured_origin")}
                </h4>
                <p className="text-primaryBlue text-xl font-bold">{isArabic ? brand.manufacturedOrigin.ar : brand.manufacturedOrigin.en}</p>
              </div>
                {brand.established && (
                  <div>
                    <h4 className={`text-lg font-semibold text-secondaryColor mb-2 ${isArabic ? 'font-arabic' : ''}`}>
                      {t("brands.established")}
                    </h4>
                    <p className="text-textColor text-xl font-bold">{brand.established}</p>
                  </div>
                )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

const Brands = () => {
  const { t, i18n } = useTranslation();
  const [selectedBrand, setSelectedBrand] = useState<typeof brandsData[0] | null>(null);

  const isRTL = i18n.language === "ar" || i18n.language === "ku";
  const isArabic = isRTL;



  return (
    <>
      <Breadcrumb
        title={t("brands.breadcrumb_title")}
        breadcrumb={[{ name: t("brands.breadcrumb_home"), href: "/" }, { name: t("brands.breadcrumb_brands") }]}
        isRTL={isRTL}
        isArabic={isArabic}
      />
      
      <div className="section-gap">
        <Container>
          {/* Text section */}
          <div
            className={`w-full ${
              isRTL ? "text-right" : "text-left"
            }`}
          >
            <SectionTitle
              label={t("brands.label")}
              title={t("brands.title")}
              align={isRTL ? "right" : "left"}
              isArabic={isArabic}
            />
          </div>
        </Container>

        {/* Brands Grid */}
        <Container className="mt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {brandsData.map((brand, index) => (
              <div
                key={brand.id}
                className="bg-white border border-primaryBorder rounded-[20px] p-6 hover:border-primaryBlue duration-300 ease-in-out group overflow-hidden"
                style={{
                  animationDelay: `${index * 100}ms`,
                  animation: "fadeInUp 0.6s ease-out forwards"
                }}
              >
                {/* Card Header */}
                <div className={`${isRTL ? "text-right" : "text-left"}`}>
                  <h3 className={`text-lg font-semibold text-secondaryColor mb-3 group-hover:text-primaryBlue transition-colors duration-300 ${isArabic ? 'font-arabic' : ''}`}>
                    {brand.name}
                  </h3>
                  
                  <p className={`text-sm text-textColor line-clamp-2 mb-4 ${isArabic ? 'font-arabic' : ''}`}>
                    {isArabic ? brand.description.ar : brand.description.en}
                  </p>

                  {/* Established */}
                  {brand.established && (
                    <div className={`flex items-center gap-2 mb-4 ${isRTL ? "flex-row-reverse" : ""}`}>
                      <span className="text-xs text-textColor">{t("brands.established")}:</span>
                      <span className="text-sm font-semibold text-secondaryColor">{brand.established}</span>
                    </div>
                  )}
                </div>

                {/* Card Footer */}
                <div className={`${isRTL ? "flex justify-start" : "flex justify-end"}`}>
                  <Button
                    onClick={() => setSelectedBrand(brand)}
                    hoverBgColorClass="bg-secondaryColor"
                    className={`bg-primaryBlue text-white text-sm px-6 py-2 ${isArabic ? 'font-arabic' : ''}`}
                  >
                    {t("brands.view_details")}
                  </Button>
                </div>
              </div>
            ))}
        </div>
        </Container>

        {/* Images section at bottom */}
        <Container className="mt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative group overflow-hidden rounded-[10px]">
              <img
                className="w-full object-cover h-[300px] transition-transform duration-500 group-hover:scale-105"
                src={image1}
                alt="Atlas Plast Showroom"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="relative group overflow-hidden rounded-[10px]">
              <img
                className="w-full object-cover h-[300px] transition-transform duration-500 group-hover:scale-105"
                src={image2}
                alt="Atlas Plast Warehouse"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>
        </Container>
      </div>

      {/* Brand Modal */}
      {selectedBrand && (
        <BrandModal
          brand={selectedBrand}
          isOpen={!!selectedBrand}
          onClose={() => setSelectedBrand(null)}
        />
      )}

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </>
  );
};

export default Brands;


