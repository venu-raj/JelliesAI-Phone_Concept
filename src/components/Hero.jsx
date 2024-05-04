import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { heroVideo, smallHeroVideo } from '../utils';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [videoSrc, setVideoSrc] = useState(window.innerWidth < 760 ? smallHeroVideo : heroVideo)

  const handleVideoSrcSet = () => {
    if (window.innerWidth < 760) {
      setVideoSrc(smallHeroVideo)
    } else {
      setVideoSrc(heroVideo)
    }
  }

  useEffect(() => {
    window.addEventListener('resize', handleVideoSrcSet);

    return () => {
      window.removeEventListener('reisze', handleVideoSrcSet)
    }
  }, [])

  useGSAP(() => {
    gsap.to('#hero', { opacity: 1 })
    gsap.to('#cta', { opacity: 1, y: -50 })
  }, [])

  return (
    <section className="w-full nav-height bg-black relative">
      <div className="h-5/6 w-full flex-center flex-col">
        <p id="hero" className="text-center font-semibold text-5xl text-gray-100 opacity-0 mb-6 max-md:mb-10">Introducing Jellies AI Phone</p>
        <p id="hero" className="hero-title">India's First AI Powerded Phone.</p>
        {/* <div className="md:w-10/12 h-3/12 w-9/12"> */}
        {/* <video className="pointer-events-none" autoPlay muted playsInline={true} key={"videoSrc2"}>
            <source src={"assets/videos2/blackberry_edited_1.mp4"} type="video/mp4" />
          </video> */}
        <img src="/assets/videos2/WhatsApp.jpeg" alt="shdj gvc y" />
        {/* </div> */}
      </div>

      <div
        id="cta"
        className="flex flex-col items-center opacity-0 translate-y-20"
      >
        {/* <a href="#highlights" className="btn">Buy</a> */}
        {/* <p className="font-normal text-xl">From $199/month or $999</p> */}
      </div>
    </section>
  )
}

export default Hero