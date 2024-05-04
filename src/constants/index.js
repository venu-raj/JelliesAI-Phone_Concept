import {
  blackImg,
  blueImg,
  highlightFirstVideo,
  highlightFourthVideo,
  highlightSecondVideo,
  highlightThirdVideo,
  whiteImg,
  yellowImg,
} from "../utils";

export const navLists = ["Store", "Mac", "iPhone", "Support"];

export const hightlightsSlides = [
  {
    id: 1,
    textLists: [
      "India's First AI Powerded Phone.",
      "Game-changing Phone.",
      "Groundbreaking performance.",
    ],
    video: "assets/videos2/blackberry_edited_1.mp4",
    videoDuration: 4,
  },
  {
    id: 2,
    textLists: ["Predicts Before You Need It.", "No Need to Install All By Yourself."],
    video: "assets/videos2/blackberry_edited_2.mp4",
    videoDuration: 3,
  },
  {
    id: 3,
    textLists: [
      "We are the best selling",
      "Phone Company in India & USA"
    ],
    video: "assets/videos2/blackberry_edited_3.mp4",
    videoDuration: 2,
  },
  {
    id: 3,
    textLists: ["See how you can.", "Participate in the event?."],
    video: "assets/videos2/blackberry_edited_4.mp4",
    videoDuration: 4,
  },
];

export const models = [
  {
    id: 1,
    title: "iPhone 15 Pro in Natural Titanium",
    color: ["#8F8A81", "#ffe7b9", "#6f6c64"],
    img: yellowImg,
  },
  {
    id: 2,
    title: "iPhone 15 Pro in Blue Titanium",
    color: ["#53596E", "#6395ff", "#21242e"],
    img: blueImg,
  },
  {
    id: 3,
    title: "iPhone 15 Pro in White Titanium",
    color: ["#C9C8C2", "#ffffff", "#C9C8C2"],
    img: whiteImg,
  },
  {
    id: 4,
    title: "iPhone 15 Pro in Black Titanium",
    color: ["#454749", "#3b3b3b", "#181819"],
    img: blackImg,
  },
];

export const sizes = [
  { label: '6.1"', value: "small" },
  { label: '6.7"', value: "large" },
];

export const footerLinks = [
  "Privacy Policy",
  "Terms of Use",
  "Sales Policy",
  "Legal",
  "Site Map",
];