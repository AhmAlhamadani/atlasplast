export interface BrandData {
  id: string;
  slug: string;
  name: string;
  logo?: string;
  website?: string;
  established?: string;
  origin: {
    en: string;
    ar: string;
  };
  description: {
    en: string;
    ar: string;
  };
  products: {
    en: string[];
    ar: string[];
  };
  brandAdvantages: {
    en: string[];
    ar: string[];
  };
  mainImage?: string;
  galleryImages?: string[];
}

export const brandsData: BrandData[] = [
  {
    id: "gf-plus",
    slug: "gf-plus",
    name: "+GF+",
    origin: {
      en: "Switzerland",
      ar: "سويسرا"
    },
    products: {
      en: ["PP Silent (Hakan)", "HDPE (Hakan)", "PPR (Hakan)", "3A (Hakan)", "PE (Hakan)", "Galvanized"],
      ar: ["PP Silent (Hakan)", "HDPE (Hakan)", "PPR (Hakan)", "3A (Hakan)", "PE (Hakan)", "Galvanized"]
    },
    description: {
      en: "Leading Swiss manufacturer of piping systems and industrial solutions with over 200 years of experience in precision engineering and innovation.",
      ar: "مصنع سويسري رائد في أنظمة الأنابيب والحلول الصناعية مع أكثر من 200 عام من الخبرة في الهندسة الدقيقة والابتكار."
    },
    brandAdvantages: {
      en: [
        "Swiss Engineering Excellence",
        "200+ Years of Innovation",
        "Global Quality Standards",
        "Comprehensive Product Range"
      ],
      ar: [
        "التميز الهندسي السويسري",
        "أكثر من 200 عام من الابتكار",
        "معايير الجودة العالمية",
        "مجموعة منتجات شاملة"
      ]
    },
    established: "1802",
    website: "https://www.georgfischer.com/en.html",
    logo: "/src/assets/brands/brand-1.png",
    mainImage: "/src/assets/brands/brand-1.png",
    galleryImages: [
      "/src/assets/brands/brand-1.png",
      "/src/assets/brands/brand-2.png",
      "/src/assets/brands/brand-3.png"
    ]
  },
  {
    id: "turan-borfit",
    slug: "turan-borfit",
    name: "Turan Borfit",
    origin: {
      en: "Turkey",
      ar: "تركيا"
    },
    products: {
      en: ["HDPE Pipes", "PE Fittings", "Gas Pipes", "Water Pipes"],
      ar: ["أنابيب البولي إيثيلين عالي الكثافة", "ملحقات البولي إيثيلين", "أنابيب الغاز", "أنابيب المياه"]
    },
    description: {
      en: "Turkish manufacturer specializing in polyethylene piping solutions with advanced technology and sustainable manufacturing practices.",
      ar: "مصنع تركي متخصص في حلول أنابيب البولي إيثيلين عالية الجودة مع التكنولوجيا المتقدمة وممارسات التصنيع المستدامة."
    },
    brandAdvantages: {
      en: [
        "Advanced PE Technology",
        "Sustainable Manufacturing",
        "Quality Assurance",
        "Customer Support"
      ],
      ar: [
        "تكنولوجيا البولي إيثيلين المتقدمة",
        "التصنيع المستدام",
        "ضمان الجودة",
        "دعم العملاء"
      ]
    },
    established: "1995",
    website: "https://turanmak.com/?lang=en",
    logo: "/src/assets/brands/brand-2.png",
    mainImage: "/src/assets/brands/brand-2.png",
    galleryImages: [
      "/src/assets/brands/brand-2.png",
      "/src/assets/brands/brand-3.png",
      "/src/assets/brands/brand-4.png"
    ]
  },
  {
    id: "polomelt",
    slug: "polomelt",
    name: "Polymelt",
    origin: {
      en: "Germany",
      ar: "ألمانيا"
    },
    products: {
      en: ["PVC Pipes", "uPVC Pipes", "Fittings", "Accessories"],
      ar: ["أنابيب البولي فينيل كلوريد", "أنابيب البولي فينيل كلوريد غير الملدن", "الملحقات", "الإكسسوارات"]
    },
    description: {
      en: "Leading Turkish manufacturer of PVC and uPVC piping systems with innovative solutions for modern infrastructure needs.",
      ar: "مصنع تركي رائد في أنظمة الأنابيب البلاستيكية المتطورة مع حلول مبتكرة لاحتياجات البنية التحتية الحديثة."
    },
    brandAdvantages: {
      en: [
        "Innovative PVC Solutions",
        "Modern Infrastructure Focus",
        "Quality Manufacturing",
        "Technical Expertise"
      ],
      ar: [
        "حلول البولي فينيل كلوريد المبتكرة",
        "التركيز على البنية التحتية الحديثة",
        "التصنيع عالي الجودة",
        "الخبرة التقنية"
      ]
    },
    established: "1947",
    website: "https://www.polymelt.com/",
    logo: "/src/assets/brands/brand-3.png",
    mainImage: "/src/assets/brands/brand-3.png",
    galleryImages: [
      "/src/assets/brands/brand-3.png",
      "/src/assets/brands/brand-4.png",
      "/src/assets/brands/brand-5.png"
    ]
  },
  {
    id: "poloplast",
    slug: "poloplast",
    name: "Poloplast",
    origin: {
      en: "Austria",
      ar: "النمسا"
    },
    products: {
      en: ["PE Pipes", "Fittings", "Valves", "Manholes"],
      ar: ["أنابيب البولي إيثيلين", "الملحقات", "الصمامات", "أغطية الصرف الصحي"]
    },
    description: {
      en: "Austrian manufacturer known for high-quality plastic piping systems with European standards and environmental responsibility.",
      ar: "مصنع نمساوي معروف بأنظمة الأنابيب البلاستيكية عالية الجودة مع المعايير الأوروبية والمسؤولية البيئية."
    },
    brandAdvantages: {
      en: [
        "European Quality Standards",
        "Environmental Responsibility",
        "Reliable Performance",
        "Innovation Focus"
      ],
      ar: [
        "معايير الجودة الأوروبية",
        "المسؤولية البيئية",
        "الأداء الموثوق",
        "التركيز على الابتكار"
      ]
    },
    established: "1954",
    website: "https://www.poloplast.com/en-at.html",
    logo: "/src/assets/brands/brand-4.png",
    mainImage: "/src/assets/brands/brand-4.png",
    galleryImages: [
      "/src/assets/brands/brand-4.png",
      "/src/assets/brands/brand-5.png",
      "/src/assets/brands/brand-6.png"
    ]
  },
  {
    id: "wisa",
    slug: "wisa",
    name: "Wisa",
    origin: {
      en: "Netherlands",
      ar: "هولندا"
    },
    products: {
      en: ["PPR Pipes", "Fittings", "Heating Systems", "Cooling Systems"],
      ar: ["أنابيب البولي بروبيلين", "الملحقات", "أنظمة التدفئة", "أنظمة التبريد"]
    },
    description: {
      en: "German manufacturer specializing in PPR piping systems and heating solutions with advanced thermal technology.",
      ar: "مصنع ألماني متخصص في أنظمة الأنابيب وأنظمة التدفئة المتطورة مع التكنولوجيا الحرارية المتقدمة."
    },
    brandAdvantages: {
      en: [
        "Advanced Thermal Technology",
        "PPR System Expertise",
        "Heating Solutions",
        "Energy Efficiency"
      ],
      ar: [
        "التكنولوجيا الحرارية المتقدمة",
        "خبرة أنظمة البولي بروبيلين",
        "حلول التدفئة",
        "كفاءة الطاقة"
      ]
    },
    established: "1865",
    website: "https://www.wisa-sanitair.com/en/",
    logo: "/src/assets/brands/brand-5.png",
    mainImage: "/src/assets/brands/brand-5.png",
    galleryImages: [
      "/src/assets/brands/brand-5.png",
      "/src/assets/brands/brand-6.png",
      "/src/assets/brands/brand-7.png"
    ]
  },
  {
    id: "alvit",
    slug: "alvit",
    name: "Alvit",
    origin: {
      en: "Italy",
      ar: "إيطاليا"
    },
    products: {
      en: ["Valves", "Fittings", "Accessories", "Tools"],
      ar: ["الصمامات", "الملحقات", "الإكسسوارات", "الأدوات"]
    },
    description: {
      en: "Italian manufacturer specializing in valve systems and pipe accessories with precision engineering and reliable performance.",
      ar: "مصنع إيطالي متخصص في أنظمة الصمامات وملحقات الأنابيب مع الهندسة الدقيقة والأداء الموثوق."
    },
    brandAdvantages: {
      en: [
        "Precision Engineering",
        "Reliable Performance",
        "Italian Quality",
        "Comprehensive Solutions"
      ],
      ar: [
        "الهندسة الدقيقة",
        "الأداء الموثوق",
        "الجودة الإيطالية",
        "الحلول الشاملة"
      ]
    },
    established: "1988",
    website: "https://www.alvit.com.tr/en",
    logo: "/src/assets/brands/brand-6.png",
    mainImage: "/src/assets/brands/brand-6.png",
    galleryImages: [
      "/src/assets/brands/brand-6.png",
      "/src/assets/brands/brand-7.png",
      "/src/assets/brands/brand-8.png"
    ]
  },
  {
    id: "pimtas",
    slug: "pimtas",
    name: "Pimtas",
    origin: {
      en: "Turkey",
      ar: "تركيا"
    },
    products: {
      en: ["PVC Pipes", "Drainage Systems", "Sewer Systems", "Fittings"],
      ar: ["أنابيب البولي فينيل كلوريد", "أنظمة الصرف", "أنظمة المجاري", "الملحقات"]
    },
    description: {
      en: "Turkish manufacturer of plastic piping systems for infrastructure with focus on drainage and sewer solutions.",
      ar: "مصنع تركي لأنظمة الأنابيب البلاستيكية للبنية التحتية مع التركيز على حلول الصرف والمجاري."
    },
    brandAdvantages: {
      en: [
        "Infrastructure Focus",
        "Drainage Expertise",
        "Quality Materials",
        "Technical Support"
      ],
      ar: [
        "التركيز على البنية التحتية",
        "خبرة الصرف",
        "مواد عالية الجودة",
        "الدعم التقني"
      ]
    },
    established: "1977",
    website: "https://pimtas.com/",
    logo: "/src/assets/brands/brand-7.png",
    mainImage: "/src/assets/brands/brand-7.png",
    galleryImages: [
      "/src/assets/brands/brand-7.png",
      "/src/assets/brands/brand-8.png",
      "/src/assets/brands/brand-9.png"
    ]
  },
  {
    id: "nassar",
    slug: "nassar",
    name: "Nassar",
    origin: {
      en: "Egypt",
      ar: "مصر"
    },
    products: {
      en: ["PE Pipes", "PPR Pipes", "Heating Systems", "Cooling Systems"],
      ar: ["أنابيب البولي إيثيلين", "أنابيب البولي بروبيلين", "أنظمة التدفئة", "أنظمة التبريد"]
    },
    description: {
      en: "Turkish manufacturer of high-quality polymer solutions for building technology with innovative heating and cooling systems.",
      ar: "مصنع تركي لحلول البوليمر عالية الجودة لتقنيات البناء مع أنظمة التدفئة والتبريد المبتكرة."
    },
    brandAdvantages: {
      en: [
        "Polymer Expertise",
        "Building Technology",
        "Innovative Systems",
        "Quality Assurance"
      ],
      ar: [
        "خبرة البوليمر",
        "تقنيات البناء",
        "أنظمة مبتكرة",
        "ضمان الجودة"
      ]
    },
    established: "1982",
    website: "https://nassarplastic.com/",
    logo: "/src/assets/brands/brand-8.png",
    mainImage: "/src/assets/brands/brand-8.png",
    galleryImages: [
      "/src/assets/brands/brand-8.png",
      "/src/assets/brands/brand-9.png",
      "/src/assets/brands/brand-10.png"
    ]
  },
  {
    id: "aqua-pa",
    slug: "aqua-pa",
    name: "Aqua PA",
    origin: {
      en: "Turkey",
      ar: "تركيا"
    },
    products: {
      en: ["PE-X Pipes", "PPR Pipes", "Heating Systems", "Plumbing Systems"],
      ar: ["أنابيب البولي إيثيلين المتشابك", "أنابيب البولي بروبيلين", "أنظمة التدفئة", "أنظمة السباكة"]
    },
    description: {
      en: "German manufacturer of plastic piping systems for heating and plumbing with advanced cross-linked polyethylene technology.",
      ar: "مصنع ألماني لأنظمة الأنابيب البلاستيكية للتدفئة والسباكة مع تكنولوجيا البولي إيثيلين المتشابك المتقدمة."
    },
    brandAdvantages: {
      en: [
        "PE-X Technology",
        "Heating Systems",
        "Plumbing Solutions",
        "German Engineering"
      ],
      ar: [
        "تكنولوجيا البولي إيثيلين المتشابك",
        "أنظمة التدفئة",
        "حلول السباكة",
        "الهندسة الألمانية"
      ]
    },
    established: "1990",
    website: "https://www.aquapa.com.tr/en/index",
    logo: "/src/assets/brands/brand-9.png",
    mainImage: "/src/assets/brands/brand-9.png",
    galleryImages: [
      "/src/assets/brands/brand-9.png",
      "/src/assets/brands/brand-10.png",
      "/src/assets/brands/brand-11.png"
    ]
  },
  {
    id: "dab",
    slug: "dab",
    name: "DAB",
    origin: {
      en: "Italy",
      ar: "إيطاليا"
    },
    products: {
      en: ["Water Pumps", "Booster Systems", "Circulation Pumps", "Accessories"],
      ar: ["مضخات المياه", "أنظمة التعزيز", "مضخات الدوران", "الإكسسوارات"]
    },
    description: {
      en: "Italian manufacturer specializing in water pumps and pumping systems with energy-efficient solutions and reliable performance.",
      ar: "مصنع إيطالي متخصص في مضخات المياه وأنظمة الضخ مع حلول موفرة للطاقة وأداء موثوق."
    },
    brandAdvantages: {
      en: [
        "Energy Efficiency",
        "Pump Technology",
        "Reliable Performance",
        "Italian Quality"
      ],
      ar: [
        "كفاءة الطاقة",
        "تكنولوجيا المضخات",
        "الأداء الموثوق",
        "الجودة الإيطالية"
      ]
    },
    established: "1975",
    website: "https://www.dabpumps.com/en",
    logo: "/src/assets/brands/brand-10.png",
    mainImage: "/src/assets/brands/brand-10.png",
    galleryImages: [
      "/src/assets/brands/brand-10.png",
      "/src/assets/brands/brand-11.png",
      "/src/assets/brands/brand-12.png"
    ]
  },
  {
    id: "quarter-bath",
    slug: "quarter-bath",
    name: "Quarter Bath",
    origin: {
      en: "Turkey",
      ar: "تركيا"
    },
    products: {
      en: ["Bathroom Accessories", "Shower Systems", "Faucets", "Bathroom Furniture"],
      ar: ["إكسسوارات الحمام", "أنظمة الدش", "الحنفيات", "أثاث الحمام"]
    },
    description: {
      en: "Turkish manufacturer of bathroom accessories and solutions with modern design and functional excellence.",
      ar: "مصنع تركي لإكسسوارات الحمام والحلول الصحية مع التصميم العصري والتميز الوظيفي."
    },
    brandAdvantages: {
      en: [
        "Modern Design",
        "Functional Excellence",
        "Bathroom Solutions",
        "Quality Materials"
      ],
      ar: [
        "التصميم العصري",
        "التميز الوظيفي",
        "حلول الحمامات",
        "مواد عالية الجودة"
      ]
    },
    established: "2006",
    website: "https://quarterbath.com/en",
    logo: "/src/assets/brands/brand-11.png",
    mainImage: "/src/assets/brands/brand-11.png",
    galleryImages: [
      "/src/assets/brands/brand-11.png",
      "/src/assets/brands/brand-12.png",
      "/src/assets/brands/brand-13.png"
    ]
  },
  {
    id: "kas",
    slug: "kas",
    name: "KAS",
    origin: {
      en: "Turkey",
      ar: "تركيا"
    },
    products: {
      en: ["Ceramic Tiles", "Sanitary Ware", "Bathroom Accessories", "Design Solutions"],
      ar: ["بلاط السيراميك", "الأدوات الصحية", "إكسسوارات الحمام", "حلول التصميم"]
    },
    description: {
      en: "Turkish manufacturer of ceramic tiles and sanitary ware with innovative design solutions and premium quality materials.",
      ar: "مصنع تركي للبلاط السيراميك والأدوات الصحية مع حلول تصميم مبتكرة ومواد عالية الجودة."
    },
    brandAdvantages: {
      en: [
        "Innovative Design",
        "Premium Quality",
        "Ceramic Expertise",
        "Design Solutions"
      ],
      ar: [
        "التصميم المبتكر",
        "الجودة المتميزة",
        "خبرة السيراميك",
        "حلول التصميم"
      ]
    },
    established: "1970",
    website: "https://kas.com.tr/en/",
    logo: "/src/assets/brands/brand-12.png",
    mainImage: "/src/assets/brands/brand-12.png",
    galleryImages: [
      "/src/assets/brands/brand-12.png",
      "/src/assets/brands/brand-13.png",
      "/src/assets/brands/brand-14.png"
    ]
  },
  {
    id: "guarri",
    slug: "guarri",
    name: "Guarri",
    origin: {
      en: "Turkey",
      ar: "تركيا"
    },
    products: {
      en: ["Sanitary Ware", "Bathroom Solutions", "Fittings", "Accessories"],
      ar: ["الأدوات الصحية", "حلول الحمامات", "الملحقات", "الإكسسوارات"]
    },
    description: {
      en: "Italian manufacturer of sanitary ware and bathroom solutions with elegant design and superior functionality.",
      ar: "مصنع إيطالي للأدوات الصحية وحلول الحمامات مع التصميم الأنيق والوظائف المتفوقة."
    },
    brandAdvantages: {
      en: [
        "Elegant Design",
        "Superior Functionality",
        "Italian Craftsmanship",
        "Bathroom Solutions"
      ],
      ar: [
        "التصميم الأنيق",
        "الوظائف المتفوقة",
        "الحرفية الإيطالية",
        "حلول الحمامات"
      ]
    },
    established: "2002",
    website: "https://www.facebook.com/guarriarmature/",
    logo: "/src/assets/brands/brand-13.png",
    mainImage: "/src/assets/brands/brand-13.png",
    galleryImages: [
      "/src/assets/brands/brand-13.png",
      "/src/assets/brands/brand-14.png",
      "/src/assets/brands/brand-15.png"
    ]
  },
  {
    id: "asclik-clamp",
    slug: "asclik-clamp",
    name: "Asclik Clamp",
    origin: {
      en: "Turkey",
      ar: "تركيا"
    },
    products: {
      en: ["Pipe Clamps", "Fittings", "Accessories", "Installation Tools"],
      ar: ["مشابك الأنابيب", "الملحقات", "الإكسسوارات", "أدوات التركيب"]
    },
    description: {
      en: "Turkish manufacturer specializing in pipe clamps and installation accessories with precision engineering and reliable fastening solutions.",
      ar: "مصنع تركي متخصص في مشابك الأنابيب وإكسسوارات التركيب مع الهندسة الدقيقة وحلول الربط الموثوقة."
    },
    brandAdvantages: {
      en: [
        "Precision Engineering",
        "Reliable Fastening",
        "Installation Expertise",
        "Quality Materials"
      ],
      ar: [
        "الهندسة الدقيقة",
        "الربط الموثوق",
        "خبرة التركيب",
        "مواد عالية الجودة"
      ]
    },
    established: "2016",
    website: "https://www.ascfixing.com/",
    logo: "/src/assets/brands/brand-14.png",
    mainImage: "/src/assets/brands/brand-14.png",
    galleryImages: [
      "/src/assets/brands/brand-14.png",
      "/src/assets/brands/brand-15.png",
      "/src/assets/brands/brand-1.png"
    ]
  },
  {
    id: "ostendorf",
    slug: "ostendorf",
    name: "Ostendorf",
    origin: {
      en: "Germany",
      ar: "ألمانيا"
    },
    products: {
      en: ["Ceramic Tiles", "Porcelain Tiles", "Bathroom Solutions", "Design Tiles"],
      ar: ["بلاط السيراميك", "بلاط البورسلين", "حلول الحمامات", "بلاط التصميم"]
    },
    description: {
      en: "German manufacturer of high-quality ceramic and porcelain tiles with innovative designs and superior durability.",
      ar: "مصنع ألماني للبلاط السيراميك والبورسلين عالي الجودة مع تصاميم مبتكرة ومتانة متفوقة."
    },
    brandAdvantages: {
      en: [
        "Superior Durability",
        "Innovative Designs",
        "German Quality",
        "Ceramic Expertise"
      ],
      ar: [
        "المتانة المتفوقة",
        "التصاميم المبتكرة",
        "الجودة الألمانية",
        "خبرة السيراميك"
      ]
    },
    established: "1973",
    website: "https://www.ostendorf-kunststoffe.com/en/",
    logo: "/src/assets/brands/brand-15.png",
    mainImage: "/src/assets/brands/brand-15.png",
    galleryImages: [
      "/src/assets/brands/brand-15.png",
      "/src/assets/brands/brand-1.png",
      "/src/assets/brands/brand-2.png"
    ]
  },
  {
    id: "shield",
    slug: "shield",
    name: "Shield",
    origin: {
      en: "Egypt",
      ar: "مصر"
    },
    products: {
      en: ["Protective Coatings", "Pipe Protection", "Insulation Materials", "Accessories"],
      ar: ["الطلاءات الواقية", "حماية الأنابيب", "مواد العزل", "الإكسسوارات"]
    },
    description: {
      en: "Turkish manufacturer of protective coatings and insulation materials with advanced protection technology and environmental solutions.",
      ar: "مصنع تركي للطلاءات الواقية ومواد العزل مع تكنولوجيا الحماية المتقدمة والحلول البيئية."
    },
    brandAdvantages: {
      en: [
        "Protection Technology",
        "Environmental Solutions",
        "Insulation Expertise",
        "Quality Materials"
      ],
      ar: [
        "تكنولوجيا الحماية",
        "الحلول البيئية",
        "خبرة العزل",
        "مواد عالية الجودة"
      ]
    },
    established: "2018",
    website: "https://www.facebook.com/Shield.EngG/",
    logo: "/src/assets/brands/brand-1.png",
    mainImage: "/src/assets/brands/brand-1.png",
    galleryImages: [
      "/src/assets/brands/brand-1.png",
      "/src/assets/brands/brand-2.png",
      "/src/assets/brands/brand-3.png"
    ]
  },
  {
    id: "candan",
    slug: "candan",
    name: "Candan",
    origin: {
      en: "Turkey",
      ar: "تركيا"
    },
    products: {
      en: ["Sanitary Ware", "Bathroom Solutions", "Fittings", "Accessories"],
      ar: ["الأدوات الصحية", "حلول الحمامات", "الملحقات", "الإكسسوارات"]
    },
    description: {
      en: "Turkish manufacturer of sanitary ware and bathroom solutions with modern design and reliable performance.",
      ar: "مصنع تركي للأدوات الصحية وحلول الحمامات مع التصميم العصري والأداء الموثوق."
    },
    brandAdvantages: {
      en: [
        "Modern Design",
        "Reliable Performance",
        "Bathroom Solutions",
        "Quality Assurance"
      ],
      ar: [
        "التصميم العصري",
        "الأداء الموثوق",
        "حلول الحمامات",
        "ضمان الجودة"
      ]
    },
    established: "1979",
    website: "https://www.candanmakina.com/",
    logo: "/src/assets/brands/brand-2.png",
    mainImage: "/src/assets/brands/brand-2.png",
    galleryImages: [
      "/src/assets/brands/brand-2.png",
      "/src/assets/brands/brand-3.png",
      "/src/assets/brands/brand-4.png"
    ]
  },
  {
    id: "banninger",
    slug: "banninger",
    name: "Bänninger",
    origin: {
      en: "Germany",
      ar: "ألمانيا"
    },
    products: {
      en: ["PPR Pipes", "Fittings", "Heating Systems", "Plumbing Systems"],
      ar: ["أنابيب البولي بروبيلين", "الملحقات", "أنظمة التدفئة", "أنظمة السباكة"]
    },
    description: {
      en: "Bänninger Kunststoff-Produkte GmbH is a German company with a long-standing reputation for high-quality plastic pipes and fittings. Its roots go back to 1909, and the plastics division was acquired in 1987, forming the foundation of today's operations. With around 250 employees across facilities in Reiskirchen and Staßfurt, Bänninger is recognized as a technical leader in the pipe industry, committed to quality, safety, sustainability, and social responsibility.",
      ar: "Bänninger Kunststoff-Produkte GmbH هي شركة ألمانية تتمتع بسمعة طويلة الأمد في أنابيب وملحقات البلاستيك عالية الجودة. تعود جذورها إلى عام 1909، وتم الاستحواذ على قسم البلاستيك في عام 1987، مما شكل أساس العمليات اليوم. مع حوالي 250 موظف في مرافق Reiskirchen و Staßfurt، تُعرف Bänninger كقائد تقني في صناعة الأنابيب، ملتزمة بالجودة والسلامة والاستدامة والمسؤولية الاجتماعية."
    },
    brandAdvantages: {
      en: [
        "German Engineering Excellence",
        "Comprehensive Quality Assurance with 10 Year Warranty",
        "Sustainability and Social Responsibility",
        "Customer-Centric Support"
      ],
      ar: [
        "التميز الهندسي الألماني",
        "ضمان الجودة الشامل مع ضمان 10 سنوات",
        "الاستدامة والمسؤولية الاجتماعية",
        "الدعم المرتكز على العملاء"
      ]
    },
    established: "1909",
    website: "https://www.baenninger.de/en.html",
    logo: "/src/assets/brands/banninger-logo.png",
    mainImage: "/src/assets/brands/banninger/product1.png",
    galleryImages: [
      "/src/assets/brands/banninger/product2.png",
      "/src/assets/brands/banninger/product1.png",
      "/src/assets/brands/banninger/product1.png",
      "/src/assets/brands/banninger/product1.png",
      "/src/assets/brands/banninger/product1.png"
    ]
  },
  {
    id: "saudi-ceramics",
    slug: "saudi-ceramics",
    name: "Saudi Ceramics",
    origin: {
      en: "Saudi Arabia",
      ar: "المملكة العربية السعودية"
    },
    products: {
      en: ["Ceramic Tiles", "Sanitary Ware", "Bathroom Accessories", "Design Solutions"],
      ar: ["بلاط السيراميك", "الأدوات الصحية", "إكسسوارات الحمام", "حلول التصميم"]
    },
    description: {
      en: "Saudi manufacturer of premium ceramic tiles and sanitary ware with innovative designs and superior quality standards.",
      ar: "مصنع سعودي للبلاط السيراميك والأدوات الصحية المتميزة مع تصاميم مبتكرة ومعايير جودة متفوقة."
    },
    brandAdvantages: {
      en: [
        "Premium Quality",
        "Innovative Designs",
        "Saudi Excellence",
        "Design Solutions"
      ],
      ar: [
        "الجودة المتميزة",
        "التصاميم المبتكرة",
        "التميز السعودي",
        "حلول التصميم"
      ]
    },
    established: "1977",
    website: "https://www.saudiceramics.com/en/",
    logo: "/src/assets/brands/brand-3.png",
    mainImage: "/src/assets/brands/brand-3.png",
    galleryImages: [
      "/src/assets/brands/brand-3.png",
      "/src/assets/brands/brand-4.png",
      "/src/assets/brands/brand-5.png"
    ]
  },
  {
    id: "almunif-pipes",
    slug: "almunif-pipes",
    name: "Almunif Pipes",
    origin: {
      en: "Saudi Arabia",
      ar: "المملكة العربية السعودية"
    },
    products: {
      en: ["PE Pipes", "PVC Pipes", "Fittings", "Drainage Systems"],
      ar: ["أنابيب البولي إيثيلين", "أنابيب البولي فينيل كلوريد", "الملحقات", "أنظمة الصرف"]
    },
    description: {
      en: "Saudi manufacturer of plastic piping systems for various applications with focus on quality and reliability.",
      ar: "مصنع سعودي لأنظمة الأنابيب البلاستيكية لتطبيقات متنوعة مع التركيز على الجودة والموثوقية."
    },
    brandAdvantages: {
      en: [
        "Quality Focus",
        "Reliability",
        "Saudi Manufacturing",
        "Diverse Applications"
      ],
      ar: [
        "التركيز على الجودة",
        "الموثوقية",
        "التصنيع السعودي",
        "تطبيقات متنوعة"
      ]
    },
    established: "1987",
    website: "https://almunifpipes.com/",
    logo: "/src/assets/brands/brand-4.png",
    mainImage: "/src/assets/brands/brand-4.png",
    galleryImages: [
      "/src/assets/brands/brand-4.png",
      "/src/assets/brands/brand-5.png",
      "/src/assets/brands/brand-6.png"
    ]
  }
];

// Helper function to get brand by slug
export const getBrandBySlug = (slug: string): BrandData | undefined => {
  return brandsData.find(brand => brand.slug === slug);
};