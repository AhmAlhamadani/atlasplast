// Import brand images
import banningerLogo from '../assets/brands/banninger-logo.png';
import banningerMain from '../assets/brands/banninger/product1.png';
import banningerProduct from '../assets/brands/banninger/product2.png';

import georgFischerLogo from '../assets/brands/brand-5.png';
import georgFischerMain from '../assets/brands/georg-fischer/main.png';
import georgFischerProduct from '../assets/brands/georg-fischer/product.png';
import silentaPremiumSpecImage from '../assets/brands/georg-fischer/spec-images/silenta_premium.png';
import silenta3aSpecImage from '../assets/brands/georg-fischer/spec-images/silenta_3a.png';
import aquasystemSpecImage from '../assets/brands/georg-fischer/spec-images/aquasystem.png';
import ecofitSpecImage from '../assets/brands/georg-fischer/spec-images/ecofit.png';

import turanBorfitLogo from '../assets/brands/brand-7.png';
import turanBorfitMain from '../assets/brands/turan-borfit/main.png';
import turanBorfitProduct from '../assets/brands/turan-borfit/product.png';

import aquapaLogo from '../assets/brands/brand-2.png';
import aquapaMain from '../assets/brands/aquapa/main.png';
import aquapaProduct from '../assets/brands/aquapa/product.png';
import aquapaPprSpecImage from '../assets/brands/aquapa/spec-images/ppr.png';
import aquapaSilentPpSpecImage from '../assets/brands/aquapa/spec-images/silent_pp.png';

import pimtasLogo from '../assets/brands/brand-6.png';
import pimtasMain from '../assets/brands/pimtas/main.png';
import pimtasProduct from '../assets/brands/pimtas/product.png';
import pimtasCompressionFittingsSpecImage from '../assets/brands/pimtas/spec-images/compression_fittings.png';
import pimtasPe100SpecImage from '../assets/brands/pimtas/spec-images/pe100.png';
import pimtasUpvcPressSpecImage from '../assets/brands/pimtas/spec-images/upvc_press.png';
import pimtasPpFittingsSpecImage from '../assets/brands/pimtas/spec-images/pp_fittings.png';

import candanMakinaLogo from '../assets/brands/brand-16.png';
import candanMakinaMain from '../assets/brands/candan-makina/main.png';
import candanMakinaProduct from '../assets/brands/candan-makina/product.png';

import ascelikClampLogo from '../assets/brands/brand-18.png';
import ascelikClampMain from '../assets/brands/ascelik-clamp/main.png';
import ascelikClampProduct from '../assets/brands/ascelik-clamp/product.png';

import kasLogo from '../assets/brands/brand-3.png';
import kasMain from '../assets/brands/kas/main.png';
import kasProduct from '../assets/brands/kas/product.png';
import kasPprSpecImage from '../assets/brands/kas/spec-images/ppr.png';
import kasFaucetsSpecImage from '../assets/brands/kas/spec-images/faucets.png';

import quarterBathLogo from '../assets/brands/brand-14.png';
import quarterBathMain from '../assets/brands/quarter-bath/main.png';
import quarterBathProduct from '../assets/brands/quarter-bath/product.png';
import quarterBathSanitaryWareSpecImage from '../assets/brands/quarter-bath/spec-images/sanitary.png';
import quarterBathFurnitureSpecImage from '../assets/brands/quarter-bath/spec-images/furniture.png';

import poloplastLogo from '../assets/brands/brand-15.png';
import poloplastMain from '../assets/brands/poloplast/main.png';
import poloplastProduct from '../assets/brands/poloplast/product.png';
import poloplastPoloKalNgSpecImage from '../assets/brands/poloplast/spec-images/polo_kal_ng.png';
import poloplastPoloKal3sSpecImage from '../assets/brands/poloplast/spec-images/polo_kal_3s.png';

import polymeltLogo from '../assets/brands/brand-1.png';
import polymeltMain from '../assets/brands/polymelt/main.png';
import polymeltProduct from '../assets/brands/polymelt/product.png';
import polymeltPprSpecImage from '../assets/brands/polymelt/spec-images/ppr.png';

import ostendorfLogo from '../assets/brands/brand-17.png';
import ostendorfMain from '../assets/brands/ostendorf/main.png';
import ostendorfProduct from '../assets/brands/ostendorf/product.png';

import dabPumpsLogo from '../assets/brands/brand-11.png';
import dabPumpsMain from '../assets/brands/dab-pumps/main.png';
import dabPumpsProduct from '../assets/brands/dab-pumps/product.png';
import dabPumpsSpecImage from '../assets/brands/dab-pumps/spec-images/pump.png';

import saudiCeramicsLogo from '../assets/brands/brand-10.png';
import saudiCeramicsMain from '../assets/brands/saudi-ceramics/main.png';
import saudiCeramicsProduct from '../assets/brands/saudi-ceramics/product.png';
import saudiCeramicsAquahotSpecImage from '../assets/brands/saudi-ceramics/spec-images/aquahot.png';
import saudiCeramicsOryxSpecImage from '../assets/brands/saudi-ceramics/spec-images/oryx.png';
import saudiCeramicsPorcelainSpecImage from '../assets/brands/saudi-ceramics/spec-images/porcelain.png';
import saudiCeramicsCeramicSpecImage from '../assets/brands/saudi-ceramics/spec-images/ceramic.png';

import nassarPlasticLogo from '../assets/brands/brand-9.png';
import nassarPlasticMain from '../assets/brands/nassar-plastic/main.png';
import nassarPlasticProduct from '../assets/brands/nassar-plastic/product.png';

