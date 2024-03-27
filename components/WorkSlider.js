// data
const workSlides = {
  slides: [
    {
      images: [
        {
          title: "Hershey-UI",
          path: "/thumb1.jpg",
          githubLink: "https://github.com/harshal0151/Hershey-UI",
          liveLink: "https://sudhanshusudan33.github.io/Hershey-UI/",
        },
        {
          title: "2",
          path: "/thumb2.jpg",
          githubLink: "https://github.com/example2",
          liveLink: "https://example2.com",
        },
        {
          title: "3",
          path: "/thumb3.jpg",
          githubLink: "https://github.com/example3",
          liveLink: "https://example3.com",
        },
        {
          title: "4",
          path: "/thumb4.jpg",
          githubLink: "https://github.com/example4",
          liveLink: "https://example4.com",
        },
      ],
    },
    {
      images: [
        {
          title: "5",
          path: "/thumb4.jpg",
          githubLink: "https://github.com/example5",
          liveLink: "https://example5.com",
        },
        {
          title: "6",
          path: "/thumb1.jpg",
          githubLink: "https://github.com/example6",
          liveLink: "https://example6.com",
        },
        {
          title: "7",
          path: "/thumb2.jpg",
          githubLink: "https://github.com/example7",
          liveLink: "https://example7.com",
        },
        {
          title: "8",
          path: "/thumb3.jpg",
          githubLink: "https://github.com/example8",
          liveLink: "https://example8.com",
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
                    className= "relative rounded-lg overflow-hidden flex items-center justify-center group"
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
                      <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300">
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
