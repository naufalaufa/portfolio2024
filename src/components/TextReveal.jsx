import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { IoCodeSharp } from "react-icons/io5";
import { SiJusteat } from "react-icons/si";
import { GiNightSleep } from "react-icons/gi";
import { BsArrowRepeat } from "react-icons/bs";

gsap.registerPlugin(ScrollTrigger);

const TextReveal = () => {
  const refOneTextReveal = useRef(null);
  const refTwoTextReveal = useRef(null);
  const refThreeTextReveal = useRef(null);
  const refForTextReveal = useRef(null);
  const refFiveTextReveal = useRef(null);
  const refSixTextReveal = useRef(null);
  const refSevenTextReveal = useRef(null);
  const refEightTextReveal = useRef(null);
  useEffect(() => {
    gsap.to(refOneTextReveal.current, {
      scrollTrigger: {
        trigger: refOneTextReveal.current,
        scrub: 1,
      },
      x: 30,
    });
    gsap.to(refTwoTextReveal.current, {
      scrollTrigger: {
        trigger: refTwoTextReveal.current,
        scrub: true,
      },
      x: 30,
    });
    gsap.to(refThreeTextReveal.current, {
      scrollTrigger: {
        trigger: refThreeTextReveal.current,
        scrub: true,
      },
      x: 30,
    });
    gsap.to(refForTextReveal.current, {
      scrollTrigger: {
        trigger: refForTextReveal.current,
        scrub: true,
      },
      x: -30,
    });
    gsap.to(refFiveTextReveal.current, {
      scrollTrigger: {
        trigger: refFiveTextReveal.current,
        scrub: true,
      },
      x: -30,
    });
    gsap.to(refSixTextReveal.current, {
      scrollTrigger: {
        trigger: refSixTextReveal.current,
        scrub: true,
      },
      x: -30,
    });
    gsap.to(refSevenTextReveal.current, {
      scrollTrigger: {
        trigger: refSevenTextReveal.current,
        scrub: true,
      },
      x: -30,
    });
    gsap.to(refEightTextReveal.current, {
      scrollTrigger: {
        trigger: refEightTextReveal.current,
        scrub: true,
      },
      x: -30,
    });
  }, []);
  return (
    <section className="translate-y-[-10px]">
      <div className="bg-black p-1 grid grid-cols-4 border-t-2 -rotate-1 border-white place-items-center overflow-hidden ">
        <div
          ref={refOneTextReveal}
          className="md:text-2xl mr-8 font-bold text-[10px] lg:text-4xl  text-white whitespace-nowrap flex items-center gap-2"
        >
          <p>EAT</p>
          <span>
            <SiJusteat />
          </span>
        </div>
        <div
          ref={refTwoTextReveal}
          className="md:text-2xl font-bold text-[10px] lg:text-4xl text-white whitespace-nowrap flex items-center gap-2"
        >
          <p>CODE</p>
          <span>
            <GiNightSleep />
          </span>
        </div>
        <div
          ref={refSixTextReveal}
          className="md:text-2xl font-bold ml-8 text-[10px] lg:text-4xl text-white whitespace-nowrap flex items-center gap-2"
        >
          <p>SLEEP</p>
          <span>
            <IoCodeSharp />
          </span>
        </div>
        <div
          ref={refThreeTextReveal}
          className="md:text-2xl font-bold ml-8 text-[10px] lg:text-4xl text-white whitespace-nowrap flex items-center gap-2"
        >
          <p>REPEAT</p>
          <span>
            <BsArrowRepeat />
          </span>
        </div>
      </div>
      <div className="bg-white p-1 -rotate-9 border-b-black border-b-2 grid grid-cols-4 place-items-center overflow-hidden">
        <div
          ref={refForTextReveal}
          className="text-[10px] flex items-center gap-2 mr-8  md:text-2xl lg:text-4xl font-bold   whitespace-nowrap text-black"
        >
          <p>EAT</p>
          <span>
            <SiJusteat />
          </span>
        </div>
        <div
          ref={refFiveTextReveal}
          className="text-[10px] flex items-center gap-2 md:text-2xl lg:text-4xl font-bold   whitespace-nowrap text-black"
        >
          <p>CODE</p>
          <span>
            <GiNightSleep />
          </span>
        </div>
        <div
          ref={refSevenTextReveal}
          className="text-[10px] flex items-center gap-2 ml-8 md:text-2xl lg:text-4xl font-bold whitespace-nowrap text-black"
        >
          <p>SLEEP</p>
          <span>
            <IoCodeSharp />
          </span>
        </div>
        <div
          ref={refSixTextReveal}
          className="text-[10px] flex items-center gap-2 ml-8 md:text-2xl lg:text-4xl font-bold whitespace-nowrap text-black"
        >
          <p>REPEAT</p>
          <span>
            <BsArrowRepeat />
          </span>
        </div>
      </div>
    </section>
  );
};

export default TextReveal;
