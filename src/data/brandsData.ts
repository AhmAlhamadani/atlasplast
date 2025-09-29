// Import brand images
import banningerLogo from '../assets/brands/banninger-logo.png';
import banningerMain from '../assets/brands/banninger/product1.png';
import banningerProduct from '../assets/brands/banninger/product2.png';

import georgFischerLogo from '../assets/brands/brand-5.png';
import georgFischerMain from '../assets/brands/georg-fischer/main.png';
import georgFischerProduct from '../assets/brands/georg-fischer/product.png';

import turanBorfitLogo from '../assets/brands/brand-7.png';
import turanBorfitMain from '../assets/brands/turan-borfit/main.png';
import turanBorfitProduct from '../assets/brands/turan-borfit/product.png';

import aquapaLogo from '../assets/brands/brand-2.png';
import aquapaMain from '../assets/brands/aquapa/main.png';
import aquapaProduct from '../assets/brands/aquapa/product.png';

import pimtasLogo from '../assets/brands/brand-6.png';
import pimtasMain from '../assets/brands/pimtas/main.png';
import pimtasProduct from '../assets/brands/pimtas/product.png';

import candanMakinaLogo from '../assets/brands/brand-16.png';
import candanMakinaMain from '../assets/brands/candan-makina/main.png';
import candanMakinaProduct from '../assets/brands/candan-makina/product.png';

import ascelikClampLogo from '../assets/brands/brand-18.png';
import ascelikClampMain from '../assets/brands/ascelik-clamp/main.png';
import ascelikClampProduct from '../assets/brands/ascelik-clamp/product.png';

import kasLogo from '../assets/brands/brand-3.png';
import kasMain from '../assets/brands/kas/main.png';
import kasProduct from '../assets/brands/kas/product.png';


import quarterBathLogo from '../assets/brands/brand-14.png';
import quarterBathMain from '../assets/brands/quarter-bath/main.png';
import quarterBathProduct from '../assets/brands/quarter-bath/product.png';

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
    id: "georgfischer",
    slug: "georg-fischer",
    name: "Georg Fischer",
    origin: {
      en: "Switzerland",
      ar: "سويسرا"
    },
    products: {
      en: ["PVC Pipes & Fittings", "PPR Pipes & Fittings", "PPB Silent Premium & 3A Systems", "PE Pipes"],
      ar: ["أنابيب وملحقات PVC", "أنابيب وملحقات PPR", "أنظمة PPB Silent Premium و 3A", "أنابيب PE"]
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
    id: "turanborfit",
    slug: "turan-borfit",
    name: "Turan Borfit",
    origin: {
      en: "Turkey",
      ar: "تركيا"
    },
    products: {
      en: ["HDPE Pipes", "PE Pipes", "Butt welding machine", "PP fittings"],
      ar: ["أنابيب HDPE", "أنابيب PE", "آلة اللحام بالقطعة", "ملحقات PP"]
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
    id: "aquapa",
    slug: "aquapa",
    name: "Aquapa",
    origin: {
      en: "Turkey",
      ar: "تركيا"
    },
    products: {
      en: ["PPR Pipes & Fittings", "Silent PP Pipes & Fittings", "PVC Pipes & Fittings"],
      ar: ["أنابيب وملحقات PPR", "أنابيب وملحقات PP الصامت", "أنابيب وملحقات PVC"]
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
    id: "pimtas",
    slug: "pimtas",
    name: "Pimtaş",
    origin: {
      en: "Turkey",
      ar: "تركيا"
    },
    products: {
      en: [
        "PPR Pipes & Fittings",
        "PP Compression Fittings",
        "PVC & UPVC Pipes & Fittings",
        "HDPE Pipes",
        "Pool Equipment"
      ],
      ar: [
        "أنابيب وملحقات PPR",
        "ملحقات ضغط PP",
        "أنابيب وملحقات PVC وUPVC",
        "أنابيب HDPE",
        "معدات المسابح"
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
    id: "candanmakina",
    slug: "candan-makina",
    name: "Candan Makina",
    origin: {
      en: "Turkey",
      ar: "تركيا"
    },
    products: {
      en: [
        "Welding Machines & Accessories",
        "Pipe Cutters & Sharpeners",
        "Test Pressure Pumps",
        "Brass Valves & Unions",
      ],
      ar: [
        "آلات وأكسسوارات لحام الأنابيب البلاستيكية",
        "مقصات وأنصال تنعيم الأنابيب البلاستيكية",
        "مضخات اختبار الضغط",
        "صمامات نحاسية ووصلات",
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
      en: ["Pipe Clamps", "Pipe Fixings"],
      ar: ["قلابات تثبيت الأنابيب", "تثبيتات الأنابيب"]
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
      en: ["PPR Pipes & Fittings", "Faucets / Sanitary Ware"],
      ar: ["أنابيب وملحقات PPR", "حنفيات / أدوات صحية"]
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
      en: ["Sanitary Ware / Ceramics (Washbasins, WCs, Bidets, Urinals)", "Bathroom Furniture & Cabinets"],
      ar: ["أدوات صحية / سيراميك (أحواض غسيل، مراحيض، بيديه، كراسي الزوار)", "أثاث الحمام والخزائن"]
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
  }
];



// Helper function to get brand by slug
export const getBrandBySlug = (slug: string): BrandData | undefined => {
  return brandsData.find(brand => brand.slug === slug);
};