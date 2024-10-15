import React, { useState,useRef, useEffect } from 'react'
import { useHover } from "@uidotdev/usehooks";


const ScrollText = ({ screen,i,setCurrentImage,currentImage}) => {
  const [textRef, hovering] = useHover(); 
  const size = hovering ? 300 : 40;
  const [ showAnimation,setShowAnimation ] = useState(false);
  const ref = useRef(null)
  const toggleAnimation = (e) => {
    if(e[0]?.isIntersecting){
      setShowAnimation(true)
      setCurrentImage(i)
    }
  }
  const options = {
    root:null,
    rootMargin:'0px',
    threshold:0.5
  }
  useEffect(()=>{
    const observer = new IntersectionObserver(toggleAnimation,options)
    if(ref.current){
      observer.observe(ref.current)
    }
    return () => {
      if(ref.current){
        observer.unobserve(ref.current)
      }
    }
  },[])
  return (
    <div className={`overflow-hidden xl:p-20 lg:p-10 border-0 border-red-400 ${showAnimation ? 'text-visible' : 'screen-text'}`} ref={ref}>
      <div className='flex font-bold tracking-tighter border-0 border-blue-500'>
        <div className='p-4 text-white border-0 border-green-500 xl:text-9xl font-stencil-scroll lg:text-8xl md:text-6xl sm2:text-5xl sm1:hidden md:hidden'>
          {screen.id}
          <span className='lg:text-6xl md:text-5xl sm2:text-4xl sm1:text-3xl sm1:hidden'>#</span>
        </div>
        <div className='flex flex-col border-0 border-softPink'>
          <div className='flex flex-col border-0 border-yellow'>
            <div className='w-4/5 m-auto font-extrabold border-0 xl:p-6 lg:p-4 border-cyan xl:text-8xl lg:text-7xl md:text-8xl md:pt-2 lg:pt-0 sm2:text-5xl sm1:text-4xl sm1:p-4 sm1:pl-0'> 
              <div className='text-blue-400'>{ screen.heading1 }</div>
              <div className='text-blue-400'>{ screen.heading2 }</div>
            </div>
          </div>
          <div className='w-4/5 m-auto font-light tracking-normal text-left text-white border-0 border-red-500 lg:p-8 xl:text-lg lg:text-lg md:text-lg sm1:mt-0 md:mt-8 lg:mt-0 sm1:text-xs'>
            { screen.description}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ScrollText
