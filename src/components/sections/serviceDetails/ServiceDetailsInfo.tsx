import Container from "../../common/Container"
import { brandsData, type BrandData } from "../../../data/brandsData"
import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"
import type { Service } from "../../../data/servicesData";

interface ServiceInfoProps {
    currentService: Service;
  }

const ServiceDetailsInfo = ({currentService}:ServiceInfoProps) => {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar" || i18n.language === "ku";

  // Get brands that sell this type of service
  const getBrandsForService = (serviceSlug: string) => {
    // Map service types to relevant brands
    const serviceBrandMap: { [key: string]: string[] } = {
      'drainage-systems': ['georg-fischer', 'poloplast', 'aquapa', 'pimtas', 'nassar-plastic', 'ostendorf-kunststoffe' ], 
      'water-pipe-systems': ['georg-fischer', 'polymelt', 'pimtas', 'kas', 'nassar-plastic', 'banninger', 'aquapa'],
      'sanitary-ware': ['wisa-sanitair', 'quarter-bath','saudi-ceramics', 'kas', 'alvit', 'shield', 'guarri'],
      'water-pumps-heaters': ['dab-pumps', 'saudi-ceramics'],
      'ceramics': ['saudi-ceramics'],
      'infrastructure-pipe': ['turan-borfit', 'georg-fischer', 'pimtas']
    };
    
    const brandSlugs = serviceBrandMap[serviceSlug] || [];
    return brandsData.filter((brand: BrandData) => brandSlugs.includes(brand.slug));
  };

  const relevantBrands = getBrandsForService(currentService.slug);

  return (
    <section className="section-gap">
      <Container>
        {/* Service Image */}
        {/* <div className="mb-8">
          <img className="w-full h-auto rounded-[10px]" src={currentService?.image} alt="Service image" />
        </div> */}

        {/* Service Description */}
        <div className="mb-12">
          <h2 className={`text-3xl font-bold mb-6 ${isArabic ? 'font-arabic' : ''}`}>
            {currentService?.title}
          </h2>
          <div className={`text-lg leading-relaxed ${isArabic ? 'font-arabic' : ''}`}>
            {currentService?.paragraphs?.map((paragraph, index) => (
              <p key={index} className="mb-4">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        {/* Brands Section */}
        <div className="mb-8">
          <h3 className={`text-2xl font-semibold mb-6 ${isArabic ? 'font-arabic' : ''}`}>
            {t("brands.label")} {t("services.items." + currentService.slug.replace(/-/g, '_') + ".title", currentService.title)}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {relevantBrands.map((brand: BrandData) => (
              <Link 
                key={brand.id} 
                to={`/brand/${brand.slug}`}
                className="bg-white border border-primaryBorder rounded-[15px] p-6 hover:border-primaryBlue duration-300 ease-in-out group"
              >
                <div className="flex flex-col items-center text-center">
                  {brand.logo && (
                    <img 
                      src={brand.logo} 
                      alt={brand.name} 
                      className="w-16 h-16 object-contain mb-4"
                    />
                  )}
                  <h4 className={`font-semibold text-lg mb-2 ${isArabic ? 'font-arabic' : ''}`}>
                    {brand.name}
                  </h4>
                  <p className={`text-sm text-gray-600 ${isArabic ? 'font-arabic' : ''}`}>
                    {brand.origin[i18n.language as keyof typeof brand.origin] || brand.origin.en}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}

export default ServiceDetailsInfo