// data
const workSlides = {
  slides: [
    {
      images: [
        {
          title: "Tours APP",
          path: "/Tour.png",
          githubLink: "https://github.com/harshal0151/Tours_system",
          liveLink: "https://tours-system-h.vercel.app/home",
        },

        {
          title: "Home Decor",
          path: "/e-com.png",
          githubLink: "https://github.com/harshal0151/E-commerce-React-",
          liveLink: "https://e-commerce-react-bay.vercel.app/",
        },

        {
          title: "Epic Game Clone",
          path: "/Home.png",
          githubLink: "https://github.com/harshal0151/Epic_Games-Clone",
          liveLink: "https://epic-games-clone-one.vercel.app/",
        },

        {
          title: "Portfolio-App",
          path: "/portfolio.png",
          githubLink: "https://github.com/harshal0151/Portfolio-Harshal",
          liveLink: "https://portfolio-harshal.vercel.app/",
        },
      ],
    },
    {
      images: [
        {
          title: "Weather App",
          path: "/weather.png",
          githubLink: "https://github.com/harshal0151/weather-App-",
          liveLink: "https://weather-apinew.vercel.app/",
        },
        {
          title: "Hershey-UI",
          path: "/Hershey1.png",
          githubLink: "https://github.com/harshal0151/Hershey-UI",
          liveLink: "https://sudhanshusudan33.github.io/Hershey-UI/",
        },

        {
          title: "nike-UI",
          path: "/nike.png",
          githubLink: "https://github.com/harshal0151/nike-Landing_page",
          liveLink: "https://nike-shoes-landingpage.netlify.app/",
        },
        {
          title: "Gym-UI",
          path: "/Gym1.png",
          githubLink: "https://github.com/harshal0151/The-November-Room",
          liveLink: "https://harshal0151.github.io/The-November-Room/",
        },
        
      ],
    },
    {
      images: [
        {
          title: "Aria-UI",
          path: "/Aria2.png",
          githubLink: "https://github.com/harshal0151/Aria_ui",
          liveLink: "https://harshal0151.github.io/Aria_ui/index.html",
        },

        {
          title: "E-commerce",
          path: "/E-commers.png",
          githubLink: "https://github.com/harshal0151/E-commerce-React-app",
          liveLink: "https://gofashionstar.netlify.app/",
        },
        {
          title: "UsabilityHub-UI",
          path: "/clone.png",
          githubLink: "https://github.com/harshal0151/UsabilityHub-clone",
          liveLink: "https://usabilityhun-clone.netlify.app/",
        },
      ],
    },
  ],
};

// import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

//import swiper styles
import "swiper/css";

import "swiper/css/pagination";

//import modules
import { Pagination } from "swiper";

//icons
import { BsArrowRight } from "react-icons/bs";

//next image
import Image from "next/image";

//icons
import { RiGithubLine } from "react-icons/ri";
import Link from "next/link";

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="h-[280px] sm:h-[480px] "
    >
      {workSlides.slides.map((slide, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer">
              {slide.images.map((image, index) => {
                return (
                  <div
                    className="relative rounded-lg overflow-hidden flex items-center justify-center group"
                    key={index}
                  >
                    <div className="flex items-center justify-center relative overflow-hidden group ">
                      {/* images  */}
                      <Image
                        src={image.path}
                        alt="work"
                        height={500}
                        width={400}
                      />
                      {/* overlay  */}
                      <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700"></div>
                      {/* title  */}
                      <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-5  group-hover:xl:-translate-y-20 transition-all duration-300">
                        <div className="text-center gap-x-2 text-[13px] tracking-[0.2em]">
                          {/* title 1  */}
                          <div className="delay-100">{image.title}</div>

                          <div className="flex gap-2">
                            {/* title 1  */}
                            <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150 border border-sky-200 py-1 px-3 rounded-lg bg-white text-black">
                              <Link
                                href={image.liveLink}
                                className="hover:text-accent transition-all duration-300 "
                              >
                                LIVE
                              </Link>
                            </div>

                            {/*  icon  */}
                            <div className=" text-xl  translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200  border border-sky-100  py-1 px-3 rounded-lg bg-transparent  ">
                              <Link
                                href={image.githubLink}
                                className="hover:text-accent transition-all duration-300"
                              >
                                <RiGithubLine />
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default WorkSlider;
