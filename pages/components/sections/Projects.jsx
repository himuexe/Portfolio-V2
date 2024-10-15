import Image from 'next/image';
import React,{ useState,useEffect,useRef } from 'react'
import { motion,useTransform,useScroll } from "framer-motion"
import { useSpring,animated } from "react-spring"
import Lottie from 'lottie-react';
import { FaGithub } from "react-icons/fa";
import Vacays from '../../../public/media/lotties/Vacays.json'
import Moovies from '../../../public/media/lotties/Moovies.json'
import Duty from '../../../public/media/lotties/Duty.json'
import sketch from '../../../public/media/lotties/AnimatedMarker(Projects).json'

const Projects = () => {
  const [ view,setView ] = useState(false);
  const numRef = useRef(null)
  const toggleAnimation = (e) => {
    if(e[0]?.isIntersecting){ 
      setView(true)
      console.log("visible"+view)  
    }
  }
  const options = {
    root:null,
    rootMargin:'0px',
    threshold:0.5
  }
  useEffect(()=>{
    const observer = new IntersectionObserver(toggleAnimation,options)
    if(numRef.current){
      observer.observe(numRef.current)
    }
    return () => {
      if(numRef.current){
        observer.unobserve(numRef.current)
      }
    }
  },[])    
  const { scrollYProgress } = useScroll()
  const toRight = useTransform(scrollYProgress,[0,1],[-200,200])
  const toLeft = useTransform(scrollYProgress,[0,1],[-100,-2000])  
  
  const NumberFloat = ({ n }) => {
    const { number } = useSpring({
      from : { number:0.1 },
      number:n,
      delay:0,
      config:{mass:1,tension:30,friction:10},
    });
    return(
      view && (
        <animated.div className="md:text-8xl sm1:text-6xl sm2:text-7xl">{ number.to((n)=> n.toFixed(1)) }</animated.div>
      ) 
    )        
  }
  const NumberInt = ({ n }) => {
    const { number } = useSpring({
      from : { number:0 },
      number:n,
      delay:0,
      config:{mass:1,tension:30,friction:10},
    });
    return(
      view && (
        <animated.div className="md:text-8xl sm1:text-6xl sm2:text-7xl">{ number.to((n)=> n.toFixed(0)) }</animated.div>
      ) 
    ) 
  }
  
  return (
    <div className='text-white bg-[#000] border-0 border-red-400'>  
      <motion.div 
        className="font-extrabold tracking-tighter text-white border-0 border-red-500 font-mine2 md:text-10xl sm1:text-8xl"
        style={{x:toRight}}
      >
        <span className='font-mine2'>
          <span className="font-stencil-scrollnew">FEATURED</span>
          <span>FEATURED</span>
          <span className="font-stencil-scrollnew">FEATURED</span>
          <span>FEATURED</span>
          <span className="font-stencil-scrollnew">FEATURED</span>
          <span>FEATURED</span>
          <span className="font-stencil-scrollnew">FEATURED</span>
          <span>FEATURED</span>
          <span className="font-stencil-scrollnew">FEATURED</span>
          <span>FEATURED</span>
          <span className="font-stencil-scrollnew">FEATURED</span>
          <span>FEATURED</span>
          <span className="font-stencil-scrollnew">FEATURED</span>
          <span>FEATURED</span>
          <span className="font-stencil-scrollnew">FEATURED</span>
          <span>FEATURED</span>
          <span className="font-stencil-scrollnew">FEATURED</span>
        </span>
      </motion.div>      
      <motion.div 
        style={{x:toLeft}}
        className="tracking-tighter text-white border-0 border-red-500 sm1:mt-0 md:mt-4 md:text-10xl sm1:text-8xl"
      >
        <span className='font-mine2'>
          <span>WORK</span>
          <span className="font-stencil-scrollnew">WORK</span>
          <span>WORK</span>
          <span className="font-stencil-scrollnew">WORK</span>
          <span>WORK</span>
          <span className="font-stencil-scrollnew">WORK</span>
          <span>WORK</span>
          <span className="font-stencil-scrollnew">WORK</span>
          <span>WORK</span>
          <span className="font-stencil-scrollnew">WORK</span>
          <span>WORK</span>
          
        </span>
      </motion.div>
      <div className='m-auto mt-4 font-bold border-0 border-red-500 md:text-lg sm1:w-3/5 md:w-2/5 lg:w-1/5 sm1:text-md'>
        <div className='ml-auto text-xl text-center text-blue-400 border-0 border-red-500 xl:w-full sm1:w-full'>
          Projects
        </div>
      </div>
      {/* 1st proj */}
      <div className='relative mt-20 border-0 border-red-500'>
        <div className='relative border-0 border-blue-400'>
          <Image src="/media/projects/hotel/hotel23.png" alt="" width={300} height={200} className='relative z-30 transition duration-300 ease-in-out -translate-x-1/2 border-0 border-red-500 cursor-pointer left-1/2 lg:hover:opacity-0' />
          <Image src="/media/projects/hotel/hotel24.png" alt="" width={300} height={200} className='absolute top-0 z-20 -translate-x-1/2 border-0 border-red-500 sm1:hidden lg:block left-1/2'/>
          <div className='absolute top-0 z-40 whitespace-nowrap overflow-hidden font-extrabold text-center sm1:text-[20rem] md:text-[30rem] lowercase text-white tracking-tighter border-0 border-red-500 w-fit h-fit p-0 leading-[24rem] mt-56 md:-left-[10rem] lg:left-1/2'>01.</div>
          <Lottie animationData={sketch} className='absolute top-0 mt-64 -rotate-45 md:block sm1:hidden invert grayscale left-1/2'/>
        </div>
        <div className='relative flex mt-0 border-0 border-green-500 sm1:flex-col lg:flex-row'>
          <div className='mt-8 border-0 border-red-500 sm1:w-full lg:w-1/2'>
            <Lottie animationData={Vacays} className="overflow-hidden border-0 border-red-500 pt-36 sm1:hidden lg:flex h-fit rounded-3xl invert-0" loop={true}/>
          </div> 
          <div className='bg-cover border-0 border-red-500 sm1:w-full lg:w-1/2'>
            <div className='m-auto mt-16 mb-16 text-white border-0 border-blue-400 sm1:p-8 md:p-20 lg:p-4 xl:p-20 sm1:w-full lg:w-4/5 rounded-3xl bg-black/20 backdrop-filter backdrop-blur-sm'>
              <div className='flex justify-between'>
                <p className='text-5xl font-extrabold underline underline-offset-8'>Hotel-Booking <span className='text-blue-400'>Website</span></p>
                <a href={'https://github.com/himuexe/Hotel-Booking-Website'} target="_blank" className='hover:scale-[1.2] transition ease-in-out duration-300'>
                  <div className='pt-2'>
                    <span className="text-4xl"><FaGithub /></span>
                  </div>
                </a>
              </div>
              <p className='mt-12'>
                This is a full-stack Hotel-Booking Website. Developed the frontend using React with Typescript and styled with TailwindCSS, and backend is created with the help of Express js and MongoDB. The website offers features such as pagination , search functionality , sorting , hotel-management, Secure Authorization using JWT , Payment verification using Stripe and also end to end tests using playwright  .
              </p>
              <p className='mt-10 text-2xl font-extrabold text-blue-400'>Tech stack used :</p>
              <div className='flex flex-wrap mt-4 -ml-2 space-x-2 space-y-2'>
                <p className='p-2 mt-2 ml-2 text-white bg-white/20 rounded-xl'>React.js</p>
                <p className='p-2 text-white bg-white/20 rounded-xl'>Tailwind</p>
                <p className='p-2 text-white bg-white/20 rounded-xl'>TypeScript</p>
                <p className='p-2 text-white bg-white/20 rounded-xl'>Express</p>
                <p className='p-2 text-white bg-white/20 rounded-xl'>MongoDB</p>
                <p className='p-2 text-white bg-white/20 rounded-xl'>Cloudinary</p>
                <p className='p-2 text-white bg-white/20 rounded-xl'>Stripe</p>
                <p className='p-2 text-white bg-white/20 rounded-xl'>Playwright</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* 2nd proj */}
      <div className='relative mt-8 border-0 border-red-500'>
        <div className='relative border-0 border-blue-400'>
          <Image src="/media/projects/hub/hub23.png" alt="" width={300} height={200} className='relative z-30 transition duration-300 ease-in-out -translate-x-1/2 border-0 border-red-500 cursor-pointer left-1/2 lg:hover:opacity-0' />
          <Image src="/media/projects/hub/hub24.png" alt="" width={300} height={200} className='absolute top-0 z-20 -translate-x-1/2 border-0 border-red-500 sm1:hidden lg:block left-1/2'/>
          <div className='absolute top-0 z-40 whitespace-nowrap overflow-hidden font-extrabold text-center sm1:text-[20rem] md:text-[30rem] lowercase text-white tracking-tighter border-0 border-red-500 w-fit h-fit p-0 leading-[24rem] mt-56'>02.</div>
          <Lottie animationData={sketch} className='absolute top-0 mt-64 -rotate-45 md:block sm1:hidden invert grayscale'/>
        </div>
        <div className='relative flex mt-0 border-0 border-green-500 sm1:flex-col lg:flex-row'>
          <div className='bg-cover border-0 border-red-500 sm1:w-full lg:w-1/2'>
            <div className='m-auto mt-16 mb-16 text-white border-0 border-blue-400 sm1:p-8 md:p-20 lg:p-4 xl:p-20 sm1:w-full lg:w-4/5 rounded-3xl bg-black/20 backdrop-filter backdrop-blur-sm'>
              <div className='flex justify-between'>
                <p className='text-5xl font-extrabold underline underline-offset-8'>Moovies <span className='text-blue-400'>Hub&nbsp;</span></p>
                <a href={'https://github.com/himuexe/Movie-App'} target="_blank" className='hover:scale-[1.2] transition ease-in-out duration-300'>
                  <div className='pt-2'>
                    <span className="text-4xl"><FaGithub /></span>
                  </div>
                </a>
              </div>
              <p className='mt-12'>
              Movie Review Site Template made using Next.js and styled with Tailwind CSS. It has the following features - Responsiveness , Live Updation , Searching and Sorting.
              </p>
              <p className='mt-10 text-2xl font-extrabold text-blue-400'>Tech stack used :</p>
              <div className='flex flex-wrap mt-4 -ml-2 space-x-2 space-y-2'>
                <p className='p-2 mt-2 ml-2 text-white bg-white/20 rounded-xl'>React.js</p>
                <p className='p-2 text-white bg-white/20 rounded-xl'>TypeScript</p>
                <p className='p-2 text-white bg-white/20 rounded-xl'>Tailwind</p>
              </div>
            </div>
          </div>
          <div className='mt-8 border-0 border-red-500 sm1:w-full lg:w-1/2'>
            <Lottie animationData={Moovies} className="overflow-hidden border-0 border-red-500 pt-36 sm1:hidden lg:flex h-fit rounded-3xl invert-0" loop={true}/>
          </div> 
        </div>
      </div>
      {/* 3rd proj */}
      <div className='relative mt-8 border-0 border-red-500'>
        <div className='relative border-0 border-blue-400'>
          <Image src="/media/projects/duty/duty23.png" alt="" width={300} height={200} className='relative z-30 transition duration-300 ease-in-out -translate-x-1/2 border-0 border-red-500 cursor-pointer left-1/2 lg:hover:opacity-0' />
          <Image src="/media/projects/duty/duty24.png" alt="" width={300} height={200} className='absolute top-0 z-20 -translate-x-1/2 border-0 border-red-500 sm1:hidden lg:block left-1/2'/>
          <div className='absolute top-0 z-40 whitespace-nowrap overflow-hidden font-extrabold text-center sm1:text-[20rem] md:text-[30rem] lowercase text-white tracking-tighter border-0 border-red-500 w-fit h-fit p-0 leading-[24rem] mt-56 md:-left-[10rem] lg:left-1/2'>03.</div>
          <Lottie animationData={sketch} className='absolute top-0 mt-64 -rotate-45 md:block sm1:hidden invert grayscale left-1/2'/>
        </div>
        <div className='relative flex mt-0 border-0 border-green-500 sm1:flex-col lg:flex-row'>
          <div className='mt-8 border-0 border-red-500 sm1:w-full lg:w-1/2'>
            <Lottie animationData={Duty} className="overflow-hidden border-0 border-red-500 pt-36 sm1:hidden lg:flex h-fit rounded-3xl invert-0" loop={true}/>
          </div> 
          <div className='bg-cover border-0 border-red-500 sm1:w-full lg:w-1/2'>
            <div className='m-auto mt-16 mb-16 text-white border-0 border-blue-400 sm1:p-8 md:p-20 lg:p-4 xl:p-20 sm1:w-full lg:w-4/5 rounded-3xl bg-black/20 backdrop-filter backdrop-blur-sm'>
              <div className='flex justify-between'>
                <p className='text-5xl font-extrabold underline underline-offset-8'>Hack of<span className='text-blue-400'>Duty</span></p>
                <a href={'https://github.com/himuexe/Hackathon-Frontend'} target="_blank" className='hover:scale-[1.2] transition ease-in-out duration-300'>
                  <div className='pt-2'>
                    <span className="text-4xl"><FaGithub /></span>
                  </div>
                </a>
              </div>
              <p className='mt-12'>
                Introducing a hot-looking Frontend template website for hackathons . This Hackathon template is based on Call of Duty theme and has stunning animations with framer.
              </p>
              <p className='mt-10 text-2xl font-extrabold text-blue-400'>Tech stack used :</p>
              <div className='flex flex-wrap mt-4 -ml-2 space-x-2 space-y-2'>
                <p className='p-2 mt-2 ml-2 text-white bg-white/20 rounded-xl'>React</p>
                <p className='p-2 text-white bg-white/20 rounded-xl'>Tailwind</p>
                <p className='p-2 text-white bg-white/20 rounded-xl'>Framer</p>
                <p className='p-2 text-white bg-white/20 rounded-xl'>Gsap</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Projects