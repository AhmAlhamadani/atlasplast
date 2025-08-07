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
    slug: 'tech-pro-services',
    image:service1,
    icon: '/icons/services/icon-7.svg',
    title: 'Tech Pro Services',
    description: 'IT Technology is a dynamic field encompassing implementation and support.',
    paragraphs: [
      "Technology has revolutionized the way we live, work, and communicate. From smartphones to artificial intelligence, our world is becoming more connected every day Technology has revolutionized the way we live, work, and the communicate. From smartphones to artificial intelligence, our world is becoming ",
      "Technology has revolutionized the way we live, work, and communicate. From smartphones to artificial intelligence, our world is becoming more connected every day Technology has revolutionized the way "
    ],
    points: [
      "Tech Forward. Future Ready Your Tomorrow, Enhanced Today",
      "Revolutionizing Reality Through Technology. Tech it to the Next Level",
      "Tech-savvy Lives, Brighter Tomorrows. Connect. Create. Transform",
      "The future is tech. Advancing with innovation. Tech excellence at work."
    ]
  },
  {
    id: 2,
    slug: 'your-digital-future',
    image:service2,
    icon: '/icons/services/icon-8.svg',
    title: 'Your Digital Future',
    description: 'Digital strategy focused on innovation, growth, stability, and support systems.',
    paragraphs: [
      "Technology has revolutionized the way we live, work, and communicate. From smartphones to artificial intelligence, our world is becoming more connected every day Technology has revolutionized the way we live, work, and the communicate. From smartphones to artificial intelligence, our world is becoming ",
      "Technology has revolutionized the way we live, work, and communicate. From smartphones to artificial intelligence, our world is becoming more connected every day Technology has revolutionized the way "
    ],
    points: [
      "Tech Forward. Future Ready Your Tomorrow, Enhanced Today",
      "Revolutionizing Reality Through Technology. Tech it to the Next Level",
      "Tech-savvy Lives, Brighter Tomorrows. Connect. Create. Transform",
      "The future is tech. Advancing with innovation. Tech excellence at work."
    ]
  },
  {
    id: 3,
    slug: 'your-digital-journey',
    image:service3,
    icon: '/icons/services/icon-9.svg',
    title: 'Your Digital Journey',
    description: 'Navigate complex digital systems with professional guidance and scalable support.',
    paragraphs: [
      "Technology has revolutionized the way we live, work, and communicate. From smartphones to artificial intelligence, our world is becoming more connected every day Technology has revolutionized the way we live, work, and the communicate. From smartphones to artificial intelligence, our world is becoming ",
      "Technology has revolutionized the way we live, work, and communicate. From smartphones to artificial intelligence, our world is becoming more connected every day Technology has revolutionized the way "
    ],
    points: [
      "Tech Forward. Future Ready Your Tomorrow, Enhanced Today",
      "Revolutionizing Reality Through Technology. Tech it to the Next Level",
      "Tech-savvy Lives, Brighter Tomorrows. Connect. Create. Transform",
      "The future is tech. Advancing with innovation. Tech excellence at work."
    ]
  },
  {
    id: 4,
    slug: 'stream-technologies',
    image:service4,
    icon: '/icons/services/icon-10.svg',
    title: 'Stream Technologies',
    description: 'Streamline your business operations using powerful tools and expert guidance.',
    paragraphs: [
      "Technology has revolutionized the way we live, work, and communicate. From smartphones to artificial intelligence, our world is becoming more connected every day Technology has revolutionized the way we live, work, and the communicate. From smartphones to artificial intelligence, our world is becoming ",
      "Technology has revolutionized the way we live, work, and communicate. From smartphones to artificial intelligence, our world is becoming more connected every day Technology has revolutionized the way "
    ],
    points: [
      "Tech Forward. Future Ready Your Tomorrow, Enhanced Today",
      "Revolutionizing Reality Through Technology. Tech it to the Next Level",
      "Tech-savvy Lives, Brighter Tomorrows. Connect. Create. Transform",
      "The future is tech. Advancing with innovation. Tech excellence at work."
    ]
  },
  {
    id: 5,
    slug: 'code-craft-creations',
    image:service5,
    icon: '/icons/services/icon-11.svg',
    title: 'Code Craft Creations',
    description: 'Custom software development built for efficiency, scalability, and long-term success.',
    paragraphs: [
      "Technology has revolutionized the way we live, work, and communicate. From smartphones to artificial intelligence, our world is becoming more connected every day Technology has revolutionized the way we live, work, and the communicate. From smartphones to artificial intelligence, our world is becoming ",
      "Technology has revolutionized the way we live, work, and communicate. From smartphones to artificial intelligence, our world is becoming more connected every day Technology has revolutionized the way "
    ],
    points: [
      "Tech Forward. Future Ready Your Tomorrow, Enhanced Today",
      "Revolutionizing Reality Through Technology. Tech it to the Next Level",
      "Tech-savvy Lives, Brighter Tomorrows. Connect. Create. Transform",
      "The future is tech. Advancing with innovation. Tech excellence at work."
    ]
  },
  {
    id: 6,
    slug: 'weave-solutions-1',
    image:service6,
    icon: '/icons/services/icon-12.svg',
    title: 'Weave Solutions',
    description: 'Connecting businesses through technology, integration, security, and continuous support.',
    paragraphs: [
      "Technology has revolutionized the way we live, work, and communicate. From smartphones to artificial intelligence, our world is becoming more connected every day Technology has revolutionized the way we live, work, and the communicate. From smartphones to artificial intelligence, our world is becoming ",
      "Technology has revolutionized the way we live, work, and communicate. From smartphones to artificial intelligence, our world is becoming more connected every day Technology has revolutionized the way "
    ],
    points: [
      "Tech Forward. Future Ready Your Tomorrow, Enhanced Today",
      "Revolutionizing Reality Through Technology. Tech it to the Next Level",
      "Tech-savvy Lives, Brighter Tomorrows. Connect. Create. Transform",
      "The future is tech. Advancing with innovation. Tech excellence at work."
    ]
  },
  {
    id: 7,
    slug: 'tech-solutions',
    image:service3,
    icon: '/icons/services/icon-13.svg',
    title: 'Tech Solutions',
    description: 'Trusted technology partner providing implementation, and technical support.',
    paragraphs: [
      "Technology has revolutionized the way we live, work, and communicate. From smartphones to artificial intelligence, our world is becoming more connected every day Technology has revolutionized the way we live, work, and the communicate. From smartphones to artificial intelligence, our world is becoming ",
      "Technology has revolutionized the way we live, work, and communicate. From smartphones to artificial intelligence, our world is becoming more connected every day Technology has revolutionized the way "
    ],
    points: [
      "Tech Forward. Future Ready Your Tomorrow, Enhanced Today",
      "Revolutionizing Reality Through Technology. Tech it to the Next Level",
      "Tech-savvy Lives, Brighter Tomorrows. Connect. Create. Transform",
      "The future is tech. Advancing with innovation. Tech excellence at work."
    ]
  },
  {
    id: 8,
    slug: 'weave-solutions-2',
    image:service2,
    icon: '/icons/services/icon-14.svg',
    title: 'Weave Solutions',
    description: 'Innovative solutions built with precision, experience, speed, and client care.',
    paragraphs: [
      "Technology has revolutionized the way we live, work, and communicate. From smartphones to artificial intelligence, our world is becoming more connected every day Technology has revolutionized the way we live, work, and the communicate. From smartphones to artificial intelligence, our world is becoming ",
      "Technology has revolutionized the way we live, work, and communicate. From smartphones to artificial intelligence, our world is becoming more connected every day Technology has revolutionized the way "
    ],
    points: [
      "Tech Forward. Future Ready Your Tomorrow, Enhanced Today",
      "Revolutionizing Reality Through Technology. Tech it to the Next Level",
      "Tech-savvy Lives, Brighter Tomorrows. Connect. Create. Transform",
      "The future is tech. Advancing with innovation. Tech excellence at work."
    ]
  },
  {
    id: 9,
    slug: 'networks-plus',
    image:service5,
    icon: '/icons/services/icon-15.svg',
    title: 'NetWorks Plus',
    description: 'Modern networking services ensuring speed, security, reliability, and technical support.',
    paragraphs: [
      "Technology has revolutionized the way we live, work, and communicate. From smartphones to artificial intelligence, our world is becoming more connected every day Technology has revolutionized the way we live, work, and the communicate. From smartphones to artificial intelligence, our world is becoming ",
      "Technology has revolutionized the way we live, work, and communicate. From smartphones to artificial intelligence, our world is becoming more connected every day Technology has revolutionized the way "
    ],
    points: [
      "Tech Forward. Future Ready Your Tomorrow, Enhanced Today",
      "Revolutionizing Reality Through Technology. Tech it to the Next Level",
      "Tech-savvy Lives, Brighter Tomorrows. Connect. Create. Transform",
      "The future is tech. Advancing with innovation. Tech excellence at work."
    ]
  },
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
  
  
  