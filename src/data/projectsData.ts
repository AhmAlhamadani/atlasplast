// Project 1: Grand Millennium Hotel Sulaimani
import grandMillenniumHotelSulaimaniMain from "../assets/projects/project-1.png";
import SulemaniaProject1 from "../assets/projects/SulemaniaProject1.png"
import SulemaniaProject2 from "../assets/projects/SulemaniaProject2.png"

// Project 2: Babylon Rotana Hotel
import babylonRotanaHotelMain from "../assets/projects/project-2.png";
import babylonRotanaHotelProject1 from "../assets/projects/BabylonProject1.png";
import babylonRotanaHotelProject2 from "../assets/projects/BabylonProject2.png";

// Project 3: MRF Four Towers
import mrfFourTowersMain from "../assets/projects/FourTowers.png";

// Project 4: Mövenpick Hotel & Resort
import movenpickHotelResortMain from "../assets/projects/project-3.png";
import movenpickHotelResortProject1 from "../assets/projects/MovenpickProject1.png";
import movenpickHotelResortProject2 from "../assets/projects/MovenpickProject2.png";

// Project 5: Baghdad International Airport
import baghdadInternationalAirportMain from "../assets/projects/project-4.png";
import baghdadInternationalAirportProject1 from "../assets/projects/BaghdadAirport1.png";
import baghdadInternationalAirportProject2 from "../assets/projects/BaghdadAirport2.png";




export interface Project {
  id: number;
  slug: string;
  title: {
    en: string;
    ar: string;
  };
  image: string;
  description: {
    en: string;
    ar: string;
  };
  category: {
    en: string;
    ar: string;
  };
  startDate: string;
  location: {
    en: string;
    ar: string;
  };
  content: {
    heading: {
      en: string;
      ar: string;
    };
    paragraphs: {
      en: string[];
      ar: string[];
    };
    subSections: {
      title: {
        en: string;
        ar: string;
      };
      points?: {
        en: string[];
        ar: string[];
      };
      paragraphs?: {
        en: string[];
        ar: string[];
      };
    }[];
    gallery: string[];
  };
}

