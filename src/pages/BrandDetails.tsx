import { useTranslation } from "react-i18next";
import { useParams, Navigate } from "react-router-dom";
import { useState } from "react";
import Breadcrumb from "../components/common/Breadcrumb";
import Container from "../components/common/Container";
import Button from "../components/common/Button";
import { FiChevronsRight, FiChevronDown, FiChevronUp } from "react-icons/fi";
import { getBrandBySlug } from "../data/brandsData";

const BrandDetails = () => {
  const { i18n, t } = useTranslation();
  const { slug } = useParams<{ slug: string }>();
  const isRTL = i18n.language === "ar" || i18n.language === "ku";
  const isArabic = isRTL;
  const [expandedProducts, setExpandedProducts] = useState<Set<number>>(new Set());

  // Get brand data by slug
  const brandData = slug ? getBrandBySlug(slug) : null;

  // Toggle product expansion
  const toggleProductExpansion = (index: number) => {
    const newExpanded = new Set(expandedProducts);
    if (newExpanded.has(index)) {
      newExpanded.delete(index);
    } else {
      newExpanded.add(index);
    }
    setExpandedProducts(newExpanded);
  };

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
          { name: t("brand_details.breadcrumb_home"), href: "/" },
          { name: t("brand_details.breadcrumb_brands"), href: "/brands" },
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
                     <div className={`flex justify-between items-center py-2 border-b border-gray-100 ${isRTL ? "flex-row-reverse" : ""}`}>
                       <span className="text-sm text-gray-600">{t("brand_details.established")}</span>
                       <span className="font-semibold text-gray-900">{brandData.established}</span>
                     </div>
                     <div className={`flex justify-between items-center py-2 border-b border-gray-100 ${isRTL ? "flex-row-reverse" : ""}`}>
                       <span className="text-sm text-gray-600">{t("brand_details.origin")}</span>
                       <span className="font-semibold text-gray-900">{isArabic ? brandData.origin.ar : brandData.origin.en}</span>
                     </div>

                   </div>

                   {/* Website Button */}
                   <div className="pt-2">
                     {brandData.website && (
                       <Button
                         onClick={() => window.open(brandData.website, "_blank")}
                         className="w-full text-sm px-4 py-3"
                       >
                         {t("brand_details.visit_website")}
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
                    className="w-full h-52 object-cover"
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
              {t("brand_details.products_distribute")}
            </h3>
            {/* <p className={`mb-5 ${isArabic ? "font-arabic" : "font-secondary"}`}>
              We distribute a comprehensive range of high-quality products from this brand, designed to meet diverse industrial and commercial needs.
            </p> */}
            <div className="grid grid-cols-1 md:grid-cols-2 items-start gap-5 mt-[30px]">
              {(isArabic ? brandData.products.ar : brandData.products.en).map((product, idx) => (
                <div key={idx} className={`${product.specifications ? 'border border-gray-200 rounded-lg overflow-hidden' : ''}`}>
                  {/* Product Header - Only clickable if has specifications */}
                  <div
                    className={`flex items-center justify-between p-4 ${
                      product.specifications 
                        ? 'cursor-pointer hover:bg-gray-50 transition-colors' 
                        : ''
                    } ${isRTL ? "flex-row-reverse" : ""}`}
                    onClick={() => product.specifications && toggleProductExpansion(idx)}
                  >
                    <div className={`flex items-start gap-2 ${isRTL ? "flex-row-reverse" : ""}`}>
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
                        {product.name}
                      </span>
                    </div>
                    {/* Dropdown Arrow - Only show if product has specifications */}
                    {product.specifications && (
                      <div className="flex-shrink-0">
                        {expandedProducts.has(idx) ? (
                          <FiChevronUp className="w-4 h-4 text-gray-500" />
                        ) : (
                          <FiChevronDown className="w-4 h-4 text-gray-500" />
                        )}
                      </div>
                    )}
                  </div>
                  
                  {/* Product Specifications - Expandable */}
                  {product.specifications && (
                    <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      expandedProducts.has(idx) ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
                    }`}>
                      <div className="border-t border-gray-200 bg-gray-50 p-4">
                        {/* Specification Image */}
                        {product.specificationImage && (
                          <div className="mb-4 flex justify-center">
                            <img
                              src={product.specificationImage}
                              alt={`${product.name} specifications`}
                              className="w-3/4 h-auto rounded-lg shadow-sm"
                            />
                          </div>
                        )}
                        
                        <div className="space-y-3">
                          {Object.entries(product.specifications).map(([key, value]) => (
                            <div
                              key={key}
                              className={`flex justify-between items-start gap-4 ${
                                isRTL ? "flex-row-reverse" : ""
                              }`}
                            >
                              <span
                                className={`text-sm font-medium text-gray-700 flex-shrink-0 ${
                                  isArabic ? "font-arabic" : "font-secondary"
                                }`}
                              >
                                {key}:
                              </span>
                              <span
                                className={`text-sm text-gray-600 text-right ${
                                  isArabic ? "font-arabic" : "font-secondary"
                                }`}
                              >
                                {value}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Brand Advantages */}
          <div className={`${isRTL ? "text-right" : "text-left"}`}>
            <h3 className={`mb-5 ${isArabic ? "font-arabic" : "font-primary"}`}>
              {t("brand_details.brand_advantages")}
            </h3>
            {/* <p className={`mb-5 ${isArabic ? "font-arabic" : "font-secondary"}`}>
              Discover the key advantages that make this brand a preferred choice for industry professionals worldwide.
            </p> */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-[30px]">
              {(isArabic ? brandData.brandAdvantages.ar : brandData.brandAdvantages.en).map((point, idx) => (
                <div key={idx} className="rounded-lg p-4">
                  <div className={`flex items-start gap-2 ${isRTL ? "flex-row-reverse" : ""}`}>
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
                </div>
              ))}
            </div>
          </div>

          {/* Gallery - Only show if there are additional images beyond the first one */}
          {brandData.galleryImages && brandData.galleryImages.length > 1 && (
            <div className="mt-[30px]">
              <h3 className={`text-xl font-bold mb-6 ${isArabic ? "font-arabic" : "font-primary"}`}>
                {t("brand_details.product_gallery")}
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
