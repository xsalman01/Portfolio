import {
  sarim,
  teglax,
  python,
  nextjs,
  django,
  reactjs,
  nodejs,
  meta,
  vercel,
  ycdirectory,
  livedocs,
  restate,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "NextJS",
    icon: nextjs,
  },
  {
    title: "ReactJS",
    icon: reactjs,
  },
  {
    title: "React Native",
    icon: reactjs,
  },
  {
    title: "Django",
    icon: django,
  },
  {
    title: "Python",
    icon: python,
  },
  {
    title: "NodeJS",
    icon: nodejs,
  },
];

const experiences = [
  {
    title: "Software Developer",
    company_name: "Teglax",
    icon: teglax,
    iconBg: "#FFFFFF",
    date: "March 2024 - Present",
    points: [
        `Collaborated with cross-functional teams, including designers, to deliver 
        high-quality software solutions.`,
        `Developed 'Alpha Vision', a web-based security camera monitoring 
        platform with real-time activity monitoring, notifications, and secure 
        event recordings.`,
        `Built 'Discount Smokes', an e-commerce platform for buying and selling 
        tobacco products, ensuring a secure and user-friendly marketplace.`,
        `Utilized technologies such as React, Node.js, Express, Firebase,
        MongoDB, and Nginx to develop and deploy scalable solutions.`,
    ],
  },
  {
    title: "To be added Soon",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "",
    points: [],
  },
];

const testimonials = [
  {
    testimonial: `I had the pleasure of working with Salman on two projects: 
        Alpha Vision, a security camera monitoring platform, and 
        Discount Smokes, an online tobacco shop. Salman worked as a junior 
        developer on Discount Smokes and as a full-stack developer on 
        Alpha Vision, consistently demonstrating strong web development skills
        and professionalism. Their ability to adapt to project demands, deliver
        scalable solutions, and enhance user experience was impressive.
        From building a robust monitoring system in Alpha Vision to improving 
        the functionality of the e-commerce platform in Discount Smokes, Salman
        delivered exceptional results. I highly recommend them for any software
        development role.`,
    name: "Sarim Rayyan",
    designation: "Co-Founder",
    company: "Teglax",
    image: sarim,
    linkedIn: "https://www.linkedin.com/in/sarim-rayyan/",
    companyLink: "https://www.linkedin.com/company/teglax/",
  },
];

const projects = [
  {
    name: "LiveDocs",
    description: `A real-time live collaborative document editor that allows 
      users to create and manage documents.`,
    tags: [
      {
        name: "NextJS",
        color: "blue-text-gradient",
      },
      {
        name: "Clerk",
        color: "green-text-gradient",
      },
      {
        name: "shadcn/ui",
        color: "pink-text-gradient",
      },
    ],
    image: livedocs,
    links: {
      github: "https://github.com/xsalman01/live_docs",
      site: { 
          link: "https://dopeman-livedocs.vercel.app/",
          image: vercel
      },
    }
  },
  {
    name: "YC Directory",
    description: `A web platform designed to help users discover and share 
      information about startups.`,
    tags: [
      {
        name: "NextJS",
        color: "blue-text-gradient",
      },
      {
        name: "nextAuth",
        color: "green-text-gradient",
      },
      {
        name: "sanity",
        color: "pink-text-gradient",
      },
    ],
    image: ycdirectory,
    links: {
      github: "https://github.com/xsalman01/yc_directory",
      site: {
          link: "https://yc-directory-startups.vercel.app/",
          image: vercel
      }
    }
  },
  {
    name: "Restate",
    description: `A mobile application that showcases a range of real estate 
      properties available for purchase.`,
    tags: [
      {
        name: "Expo",
        color: "blue-text-gradient",
      },
      {
        name: "Oauth",
        color: "green-text-gradient",
      },
      {
        name: "appwrite",
        color: "pink-text-gradient",
      },
    ],
    image: restate,
    links: {
      github: "https://github.com/xsalman01/restate",
    }
  },
];

export { services, experiences, testimonials, projects };