export const projects: Project[] = [
  {
    id: 1,
    slug: "grand-millennium-hotel-sulaimani",
    title: {
      en: "Grand Millennium Hotel Sulaimani",
      ar: "فندق جراند ميلينيوم السليمانية"
    },
    image: grandMillenniumHotelSulaimaniMain,
    description: {
      en: "Atlas Plast proudly supplied the complete piping infrastructure for the Grand Millennium Hotel Sulaimani — providing both clean water and sewage systems with reliable, high-quality solutions that ensure efficiency, durability, and long-term performance.",
      ar: "أتلس بلاست تفتخر بتوريد البنية التحتية الكاملة للأنابيب لفندق جراند ميلينيوم السليمانية — حيث قدمت أنظمة المياه النظيفة والصرف الصحي مع حلول موثوقة وعالية الجودة تضمن الكفاءة والمتانة والأداء طويل المدى."
    },
    category: {
      en: "New Build, Hotel ",
      ar: "بناء جديد"
    },
    startDate: "20 October 2020",
    location: {
      en: "Grand Millennium Hotel Sulaimani, Sulaymaniyah, Sulaymaniyah Governorate, 46001",
      ar: "فندق جراند ميلينيوم السليمانية، السليمانية، محافظة السليمانية، 46001"
    },
    content: {
      heading: {
        en: "Building with Reliability and Innovation",
        ar: "البناء بالموثوقية والابتكار"
      },
      paragraphs: {
        en: [
        "As one of the most prestigious landmarks in Sulaymaniyah, the Grand Millennium Hotel required piping systems that could match its scale, luxury, and long-term demands. Atlas Plast supplied a full range of solutions — including PPR pipes for clean water distribution and PVC pipes for sewage and drainage systems — ensuring world-class quality from the ground up.",
        "Our products are designed to deliver efficiency, durability, and safety, making them the ideal choice for large-scale projects like this five-star hotel. By providing complete piping infrastructure, we contributed to the comfort and reliability that guests experience every day."
      ],
        ar: [
          "كأحد أبرز المعالم في السليمانية، تطلب فندق جراند ميلينيوم أنظمة أنابيب تتماشى مع حجمه وفخامته ومتطلباته طويلة المدى. قدمت أتلس بلاست مجموعة كاملة من الحلول — بما في ذلك أنابيب PPR لتوزيع المياه النظيفة وأنابيب PVC لأنظمة الصرف الصحي والصرف — مما يضمن جودة عالمية المستوى من الأساس.",
          "منتجاتنا مصممة لتقديم الكفاءة والمتانة والسلامة، مما يجعلها الخيار المثالي للمشاريع واسعة النطاق مثل هذا الفندق الخمس نجوم. من خلال توفير البنية التحتية الكاملة للأنابيب، ساهمنا في الراحة والموثوقية التي يختبرها الضيوف كل يوم."
        ]
      },
      subSections: [
        {
          title: {
            en: "Supplying Clean Water Systems",
            ar: "توريد أنظمة المياه النظيفة"
          },
          paragraphs: {
            en: [
            "Atlas Plast provided high-performance PPR pipes and fittings to ensure safe and reliable clean water distribution throughout the hotel. These systems guarantee consistent water quality and long-term durability, perfectly suited for a hospitality project of this scale."
            ],
            ar: [
              "قدمت أتلس بلاست أنابيب وملحقات PPR عالية الأداء لضمان توزيع المياه النظيفة الآمن والموثوق في جميع أنحاء الفندق. هذه الأنظمة تضمن جودة المياه المتسقة والمتانة طويلة المدى، مناسبة تمامًا لمشروع ضيافة بهذا الحجم."
            ]
          }
        },
        {
          title: {
            en: "Ensuring Reliable Sewage Solutions",
            ar: "ضمان حلول الصرف الصحي الموثوقة"
          },
          paragraphs: {
            en: [
              "For the sewage and drainage network, Atlas Plast supplied PVC pipes engineered to handle heavy demand while preventing leaks and maintaining hygienic standards. This robust system supports the hotel's infrastructure and ensures seamless operation behind the scenes."
            ],
            ar: [
              "لشبكة الصرف الصحي والصرف، قدمت أتلس بلاست أنابيب PVC مصممة للتعامل مع الطلب الكبير مع منع التسريبات والحفاظ على المعايير الصحية. هذا النظام القوي يدعم البنية التحتية للفندق ويضمن التشغيل السلس خلف الكواليس."
            ]
          }
        },
        {
          title: {
            en: "Trusted for Landmark Projects",
            ar: "موثوق للمشاريع الرائدة"
          },
          points: {
            en: [
            "Complete piping solutions for both clean water and sewage systems",
            "High-quality PPR pipes for durability and safe water delivery",
            "PVC piping systems for efficient and reliable drainage",
            "A trusted partner for iconic hospitality and construction projects"
            ],
            ar: [
              "حلول أنابيب كاملة لكل من أنظمة المياه النظيفة والصرف الصحي",
              "أنابيب PPR عالية الجودة للمتانة وتوصيل المياه الآمن",
              "أنظمة أنابيب PVC للصرف الفعال والموثوق",
              "شريك موثوق للمشاريع الرائدة في الضيافة والبناء"
            ]
          }
        }
      ],
      gallery: [SulemaniaProject1, SulemaniaProject2]
    }
  },


  {
    id: 2,
    slug: "babylon-rotana-hotel",
    title: {
      en: "Babylon Rotana Hotel",
      ar: "فندق بابل روتانا"
    },
    image: babylonRotanaHotelMain,
    description: {
      en: "Atlas plast provided complete piping solutions for a remodelling project of Babylon Rotana Hotel",
        ar: "قدمت أطلس بلاست حلول أنابيب شاملة لمجمع سكني واسع النطاق في بغداد، مما يضمن توزيع المياه الموثوق وأنظمة الصرف الفعالة لمئات الوحدات السكنية."
      },
    category: {
      en: "Remodelling, Hotel",
      ar: "تجديد, فندق"
    },
    startDate: "15 March 2021",
    location: {
      en: "Karada Street, Baghdad, Baghdad Governorate, Iraq",
      ar: "شارع الكردا، بغداد، العراق"
    },
    content: {
      heading: {
        en: "Pipes to Remodel Babylon Rotana Hotel",
        ar: "أنابيب لتجديد فندق بابل روتانا"
      },
      paragraphs: {
        en: [
          "This large-scale residential project required reliable piping infrastructure to serve hundreds of families. Atlas Plast provided complete solutions including PPR pipes for clean water systems and PVC pipes for drainage, ensuring long-term performance and resident satisfaction.",
          "Our expertise in residential projects ensures that every family enjoys consistent water quality and efficient drainage systems, contributing to comfortable and sustainable living environments."
        ],
        ar: [
          "تطلب هذا المشروع السكني واسع النطاق بنية تحتية موثوقة للأنابيب لخدمة مئات العائلات. قدمت أتلس بلاست حلول كاملة تشمل أنابيب PPR لأنظمة المياه النظيفة وأنابيب PVC للصرف، مما يضمن الأداء طويل المدى ورضا السكان.",
          "خبرتنا في المشاريع السكنية تضمن أن كل عائلة تتمتع بجودة مياه متسقة وأنظمة صرف فعالة، مما يساهم في بيئات معيشية مريحة ومستدامة."
        ]
      },
      subSections: [
        {
          title: {
            en: "Residential Water Systems",
            ar: "أنظمة المياه السكنية"
          },
          paragraphs: {
            en: [
              "The Babylon Rotana Hotel renovation required a modern and reliable piping infrastructure to upgrade existing systems without disrupting hotel operations. Atlas Plast provided complete solutions including PPR pipes for clean water systems and PVC pipes for drainage, ensuring durability, efficiency, and long-term performance.",
              "With our expertise in remodelling projects, we ensured that the upgraded piping systems deliver consistent water quality and efficient drainage, contributing to the comfort and satisfaction of hotel guests."
            ],
            ar: [
              "تجديد فندق بابل روتانا تطلب بنية تحتية حديثة وموثوقة للأنابيب لتطوير الأنظمة القائمة دون التأثير على سير عمل الفندق. قدمت أطلس بلاست حلول كاملة تشمل أنابيب PPR لأنظمة المياه النظيفة وأنابيب PVC للصرف، مما يضمن الكفاءة والمتانة والأداء طويل الأمد.",
              "بخبرتنا في مشاريع التجديد، ضمنا أن توفر أنظمة الأنابيب المطورة جودة مياه متسقة وصرف فعال، مما يساهم في راحة ورضا نزلاء الفندق."
            ]
          }
        },
        {
          title: {
            en: "Efficient Drainage Solutions",
            ar: "حلول الصرف الفعالة"
          },
          paragraphs: {
            en: [
              "Our PVC drainage systems were integrated to efficiently handle wastewater across the hotel’s guest rooms, restaurants, and service areas. These systems prevent blockages, maintain hygienic standards, and ensure smooth operations for both staff and guests."
            ],
            ar: [
              "تم دمج أنظمة الصرف PVC الخاصة بنا للتعامل بكفاءة مع مياه الصرف في غرف الضيوف والمطاعم والمناطق الخدمية داخل الفندق. هذه الأنظمة تمنع الانسدادات، وتحافظ على المعايير الصحية، وتضمن سير العمل بسلاسة للموظفين والنزلاء."
            ]
          }
        },
        {
          title: {
            en: "Hotel Remodelling Excellence",
            ar: "التميز في تجديد الفنادق"
          },
          points: {
            en: [
              "Comprehensive piping solutions tailored for hotel renovations",
              "PPR pipes ensuring safe and reliable water distribution for guests and facilities",
              "PVC drainage systems designed for high-usage hospitality environments",
              "Trusted partner for hotel and commercial renovation projects across Iraq"
            ],
            ar: [
              "حلول أنابيب شاملة مخصصة لتجديد الفنادق",
              "أنابيب PPR تضمن توزيع المياه الآمن والموثوق للضيوف والمرافق",
              "أنظمة صرف PVC مصممة لبيئات الضيافة ذات الاستخدام العالي",
              "شريك موثوق لمشاريع تجديد الفنادق والمشاريع التجارية في جميع أنحاء العراق"
            ]
          }
        }
      ],
      gallery: [babylonRotanaHotelProject1, babylonRotanaHotelProject2],
    },
  },

  {
    id: 3,
    slug: "mrf-four-towers",
    title: {
      en: "MRF Four Towers",
      ar: "أبراج أم أر أف الرباعية"
    },
    image: mrfFourTowersMain,
    description: {
      en: "Atlas Plast supplied complete piping solutions for the large-scale MRF Four Towers residential and commercial development in Erbil.",
      ar: "قدمت أطلس بلاست حلول أنابيب شاملة لمشروع أبراج أم أر أف الرباعية السكني والتجاري واسع النطاق في أربيل."
    },
    category: {
      en: "Residential, Commercial",
      ar: "سكني, تجاري"
    },
    startDate: "2020",
    location: {
      en: "Gulan Street (40m Road), near Erbil International Airport, Erbil, Iraq",
      ar: "شارع جولان (طريق 40م)، قرب مطار أربيل الدولي، أربيل، العراق"
    },
    content: {
      heading: {
        en: "Piping Infrastructure for MRF Four Towers",
        ar: "البنية التحتية للأنابيب في أبراج أم أر أف الرباعية"
      },
      paragraphs: {
        en: [
          "Construction of the MRF Four Towers required a reliable and modern piping network to support four high-rise towers, each with 29 floors. Located only 2 km from the city center and minutes away from Erbil International Airport, the project demanded efficient solutions that could serve both residential and commercial spaces.",
          "Atlas Plast provided complete piping systems including PPR pipes for clean water distribution and PVC pipes for drainage, ensuring durability, efficiency, and high performance throughout the development."
        ],
        ar: [
          "تطلب إنشاء أبراج أم أر أف الرباعية شبكة أنابيب حديثة وموثوقة لدعم أربعة أبراج شاهقة، يتكون كل برج منها من 29 طابقًا. وبفضل موقعها الذي يبعد 2 كم فقط عن مركز المدينة وبضع دقائق عن مطار أربيل الدولي، احتاج المشروع إلى حلول فعالة تخدم المساحات السكنية والتجارية معًا.",
          "قدمت أطلس بلاست أنظمة أنابيب متكاملة تشمل أنابيب PPR لتوزيع المياه النظيفة وأنابيب PVC للصرف، مما يضمن المتانة والكفاءة والأداء العالي في جميع أنحاء المشروع."
        ]
      },
      subSections: [
        {
          title: {
            en: "Reliable Water Distribution",
            ar: "توزيع مياه موثوق"
          },
          paragraphs: {
            en: [
              "Atlas Plast supplied high-quality PPR pipes to deliver safe and consistent water pressure across all residential units, commercial areas, and shared facilities within the towers."
            ],
            ar: [
              "زودت أطلس بلاست المشروع بأنابيب PPR عالية الجودة لتوفير ضغط مياه آمن ومتسق في جميع الوحدات السكنية والمناطق التجارية والمرافق المشتركة داخل الأبراج."
            ]
          }
        },
        {
          title: {
            en: "Efficient Drainage Systems",
            ar: "أنظمة صرف فعالة"
          },
          paragraphs: {
            en: [
              "Our PVC drainage systems efficiently handle wastewater across the four towers, preventing blockages and maintaining hygienic standards for residents, visitors, and businesses."
            ],
            ar: [
              "تتعامل أنظمة الصرف PVC الخاصة بنا بكفاءة مع مياه الصرف في جميع الأبراج الأربعة، مما يمنع الانسدادات ويحافظ على المعايير الصحية للسكان والزوار والأعمال التجارية."
            ]
          }
        },
        {
          title: {
            en: "High-Rise Project Excellence",
            ar: "التميز في مشاريع الأبراج"
          },
          points: {
            en: [
              "Complete piping infrastructure for four 29-story towers",
              "PPR pipes for reliable clean water systems",
              "PVC drainage solutions supporting high-capacity use",
              "Trusted partner for large-scale developments in Erbil and across Iraq"
            ],
            ar: [
              "بنية تحتية كاملة للأنابيب لأربعة أبراج مكونة من 29 طابقًا",
              "أنابيب PPR لأنظمة المياه النظيفة الموثوقة",
              "حلول صرف PVC تدعم الاستخدام عالي الكثافة",
              "شريك موثوق للتطويرات واسعة النطاق في أربيل وفي جميع أنحاء العراق"
            ]
          }
        }
      ],
      gallery: [],
    },
  },

  {
    id: 4,
    slug: "movenpick-hotel-resort",
    title: {
      en: "Mövenpick Hotel & Resort",
      ar: "فندق ومنتجع موفنبيك"
    },
    image: movenpickHotelResortMain,
    description: {
      en: "Atlas Plast provided complete piping solutions for the new build Mövenpick Hotel & Resort project in Baghdad.",
      ar: "قدمت أطلس بلاست حلول أنابيب شاملة لمشروع فندق ومنتجع موفنبيك الجديد في بغداد."
    },
    category: {
      en: "New Build, Resort",
      ar: "بناء جديد, منتجع"
    },
    startDate: "2021",
    location: {
      en: "Qadisaya Expy, Baghdad, Baghdad Governorate, Iraq",
      ar: "طريق القادسية السريع، بغداد، العراق"
    },
    content: {
      heading: {
        en: "Piping Infrastructure for Mövenpick Hotel & Resort",
        ar: "البنية التحتية للأنابيب في فندق ومنتجع موفنبيك"
      },
      paragraphs: {
        en: [
          "The construction of the Mövenpick Hotel & Resort in Baghdad required a modern and durable piping system to support its luxury guest facilities, restaurants, and recreational areas. As a new build project, it demanded top-quality infrastructure to meet international hospitality standards.",
          "Atlas Plast supplied complete piping solutions including PPR pipes for clean and safe water distribution and PVC systems for drainage, ensuring long-term reliability, efficiency, and guest comfort."
        ],
        ar: [
          "تطلب إنشاء فندق ومنتجع موفنبيك في بغداد نظام أنابيب حديثًا ومتينا لدعم مرافق الضيافة الفاخرة والمطاعم والمناطق الترفيهية. وباعتباره مشروع بناء جديد، كان من الضروري توفير بنية تحتية عالية الجودة تلبي المعايير العالمية للضيافة.",
          "قدمت أطلس بلاست حلول أنابيب متكاملة تشمل أنابيب PPR لتوزيع المياه النظيفة والآمنة وأنظمة PVC للصرف، مما يضمن الموثوقية والكفاءة وراحة النزلاء على المدى الطويل."
        ]
      },
      subSections: [
        {
          title: {
            en: "Safe Water Supply Systems",
            ar: "أنظمة إمداد مياه آمنة"
          },
          paragraphs: {
            en: [
              "Atlas Plast provided high-quality PPR piping solutions to ensure reliable water distribution for guest rooms, spa facilities, swimming pools, and restaurants within the resort."
            ],
            ar: [
              "زودت أطلس بلاست المشروع بأنظمة أنابيب PPR عالية الجودة لضمان توزيع المياه الموثوق لغرف الضيوف ومرافق السبا وحمامات السباحة والمطاعم داخل المنتجع."
            ]
          }
        },
        {
          title: {
            en: "Advanced Drainage Infrastructure",
            ar: "بنية تحتية متقدمة للصرف"
          },
          paragraphs: {
            en: [
              "Our PVC drainage systems were designed to efficiently manage wastewater across the resort, maintaining hygienic standards and supporting uninterrupted operations for hospitality services."
            ],
            ar: [
              "تم تصميم أنظمة الصرف PVC الخاصة بنا لإدارة مياه الصرف بكفاءة في جميع أنحاء المنتجع، مع الحفاظ على المعايير الصحية ودعم استمرارية الخدمات الفندقية دون انقطاع."
            ]
          }
        },
        {
          title: {
            en: "Resort Project Excellence",
            ar: "التميز في مشاريع المنتجعات"
          },
          points: {
            en: [
              "Complete piping infrastructure for luxury resort facilities",
              "PPR systems ensuring safe and clean water supply",
              "PVC drainage systems supporting large-scale hospitality operations",
              "Trusted partner for international-standard projects in Iraq"
            ],
            ar: [
              "بنية تحتية متكاملة للأنابيب لمرافق المنتجعات الفاخرة",
              "أنظمة PPR تضمن إمداد المياه النظيفة والآمنة",
              "أنظمة صرف PVC تدعم عمليات الضيافة واسعة النطاق",
              "شريك موثوق للمشاريع ذات المعايير العالمية في العراق"
            ]
          }
        }
      ],
      gallery: [movenpickHotelResortProject1, movenpickHotelResortProject2],
    },
  },

  {
    id: 5,
    slug: "baghdad-international-airport",
    title: {
      en: "Baghdad International Airport",
      ar: "مطار بغداد الدولي"
    },
    image: baghdadInternationalAirportMain,
    description: {
      en: "Atlas Plast supplied advanced piping solutions for the remodelling of Baghdad International Airport, ensuring modern water and drainage systems that meet international aviation standards.",
      ar: "قدمت أطلس بلاست حلول أنابيب متطورة لأعمال إعادة تأهيل مطار بغداد الدولي، مما يضمن أنظمة مياه وصرف حديثة تلبي المعايير الدولية للطيران."
    },
    category: {
      en: "Remodelling, Airport",
      ar: "إعادة تأهيل, مطار"
    },
    startDate: "2022",
    location: {
      en: "Baghdad International Airport, Baghdad Governorate, Iraq",
      ar: "مطار بغداد الدولي، محافظة بغداد، العراق"
    },
    content: {
      heading: {
        en: "Piping Solutions for Baghdad International Airport Remodelling",
        ar: "حلول الأنابيب لمشروع إعادة تأهيل مطار بغداد الدولي"
      },
      paragraphs: {
        en: [
          "The remodelling project of Baghdad International Airport required a robust upgrade to its water supply and drainage infrastructure to support growing passenger demand and modernize existing facilities.",
          "Atlas Plast delivered high-quality PPR piping systems for safe water distribution and PVC drainage networks, ensuring efficiency, durability, and compliance with international standards."
        ],
        ar: [
          "تطلب مشروع إعادة تأهيل مطار بغداد الدولي ترقية قوية للبنية التحتية الخاصة بإمدادات المياه والصرف لدعم تزايد أعداد المسافرين وتحديث المرافق الحالية.",
          "قامت أطلس بلاست بتزويد المشروع بأنظمة أنابيب PPR عالية الجودة لتوزيع المياه الآمن وشبكات صرف PVC، مما يضمن الكفاءة والمتانة والالتزام بالمعايير الدولية."
        ]
      },
      subSections: [
        {
          title: {
            en: "Upgraded Water Distribution",
            ar: "ترقية توزيع المياه"
          },
          paragraphs: {
            en: [
              "PPR piping systems were installed across terminal facilities, ensuring reliable and hygienic water supply for passengers, staff, and airport services."
            ],
            ar: [
              "تم تركيب أنظمة أنابيب PPR في جميع مرافق المطار لضمان إمداد موثوق وصحي بالمياه للمسافرين والعاملين وخدمات المطار."
            ]
          }
        },
        {
          title: {
            en: "Modern Drainage Systems",
            ar: "أنظمة صرف حديثة"
          },
          paragraphs: {
            en: [
              "Atlas Plast provided PVC drainage infrastructure capable of handling high passenger flow and operational demands, maintaining hygienic conditions throughout the airport."
            ],
            ar: [
              "قدمت أطلس بلاست بنية تحتية حديثة للصرف من PVC قادرة على التعامل مع التدفق الكبير للمسافرين والاحتياجات التشغيلية، مع الحفاظ على الظروف الصحية في جميع أنحاء المطار."
            ]
          }
        },
        {
          title: {
            en: "Airport Project Excellence",
            ar: "التميز في مشاريع المطارات"
          },
          points: {
            en: [
              "Remodelling project with upgraded piping infrastructure",
              "PPR systems for safe and efficient water supply",
              "PVC drainage systems designed for large-scale facilities",
              "Reliable partner for aviation infrastructure projects in Iraq"
            ],
            ar: [
              "مشروع إعادة تأهيل مع بنية تحتية محدثة للأنابيب",
              "أنظمة PPR لإمدادات المياه الآمنة والفعالة",
              "أنظمة صرف PVC مصممة للمرافق واسعة النطاق",
              "شريك موثوق لمشاريع البنية التحتية للمطارات في العراق"
            ]
          }
        }
      ],
      gallery: [baghdadInternationalAirportProject1, baghdadInternationalAirportProject2],
    },
  },
  
  

];
