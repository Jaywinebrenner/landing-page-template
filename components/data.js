import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../public/img/benefit-one.png";
import benefitTwoImg from "../public/img/benefit-two.png";

const benefitOne = {
  title: "Highlight your benefits",
  desc: "Sit amet porttitor eget dolor morbi non arcu risus. Vel pretium lectus quam id. Sed vulputate odio ut enim blandit volutpat. Molestie ac feugiat sed lectus.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Scelerisque eleifend",
      desc: "Odio pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus.",
      icon: <FaceSmileIcon />,
    },
    {
      title: "Tellus in metus ",
      desc: "Rutrum quisque non tellus orci ac auctor augue mauris.",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "Volutpat sed cras",
      desc: "Urna neque viverra justo nec ultrices.",
      icon: <CursorArrowRaysIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Offer more benefits here",
  desc: "You can use this same layout with a flip image to highlight your rest of the benefits of your product. It can also contain an image or Illustration as above section along with some bullet points.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Awesome Benefit",
      desc: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "Amazing Benefit",
      desc: "Exercitation ullamco laboris nisi ut aliquip consequat ex ea commodo.",
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: "Super Cool Benefit",
      desc: "Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      icon: <SunIcon />,
    },
  ],
};


export {benefitOne, benefitTwo};
