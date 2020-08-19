import Slide1 from "../images/Slide1.JPG";
import Slide2 from "../images/Slide2.JPG";
import Slide3 from "../images/Slide3.JPG";
import Slide4 from "../images/Slide4.JPG";
import Slide5 from "../images/Slide5.JPG";

import GripperDimetricImg from "../images/GripperDimetric.png";
import GripperFrontImg from "../images/GripperFront.png";

import iPhoneXImg from "../images/iPhoneX.png";
import HouseImg from "../images/House.png";
import HammerImg from "../images/Hammer.png";

const EcoBudScreenshotData = [
  {
    img: Slide1,
    title: "EcoBud",
  },
  {
    img: Slide2,
    title: "Log & Favorite Actions",
  },
  {
    img: Slide3,
    title: "Earn Badges",
  },
  {
    img: Slide4,
    title: "Competition",
  },
  {
    img: Slide5,
    title: "Environmental Impact",
  },
];

const GripperScreenshotData = [
  {
    img: GripperDimetricImg,
    title: "Gripper Claw- Dimetric View",
  },
  {
    img: GripperFrontImg,
    title: "Gripper Claw- Front View",
  },
];

const SolidworksScreenshotData = [
  {
    img: iPhoneXImg,
    title: "iPhoneX",
    description:
      "Displayed with screenshot of tutorial page from my EcoBud app!",
  },
  {
    img: HouseImg,
    title: "House",
    description:
      "Practice with mating separate parts to create an entire assembly",
  },
  {
    img: HammerImg,
    title: "Hammer",
    description:
      "I was supposed to machine a physical hammer in E4 last semester but couldn't because of the Covid pandemic so I CADded one on Solidworks!",
  },
  // {
  //   img: VolleyballImg,
  //   title: "Volleyball",
  //   description:
  //     "Loved playing high school and club volleyball!",
  // },
];

export default EcoBudScreenshotData;
export { GripperScreenshotData, SolidworksScreenshotData };
