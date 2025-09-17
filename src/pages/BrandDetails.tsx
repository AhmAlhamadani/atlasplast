import { useTranslation } from "react-i18next";
import { useParams, Navigate } from "react-router-dom";
import Breadcrumb from "../components/common/Breadcrumb";
import Container from "../components/common/Container";
import Button from "../components/common/Button";
import { FiChevronsRight } from "react-icons/fi";
import { getBrandBySlug } from "../data/brandsData";

const BrandDetails = () => {
  const { i18n } = useTranslation();
  const { slug } = useParams<{ slug: string }>();
  const isRTL = i18n.language === "ar" || i18n.language === "ku";
  const isArabic = isRTL;

  // Get brand data by slug
  const brandData = slug ? getBrandBySlug(slug) : null;

  // Redirect to 404 if brand not found
  if (!brandData) {
    return <Navigate to="/404" replace />;
  }

  return (
    <div>
      {/* Breadcrumb */}
      <Breadcrumb
        title={brandData.name}
        breadcrumb={[
          { name: "Home", href: "/" },
          { name: brandData.name },
        ]}
        isRTL={isRTL}
        isArabic={isArabic}
      />

      {/* Brand Section */}
      <section className="section-gap">
        <Container className="flex flex-col gap-[30px]">
          {/* Grid Layout: Left Column + Main Image */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Column: Card + Gallery Image */}
            <div className="flex flex-col gap-8">
               {/* Card */}
               <div className="bg-white rounded-[20px] shadow-lg p-8 flex flex-col justify-between h-full border border-gray-100">
                 <div>
                   {/* Logo Section */}
                   <div className="text-center mb-6">
                     <img
                       src={brandData.logo}
                       alt={`${brandData.name} logo`}
                       className="w-full h-16 object-contain mb-3"
                     />
                     <h3 className={`text-lg font-semibold text-gray-900 ${isArabic ? "font-arabic" : "font-primary"}`}>
                       {brandData.name}
                     </h3>
                   </div>

                   {/* Brand Stats */}
                   <div className="space-y-4 mb-6">
                     <div className="flex justify-between items-center py-2 border-b border-gray-100">
                       <span className="text-sm text-gray-600">Established</span>
                       <span className="font-semibold text-gray-900">{brandData.established}</span>
                     </div>
                     <div className="flex justify-between items-center py-2 border-b border-gray-100">
                       <span className="text-sm text-gray-600">Origin</span>
                       <span className="font-semibold text-gray-900">{isArabic ? brandData.origin.ar : brandData.origin.en}</span>
                     </div>

                   </div>

                   {/* Website Button */}
                   <div className="pt-4 border-t border-gray-100">
                     {brandData.website && (
                       <Button
                         onClick={() => window.open(brandData.website, "_blank")}
                         className="w-full text-sm px-4 py-3"
                       >
                         Visit Official Website
                       </Button>
                     )}
                   </div>
                 </div>
               </div>

              {/* Left Column Image */}
              {brandData.galleryImages && brandData.galleryImages.length > 0 && (
                <div className="h-full rounded-[10px] overflow-hidden shadow-lg">
                  <img
                    src={brandData.galleryImages[0]}
                    alt="brand product showcase"
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
            </div>

            {/* Main Image */}
            {brandData.mainImage && (
              <div className="lg:col-span-2 h-full rounded-[10px] overflow-hidden shadow-lg">
                <img
                  src={brandData.mainImage}
                  alt="brand showcase"
                  className="w-full h-full object-cover"
                />
              </div>
            )}
          </div>

          {/* Brand Info */}
          <div className={`${isRTL ? "text-right" : "text-left"}`}>
            <h2 className={`${isArabic ? "font-arabic" : "font-primary"}`}>
              {brandData.name}
            </h2>
            <p className={`mt-5 ${isArabic ? "font-arabic" : "font-secondary"}`}>
              {isArabic ? brandData.description.ar : brandData.description.en}
            </p>
          </div>

          {/* Products */}
          <div className={`${isRTL ? "text-right" : "text-left"}`}>
            <h3 className={`mb-5 ${isArabic ? "font-arabic" : "font-primary"}`}>
              Products We Distribute
            </h3>
            <p className={`mb-5 ${isArabic ? "font-arabic" : "font-secondary"}`}>
              We distribute a comprehensive range of high-quality products from this brand, designed to meet diverse industrial and commercial needs.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-[30px]">
              {(isArabic ? brandData.products.ar : brandData.products.en).map((product, idx) => (
                <div
                  key={idx}
                  className={`flex items-start gap-2 ${isRTL ? "flex-row-reverse" : ""}`}
                >
                  <FiChevronsRight
                    className={`text-[#E5E8F2] w-5 h-5 mt-1 flex-shrink-0 ${
                      isRTL ? "rotate-180" : ""
                    }`}
                  />
                  <span
                    className={`text-textColor text-[16px] font-normal leading-7 tracking-[-0.36px] ${
                      isArabic ? "font-arabic" : "font-secondary"
                    }`}
                  >
                    {product}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Brand Advantages */}
          <div className={`${isRTL ? "text-right" : "text-left"}`}>
            <h3 className={`mb-5 ${isArabic ? "font-arabic" : "font-primary"}`}>
              Brand Advantages
            </h3>
            <p className={`mb-5 ${isArabic ? "font-arabic" : "font-secondary"}`}>
              Discover the key advantages that make this brand a preferred choice for industry professionals worldwide.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-[30px]">
              {(isArabic ? brandData.brandAdvantages.ar : brandData.brandAdvantages.en).map((point, idx) => (
                <div
                  key={idx}
                  className={`flex items-start gap-2 ${isRTL ? "flex-row-reverse" : ""}`}
                >
                  <FiChevronsRight
                    className={`text-[#E5E8F2] w-5 h-5 mt-1 flex-shrink-0 ${
                      isRTL ? "rotate-180" : ""
                    }`}
                  />
                  <span
                    className={`text-textColor text-[16px] font-normal leading-7 tracking-[-0.36px] ${
                      isArabic ? "font-arabic" : "font-secondary"
                    }`}
                  >
                    {point}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Gallery */}
          {brandData.galleryImages && brandData.galleryImages.length > 1 && (
            <div className="mt-[30px]">
              <h3 className={`text-xl font-bold mb-6 ${isArabic ? "font-arabic" : "font-primary"}`}>
                Product Gallery
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {brandData.galleryImages.slice(1).map((img, idx) => (
                  <div key={idx} className="md:col-span-1 rounded-[20px] overflow-hidden shadow-lg">
                    <img
                      className="w-full h-[300px] object-cover"
                      src={img}
                      alt={`brand-gallery-${idx + 2}`}
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </Container>
      </section>
    </div>
  );
};

export default BrandDetails;
