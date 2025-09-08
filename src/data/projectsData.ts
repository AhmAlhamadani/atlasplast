import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.png";

import projectGallery1 from "../assets/projects/project-8.png";
import projectGallery2 from "../assets/projects/project-9.png";
import SulemaniaProject1 from "../assets/projects/SulemaniaProject1.png"
import SulemaniaProject2 from "../assets/projects/SulemaniaProject2.png"


export interface Project {
  id: number;
  slug: string;
  title: string;
  image: string;
  description: string;
  category: string;
  startDate: string;
  location: string;
  content: {
    heading: string;
    paragraphs: string[];
    subSections: {
      title: string;
      points?: string[];
      paragraphs?: string[];
    }[];
    gallery: string[];
  };
}

export const projects: Project[] = [
  {
    id: 1,
    slug: "grand-millennium-hotel-sulaimani",
    title: "Grand Millennium Hotel Sulaimani",
    image: project1,
    description: "Atlas Plast proudly supplied the complete piping infrastructure for the Grand Millennium Hotel Sulaimani — providing both clean water and sewage systems with reliable, high-quality solutions that ensure efficiency, durability, and long-term performance.",
    category: "new build",
    startDate: "20 October 2020",
    location: "Grand Millennium Hotel Sulaimani, Sulaymaniyah, Sulaymaniyah Governorate, 46001",
    content: {
      heading: "Building with Reliability and Innovation",
      paragraphs: [
        "As one of the most prestigious landmarks in Sulaymaniyah, the Grand Millennium Hotel required piping systems that could match its scale, luxury, and long-term demands. Atlas Plast supplied a full range of solutions — including PPR pipes for clean water distribution and PVC pipes for sewage and drainage systems — ensuring world-class quality from the ground up.",
        "Our products are designed to deliver efficiency, durability, and safety, making them the ideal choice for large-scale projects like this five-star hotel. By providing complete piping infrastructure, we contributed to the comfort and reliability that guests experience every day."
      ],
      subSections: [
        {
          title: "Supplying Clean Water Systems",
          paragraphs: [
            "Atlas Plast provided high-performance PPR pipes and fittings to ensure safe and reliable clean water distribution throughout the hotel. These systems guarantee consistent water quality and long-term durability, perfectly suited for a hospitality project of this scale."
          ]
        },
        {
          title: "Ensuring Reliable Sewage Solutions",
          paragraphs: [
            "For the sewage and drainage network, Atlas Plast supplied PVC pipes engineered to handle heavy demand while preventing leaks and maintaining hygienic standards. This robust system supports the hotel’s infrastructure and ensures seamless operation behind the scenes."
          ]
        },
        {
          title: "Trusted for Landmark Projects",
          points: [
            "Complete piping solutions for both clean water and sewage systems",
            "High-quality PPR pipes for durability and safe water delivery",
            "PVC piping systems for efficient and reliable drainage",
            "A trusted partner for iconic hospitality and construction projects"
          ]
        }
      ],
      gallery: [SulemaniaProject1, SulemaniaProject2]
    }
  },


  {
    id: 2,
    slug: "empowering-digital-transformation",
    title: "Empowering Digital Transformation",
    image: project2,
    description: "Driving technology forward with innovative solutions.",
    category: "Business Consulting",
    startDate: "12 October 2024",
    location: "1901 Thornridge Cir. Shiloh",
    content: {
      heading: "Leading The Way In Innovation",
      paragraphs: [
        "Technology has revolutionized the way we live, work, and communicate. From smartphones to artificial intelligence, our world is becoming more connected every day Technology has revolutionized the way we live, work, and communicate. From smartphones to artificial intelligence, our world is becoming more connected every day revolutionized the way we live, work, and communicate. From smartphones to artificial intelligence, our world is becoming more connected every day Technology ",
        "Technology has revolutionized the way we live, work, and communicate. From smartphones to artificial intelligence, our world is becoming more connected every day Technology has revolutionized the way we live, work, and communicate. From smartphones to artificial intelligence, our world is becoming more connected every day",
      ],
      subSections: [
        {
          title: "Where Ideas Become Reality",
          paragraphs: [
            "Technology has revolutionized the way we live, work, and communicate. From smartphones to artificial intelligence, our world is becoming more connected every day Technology has revolutionized the way we live, work, and communicate. From smartphones to artificial intelligence, our world is becoming more connected every day",
          ],
        },
        {
          title: "Empowering Your Digital Future",
          points: [
            "Tech Forward. Future Ready. Your Tomorrow, Enhanced Today",
            "Revolutionizing Reality Through Technology. Tech it to the Next Level",
            "Tech-savvy Lives, Brighter Tomorrows. Connect. Create. Transform",
            "The future is tech. Advancing with innovation. Tech excellence at work.",
          ],
        },
        {
          title: "Connecting You To Tomorrow",
          paragraphs: [
            "Technology has revolutionized the way we live, work, and communicate. From smartphones to artificial intelligence, our world is becoming more connected every day Technology has revolutionized the way we live, work, and communicate. From smartphones to artificial intelligence, our world is becoming more connected every day",
            "Technology has revolutionized the way we live, work, and communicate. From smartphones to artificial intelligence, our world is becoming more connected every day Technology has revolutionized the way we live, work, and communicate. From smartphones to artificial intelligence, our world is becoming more connected every day revolutionized the way we live, work, and communicate. From smartphones to artificial intelligence, our world is becoming more connected every day Technology ",
          ],
        },
        {
          title: "Transforming Tech Dreams",
          paragraphs: [
            "Technology has revolutionized the way we live, work, and communicate. From smartphones to artificial intelligence, our world is becoming more connected every day Technology has revolutionized the way we live, work, and communicate. From smartphones to artificial intelligence, our world is becoming more connected every day",
          ],
        },
      ],
      gallery: [projectGallery1, projectGallery2],
    },
  },

  {
    id: 3,
    slug: "building-future-ready-platforms",
    title: "Building Future-Ready Platforms",
    image: project3,
    description: "Driving technology forward with innovative solutions.",
    category: "Business Consulting",
    startDate: "12 October 2024",
    location: "1901 Thornridge Cir. Shiloh",
    content: {
      heading: "Leading The Way In Innovation",
      paragraphs: [
        "Technology has revolutionized the way we live, work, and communicate. From smartphones to artificial intelligence, our world is becoming more connected every day Technology has revolutionized the way we live, work, and communicate. From smartphones to artificial intelligence, our world is becoming more connected every day revolutionized the way we live, work, and communicate. From smartphones to artificial intelligence, our world is becoming more connected every day Technology ",
        "Technology has revolutionized the way we live, work, and communicate. From smartphones to artificial intelligence, our world is becoming more connected every day Technology has revolutionized the way we live, work, and communicate. From smartphones to artificial intelligence, our world is becoming more connected every day",
      ],
      subSections: [
        {
          title: "Where Ideas Become Reality",
          paragraphs: [
            "Technology has revolutionized the way we live, work, and communicate. From smartphones to artificial intelligence, our world is becoming more connected every day Technology has revolutionized the way we live, work, and communicate. From smartphones to artificial intelligence, our world is becoming more connected every day",
          ],
        },
        {
          title: "Empowering Your Digital Future",
          points: [
            "Tech Forward. Future Ready. Your Tomorrow, Enhanced Today",
            "Revolutionizing Reality Through Technology. Tech it to the Next Level",
            "Tech-savvy Lives, Brighter Tomorrows. Connect. Create. Transform",
            "The future is tech. Advancing with innovation. Tech excellence at work.",
          ],
        },
        {
          title: "Connecting You To Tomorrow",
          paragraphs: [
            "Technology has revolutionized the way we live, work, and communicate. From smartphones to artificial intelligence, our world is becoming more connected every day Technology has revolutionized the way we live, work, and communicate. From smartphones to artificial intelligence, our world is becoming more connected every day",
            "Technology has revolutionized the way we live, work, and communicate. From smartphones to artificial intelligence, our world is becoming more connected every day Technology has revolutionized the way we live, work, and communicate. From smartphones to artificial intelligence, our world is becoming more connected every day revolutionized the way we live, work, and communicate. From smartphones to artificial intelligence, our world is becoming more connected every day Technology ",
          ],
        },
        {
          title: "Transforming Tech Dreams",
          paragraphs: [
            "Technology has revolutionized the way we live, work, and communicate. From smartphones to artificial intelligence, our world is becoming more connected every day Technology has revolutionized the way we live, work, and communicate. From smartphones to artificial intelligence, our world is becoming more connected every day",
          ],
        },
      ],
      gallery: [projectGallery1, projectGallery2],
    },
  },

  {
    id: 4,
    slug: "innovating-seamless-experiences",
    title: "Innovating Seamless Experiences",
    image: project4,
    description: "Driving technology forward with innovative solutions.",
    category: "Business Consulting",
    startDate: "12 October 2024",
    location: "1901 Thornridge Cir. Shiloh",
    content: {
      heading: "Leading The Way In Innovation",
      paragraphs: [
        "Technology has revolutionized the way we live, work, and communicate. From smartphones to artificial intelligence, our world is becoming more connected every day Technology has revolutionized the way we live, work, and communicate. From smartphones to artificial intelligence, our world is becoming more connected every day revolutionized the way we live, work, and communicate. From smartphones to artificial intelligence, our world is becoming more connected every day Technology ",
        "Technology has revolutionized the way we live, work, and communicate. From smartphones to artificial intelligence, our world is becoming more connected every day Technology has revolutionized the way we live, work, and communicate. From smartphones to artificial intelligence, our world is becoming more connected every day",
      ],
      subSections: [
        {
          title: "Where Ideas Become Reality",
          paragraphs: [
            "Technology has revolutionized the way we live, work, and communicate. From smartphones to artificial intelligence, our world is becoming more connected every day Technology has revolutionized the way we live, work, and communicate. From smartphones to artificial intelligence, our world is becoming more connected every day",
          ],
        },
        {
          title: "Empowering Your Digital Future",
          points: [
            "Tech Forward. Future Ready. Your Tomorrow, Enhanced Today",
            "Revolutionizing Reality Through Technology. Tech it to the Next Level",
            "Tech-savvy Lives, Brighter Tomorrows. Connect. Create. Transform",
            "The future is tech. Advancing with innovation. Tech excellence at work.",
          ],
        },
        {
          title: "Connecting You To Tomorrow",
          paragraphs: [
            "Technology has revolutionized the way we live, work, and communicate. From smartphones to artificial intelligence, our world is becoming more connected every day Technology has revolutionized the way we live, work, and communicate. From smartphones to artificial intelligence, our world is becoming more connected every day",
            "Technology has revolutionized the way we live, work, and communicate. From smartphones to artificial intelligence, our world is becoming more connected every day Technology has revolutionized the way we live, work, and communicate. From smartphones to artificial intelligence, our world is becoming more connected every day revolutionized the way we live, work, and communicate. From smartphones to artificial intelligence, our world is becoming more connected every day Technology ",
          ],
        },
        {
          title: "Transforming Tech Dreams",
          paragraphs: [
            "Technology has revolutionized the way we live, work, and communicate. From smartphones to artificial intelligence, our world is becoming more connected every day Technology has revolutionized the way we live, work, and communicate. From smartphones to artificial intelligence, our world is becoming more connected every day",
          ],
        },
      ],
      gallery: [projectGallery1, projectGallery2],
    },
  },
  {
    id: 5,
    slug: "connecting-ideas-to-reality",
    title: "Connecting Ideas to Reality",
    image: project3,
    description: "Driving technology forward with innovative solutions.",
    category: "Business Consulting",
    startDate: "12 October 2024",
    location: "1901 Thornridge Cir. Shiloh",
    content: {
      heading: "Leading The Way In Innovation",
      paragraphs: [
        "Technology has revolutionized the way we live, work, and communicate. From smartphones to artificial intelligence, our world is becoming more connected every day Technology has revolutionized the way we live, work, and communicate. From smartphones to artificial intelligence, our world is becoming more connected every day revolutionized the way we live, work, and communicate. From smartphones to artificial intelligence, our world is becoming more connected every day Technology ",
        "Technology has revolutionized the way we live, work, and communicate. From smartphones to artificial intelligence, our world is becoming more connected every day Technology has revolutionized the way we live, work, and communicate. From smartphones to artificial intelligence, our world is becoming more connected every day",
      ],
      subSections: [
        {
          title: "Where Ideas Become Reality",
          paragraphs: [
            "Technology has revolutionized the way we live, work, and communicate. From smartphones to artificial intelligence, our world is becoming more connected every day Technology has revolutionized the way we live, work, and communicate. From smartphones to artificial intelligence, our world is becoming more connected every day",
          ],
        },
        {
          title: "Empowering Your Digital Future",
          points: [
            "Tech Forward. Future Ready. Your Tomorrow, Enhanced Today",
            "Revolutionizing Reality Through Technology. Tech it to the Next Level",
            "Tech-savvy Lives, Brighter Tomorrows. Connect. Create. Transform",
            "The future is tech. Advancing with innovation. Tech excellence at work.",
          ],
        },
        {
          title: "Connecting You To Tomorrow",
          paragraphs: [
            "Technology has revolutionized the way we live, work, and communicate. From smartphones to artificial intelligence, our world is becoming more connected every day Technology has revolutionized the way we live, work, and communicate. From smartphones to artificial intelligence, our world is becoming more connected every day",
            "Technology has revolutionized the way we live, work, and communicate. From smartphones to artificial intelligence, our world is becoming more connected every day Technology has revolutionized the way we live, work, and communicate. From smartphones to artificial intelligence, our world is becoming more connected every day revolutionized the way we live, work, and communicate. From smartphones to artificial intelligence, our world is becoming more connected every day Technology ",
          ],
        },
        {
          title: "Transforming Tech Dreams",
          paragraphs: [
            "Technology has revolutionized the way we live, work, and communicate. From smartphones to artificial intelligence, our world is becoming more connected every day Technology has revolutionized the way we live, work, and communicate. From smartphones to artificial intelligence, our world is becoming more connected every day",
          ],
        },
      ],
      gallery: [projectGallery1, projectGallery2],
    },
  },
  {
    id: 6,
    slug: "pioneering-smart-solutions",
    title: "Pioneering Smart Solutions",
    image: project3,
    description: "Driving technology forward with innovative solutions.",
    category: "Business Consulting",
    startDate: "12 October 2024",
    location: "1901 Thornridge Cir. Shiloh",
    content: {
      heading: "Leading The Way In Innovation",
      paragraphs: [
        "Technology has revolutionized the way we live, work, and communicate. From smartphones to artificial intelligence, our world is becoming more connected every day Technology has revolutionized the way we live, work, and communicate. From smartphones to artificial intelligence, our world is becoming more connected every day revolutionized the way we live, work, and communicate. From smartphones to artificial intelligence, our world is becoming more connected every day Technology ",
        "Technology has revolutionized the way we live, work, and communicate. From smartphones to artificial intelligence, our world is becoming more connected every day Technology has revolutionized the way we live, work, and communicate. From smartphones to artificial intelligence, our world is becoming more connected every day",
      ],
      subSections: [
        {
          title: "Where Ideas Become Reality",
          paragraphs: [
            "Technology has revolutionized the way we live, work, and communicate. From smartphones to artificial intelligence, our world is becoming more connected every day Technology has revolutionized the way we live, work, and communicate. From smartphones to artificial intelligence, our world is becoming more connected every day",
          ],
        },
        {
          title: "Empowering Your Digital Future",
          points: [
            "Tech Forward. Future Ready. Your Tomorrow, Enhanced Today",
            "Revolutionizing Reality Through Technology. Tech it to the Next Level",
            "Tech-savvy Lives, Brighter Tomorrows. Connect. Create. Transform",
            "The future is tech. Advancing with innovation. Tech excellence at work.",
          ],
        },
        {
          title: "Connecting You To Tomorrow",
          paragraphs: [
            "Technology has revolutionized the way we live, work, and communicate. From smartphones to artificial intelligence, our world is becoming more connected every day Technology has revolutionized the way we live, work, and communicate. From smartphones to artificial intelligence, our world is becoming more connected every day",
            "Technology has revolutionized the way we live, work, and communicate. From smartphones to artificial intelligence, our world is becoming more connected every day Technology has revolutionized the way we live, work, and communicate. From smartphones to artificial intelligence, our world is becoming more connected every day revolutionized the way we live, work, and communicate. From smartphones to artificial intelligence, our world is becoming more connected every day Technology ",
          ],
        },
        {
          title: "Transforming Tech Dreams",
          paragraphs: [
            "Technology has revolutionized the way we live, work, and communicate. From smartphones to artificial intelligence, our world is becoming more connected every day Technology has revolutionized the way we live, work, and communicate. From smartphones to artificial intelligence, our world is becoming more connected every day",
          ],
        },
      ],
      gallery: [projectGallery1, projectGallery2],
    },
  },
];
