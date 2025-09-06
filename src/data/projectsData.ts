import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.png";
import project5 from "../assets/projects/project-5.png";
import project6 from "../assets/projects/project-6.png";
import projectGallery1 from "../assets/projects/project-8.png";
import projectGallery2 from "../assets/projects/project-9.png";

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
    slug: "leading-the-way-in-innovation",
    title: "Leading the Way in Innovation",
    image: project1,
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
