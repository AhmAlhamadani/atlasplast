import service1 from "../assets/service/service-details-1.png"
import service2 from "../assets/service/service-details-2.jpg"
import service3 from "../assets/service/service-details-3.jpg"
import service4 from "../assets/service/service-details-4.jpg"
import service5 from "../assets/service/service-details-5.jpg"
import service6 from "../assets/service/service-details-6.jpg"

export interface Service {
    id: number;
    slug:string;
    icon: string; 
    image:string;
    title: string;
    description: string;
    paragraphs: string[];
    points: string[];
  }

export interface ServiceItem {
  id: number;
  slug:string;
  title: string;
  icon: string;
  number: string;
}

  
export const services: Service[] = [
  {
    id: 1,
    slug: 'drainage-systems',
    image:service1,
    icon: '/icons/services/icon-4.svg',
    title: 'Drainage Systems',
    description: 'Atlas provides comprehensive drainage solutions including sewer pipes, fittings, and accessories designed for efficient wastewater management. Our systems ensure proper water flow and prevent blockages in residential, commercial, and industrial applications.',
    paragraphs: [
      "Atlas Plast delivers complete drainage infrastructure solutions, including sewer pipes, manholes, and drainage fittings designed for efficient wastewater management. We distribute high-quality PVC drainage systems that meet the diverse needs of urban development and infrastructure projects.",
      "Our comprehensive drainage systems cover everything from residential sewage to large-scale municipal drainage networks. With over 50 years of experience, we provide reliable solutions that ensure proper water flow, prevent blockages, and maintain long-lasting performance in Iraq's challenging environmental conditions."
    ],
    points: [
      "Complete range of PVC drainage pipes",
      "High-quality fittings, manholes, and accessories for seamless installation",
      "Suitable for residential, commercial, and municipal applications",
      "Expert technical support and project consultation services"
    ]
  },
  {
    id: 2,
    slug: 'water-pipe-systems',
    image:service2,
    icon: '/icons/services/icon-3.svg',
    title: 'Water Pipe Systems',
    description: 'Atlas offers complete clean drinking water distribution solutions with PPR pipes designed for safe water supply to taps, showers, and household fixtures. Our systems ensure safe, reliable water delivery for residential and commercial applications.',
    paragraphs: [
      "Atlas Plast delivers complete clean drinking water distribution solutions, including PPR pipes, fittings, and accessories designed for safe water supply to taps, showers, and household fixtures. We distribute high-quality PPR pipes that meet international standards for drinking water systems.",
      "Our comprehensive water pipe systems focus on residential and commercial clean water distribution, ensuring safe water delivery to all household fixtures. With over 50 years of experience, we provide reliable PPR solutions that ensure clean water delivery, proper pressure management, and long-lasting performance in Iraq's diverse climate conditions."
    ],
    points: [
      "Complete range of PPR pipes for clean drinking water",
      "High-quality fittings, valves, and accessories for household water distribution",
      "Suitable for taps, showers, and all household fixtures",
      "Expert technical support and clean water system design services"
    ]
  },
  {
    id: 3,
    slug: 'sanitary-ware',
    image:service3,
    icon: '/icons/services/icon-1.svg',
    title: 'Sanitary Ware',
    description: 'Atlas supplies reliable sanitary ware built for durability, functionality, and modern appeal. Our range includes toilets, basins, and bathroom accessories providing practical solutions that meet residential and commercial requirements.',
    paragraphs: [
      "Atlas Plast delivers comprehensive sanitary ware solutions, including toilets, basins, bathroom accessories, and bathroom furniture designed for modern living. We distribute high-quality sanitary products from trusted international brands that combine durability, functionality, and contemporary design.",
      "Our comprehensive sanitary ware range covers everything from residential bathrooms to commercial facilities. With over 50 years of experience, we provide reliable solutions that ensure comfort, hygiene, and long-lasting performance in Iraq's diverse residential and commercial environments."
    ],
    points: [
      "Complete range of toilets, basins, and bathroom accessories",
      "High-quality bathroom furniture and sanitary fittings",
      "Suitable for residential and commercial applications",
      "Expert technical support and bathroom design consultation"
    ]
  },
  {
    id: 4,
    slug: 'water-heaters',
    image:service4,
    icon: '/icons/services/icon-5.svg',
    title: 'Water Heaters',
    description: 'Atlas provides efficient water heating solutions including electric and gas water heaters designed for reliable hot water supply. Our systems ensure energy efficiency and consistent performance for residential and commercial applications.',
    paragraphs: [
      "Atlas Plast delivers comprehensive water heating solutions, including electric and gas water heaters designed for reliable hot water supply. We distribute high-quality heating systems from trusted international brands that ensure energy efficiency and consistent performance.",
      "Our comprehensive water heater range covers everything from residential tank heaters to commercial instant water heaters. With over 50 years of experience, we provide reliable solutions that ensure efficient hot water delivery and long-lasting performance in Iraq's diverse climate conditions."
    ],
    points: [
      "Complete range of electric and gas water heaters",
      "High-quality tank and instant water heating systems",
      "Suitable for residential and commercial applications",
      "Expert technical support and heating system installation"
    ]
  },
  {
    id: 5,
    slug: 'water-pumps',
    image:service5,
    icon: '/icons/services/icon-6.svg',
    title: 'Water Pumps',
    description: 'Atlas offers reliable water pumping solutions including submersible pumps, centrifugal pumps, and booster pumps designed for efficient water movement. Our systems ensure reliable water supply and pressure management.',
    paragraphs: [
      "Atlas Plast delivers comprehensive water pumping solutions, including submersible pumps, centrifugal pumps, and booster pumps designed for efficient water movement and pressure management. We distribute high-quality pumping systems from trusted international manufacturers.",
      "Our comprehensive water pump range covers everything from residential water supply to large-scale irrigation and industrial applications. With over 50 years of experience, we provide reliable solutions that ensure efficient water movement and long-lasting performance in Iraq's diverse applications."
    ],
    points: [
      "Complete range of submersible, centrifugal, and booster pumps",
      "High-quality pumping systems for various applications",
      "Suitable for residential, agricultural, and industrial use",
      "Expert technical support and pump system installation"
    ]
  },
  {
    id: 6,
    slug: 'infrastructure-pipe',
    image:service6,
    icon: '/icons/services/icon-3.svg',
    title: 'Infrastructure Pipe',
    description: 'Atlas provides large-diameter infrastructure pipes including HDPE pipes designed for municipal and industrial applications. Our systems ensure reliable infrastructure development and long-term performance.',
    paragraphs: [
      "Atlas Plast delivers comprehensive infrastructure piping solutions, including large-diameter HDPE pipes designed for municipal water supply, sewage systems, and industrial applications. We distribute high-quality HDPE infrastructure pipes that meet international standards for large-scale projects.",
      "Our comprehensive infrastructure pipe range focuses on HDPE solutions for municipal water networks and industrial process piping. With over 50 years of experience, we provide reliable HDPE solutions that ensure efficient infrastructure development and long-lasting performance in Iraq's growing urban and industrial sectors."
    ],
    points: [
      "Complete range of large-diameter HDPE pipes",
      "High-quality HDPE infrastructure fittings and accessories",
      "Suitable for municipal and industrial applications",
      "Expert technical support and HDPE infrastructure project consultation"
    ]
  }
];



  export const servicesData: ServiceItem[] = [
    {
      id: 1,
      slug:'tech-tonic-labs',
      title: "Tech Tonic Labs",
      icon: "/icons/services/icon-1.svg",
      number: "01",
    },
    {
      id: 2,
      slug:'tech-solutions',
      title: "Tech Solutions",
      icon: "/icons/services/icon-2.svg",
      number: "02",
    },
    {
      id: 3,
      slug:'netWorks-plus',
      title: "NetWorks Plus",
      icon: "/icons/services/icon-3.svg",
      number: "03",
    },
    {
      id: 4,
      slug:'code-craft-creations',
      title: "Code Craft Creations",
      icon: "/icons/services/icon-4.svg",
      number: "04",
    },
    {
      id: 5,
      slug:'stream-technologies',
      title: "Stream Technologies",
      icon: "/icons/services/icon-5.svg",
      number: "05",
    },
    {
      id: 6,
      slug:'weave-solutions',
      title: "Weave Solutions",
      icon: "/icons/services/icon-6.svg",
      number: "06",
    },
  ]
  
  
  