import wisaLogo from '../assets/brands/brand-8.png';
import wisaMain from '../assets/brands/wisa/main.png';
import wisaProduct from '../assets/brands/wisa/product.png';

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
    en: Array<{
      name: string;
      specifications?: {
        [key: string]: string;
      };
      specificationImage?: string;
    }>;
    ar: Array<{
      name: string;
      specifications?: {
        [key: string]: string;
      };
      specificationImage?: string;
    }>;
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
    id: "aquapa",
    slug: "aquapa",
    name: "Aquapa",
    origin: {
      en: "Turkey",
      ar: "تركيا"
    },
    products: {
      en: [
        {
          name: "PPR",
          specifications: {
            "Diameter": "d 20 mm to d 110 mm",
            "Length": "4 meters, 5.8 meters",
            "Color": "Green, Black",
            "PN": "PN 10, PN 16, PN 20, PN 25",
            "Standards": "EN ISO 15874, ASTM, F-2389, DIN 8077, DIN 8078"
          },
          specificationImage: aquapaPprSpecImage
        },
        {
          name: "Silent PP",
          specifications: {
            "Diameter": "50 mm - 160 mm",
            "Length": "0.15mt - 3mt",
            "Color": "Light blue",
            "Acoustic performance": "22 dB(A) / 4lt/s acc.",
            "Pipes": "With socket",
            "Standards": "EN ISO 15874, DIN 8077, DIN 8078, ASTM F-2389"
          },
          specificationImage: aquapaSilentPpSpecImage
        },
        { name: "PVC" }
      ],
      ar: [
        {
          name: "أنابيب وملحقات PPR",
          specifications: {
            "القطر": "20 مم إلى 110 مم",
            "الطول": "4 أمتار، 5.8 أمتار",
            "اللون": "أخضر، أسود",
            "PN": "PN 10, PN 16, PN 20, PN 25",
            "المعايير": "EN ISO 15874, ASTM, F-2389, DIN 8077, DIN 8078"
          },
          specificationImage: aquapaPprSpecImage
        },
        {
          name: "أنابيب وملحقات PP الصامت",
          specifications: {
            "القطر": "50 مم - 160 مم",
            "الطول": "0.15 متر - 3 متر",
            "اللون": "أزرق فاتح",
            "الأداء الصوتي": "22 ديسيبل (أ) / 4 لتر/ثانية",
            "الأنابيب": "مع مقبس",
            "المعايير": "EN ISO 15874, DIN 8077, DIN 8078, ASTM F-2389"
          },
          specificationImage: aquapaSilentPpSpecImage
        },
        { name: "أنابيب وملحقات PVC" }
      ]
    },
    description: {
      en: "Aquapa Plastik is a Turkish manufacturer producing high-quality PPR, PVC, and Silent PP piping systems. Founded in 1980, the company operates modern factories in Veliköy and Çerkezköy, supplying a wide range of pipes, fittings, and accessories. Recognized among Turkey’s top exporters since 2014, Aquapa serves customers in over 90 countries across five continents.",
      ar: "تأسست شركة Aquapa Plastik في عام 1980 وهي شركة تركية تصنّع أنظمة أنابيب عالية الجودة من PPR وPVC وPP الصامت. تدير مصانع حديثة في Veliköy وÇerkezköy لإنتاج مجموعة واسعة من الأنابيب والملحقات والمرفقات. معروفة بين كبار المصدرين الأتراك منذ عام 2014، تخدم Aquapa عملاء في أكثر من 90 دولة عبر خمس قارات."
    },
    brandAdvantages: {
      en: [
        "Wide range of piping systems including silent and standard PP",
        "Strong export record and international presence",
        "Modern factories and strict quality assurance",
        "Complete piping solutions: pipes, fittings, and accessories"
      ],
      ar: [
        "مجموعة واسعة من أنظمة الأنابيب بما فيها PP الصامت والعادي",
        "سجل تصدير قوي وحضور دولي",
        "مصانع حديثة وضمان جودة صارم",
        "حلول أنابيب متكاملة: أنابيب، ملحقات، مرفقات"
      ]
    },
    established: "1980",
    website: "https://www.aquapa.com.tr/en/",
    logo: aquapaLogo,
    mainImage: aquapaMain,
    galleryImages: [
      aquapaProduct,
    ]
  },
  {
    id: "georgfischer",
    slug: "georg-fischer",
    name: "Georg Fischer",
    origin: {
      en: "Switzerland",
      ar: "سويسرا"
    },
    products: {
      en: [
        {
          name: "Silenta Premium",
          specifications: {
            "Diameter": "58 mm - 200 mm",
            "Length": "0.15mt - 3mt",
            "Color": "Light grey",
            "Acoustic performance": "7 dB(A) / 2lt/ s acc. EN14366",
            "Flammability class": "B2 acc. to DIN 4102",
            "Pipes": "With and without socket",
            "Standards": "DIN 4109, DIN 4102-B2"
          },
          specificationImage: silentaPremiumSpecImage
        },
        {
          name: "Silenta 3A",
          specifications: {
            "Diameter": "40 mm - 200 mm",
            "Length": "0.15mt - 3mt",
            "Color": "Light blue",
            "Acoustic performance": "17 dB(A) / 4lt/s acc. EN14366",
            "Flammability class": "B2 acc. to DIN 4102",
            "Pipes": "With socket",
            "Standards": "DIN EN 1451-1, DIN 4109, DIN 4102-B2"
          },
          specificationImage: silenta3aSpecImage
        },
        {
          name: "Aquasystem",
          specifications: {
            "Diameter": "d 20 mm to d 200 mm",
            "Length": "4 meters",
            "Color": "Grey, White, Green, Beige, Black",
            "PN": "PN 10, PN 16, PN 20, PN 25",
            "Standards": "EN ISO 15874, DIN 8077, DIN 8078, etc"
          },
          specificationImage: aquasystemSpecImage
        },
        {
          name: "Ecofit",
          specifications: {
            "Diameter": "d 20 mm to d 355 mm",
            "Length": "6, 12.5, meters",
            "Color": "Black",
            "SDR": "9, 11",
            "Standards": "EN 12201-2, ISO 4427:2019, EN 12201:2013, AS/NZS 4130:2018"
          },
          specificationImage: ecofitSpecImage
        }
      ],
      ar: [
        {
          name: "Silenta Premium",
          specifications: {
            "القطر": "58 مم - 200 مم",
            "الطول": "0.15 متر - 3 متر",
            "اللون": "رمادي فاتح",
            "الأداء الصوتي": "7 ديسيبل (أ) / 2 لتر/ثانية حسب EN14366",
            "فئة القابلية للاشتعال": "B2 حسب DIN 4102",
            "الأنابيب": "مع وبدون مقبس",
            "المعايير": "DIN 4109, DIN 4102-B2"
          },
          specificationImage: silentaPremiumSpecImage
        },
        {
          name: "Silenta 3A",
          specifications: {
            "القطر": "40 مم - 200 مم",
            "الطول": "0.15 متر - 3 متر",
            "اللون": "أزرق فاتح",
            "الأداء الصوتي": "17 ديسيبل (أ) / 4 لتر/ثانية حسب EN14366",
            "فئة القابلية للاشتعال": "B2 حسب DIN 4102",
            "الأنابيب": "مع مقبس",
            "المعايير": "DIN EN 1451-1, DIN 4109, DIN 4102-B2"
          },
          specificationImage: silenta3aSpecImage
        },
        {
          name: "Aquasystem",
          specifications: {
            "القطر": "20 مم إلى 200 مم",
            "الطول": "4 أمتار",
            "اللون": "رمادي، أبيض، أخضر، بيج، أسود",
            "PN": "PN 10, PN 16, PN 20, PN 25",
            "المعايير": "EN ISO 15874, DIN 8077, DIN 8078, إلخ"
          },
          specificationImage: aquasystemSpecImage
        },
        {
          name: "ecoFIT",
          specifications: {
            "القطر": "20 مم إلى 355 مم",
            "الطول": "6، 12.5، أمتار",
            "اللون": "أسود",
            "SDR": "9، 11",
            "المعايير": "EN 12201-2, ISO 4427:2019, EN 12201:2013, AS/NZS 4130:2018"
          },
          specificationImage: ecofitSpecImage
        }
      ]
    },
    description: {
      en: "Georg Fischer (GF) is a Swiss-based global leader in piping systems and industrial solutions, with a history dating back to 1802. GF Piping Systems offers a wide portfolio of plastic piping solutions, serving building technology, utilities, and industrial applications. With innovation, quality, and sustainability at its core, GF provides reliable solutions for the safe transport of water, chemicals, and gases.",
      ar: "تعد Georg Fischer (GF) شركة سويسرية رائدة عالميًا في أنظمة الأنابيب والحلول الصناعية، وتعود جذورها إلى عام 1802. تقدم GF Piping Systems مجموعة واسعة من حلول الأنابيب البلاستيكية، وتخدم مجالات تكنولوجيا المباني والمرافق والتطبيقات الصناعية. مع التركيز على الابتكار والجودة والاستدامة، توفر GF حلولاً موثوقة لنقل المياه والمواد الكيميائية والغازات بأمان."
    },
    brandAdvantages: {
      en: [
        "Swiss Precision and Engineering Heritage",
        "Comprehensive Plastic Piping Solutions",
        "Innovative and Sustainable Technologies",
        "Trusted Worldwide with Strong Customer Support"
      ],
      ar: [
        "الدقة السويسرية والإرث الهندسي",
        "حلول شاملة للأنابيب البلاستيكية",
        "تقنيات مبتكرة ومستدامة",
        "موثوقة عالميًا مع دعم قوي للعملاء"
      ]
    },
    established: "1802",
    website: "https://www.gfps.com/",
    logo: georgFischerLogo,
    mainImage: georgFischerMain,
    galleryImages: [
      georgFischerProduct
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
      en: [
        {
          name: "POLO KAL NG",
          specifications: {
            "Diameter": "32 mm - 200 mm",
            "Length": "0.15mt - 3mt",
            "Color": "Blue (RAL 5014)",
            "Acoustic performance": "18 dB(A) / 2lt/ s acc. EN14366",
            "Flammability class": "B2 acc. to DIN 4102",
            "Pipes": "With and without socket",
            "Chemical Resistance": "Resistant in pH range ~2 to 13.",
            "Seal materials": "EPDM",
            "Standards": "EN 1451-1, EN ISO 9969, EN 13501-1 – fire, DIN 4102, IMO Res. A.753(18"
          },
          specificationImage: poloplastPoloKalNgSpecImage
        },
        {
          name: "POLO KAL 3S",
          specifications: {
            "Diameter": "75 mm - 160 mm",
            "Length": "6mt -12mt, 100 mt",
            "Color": "Light grey, RAL 7035",
            "Acoustic performance": "12 dB(A) / 4lt/ s acc. DIN 4109",
            "Flammability class": "D-s2, B2.",
            "Pipes": "socket and builin EPM",
            "Chemical Resistance": "Resistant in pH range ~2 to 13.",
            "Seal materials": "EPDM",
            "Standards": "DIN EN 12056, EN 14366, DIN 4109, B per EN 1451-1, DIN 1986-100"
          },
          specificationImage: poloplastPoloKal3sSpecImage
        }
      ],
      ar: [
        {
          name: "POLO KAL NG",
          specifications: {
            "القطر": "32 مم - 200 مم",
            "الطول": "0.15 متر - 3 متر",
            "اللون": "أزرق (RAL 5014)",
            "الأداء الصوتي": "18 ديسيبل (أ) / 2 لتر/ثانية حسب EN14366",
            "فئة القابلية للاشتعال": "B2 حسب DIN 4102",
            "الأنابيب": "مع وبدون مقبس",
            "مقاومة المواد الكيميائية": "مقاومة في نطاق الأس الهيدروجيني ~2 إلى 13.",
            "مواد الختم": "EPDM",
            "المعايير": "EN 1451-1, EN ISO 9969, EN 13501-1 – fire, DIN 4102, IMO Res. A.753(18"
          },
          specificationImage: poloplastPoloKalNgSpecImage
        },
        {
          name: "POLO KAL 3S",
          specifications: {
            "القطر": "75 مم - 160 مم",
            "الطول": "6 متر -12 متر، 100 متر",
            "اللون": "رمادي فاتح، RAL 7035",
            "الأداء الصوتي": "12 ديسيبل (أ) / 4 لتر/ثانية حسب DIN 4109",
            "فئة القابلية للاشتعال": "D-s2، B2.",
            "الأنابيب": "مقبس ومبني في EPM",
            "مقاومة المواد الكيميائية": "مقاومة في نطاق الأس الهيدروجيني ~2 إلى 13.",
            "مواد الختم": "EPDM",
            "المعايير": "DIN EN 12056, EN 14366, DIN 4109, B per EN 1451-1, DIN 1986-100"
          },
          specificationImage: poloplastPoloKal3sSpecImage
        }
      ]
    },
    description: {
      en: "Poloplast GmbH, founded in 1954 in Linz, Austria, is a leading manufacturer of plastic pipe systems. They specialize in high-performance, multi-layer polypropylene pipe solutions for building drainage, wastewater disposal, and industrial applications. POLO-KAL NG offers excellent sound insulation, easy assembly, and suitability for both residential and commercial projects.",
      ar: "تأسست Poloplast GmbH عام 1954 في لينز، النمسا، وهي شركة رائدة في صناعة أنظمة الأنابيب البلاستيكية. تتخصص في حلول الأنابيب متعددة الطبقات من البولي بروبيلين عالية الأداء لتصريف المباني، والتخلص من مياه الصرف، والتطبيقات الصناعية. يوفر نظام POLO-KAL NG عزل صوت ممتاز، وسهولة في التركيب، ومناسب للمشاريع السكنية والتجارية."
    },
    brandAdvantages: {
      en: [
        "Advanced multi-layer pipe technology",
        "Reliable solutions for building drainage and wastewater",
        "Commitment to sustainability and recycling",
        "High quality standards and proven reliability"
      ],
      ar: [
        "تقنية أنابيب متعددة الطبقات متقدمة",
        "حلول موثوقة لتصريف المباني ومياه الصرف",
        "الالتزام بالاستدامة وإعادة التدوير",
        "معايير جودة عالية وموثوقية مثبتة"
      ]
    },
    established: "1954",
    website: "https://www.poloplast.com/en-at/",
    logo: poloplastLogo,
    mainImage: poloplastMain,
    galleryImages: [
      poloplastProduct,
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
      en: [
        { name: "PPR Pipes" },
        { name: "PPR Fittings" }
      ],
      ar: [
        { name: "أنابيب البولي بروبيلين" },
        { name: "الملحقات" },
        { name: "أنظمة التدفئة" },
        { name: "أنظمة السباكة" }
      ]
    },
    description: {
      en: "Bänninger Kunststoff-Produkte GmbH is a German company with a long-standing reputation for high-quality plastic pipes and fittings. Its roots go back to 1909, and the plastics division was acquired in 1987, forming the foundation of today's operations. With around 250 employees across facilities in Reiskirchen and Staßfurt, Bänninger is recognized as a technical leader in the pipe industry, committed to quality, safety, sustainability, and social responsibility.",
      ar: "تُعد Bänninger Kunststoff-Produkte GmbH شركة ألمانية تتمتع بسمعة عريقة في مجال أنابيب وملحقات البلاستيك عالية الجودة. تعود جذورها إلى عام 1909، وتم الاستحواذ على قسم البلاستيك في عام 1987، مما شكّل أساس عملياتها الحالية. ومع حوالي 250 موظفًا في مرافق Reiskirchen و Staßfurt، تُعرف Bänninger كشركة رائدة تقنيًا في صناعة الأنابيب، ملتزمة بالجودة والسلامة والاستدامة والمسؤولية الاجتماعية."
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
        "ضمان جودة شامل مع كفالة لمدة 10 سنوات",
        "الاستدامة والمسؤولية الاجتماعية",
        "الدعم الموجه للعملاء"
      ]
    },
    established: "1909",
    website: "https://www.baenninger.de/en.html",
    logo: banningerLogo,
    mainImage: banningerMain,
    galleryImages: [
      banningerProduct
    ]
  },  
  {
    id: "pimtas",
    slug: "pimtas",
    name: "Pimtaş",
    origin: {
      en: "Turkey",
      ar: "تركيا"
    },
    products: {
      en: [
        {
          name: "Compression Fittings",
          specifications: {
            "Diameter": "20 mm - 110 mm (thread ½″ up to 4″)",
            "Color": "Blue, green",
            "Application": "drinking water, Pressurised wastewater, Above‐ground and underground installations",
            "PN": "10, 16",
            "Standards": "DIN EN 12201, ISO 11922-1, DIN 8074, EN 12201-1/2, DIN EN 10226 (ISO 7-1), BS 21, AS 1722.1, DIN EN 1092-1, DIN 2501.1, TS ISO 17885"
          },
          specificationImage: pimtasCompressionFittingsSpecImage
        },
        {
          name: "PE100 Pipe & Fittings",
          specifications: {
            "Diameter": "20 mm - 63 mm",
            "Length": "6mt -12mt, 100 mt",
            "Pipe": "With Socket, without Socket",
            "PN": "PN6, PN10, PN16, and PN20",
            "Standards": "ISO 4427-2, N 12201-2, DIN 8074 / DIN 8075, TS 418-2 EN 12201"
          },
          specificationImage: pimtasPe100SpecImage
        },
        {
          name: "U-PVC Press Pipes",
          specifications: {
            "Diameter": "d 20 mm to d 400 mm",
            "Length": "6 meters customizable",
            "Color": "Light Grey",
            "PN": "PN6, PN10, PN16",
            "Pipe": "With Socket, Plain end, with O ring",
            "Standards": "EN ISO 1452-2, DIN 8061 / 8062, TS 274-2 EN 1452-2, ISO 4422"
          },
          specificationImage: pimtasUpvcPressSpecImage
        },
        {
          name: "PP Fittings",
          specifications: {
            "Diameter": "d 20 mm to d 110 mm",
            "Length": "6, 12.5, meters",
            "PN": "PN10, PN16, and PN20",
            "Type": "Socket Fusion Fittings, Transition Fittings, Ball valves, stop valves, manifolds, flange adapters",
            "Standards": "DIN 8077 / DIN 8078, ISO 15874, EN ISO 15494, TS 9937 EN ISO 15874"
          },
          specificationImage: pimtasPpFittingsSpecImage
        }
      ],
      ar: [
        {
          name: "ملحقات الضغط",
          specifications: {
            "القطر": "20 مم - 110 مم (خيط ½″ حتى 4″)",
            "اللون": "أزرق، أخضر",
            "التطبيق": "مياه الشرب، مياه الصرف المضغوطة، التركيبات فوق الأرض وتحت الأرض",
            "PN": "10، 16",
            "المعايير": "DIN EN 12201, ISO 11922-1, DIN 8074, EN 12201-1/2, DIN EN 10226 (ISO 7-1), BS 21, AS 1722.1, DIN EN 1092-1, DIN 2501.1, TS ISO 17885"
          },
          specificationImage: pimtasCompressionFittingsSpecImage
        },
        {
          name: "أنابيب وملحقات PE100",
          specifications: {
            "القطر": "20 مم - 63 مم",
            "الطول": "6 متر -12 متر، 100 متر",
            "الأنبوب": "مع مقبس، بدون مقبس",
            "PN": "PN6، PN10، PN16، وPN20",
            "المعايير": "ISO 4427-2, N 12201-2, DIN 8074 / DIN 8075, TS 418-2 EN 12201"
          },
          specificationImage: pimtasPe100SpecImage
        },
        {
          name: "أنابيب U-PVC المضغوطة",
          specifications: {
            "القطر": "20 مم إلى 400 مم",
            "الطول": "6 أمتار قابل للتخصيص",
            "اللون": "رمادي فاتح",
            "PN": "PN6، PN10، PN16",
            "الأنبوب": "مع مقبس، نهاية عادية، مع حلقة O",
            "المعايير": "EN ISO 1452-2, DIN 8061 / 8062, TS 274-2 EN 1452-2, ISO 4422"
          },
          specificationImage: pimtasUpvcPressSpecImage
        },
        {
          name: "ملحقات PP",
          specifications: {
            "القطر": "20 مم إلى 110 مم",
            "الطول": "6، 12.5، أمتار",
            "PN": "PN10، PN16، وPN20",
            "النوع": "ملحقات الانصهار بالمقبس، ملحقات الانتقال، صمامات الكرة، صمامات الإيقاف، المجمعات، محولات الفلانش",
            "المعايير": "DIN 8077 / DIN 8078, ISO 15874, EN ISO 15494, TS 9937 EN ISO 15874"
          },
          specificationImage: pimtasPpFittingsSpecImage
        }
      ]
    },
    description: {
      en: "Founded in 1977, Pimtaş is one of Turkey’s leading manufacturers in plastic piping systems and pool equipment. The company produces a wide range of solutions including PPR, PP compression fittings, PVC & UPVC, and HDPE piping systems, as well as specialized equipment for swimming pools. With strong export activities to over 80 countries, Pimtaş combines technical expertise, modern production facilities, and a commitment to innovation and quality.",
      ar: "تأسست شركة Pimtaş في عام 1977 وتعد من أبرز الشركات التركية المصنعة لأنظمة الأنابيب البلاستيكية ومعدات المسابح. تنتج الشركة مجموعة واسعة من الحلول تشمل PPR، وملحقات ضغط PP، وأنظمة PVC وUPVC، وأنابيب HDPE، بالإضافة إلى معدات متخصصة للمسابح. تصدر Pimtaş منتجاتها إلى أكثر من 80 دولة، وتجمع بين الخبرة التقنية والمصانع الحديثة والالتزام بالابتكار والجودة."
    },
    brandAdvantages: {
      en: [
        "Established expertise since 1977",
        "Comprehensive product range in plastic piping",
        "Strong international export presence",
        "Specialized solutions for pool systems"
      ],
      ar: [
        "خبرة راسخة منذ عام 1977",
        "مجموعة شاملة من منتجات الأنابيب البلاستيكية",
        "حضور قوي في الأسواق الدولية",
        "حلول متخصصة لأنظمة المسابح"
      ]
    },
    established: "1977",
    website: "https://pimtas.com/en/",
    logo: pimtasLogo,
    mainImage: pimtasMain,
    galleryImages: [
      pimtasProduct,
    ]
  },
  {
    id: "turanborfit",
    slug: "turan-borfit",
    name: "Turan Borfit",
    origin: {
      en: "Turkey",
      ar: "تركيا"
    },
    products: {
      en: [
        { name: "HDPE" },
        { name: "Welding machine" }
      ],
      ar: [
        { name: "أنابيب HDPE" },
        { name: "أنابيب PE" },
        { name: "آلة اللحام بالقطعة" },
        { name: "ملحقات PP" }
      ]
    },
    description: {
      en: "Turan Borfit is a Turkish manufacturer specialized in HDPE piping systems. Founded in 1995, the company has built a strong reputation for durability, performance, and environmental responsibility. Turan Borfit provides reliable solutions for water distribution, gas systems, and infrastructure projects, combining advanced production technologies with practical expertise to deliver high-quality HDPE pipes and fittings.",
      ar: "تأسست شركة Turan Borfit في عام 1995 وهي شركة تركية متخصصة في أنظمة أنابيب HDPE. اكتسبت سمعة قوية بفضل تركيزها على المتانة والأداء والمسؤولية البيئية. توفر الشركة حلولاً موثوقة لتوزيع المياه وأنظمة الغاز ومشاريع البنية التحتية، من خلال دمج تقنيات الإنتاج المتقدمة مع الخبرة العملية لتقديم أنابيب وملحقات HDPE عالية الجودة."
    },
    brandAdvantages: {
      en: [
        "Specialized Expertise in HDPE Systems",
        "Durable and Reliable Infrastructure Solutions",
        "Advanced Production Technologies",
        "Commitment to Quality and Sustainability"
      ],
      ar: [
        "خبرة متخصصة في أنظمة HDPE",
        "حلول بنية تحتية متينة وموثوقة",
        "تقنيات إنتاج متقدمة",
        "الالتزام بالجودة والاستدامة"
      ]
    },
    established: "1995",
    website: "https://turanmak.com/?lang=en",
    logo: turanBorfitLogo,
    mainImage: turanBorfitMain,
    galleryImages: [
      turanBorfitProduct
    ]
  },
  {
    id: "candanmakina",
    slug: "candan-makina",
    name: "Candan Makina",
    origin: {
      en: "Turkey",
      ar: "تركيا"
    },
    products: {
      en: [
        {
          name: "Welding Machines",
          specifications: {
            "Welding Diameter Range": "Ø20 mm up to Ø110 mm",
            "Temperature Range": "Adjustable up to 300 °C",
            "Operating Voltage": "220–240 V, 50–60 Hz",
            "Max Working Pressure": "PN20",
            "Power Options": "700 W, 1,500 W, 2,000 W, 2,400 W (depending on model)",
            "Compliance": "Meets DIN standards"
          },
          specificationImage: candanMakinaProduct
        },
        { name: "Pipe Cutters & Sharpeners" },
        { name: "Test Pressure Pumps" }
      ],
      ar: [
        {
          name: "آلات وأكسسوارات لحام الأنابيب البلاستيكية",
          specifications: {
            "نطاق قطر اللحام": "Ø20 مم حتى Ø110 مم",
            "نطاق درجة الحرارة": "قابل للتعديل حتى 300 °C",
            "جهد التشغيل": "220–240 فولت، 50–60 هرتز",
            "أقصى ضغط عمل": "PN20",
            "خيارات الطاقة": "700 واط، 1,500 واط، 2,000 واط، 2,400 واط (حسب الموديل)",
            "الامتثال": "يلبي معايير DIN"
          },
          specificationImage: candanMakinaProduct
        },
        { name: "مقصات وأنصال تنعيم الأنابيب البلاستيكية" },
        { name: "مضخات اختبار الضغط" },
        { name: "صمامات نحاسية ووصلات" }
      ]
    },
    description: {
      en: "Candan Makina is a Turkish company originally founded in **1979** (as Ercan Pres Dokum), later institutionalized in 1997 as Candan Makina Yedek Parça San. ve Tic. Ltd. Şti. It is a leading manufacturer of welding machines for plastic pipes (PPR, PE, PVC), cutters, sharpeners, test pressure pumps, brass valves, and unions. It also does aluminum injection & casting and produces customized spare parts for electrical power transmission. Candan exports to many countries worldwide and operates with a strong emphasis on quality control, timely delivery, and competitive pricing.",
      ar: "شركة Candan Makina هي شركة تركية تأسست عام 1979 باسم Ercan Pres Dokum، ثم تَحوّلت إلى مؤسسة رسمية في 1997 باسم Candan Makina Yedek Parça San. ve Tic. Ltd. Şti. تُعد من الشركات الرائدة في تصنيع آلات لحام الأنابيب البلاستيكية (PPR, PE, PVC)، والمقصات، وأدوات شحذ الأنابيب، ومضخات اختبار الضغط، وصمامات نحاسية ووصلات. كما تقوم بعمليات حقن وصب الألمنيوم، وتنتج قطع غيار مخصصة لقطاع نقل الطاقة الكهربائي. تصدّر منتجاتها إلى العديد من الدول حول العالم، وتعمل بتركيز قوي على مراقبة الجودة، والتسليم في الوقت المحدد، والأسعار التنافسية."
    },
    brandAdvantages: {
      en: [
        "Over 40 years of experience in plastic pipe welding & equipment",
        "Multiple specialized product lines: valves, welded machines, casting parts",
        "Quality certified and tested to meet international & DIN norms",
        "Strong export network (to ~60-70+ countries), with good after-sales service"
      ],
      ar: [
        "أكثر من 40 سنة خبرة في لحام الأنابيب البلاستيكية والمعدات",
        "عدة خطوط إنتاج متخصصة: صمامات، آلات اللحام، أجزاء الصب",
        "شهادات جودة واختبارات تلبي المعايير الدولية ومعايير DIN",
        "شبكة تصدير قوية (إلى حوالي 60-70+ دولة)، وخدمة ما بعد البيع جيدة"
      ]
    },
    established: "1979",
    website: "https://www.candanmakina.com/",
    logo: candanMakinaLogo,
    mainImage: candanMakinaMain,
    galleryImages: [
      candanMakinaProduct,
    ]
  },
  {
    id: "ascelikkelepce",
    slug: "ascelik-kelepce",
    name: "Asçelik Clamp",
    origin: {
      en: "Turkey",
      ar: "تركيا"
    },
    products: {
      en: [
        {
          name: "Pipe Clamps & Fixings",
          specifications: {
            "Product types": "Pipe clamps; Profiles & consoles; Other fittings",
            "Materials": "Malleable iron; ductile iron; steel (e.g. carbon steel); possibly stainless steel and rubber elements (gaskets)",
            "Coatings": "plain; others are black oxide; zinc plated; hot dipped galvanized.",
            "Applicability": "Plumbing, HVAC, industrial piping supports; possibly fire protection and mechanical installations"
          }
        }
      ],
      ar: [
        {
          name: "قلابات تثبيت الأنابيب",
          specifications: {
            "أنواع المنتجات": "قلابات الأنابيب؛ الملفات والكونسولات؛ ملحقات أخرى",
            "المواد": "الحديد المطاوع؛ الحديد الدكتايل؛ الفولاذ (مثل الفولاذ الكربوني)؛ ربما الفولاذ المقاوم للصدأ والعناصر المطاطية (الوصلات)",
            "الطلاءات": "عادي؛ أخرى هي أكسيد أسود؛ مطلي بالزنك؛ مغلف بالزنك الساخن",
            "القابلية للتطبيق": "السباكة، التدفئة والتهوية وتكييف الهواء، دعامات الأنابيب الصناعية؛ ربما الحماية من الحرائق والتركيبات الميكانيكية"
          }
        },
        { name: "تثبيتات الأنابيب" }
      ]
    },
    description: {
      en: "Asçelik Clamp (ASC Asçelik Kelepçe San. Tic. Ltd. Şti.) is a Turkish manufacturer specialized in clamps and pipe fixings. Established in 2016 as part of AS Engineering (founded in 2005), Asçelik produces high-quality clamps with various nut options, heavy-duty clamps, sprinkler wire clamps and other fixings. With capacity of ~3 million clamps per month, modern factory + warehouse, export to ~45 countries, and multiple international certifications (CE, GOST-R, UL, FM, TSEK).",
      ar: "شركة Asçelik Clamp (ASC Asçelik Kelepçe San. Tic. Ltd. Şti.) هي شركة تركية متخصصة في القلابات وتثبيت الأنابيب. تأسست عام 2016 كجزء من AS Engineering (المؤسسة منذ 2005)، تنتج Asçelik قلابات عالية الجودة مع خيارات صواميل متعددة، قلابات ثقيلة، قلابات للرش، وأغلاقات تثبيت أخرى. بقدرة إنتاجية تقارب 3 ملايين قُلبة شهريًا، مصنع ومستودع حديثان، تصدير إلى حوالي 45 دولة، وتحمل شهادات دولية متعددة (CE، GOST-R، UL، FM، TSEK)."
    },
    brandAdvantages: {
      en: [
        "Specialist in high-quality clamps & fixings",
        "Large production capacity with fast delivery",
        "Multiple international quality certifications",
        "Wide export market, trusted in many countries"
      ],
      ar: [
        "متخصص في قلابات وتثبيتات عالية الجودة",
        "قدرة إنتاج كبيرة مع توصيل سريع",
        "شهادات جودة دولية متعددة",
        "سوق تصدير واسع، موثوق به في العديد من الدول"
      ]
    },
    established: "2016",
    website: "https://www.ascfixing.com/",
    logo: ascelikClampLogo,
    mainImage: ascelikClampMain,
    galleryImages: [
      ascelikClampProduct,
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
      en: [
        {
          name: "PPR",
          specifications: {
            "Diameter": "20 mm - 110 mm",
            "Length": "4mt -6mt",
            "Pipe": "With Socket, without Socket",
            "PN": "PN10, PN16, PN20, PN 25",
            "Standards": "ISO 9001 , CE, EN, TSE, TS, TSEK, GOST"
          },
          specificationImage: kasPprSpecImage
        },
        {
          name: "Faucets",
          specifications: {
            "Types": "Washbasin Mixers,Lux Kitchen Mixers,WallType Kitchen Mixers,Shower Mixers,Bidet Mixers,Side Lever Mixers,Kitchen Faucets, Industrial Kitchen Mixers",
            "Sensor Faucet Series": "Yes",
            "spare parts available": "Yes",
            "Application": "bathroom, kitchen, shower, etc."
          },
          specificationImage: kasFaucetsSpecImage
        }
      ],
      ar: [
        {
          name: "أنابيب وملحقات PPR",
          specifications: {
            "القطر": "20 مم - 110 مم",
            "الطول": "4 متر -6 متر",
            "الأنبوب": "مع مقبس، بدون مقبس",
            "PN": "PN10، PN16، PN20، PN 25",
            "المعايير": "ISO 9001 ، CE، EN، TSE، TS، TSEK، GOST"
          },
          specificationImage: kasPprSpecImage
        },
        {
          name: "حنفيات",
          specifications: {
            "الأنواع": "خلاطات الأحواض، خلاطات المطبخ الفاخرة، خلاطات المطبخ الجدارية، خلاطات الدش، خلاطات البيديه، خلاطات الرافعة الجانبية، حنفيات المطبخ، خلاطات المطبخ الصناعية",
            "سلسلة الحنفيات الحساسة": "نعم",
            "قطع الغيار متوفرة": "نعم",
            "التطبيق": "الحمام، المطبخ، الدش، إلخ"
          },
          specificationImage: kasFaucetsSpecImage
        }
      ]
    },
    description: {
      en: "KAS (Kayalar Group) is a Turkish plumbing systems manufacturer offering products such as PPR piping (pipes & fittings), valves, brass fittings, and a wide range of faucets/ sanitary ware. Their portfolio includes underfloor heating, flexible hoses, and related components. :contentReference[oaicite:0]{index=0} Their PPR systems are designed for continuous use up to 90 °C and short peaks to 100 °C with long service life. :contentReference[oaicite:1]{index=1}",
      ar: "تُعد KAS (مجموعة كايالر) شركة تركية متخصصة في أنظمة السباكة، تقدّم منتجات مثل أنابيب وملحقات PPR، الصمامات والملحقات النحاسية، ومجموعة واسعة من الحنفيات / الأدوات الصحية. يشمل مجال نشاطهم الأنظمة الأرضية الدافئة والخرطومات المرنة ومكونات ذات صلة. :contentReference[oaicite:2]{index=2} تم تصميم أنظمة PPR الخاصة بهم للعمل المستمر حتى 90 °C مع ذروة مؤقتة تصل إلى 100 °C وعمر خدمة طويل. :contentReference[oaicite:3]{index=3}"
    },
    brandAdvantages: {
      en: [
        "Integrated plumbing product lines (pipes, fittings, sanitary ware)",
        "Strong reputation in Turkish plumbing industry",
        "Certifications & technical support",
        "Design for hot & cold water applications"
      ],
      ar: [
        "خطوط منتجات سباكة متكاملة (أنابيب، ملحقات، أدوات صحية)",
        "سمعة قوية في صناعة السباكة التركية",
        "شهادات ودعم فني",
        "تصميم لتطبيقات المياه الساخنة والباردة"
      ]
    },
    established: "1970",  // approximate, Kayalar group origin year according to sources :contentReference[oaicite:4]{index=4}
    website: "https://kas.com.tr/en/",
    logo: kasLogo,
    mainImage: kasMain,
    galleryImages: [
      kasProduct,
    ]
  },
  {
    id: "quarterbath",
    slug: "quarter-bath",
    name: "Quarter Bath",
    origin: {
      en: "Turkey",
      ar: "تركيا"
    },
    products: {
      en: [
        {
          name: "Sanitary Ware",
          specifications: {
            "Material": "Vitreous, fully glazed surface",
            "Product Type": "Water Closets,Wash Basins, Urinals, Bidets, Matching Accessories",
            "Flushing System": "Dual flush (3–6 L) / Rimless design",
            "Features": "Soft-close / Anti-bacterial / Water-saving",
            "Standards & Certifications": "SASO, ISO 9001, CE, WRAS"
          },
          specificationImage: quarterBathSanitaryWareSpecImage
        },
        {
          name: "Bathroom Furniture",
          specifications: {
            "Material": "moisture-resistant MDF",
            "finishes": "lacquered, laminated, or veneer",
            "Fully sealed edges": "for durability and water resistance",
            "Colors": "Wide range of colors, textures, and finishes",
            "Functionality": "Smart storage solutions, Soft-close",
            "Features": "Anti-fungal and anti-bacterial coating",
            "Standards": "ISO 9001, CE"
          },
          specificationImage: quarterBathFurnitureSpecImage
        }
      ],
      ar: [
        {
          name: "أدوات صحية / سيراميك",
          specifications: {
            "المادة": "سيراميك، سطح ملمع بالكامل",
            "نوع المنتج": "مراحيض، أحواض غسيل، كراسي زوار، بيديه، ملحقات متطابقة",
            "نظام التدفق": "تدفق مزدوج (3–6 لتر) / تصميم بدون حافة",
            "المميزات": "إغلاق ناعم / مضاد للبكتيريا / توفير المياه",
            "المعايير والشهادات": "SASO، ISO 9001، CE، WRAS"
          },
          specificationImage: quarterBathSanitaryWareSpecImage
        },
        {
          name: "أثاث الحمام والخزائن",
          specifications: {
            "المادة": "MDF مقاوم للرطوبة",
            "الطلاءات": "مطلي، مغلف، أو منضد",
            "الحواف المغلقة بالكامل": "للمتانة ومقاومة المياه",
            "الألوان": "مجموعة واسعة من الألوان والأنسجة والطلاءات",
            "الوظائف": "حلول تخزين ذكية، إغلاق ناعم",
            "المميزات": "طلاء مضاد للفطريات والبكتيريا",
            "المعايير": "ISO 9001، CE"
          },
          specificationImage: quarterBathFurnitureSpecImage
        }
      ]
    },
    description: {
      en: "Quarter Bath is a Turkish brand producing a wide portfolio of sanitary ware and bathroom ceramics. Their product range includes washbasins, toilets (WCs), bidets, urinals, bathroom furniture, and accessories. Collections include “Deep,” “Concorde,” “Round Line,” among others, offering modern design and functional aesthetics.",
      ar: "تُعد Quarter Bath علامة تركية تنتج مجموعة واسعة من الأدوات الصحية والسيراميك الحمَّامي. تشمل منتجاتها الأحواض، المراحيض، البيديه، الكراسي الزوار، الأثاث الحمّامي والملحقات. من مجموعاتها: “Deep”، “Concorde”، “Round Line” وغيرها، وتجمع بين التصميم العصري والجمالية العملية."
    },
    brandAdvantages: {
      en: [
        "Comprehensive sanitary ceramics & furniture lines",
        "Modern design with multiple collections to suit various styles",
        "High production capacity and export‑oriented",
        "Functional and aesthetic balance in product design"
      ],
      ar: [
        "خطوط سيراميك وأدوات صحية شاملة",
        "تصميم عصري مع مجموعات متعددة لتناسب أذواقًا مختلفة",
        "قدرة إنتاجية عالية وتوجه تصديري",
        "توازن بين الوظيفة والجمالية في تصميم المنتج"
      ]
    },
    established: "1993",
    website: "https://quarterbath.com/en/",
    logo: quarterBathLogo,
    mainImage: quarterBathMain,
    galleryImages: [
      quarterBathProduct,
    ]
  },

  {
    id: "polymelt",
    slug: "polymelt",
    name: "Polymelt",
    origin: {
      en: "Germany",
      ar: "ألمانيا"
    },
    products: {
      en: [
        {
          name: "Polymutan PPR/PP-RTC",
          specifications: {
            "Diameter": "d 20 mm to d 110 mm",
            "Length": "4 meters",
            "Color": "Yellow",
            "PN": "PN 10, PN 16, PN 20, PN 25",
            "Standards": "DIN 8077 / DIN 8078, EN ISO 15874, EN ISO 21003 (for multilayer pipes)"
          },
          specificationImage: polymeltPprSpecImage
        },
        { name: "Silenta 3A" }
      ],
      ar: [
        {
          name: "Polymutan PPR/PP-RTC",
          specifications: {
            "القطر": "20 مم إلى 110 مم",
            "الطول": "4 أمتار",
            "اللون": "أصفر",
            "PN": "PN 10، PN 16، PN 20، PN 25",
            "المعايير": "DIN 8077 / DIN 8078, EN ISO 15874, EN ISO 21003 (للأنابيب متعددة الطبقات)"
          },
          specificationImage: polymeltPprSpecImage
        },
        { name: "أنابيب ومُوصلات PP-R و PP-RCT للمياه الصالحة للشرب، التدفئة، التبريد، والتطبيقات الصناعية" }
      ]
    },
    description: {
      en: "Polymelt Piping Systems GmbH, established in 1968 and based in Ebenhofen, Bavaria, Germany, specializes in the development and manufacture of polypropylene (PP-R and PP-RCT) piping systems. Their products are used worldwide in residential construction, industrial plants, public facilities, and commercial buildings. The company is known for its high-quality standards and commitment to sustainability.",
      ar: "تأسست شركة Polymelt Piping Systems GmbH في عام 1968 ومقرها في إيبنهوفن، بافاريا، ألمانيا، وتخصصت في تطوير وتصنيع أنظمة الأنابيب المصنوعة من البولي بروبيلين (PP-R و PP-RCT). تُستخدم منتجاتها في جميع أنحاء العالم في البناء السكني، المنشآت الصناعية، المنشآت العامة، والمباني التجارية. تشتهر الشركة بمعاييرها العالية والالتزام بالاستدامة."
    },
    brandAdvantages: {
      en: [
        "Corrosion-free and durable piping systems",
        "Lightweight and easy to install",
        "High thermal and chemical resistance",
        "Low maintenance and long service life",
        "Comprehensive product range for various applications"
      ],
      ar: [
        "أنظمة أنابيب خالية من التآكل ودائمة",
        "خفيفة الوزن وسهلة التركيب",
        "مقاومة عالية للحرارة والمواد الكيميائية",
        "قليل الصيانة وعمر خدمة طويل",
        "مجموعة منتجات شاملة لتطبيقات متنوعة"
      ]
    },
    established: "1968",
    website: "https://www.polymelt.com/",
    logo: polymeltLogo,
    mainImage: polymeltMain,
    galleryImages: [
      polymeltProduct,
    ]
  },
  {
    id: "ostendorf",
    slug: "ostendorf-kunststoffe",
    name: "Ostendorf Kunststoffe",
    origin: {
      en: "Germany",
      ar: "ألمانيا"
    },
    products: {
      en: [
        { name: "HT Safe" },
        { name: "Skolan Safe" },
        { name: "KG System" }
      ],
      ar: [
        { name: "HT Safe" },
        { name: "Skolan Safe" },
        { name: "نظام KG" }
      ]
    },
    description: {
      en: "Ostendorf Kunststoffe GmbH, founded in 1948 in Vechta, Germany, is a leading manufacturer of plastic pipe systems. They specialize in high-performance drainage solutions for residential, commercial, and industrial applications. Products include HT Safe, Skolan Safe, and KG System, all designed for durability, sound insulation, and efficient wastewater disposal.",
      ar: "تأسست Ostendorf Kunststoffe GmbH عام 1948 في فيختا، ألمانيا، وهي شركة رائدة في صناعة أنظمة الأنابيب البلاستيكية. تتخصص في حلول الصرف عالية الأداء للتطبيقات السكنية والتجارية والصناعية. تشمل منتجاتها HT Safe و Skolan Safe ونظام KG، جميعها مصممة للمتانة، العزل الصوتي، والتخلص الفعال من مياه الصرف."
    },
    brandAdvantages: {
      en: [
        "High-performance, sound-insulated drainage systems",
        "Comprehensive product range for various applications",
        "Durable and efficient wastewater solutions",
        "Strict compliance with international quality standards",
        "Focus on sustainability and recyclable materials"
      ],
      ar: [
        "أنظمة صرف عالية الأداء مع عزل صوتي",
        "مجموعة منتجات شاملة لتطبيقات متنوعة",
        "حلول فعالة ودائمة لمياه الصرف",
        "الالتزام الصارم بمعايير الجودة الدولية",
        "التركيز على الاستدامة والمواد القابلة لإعادة التدوير"
      ]
    },
    established: "1948",
    website: "https://www.ostendorf-kunststoffe.com/",
    logo: ostendorfLogo,
    mainImage: ostendorfMain,
    galleryImages: [
      ostendorfProduct,
    ]
  },
  {
    id: "dabpumps",
    slug: "dab-pumps",
    name: "DAB Pumps",
    origin: {
      en: "Italy",
      ar: "إيطاليا"
    },
    products: {
      en: [
        {
          name: "Power Pumps",
          specifications: {
            "Pump Types": "Circulators, in-line and centrifugal pumps, multistage & self-priming units, submersibles, sewage & drainage pumps, lifting stations, pool/pond/saltwater pumps, pressure units, and control systems.",
            "Head": "Max 400m",
            "Liquid Temperature": "0 to +110 C",
            "MAX Pressure": "10 bar"
          },
          specificationImage: dabPumpsSpecImage
        }
      ],
      ar: [
        {
          name: "مضخات الطاقة",
          specifications: {
            "أنواع المضخات": "المضخات الدوارة، المضخات الخطية والطرد المركزي، وحدات متعددة المراحل والشفط الذاتي، المضخات الغاطسة، مضخات الصرف الصحي والصرف، محطات الرفع، مضخات البرك/البرك/المياه المالحة، وحدات الضغط، وأنظمة التحكم.",
            "الرأس": "أقصى 400 متر",
            "درجة حرارة السائل": "0 إلى +110 درجة مئوية",
            "أقصى ضغط": "10 بار"
          },
          specificationImage: dabPumpsSpecImage
        }
      ]
    },
    description: {
      en: "DAB Pumps, founded in 1975 in Mestrino, Italy, is a leading manufacturer specializing in water movement and management technologies. Their Power Pumps, including the EsyBox, EsyBox Mini 3, and EsyBox Max, are advanced electronic pressure booster systems designed for residential and commercial applications. These systems utilize variable frequency drives (VFD) to maintain constant water pressure, ensuring energy efficiency and reliability.",
      ar: "تأسست DAB Pumps في عام 1975 في ميسترينو، إيطاليا، وهي شركة رائدة متخصصة في تقنيات نقل وإدارة المياه. تشمل مضخات الطاقة الخاصة بهم، بما في ذلك EsyBox و EsyBox Mini 3 و EsyBox Max، أنظمة تعزيز الضغط الإلكترونية المتقدمة المصممة للتطبيقات السكنية والتجارية. تستخدم هذه الأنظمة محركات التردد المتغير (VFD) للحفاظ على ضغط المياه الثابت، مما يضمن الكفاءة في استهلاك الطاقة والموثوقية."
    },
    brandAdvantages: {
      en: [
        "Advanced electronic pressure booster systems",
        "Variable frequency drive (VFD) technology for constant pressure",
        "Energy-efficient and reliable performance",
        "Compact and easy-to-install designs",
        "Suitable for residential and commercial applications"
      ],
      ar: [
        "أنظمة تعزيز الضغط الإلكترونية المتقدمة",
        "تكنولوجيا محرك التردد المتغير (VFD) للحفاظ على الضغط الثابت",
        "أداء موثوق وفعال من حيث استهلاك الطاقة",
        "تصاميم مدمجة وسهلة التركيب",
        "مناسبة للتطبيقات السكنية والتجارية"
      ]
    },
    established: "1975",
    website: "https://www.dabpumps.com/",
    logo: dabPumpsLogo,
    mainImage: dabPumpsMain,
    galleryImages: [
      dabPumpsProduct,
    ]
  },
  {
    id: "saudiceramics",
    slug: "saudi-ceramics",
    name: "Saudi Ceramics",
    origin: {
      en: "Saudi Arabia",
      ar: "المملكة العربية السعودية"
    },
    products: {
      en: [
        {
          name: "Aquahot Water Heaters",
          specifications: {
            "Capacities": "10 L, 15 L, 30 L, 50 L, 80 L, 100 L, 120 L, 150 L, 200L, 300L",
            "Orientation": "vertical and horizontal",
            "Glazed (Enamelled)": "Yes",
            "Safety & Pressure": "Two valve 8.5 bar",
            "Electrical Components": "Italian made",
            "Standards": "SASO / FDS / IEC 60335-2-21:2020"
          },
          specificationImage: saudiCeramicsAquahotSpecImage
        },
        {
          name: "Oryx Sanitary Ware",
          specifications: {
            "Material": "Vitreous china, fully glazed surface",
            "Product Type": "Water Closet / Wash Basin / Urinal / Bidet / Accessories",
            "Flushing System": "Dual flush (3–6 L) / Rimless design",
            "Features": "Soft-close / Anti-bacterial / Water-saving",
            "Standards & Certifications": "SASO, ISO 9001, CE, WRAS"
          },
          specificationImage: saudiCeramicsOryxSpecImage
        },
        {
          name: "Porcelain Tiles",
          specifications: {
            "Dimensions": "30x30 cm, 60x60 cm, 30x60 cm, 120x60 cm",
            "Thickness": "e.g. 10mm",
            "Surface Finish": "Glossy, Matt, Polished, Semi-Polished",
            "Edge Type": "Rectified / Non-Rectified",
            "Water Absorption": "≤ 0.5%",
            "Slip Resistance (R Rating)": "R9, R10, R11 (for anti-slip models)"
          },
          specificationImage: saudiCeramicsPorcelainSpecImage
        },
        {
          name: "Ceramic Tiles",
          specifications: {
            "Dimensions": "30x30 cm, 60x60 cm, 30x60 cm",
            "Thickness": "e.g. 8 mm, 9 mm, 10 mm, 12 mm",
            "Surface Finish": "Glossy, Matt, Polished, Rustic, Anti-slip",
            "Water Absorption": "≤ 3%",
            "Applications": "Wall, floor, indoor, outdoor, wet areas, commercial spaces"
          },
          specificationImage: saudiCeramicsCeramicSpecImage
        }
      ],
      ar: [
        {
          name: "سخانات المياه Aquahot",
          specifications: {
            "السعات": "10 لتر، 15 لتر، 30 لتر، 50 لتر، 80 لتر، 100 لتر، 120 لتر، 150 لتر، 200 لتر، 300 لتر",
            "الاتجاه": "عمودي وأفقي",
            "مطلي (مزجج)": "نعم",
            "السلامة والضغط": "صمامان 8.5 بار",
            "المكونات الكهربائية": "صنع إيطالي",
            "المعايير": "SASO / FDS / IEC 60335-2-21:2020"
          },
          specificationImage: saudiCeramicsAquahotSpecImage
        },
        {
          name: "الأدوات الصحية Oryx",
          specifications: {
            "المادة": "خزف زجاجي، سطح ملمع بالكامل",
            "نوع المنتج": "مرحاض / حوض غسيل / كرسي زوار / بيديه / ملحقات",
            "نظام التدفق": "تدفق مزدوج (3–6 لتر) / تصميم بدون حافة",
            "المميزات": "إغلاق ناعم / مضاد للبكتيريا / توفير المياه",
            "المعايير والشهادات": "SASO، ISO 9001، CE، WRAS"
          },
          specificationImage: saudiCeramicsOryxSpecImage
        },
        {
          name: "بلاط البورسلين",
          specifications: {
            "الأبعاد": "30x30 سم، 60x60 سم، 30x60 سم، 120x60 سم",
            "السماكة": "مثل 10 مم",
            "اللمسة النهائية للسطح": "لامع، غير لامع، مصقول، شبه مصقول",
            "نوع الحافة": "مستقيم / غير مستقيم",
            "امتصاص الماء": "≤ 0.5%",
            "مقاومة الانزلاق (تصنيف R)": "R9، R10، R11 (للنماذج المضادة للانزلاق)"
          },
          specificationImage: saudiCeramicsPorcelainSpecImage
        },
        {
          name: "بلاط السيراميك",
          specifications: {
            "الأبعاد": "30x30 سم، 60x60 سم، 30x60 سم",
            "السماكة": "مثل 8 مم، 9 مم، 10 مم، 12 مم",
            "اللمسة النهائية للسطح": "لامع، غير لامع، مصقول، ريفي، مضاد للانزلاق",
            "امتصاص الماء": "≤ 3%",
            "التطبيقات": "الجدار، الأرضية، الداخل، الخارج، المناطق الرطبة، المساحات التجارية"
          },
          specificationImage: saudiCeramicsCeramicSpecImage
        }
      ]
    },
    description: {
      en: "Established in 1977 and headquartered in Riyadh, Saudi Ceramics is a leading Saudi joint-stock company specializing in ceramic and porcelain tiles, sanitary ware, electric water heaters, red bricks, and building & construction related products. The company operates 16 advanced manufacturing facilities across more than one million square meters, producing a wide range of products including ceramic and porcelain tiles, sanitary ware, electric water heaters, red bricks, and complementary products. Saudi Ceramics serves the local and international markets through over 60 retail showrooms, a robust e-commerce platform, strategic warehouse locations, and partnerships with key distributors across the Kingdom, ensuring full market coverage. The company also exports to more than 35 countries worldwide, adhering to global standards such as ISO 9001, SASO, and CE.",
      ar: "تأسست شركة الخزف السعودي عام 1977 ومقرها الرياض، وهي شركة مساهمة سعودية رائدة متخصصة في بلاط السيراميك والبورسلين، والأدوات الصحية، وسخانات المياه الكهربائية، والطوب الأحمر، ومنتجات البناء والتشييد ذات الصلة. تدير الشركة 16 منشأة تصنيع متقدمة عبر أكثر من مليون متر مربع، وتنتج مجموعة واسعة من المنتجات بما في ذلك بلاط السيراميك والبورسلين، والأدوات الصحية، وسخانات المياه الكهربائية، والطوب الأحمر، والمنتجات المكملة. تخدم شركة الخزف السعودي الأسواق المحلية والدولية من خلال أكثر من 60 معرضًا للبيع بالتجزئة، ومنصة تجارة إلكترونية قوية، ومواقع مستودعات استراتيجية، وشراكات مع الموزعين الرئيسيين عبر المملكة، مما يضمن تغطية كاملة للسوق. كما تصدر الشركة إلى أكثر من 35 دولة حول العالم، ملتزمة بالمعايير العالمية مثل ISO 9001 و SASO و CE."
    },
    brandAdvantages: {
      en: [
        "Comprehensive product range catering to various construction and home improvement needs.",
        "Established in 1977 with over 40 years of industry experience.",
        "Operates 16 advanced manufacturing facilities across more than one million square meters.",
        "Serves local and international markets through over 60 retail showrooms and a robust e-commerce platform.",
        "Exports to more than 35 countries worldwide.",
        "Adheres to global standards such as ISO 9001, SASO, and CE."
      ],
      ar: [
        "مجموعة منتجات شاملة تلبي احتياجات البناء وتحسين المنازل المختلفة.",
        "تأسست عام 1977 ولديها أكثر من 40 عامًا من الخبرة في الصناعة.",
        "تشغل 16 منشأة تصنيع متقدمة عبر أكثر من مليون متر مربع.",
        "تخدم الأسواق المحلية والدولية من خلال أكثر من 60 معرضًا للبيع بالتجزئة ومنصة تجارة إلكترونية قوية.",
        "تصدر إلى أكثر من 35 دولة حول العالم.",
        "تلتزم بالمعايير العالمية مثل ISO 9001 و SASO و CE."
      ]
    },
    established: "1977",
    website: "https://www.saudiceramics.com/",
    logo: saudiCeramicsLogo,
    mainImage: saudiCeramicsMain,
    galleryImages: [
      saudiCeramicsProduct, 
    ]
  },
  {
    id: "nassarplastic",
    slug: "nassar-plastic",
    name: "Nassar Plastic",
    origin: {
      en: "Egypt",
      ar: "مصر"
    },
    products: {
      en: [
        { name: "PVC Pipes & Fittings" },
        { name: "PPR Pipes & Fittings" }
      ],
      ar: [
        { name: "أنابيب ومُوصلات PVC" },
        { name: "أنابيب ومُوصلات PPR" }
      ]
    },
    description: {
      en: "Established in 1982 by Chemist El Sayed Ahmed Ismail Nassar, Nassar Plastic & Pipe Factories is a leading manufacturer of plastic piping systems in Egypt. The company specializes in producing high-quality PVC and PPR pipes and fittings for various applications, including water supply, drainage, and industrial systems. Nassar Plastic is committed to innovation, quality, and customer satisfaction.",
      ar: "تأسست شركة نصار للبلاستيك ومصانع الأنابيب عام 1982 على يد الكيميائي السيد أحمد إسماعيل نصار، وهي شركة رائدة في تصنيع أنظمة الأنابيب البلاستيكية في مصر. تتخصص الشركة في إنتاج أنابيب ومُوصلات PVC وPPR عالية الجودة لمختلف التطبيقات، بما في ذلك إمدادات المياه، الصرف، والأنظمة الصناعية. تلتزم شركة نصار للبلاستيك بالابتكار والجودة ورضا العملاء."
    },
    brandAdvantages: {
      en: [
        "Over 40 years of industry experience",
        "ISO-certified manufacturing processes",
        "Wide range of PVC and PPR products",
        "Commitment to quality and customer satisfaction",
        "Competitive pricing and reliable delivery"
      ],
      ar: [
        "أكثر من 40 عامًا من الخبرة في الصناعة",
        "عمليات تصنيع معتمدة من ISO",
        "مجموعة واسعة من منتجات PVC وPPR",
        "الالتزام بالجودة ورضا العملاء",
        "أسعار تنافسية وتسليم موثوق"
      ]
    },
    established: "1982",
    website: "https://plastic.nassarplastic.com/",
    logo: nassarPlasticLogo,
    mainImage: nassarPlasticMain,
    galleryImages: [
      nassarPlasticProduct,
    ]
  },
  {
    id: "wisa-sanitair",
    slug: "wisa-sanitair",
    name: "WISA Sanitair",
    origin: {
      en: "Netherlands",
      ar: "هولندا"
    },
    products: {
      en: [
        { name: "Concealed Systems" },
        { name: "Flushing Plates" }
      ],
      ar: [
        { name: "أنظمة مخفية" },
        { name: "ألواح تدفق المياه" }
      ]
    },
    description: {
      en: "WISA Sanitair, based in the Netherlands, specializes in innovative and high-quality bathroom solutions. Their product range includes concealed systems for toilets, washbasins, and urinals, as well as a variety of flushing plates made from materials like high-quality plastic, stainless steel, and tempered glass. These products are designed to offer durability, ease of installation, and aesthetic appeal.",
      ar: "تتخصص WISA Sanitair، ومقرها في هولندا، في حلول الحمام المبتكرة وعالية الجودة. تشمل مجموعة منتجاتهم أنظمة مخفية للمراحيض والأحواض والمراحيض، بالإضافة إلى مجموعة متنوعة من ألواح التدفق المصنوعة من مواد مثل البلاستيك عالي الجودة والفولاذ المقاوم للصدأ والزجاج المقسى. تم تصميم هذه المنتجات لتوفير المتانة وسهولة التركيب والجاذبية الجمالية."
    },
    brandAdvantages: {
      en: [
        "Innovative and high-quality bathroom solutions",
        "Wide range of concealed systems and flushing plates",
        "Products made from durable materials",
        "Ease of installation",
        "Aesthetic and modern designs"
      ],
      ar: [
        "حلول حمام مبتكرة وعالية الجودة",
        "مجموعة واسعة من الأنظمة المخفية وألواح التدفق",
        "منتجات مصنوعة من مواد متينة",
        "سهولة التركيب",
        "تصاميم جمالية وعصرية"
      ]
    },
    established: "1957",
    website: "https://www.wisa-sanitair.com/",
    logo: wisaLogo,
    mainImage: wisaMain,
    galleryImages: [
      wisaProduct,
    ]
  },

  // 16 out of 23, Remaining:
  // Guarri
  // Pestan - check with MB
  // FV - check with MB
];



// Helper function to get brand by slug
export const getBrandBySlug = (slug: string): BrandData | undefined => {
  return brandsData.find(brand => brand.slug === slug);
};