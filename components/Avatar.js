//next Image 
import Image from 'next/image'

const Avatar = () => {
  return <div className='hidden xl:flex xl:max-w-none '>
    <Image src={'/hero-img.png'} width={737} height={678}  alt="" className='translate-z-0 wfull h-full' />
  </div>;
};

export default Avatar;
