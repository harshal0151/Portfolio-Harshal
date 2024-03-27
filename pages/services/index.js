

//components

import ServiceSlider from '../../components/ServiceSlider'
import Buld from '../../components/Bulb'
import Circles from '../../components/Circles'

//famer motion
import {motion} from 'framer-motion';
import {fadeIn} from '../../variants';

const Services = () => {
  return <div  className='h-full bg-primary/30 py-36 flex items-center '>
    <Circles/>
    <div className='container mx-auto '>
    <div className='flex flex-col xl:flex-row gap-x-8'>
        {/* text  */}
        <div className='text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0'>
          <motion.h2
           variants={fadeIn('up', 0.2)}
            initial="hidden"
            animate="show"
            exit= "hidden"
           className='h2 md:mt-0 mt-[4rem]'>What Do I  <span className='text-accent'>Help.</span></motion.h2>
          <motion.p
           variants={fadeIn('up', 0.4)}
           initial="hidden"
           animate="show"
           exit= "hidden"
          className='mb-4 max-w-[400px] mx-auto lg:mx-0'>Ability to develop full stack websites work with HTML5, CSS3, Javasript with ReactJS fremwork and Node.js ,Express.js, MongoDB.</motion.p>
        </div>

        <motion.div
         variants={fadeIn('down', 0.6)}
         initial="hidden"
         animate="show"
         exit= "hidden"
        className=' w-full xl:max-w-[65%]'>
         {/* slider  */}
       <ServiceSlider/> 
        </motion.div>
       
    </div>
    </div>
    <Buld/>
  </div>;
};

export default Services;
