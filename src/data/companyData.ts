import { brandsData } from "./brandsData";

export interface CompanyLogo {
  id: string;
  image: string;
}

export const companyLogos: CompanyLogo[] = brandsData
  .filter(brand => Boolean(brand.logo))
  .map((brand) => ({ id: brand.id, image: brand.logo as string }));


