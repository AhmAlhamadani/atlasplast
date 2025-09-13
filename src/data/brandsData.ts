export interface BrandData {
  id: string;
  name: string;
  manufacturedOrigin: {
    en: string;
    ar: string;
  };
  products: {
    en: string[];
    ar: string[];
  };
  description: {
    en: string;
    ar: string;
  };
  logo?: string;
  website?: string;
  established?: string;
}

export const brandsData: BrandData[] = [
  {
    id: "gf-plus",
    name: "+GF+",
    manufacturedOrigin: {
      en: "Switzerland",
      ar: "سويسرا"
    },
    products: {
      en: ["PPR Pipes", "Fittings", "Valves", "Heating Systems"],
      ar: ["أنابيب البولي بروبيلين", "الملحقات", "الصمامات", "أنظمة التدفئة"]
    },
    description: {
      en: "Leading Swiss manufacturer of piping systems and industrial solutions.",
      ar: "مصنع سويسري رائد في أنظمة الأنابيب والحلول الصناعية."
    },
    established: "1802"
  },
  {
    id: "turan-borfit",
    name: "Turan Borfit",
    manufacturedOrigin: {
      en: "Turkey",
      ar: "تركيا"
    },
    products: {
      en: ["HDPE Pipes", "PE Fittings", "Gas Pipes", "Water Pipes"],
      ar: ["أنابيب البولي إيثيلين عالي الكثافة", "ملحقات البولي إيثيلين", "أنابيب الغاز", "أنابيب المياه"]
    },
    description: {
      en: "Turkish manufacturer specializing in polyethylene piping solutions.",
      ar: "مصنع تركي متخصص في حلول أنابيب البولي إيثيلين عالية الجودة."
    },
    established: "1995"
  },
  {
    id: "polomelt",
    name: "Polymelt",
    manufacturedOrigin: {
      en: "Germany",
      ar: "ألمانيا"
    },
    products: {
      en: ["PVC Pipes", "uPVC Pipes", "Fittings", "Accessories"],
      ar: ["أنابيب البولي فينيل كلوريد", "أنابيب البولي فينيل كلوريد غير الملدن", "الملحقات", "الإكسسوارات"]
    },
    description: {
      en: "Leading Turkish manufacturer of PVC and uPVC piping systems.",
      ar: "مصنع تركي رائد في أنظمة الأنابيب البلاستيكية المتطورة."
    },
    established: "1947"
  },
  {
    id: "poloplast",
    name: "Poloplast",
    manufacturedOrigin: {
      en: "Austria",
      ar: "النمسا"
    },
    products: {
      en: ["PE Pipes", "Fittings", "Valves", "Manholes"],
      ar: ["أنابيب البولي إيثيلين", "الملحقات", "الصمامات", "أغطية الصرف الصحي"]
    },
    description: {
      en: "Austrian manufacturer known for high-quality plastic piping systems.",
      ar: "مصنع نمساوي معروف بأنظمة الأنابيب البلاستيكية عالية الجودة."
    },
    established: "1954"
  },
  {
    id: "wisa",
    name: "Wisa",
    manufacturedOrigin: {
      en: "Netherlands",
      ar: "هولندا"
    },
    products: {
      en: ["PPR Pipes", "Fittings", "Heating Systems", "Cooling Systems"],
      ar: ["أنابيب البولي بروبيلين", "الملحقات", "أنظمة التدفئة", "أنظمة التبريد"]
    },
    description: {
      en: "German manufacturer specializing in PPR piping systems and heating solutions.",
      ar: "مصنع ألماني متخصص في أنظمة الأنابيب وأنظمة التدفئة المتطورة."
    },
    established: "1865"
  },
  {
    id: "alvit",
    name: "Alvit",
    manufacturedOrigin: {
      en: "Italy",
      ar: "إيطاليا"
    },
    products: {
      en: ["Valves", "Fittings", "Accessories", "Tools"],
      ar: ["الصمامات", "الملحقات", "الإكسسوارات", "الأدوات"]
    },
    description: {
      en: "Italian manufacturer specializing in valve systems and pipe accessories.",
      ar: "مصنع إيطالي متخصص في أنظمة الصمامات وملحقات الأنابيب."
    },
    established: "1988"
  },
  {
    id: "pimtas",
    name: "Pimtas",
    manufacturedOrigin: {
      en: "Turkey",
      ar: "تركيا"
    },
    products: {
      en: ["PVC Pipes", "Drainage Systems", "Sewer Systems", "Fittings"],
      ar: ["أنابيب البولي فينيل كلوريد", "أنظمة الصرف", "أنظمة المجاري", "الملحقات"]
    },
    description: {
      en: "Turkish manufacturer of plastic piping systems for infrastructure.",
      ar: "مصنع تركي لأنظمة الأنابيب البلاستيكية للبنية التحتية."
    },
    established: "1977"
  },
  {
    id: "nassar",
    name: "Nassar",
    manufacturedOrigin: {
      en: "Egypt",
      ar: "مصر"
    },
    products: {
      en: ["PE Pipes", "PPR Pipes", "Heating Systems", "Cooling Systems"],
      ar: ["أنابيب البولي إيثيلين", "أنابيب البولي بروبيلين", "أنظمة التدفئة", "أنظمة التبريد"]
    },
    description: {
      en: "Turkish manufacturer of high-quality polymer solutions for building technology.",
      ar: "مصنع تركي لحلول البوليمر عالية الجودة لتقنيات البناء."
    },
    established: "1982"
  },
  {
    id: "aqua-pa",
    name: "Aqua PA",
    manufacturedOrigin: {
      en: "Turkey",
      ar: "تركيا"
    },
    products: {
      en: ["PE-X Pipes", "PPR Pipes", "Heating Systems", "Plumbing Systems"],
      ar: ["أنابيب البولي إيثيلين المتشابك", "أنابيب البولي بروبيلين", "أنظمة التدفئة", "أنظمة السباكة"]
    },
    description: {
      en: "German manufacturer of plastic piping systems for heating and plumbing.",
      ar: "مصنع ألماني لأنظمة الأنابيب البلاستيكية للتدفئة والسباكة."
    },
    established: "1990"
  },
  {
    id: "dab",
    name: "DAB",
    manufacturedOrigin: {
      en: "Italy",
      ar: "إيطاليا"
    },
    products: {
      en: ["Water Pumps", "Booster Systems", "Circulation Pumps", "Accessories"],
      ar: ["مضخات المياه", "أنظمة التعزيز", "مضخات الدوران", "الإكسسوارات"]
    },
    description: {
      en: "Italian manufacturer specializing in water pumps and pumping systems.",
      ar: "مصنع إيطالي متخصص في مضخات المياه وأنظمة الضخ."
    },
    established: "1975"
  },
  {
    id: "quarter-bath",
    name: "Quarter Bath",
    manufacturedOrigin: {
      en: "Turkey",
      ar: "تركيا"
    },
    products: {
      en: ["Bathroom Accessories", "Shower Systems", "Faucets", "Bathroom Furniture"],
      ar: ["إكسسوارات الحمام", "أنظمة الدش", "الحنفيات", "أثاث الحمام"]
    },
    description: {
      en: "Turkish manufacturer of bathroom accessories and solutions.",
      ar: "مصنع تركي لإكسسوارات الحمام والحلول الصحية."
    },
    established: "2006"
  },
  {
    id: "kas",
    name: "KAS",
    manufacturedOrigin: {
      en: "Turkey",
      ar: "تركيا"
    },
    products: {
      en: ["Ceramic Tiles", "Sanitary Ware", "Bathroom Accessories", "Design Solutions"],
      ar: ["بلاط السيراميك", "الأدوات الصحية", "إكسسوارات الحمام", "حلول التصميم"]
    },
    description: {
      en: "Turkish manufacturer of ceramic tiles and sanitary ware.",
      ar: "مصنع تركي للبلاط السيراميك والأدوات الصحية."
    },
    established: "1970"
  },
  {
    id: "guarri",
    name: "Guarri",
    manufacturedOrigin: {
      en: "Turkey",
      ar: "تركيا"
    },
    products: {
      en: ["Sanitary Ware", "Bathroom Solutions", "Fittings", "Accessories"],
      ar: ["الأدوات الصحية", "حلول الحمامات", "الملحقات", "الإكسسوارات"]
    },
    description: {
      en: "Italian manufacturer of sanitary ware and bathroom solutions.",
      ar: "مصنع إيطالي للأدوات الصحية وحلول الحمامات."
    },
    established: "2002"
  },
  {
    id: "asclik-clamp",
    name: "Asclik Clamp",
    manufacturedOrigin: {
      en: "Turkey",
      ar: "تركيا"
    },
    products: {
      en: ["Pipe Clamps", "Fittings", "Accessories", "Installation Tools"],
      ar: ["مشابك الأنابيب", "الملحقات", "الإكسسوارات", "أدوات التركيب"]
    },
    description: {
      en: "Turkish manufacturer specializing in pipe clamps and installation accessories.",
      ar: "مصنع تركي متخصص في مشابك الأنابيب وإكسسوارات التركيب."
    },
    established: "2016"
  },
  {
    id: "ostendorf",
    name: "Ostendorf",
    manufacturedOrigin: {
      en: "Germany",
      ar: "ألمانيا"
    },
    products: {
      en: ["Ceramic Tiles", "Porcelain Tiles", "Bathroom Solutions", "Design Tiles"],
      ar: ["بلاط السيراميك", "بلاط البورسلين", "حلول الحمامات", "بلاط التصميم"]
    },
    description: {
      en: "German manufacturer of high-quality ceramic and porcelain tiles.",
      ar: "مصنع ألماني للبلاط السيراميك والبورسلين عالي الجودة."
    },
    established: "1973"
  },
  {
    id: "shield",
    name: "Shield",
    manufacturedOrigin: {
      en: "Egypt",
      ar: "مصر"
    },
    products: {
      en: ["Protective Coatings", "Pipe Protection", "Insulation Materials", "Accessories"],
      ar: ["الطلاءات الواقية", "حماية الأنابيب", "مواد العزل", "الإكسسوارات"]
    },
    description: {
      en: "Turkish manufacturer of protective coatings and insulation materials.",
      ar: "مصنع تركي للطلاءات الواقية ومواد العزل."
    },
    established: "2018"
  },
  {
    id: "candan",
    name: "Candan",
    manufacturedOrigin: {
      en: "Turkey",
      ar: "تركيا"
    },
    products: {
      en: ["Sanitary Ware", "Bathroom Solutions", "Fittings", "Accessories"],
      ar: ["الأدوات الصحية", "حلول الحمامات", "الملحقات", "الإكسسوارات"]
    },
    description: {
      en: "Turkish manufacturer of sanitary ware and bathroom solutions.",
      ar: "مصنع تركي للأدوات الصحية وحلول الحمامات."
    },
    established: "1979"
  },
  {
    id: "banninger",
    name: "Bänninger",
    manufacturedOrigin: {
      en: "Germany",
      ar: "ألمانيا"
    },
    products: {
      en: ["PPR Pipes", "Fittings", "Heating Systems", "Plumbing Systems"],
      ar: ["أنابيب البولي بروبيلين", "الملحقات", "أنظمة التدفئة", "أنظمة السباكة"]
    },
    description: {
      en: "German manufacturer specializing in PPR piping systems and heating solutions.",
      ar: "مصنع ألماني متخصص في أنظمة الأنابيب وأنظمة التدفئة."
    },
    established: "1909"
  },
  {
    id: "saudi-ceramics",
    name: "Saudi Ceramics",
    manufacturedOrigin: {
      en: "Saudi Arabia",
      ar: "المملكة العربية السعودية"
    },
    products: {
      en: ["Ceramic Tiles", "Sanitary Ware", "Bathroom Accessories", "Design Solutions"],
      ar: ["بلاط السيراميك", "الأدوات الصحية", "إكسسوارات الحمام", "حلول التصميم"]
    },
    description: {
      en: "Saudi manufacturer of premium ceramic tiles and sanitary ware.",
      ar: "مصنع سعودي للبلاط السيراميك والأدوات الصحية المتميزة."
    },
    established: "1977"
  },
  {
    id: "almunif-pipes",
    name: "Almunif Pipes",
    manufacturedOrigin: {
      en: "Saudi Arabia",
      ar: "المملكة العربية السعودية"
    },
    products: {
      en: ["PE Pipes", "PVC Pipes", "Fittings", "Drainage Systems"],
      ar: ["أنابيب البولي إيثيلين", "أنابيب البولي فينيل كلوريد", "الملحقات", "أنظمة الصرف"]
    },
    description: {
      en: "Saudi manufacturer of plastic piping systems for various applications.",
      ar: "مصنع سعودي لأنظمة الأنابيب البلاستيكية لتطبيقات متنوعة."
    },
    established: "1987"
  }
];
