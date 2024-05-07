import imageHehe from "../assets/img/hehe.jpg";
import imageHehe2 from "../assets/img/anjays.jpg";
import imageHehe4 from "../assets/img/anjayhehe.jpg";

const About = () => {
  return (
    <section className="bg-black grid grid-cols-2 relative ">
      <img className="w-full h-full" src={imageHehe4} alt={imageHehe4} />
      <div className="grid  grid-rows-2 w-full  place-content-center place-items-center ">
        <div>
          <img
            className="w-screen object-cover h-[130px] md:h-[320px] lg:h-full max-h-[500px]"
            src={imageHehe2}
            alt={imageHehe2}
          />
        </div>
        <div>
          <img
            className="w-screen object-cover h-[140px] md:h-[320px] lg:h-full max-h-[500px] translate-y-[-10px] "
            src={imageHehe}
            alt={imageHehe}
          />
        </div>
        <div className="absolute top-0 left-0 right-0 bottom-0 grid min-h-full place-content-center  bg-black/60 w-full">
          <div className="max-w-[300px] md:max-w-[600px]  ">
            <div className="grid grid-cols-2 items-center gap-16">
              <div className="text-2xl my-5 text-white">
                <div className="relative">
                  <p className="font-extrabold  md:text-7xl text-white">EAT</p>
                  <p className="font-extrabold md:text-7xl absolute top-[-1px] text-black">
                    EAT
                  </p>
                </div>
                <p className="font-extrabold lg:text-7xl">CODE</p>
                <p className="font-extrabold lg:text-7xl">SLEEP</p>
                <div className="relative">
                  <p className="font-extrabold text-3xl md:text-7xl">REPEAT</p>
                  <p className="font-extrabold text-3xl md:text-7xl absolute top-[1px] text-black">
                    REPEAT
                  </p>
                </div>
              </div>
              <div className="relative">
                <h1 className="text-2xl md:text-6xl lg:text-7xl  font-extrabold text-white">
                  <span className="text-2xl md:text-6xl lg:text-7xl underline">
                    J
                  </span>
                  AKARTA INDONESIA
                </h1>
                <p className="absolute md:top-[-10px] lg:translate-x-2  text-white font-bold ">
                  +6221
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
