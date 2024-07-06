import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitImage2,
  chromecast,
  disc02,
  file02,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  plusSquare,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  sliders04,
  twitter,
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
    url: "#contact",
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

export const monarchaServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const features = [
  {
    id: "0",
    title: "Brand development",
    text: "Create a compelling and unique brand identity that resonates with your target audience",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "Content Creation",
    text: "Amplify your social media reach with our attention-grabbing content creation service",
    imageUrl: roadmap2,
    colorful: true,
  },
  {
    id: "2",
    title: "SEO & SEM",
    text: "Improve visibility and organic ranking with keyword research and targeted SEM campaigns",
    imageUrl: roadmap3,
    colorful: true,
  },
  {
    id: "3",
    title: "Copywriting",
    text: "Engage and convert your target audience with effective copy that inspires visitors to take action",
    imageUrl: roadmap4,
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
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "Seamless Execution",
    text: "We monitor campaign performance, make data-driven adjustments, and provide reports to keep you up to date with everything.",
    backgroundUrl: "assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "Business Growth",
    text: "Whether you're entering new markets or expanding your customer base, we implement creative initiatives that fuel expansion.",
    backgroundUrl: "assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
];

export const socials = [
  {
    id: "0",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "1",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
];