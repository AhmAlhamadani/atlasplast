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
    slug: 'water-pumps-heaters',
    image:service5,
    icon: '/icons/services/icon-6.svg',
    title: 'Water Pumps & Heaters',
    description: 'Atlas provides integrated water pumping and heating solutions: DAB water pumps for reliable pressure and flow, and Saudi Ceramics water heaters for efficient hot water supply.',
    paragraphs: [
      "Our DAB pumping solutions include submersible, centrifugal, and booster pumps for dependable water movement and pressure management in residential and commercial settings.",
      "Our Saudi Ceramics water heaters deliver efficient, consistent hot water with a range of electric and gas options to suit different capacities and installation needs."
    ],
    points: [
      "DAB submersible, centrifugal, and booster pumps",
      "Saudi Ceramics electric and gas water heaters",
      "Reliable pressure management and hot water supply",
      "Expert selection guidance and installation support"
    ]
  },
  {
    id: 5,
    slug: 'ceramics',
    image:service4,
    icon: '/icons/services/icon-2.svg',
    title: 'Ceramics',
    description: 'Atlas supplies high-quality ceramic and porcelain tiles for residential and commercial projects, offering diverse sizes, finishes, and designs for floors and walls.',
    paragraphs: [
      "We offer a wide selection of floor and wall tiles, mosaics, and accessories suitable for kitchens, bathrooms, living spaces, and high-traffic areas.",
      "Our ceramics portfolio focuses on durability, water resistance, and design flexibility to meet both aesthetic and performance requirements."
    ],
    points: [
      "Wide range of ceramic and porcelain tiles",
      "Multiple sizes, finishes, and patterns",
      "Suitable for residential and commercial applications",
      "Technical guidance on selection and installation"
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
  
  
  