import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";
import { RiFlutterLine } from "react-icons/ri";
import { SiDart } from "react-icons/si";
import { SiKotlin } from "react-icons/si";
import { DiJava } from "react-icons/di";
import { RiReactjsLine } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiPython } from "react-icons/si";
import { RiTailwindCssLine } from "react-icons/ri";
import { RiFirebaseLine } from "react-icons/ri";
import { FaAws } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { RiJavascriptLine } from "react-icons/ri";
import { SiExpress } from "react-icons/si";
import { FaFigma } from "react-icons/fa";
import { SiCanva } from "react-icons/si";
import { SiJetpackcompose } from "react-icons/si";

function Technologies() {
  const iconAnimation = (duration) => ({
    initial: {y: -1},
    animate: {
        y: [10, -1],
        transition: {
          duration: duration,
          ease: "linear",
          repeat: Infinity,
          repeatType: "reverse",
        }
    }
  })

  const icons = [
    { icon: RiFlutterLine, color: "text-blue-400", name: "Flutter" },
    { icon: SiDart, color: "text-cyan-400", name: "Dart" },
    { icon: SiKotlin, color: "text-purple-400", name: "Kotlin" },
    { icon: DiJava, color: "text-red-400", name: "Java" },
    { icon: RiReactjsLine, color: "text-cyan-400", name: "React" },
    { icon: FaNodeJs, color: "text-green-400", name: "Node.js" },
    { icon: SiMongodb, color: "text-green-600", name: "MongoDB" },
    { icon: SiPython, color: "text-yellow-400", name: "Python" },
    { icon: RiTailwindCssLine, color: "text-blue-400", name: "Tailwind CSS" },
    { icon: RiFirebaseLine, color: "text-orange-400", name: "Firebase" },
    { icon: FaAws, color: "text-orange-600", name: "AWS" },
    { icon: FaGitAlt, color: "text-red-600", name: "Git" },
    { icon: RiJavascriptLine, color: "text-yellow-400", name: "JavaScript" },
    { icon: FaFigma, color: "text-purple-600", name: "Figma" },
    { icon: SiCanva, color: "text-blue-600", name: "Canva" },
    { icon: SiExpress, color: "text-gray-500", name: "Express.js" },
    { icon: SiJetpackcompose, color: "text-blue-500", name: "Jetpack Compose" },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 10,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1200,
    swipeToSlide: true,
    draggable: true,
    arrows: false,
    swipe: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h1 whileInView={{opacity: 1, y: 0}} initial={{opacity: 0, y: -100}} transition={{duration: 1}} className="my-10 text-center text-3xl">Tech Stack</motion.h1>
      <Slider {...settings}>
        {icons.map(({ icon: Icon, color, name }, index) => (
          <div key={index} className="px-4">
            <div className="flex flex-col items-center">
              <motion.div variants={iconAnimation(1)} initial="initial" animate="animate" className="flex items-center justify-center rounded-2xl border-2 border-blue-950 p-8">
                <Icon className={`text-5xl ${color}`} />
              </motion.div>
              <p className="mt-2">{name}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Technologies;