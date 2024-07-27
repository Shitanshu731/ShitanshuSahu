import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import Brainwave from "@/public/Brainwave.png";
import Financial_LandingPage from "@/public/Financial_LandingPage.png";
import Ecommerce from "@/public/Ecommerce.png";
import FinanceFlex from "@/public/FinanceFlex.png";
import InstaDocs from "@/public/InstaDocs.png";
import ThreeDPortfolio from "@/public/ThreeDPortfolio.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Front-End Developer(Oasis Infobyte)",
    location: "Remote",
    description:
      "I worked as a front-end developer for 1 month . I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - 2022",
  },
  {
    title: "Front-End Developer(SimpleByte)",
    location: "Remote",
    description:
      "I worked as a front-end developer for 1 month .got to learn about HTML,CSS,React.",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - 2022",
  },
  {
    title: "Full-Stack Developer(Bharat Intern)",
    location: "Remote",
    description:
      "I worked as a Full-Stack developer for 1 month . I worked on videoMeet projects and Ecommerce.",
    icon: React.createElement(FaReact),
    date: "2022- 2023",
  },
  {
    title: "Full-Stack Developer(PSSFinancials)",
    location: "Kolkata,India",
    description:
      "I'm now a full-stack developer working as a Intern. It was a 3-Month Internship. My stack includes React, Next.js, TypeScript, Tailwind and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2023 - 2024",
  },
] as const;

export const projectsData = [
  {
    url: "https://finance-flex-gamma.vercel.app/",
    title: "FinanceFlex",
    description:
      "This platform seamlessly manages bank transactions, accounts, and transfers funds from one account to another.",
    tags: [
      "React",
      "NextJs",
      "TypeScript",
      "Tailwind",
      "Appwrite",
      "Plaid",
      "Dwolla",
    ],
    imageUrl: FinanceFlex,
  },
  {
    url: "https://insta-docs-chi.vercel.app/",
    title: "InstaDocs",
    description:
      "This platform seamlessly manages documents with live interactions among users. The admin can grant view or edit permissions to any user via Gmail.",
    tags: ["NextJs", "TypeScript", "Tailwind", "LiveBlocks", "ClerkJs"],
    imageUrl: InstaDocs,
  },

  {
    url: "https://shitanshu-sahu.vercel.app/",
    title: "3D_Portfolio",
    description:
      "This is a 3D Portfolio , with latest tech features ,smooth UI and very Scalable.",
    tags: ["React", "Tailwind", "FramerMotion", "ThreeJs"],
    imageUrl: ThreeDPortfolio,
  },
  {
    url: "https://brainwave-ochre.vercel.app/",
    title: "Brainwave",
    description:
      "This is a Dynamic Landing Website. It is very Responsive and attractive and very easy to Run.",
    tags: ["React", "Vite", "Tailwind"],
    imageUrl: Brainwave,
  },
  {
    url: "https://pssfinancials.vercel.app/",
    title: "Financial LandingPage",
    description:
      "This is a Dynamic Financial Landing Website. It is very Responsive and attractive and very easy to Run.",
    tags: ["NextJs", "FramerMotion", "Tailwind"],
    imageUrl: Financial_LandingPage,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "GitHub",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "Express",
  "Python",
  "Django",
  "Framer Motion",
] as const;
