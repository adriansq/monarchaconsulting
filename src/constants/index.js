import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  file02,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  plusSquare,
  feature1,
  feature2,
  feature3,
  feature4,
  searchMd,
  x,
  linkedin,
  yourlogo,
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "Home",
    url: "#home",
  },
  {
    id: "1",
    title: "Expertise",
    url: "#expertise",
  },
  {
    id: "2",
    title: "Services",
    url: "#services",
  },
  {
    id: "3",
    title: "Sign in",
    url: "#signin",
    onlyMobile: true,
  },
  {
    id: "4",
    title: "Contact us",
    onlyMobile: true,
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

export const monarchaServices = [
  "Unmatched Personalization",
  "Data-Driven Insights",
  "Effortless Automation",
  "Predictive Power",
];

export const features = [
  {
    id: "0",
    title: "Brand development",
    text: "Create a compelling and unique brand identity that resonates with your target audience",
    imageUrl: feature1,
    colorful: true,
  },
  {
    id: "1",
    title: "Content Creation",
    text: "Amplify your social media reach with our attention-grabbing content creation service",
    imageUrl: feature2,
    colorful: true,
  },
  {
    id: "2",
    title: "SEO & SEM",
    text: "Improve visibility and organic ranking with keyword research and targeted SEM campaigns",
    imageUrl: feature3,
    colorful: true,
  },
  {
    id: "3",
    title: "Copywriting",
    text: "Engage and convert your target audience with effective copy that inspires visitors to take action",
    imageUrl: feature4,
    colorful: true,
  },
];

export const benefits = [
  {
    id: "0",
    title: "Customized Strategies",
    text: "We conduct thorough market research and analize the latest industry trends to craft strategies tailored to your goals.",
    backgroundUrl: "assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
  },
  {
    id: "1",
    title: "Seamless Execution",
    text: "We monitor campaign performance, make data-driven adjustments, and provide reports to keep you up to date with everything.",
    backgroundUrl: "assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    light: true,
  },
  {
    id: "2",
    title: "Business Growth",
    text: "Whether you're entering new markets or expanding your customer base, we implement creative initiatives that fuel expansion.",
    backgroundUrl: "assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
  },
];

export const socials = [
  {
    id: "0",
    title: "X",
    iconUrl: x,
    url: "#",
  },
  {
    id: "1",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "2",
    title: "LinkedIn",
    icounUrl: linkedin,
    url: "#"
  }
];