import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const textAnimate = {
  offscreen: { y: 50, opacity: 0 },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", bounce: 0.4, duration: 1 },
  },
};

const Intro = () => (
  <div>
    <div
      id="home"
      className="box-border  bg-no-repeat 
      bg-cover bg-[url('/memes-intro.png')]"
    >
      <div className=" backdrop-blur-3xl bg-white/70  ">
        <div className="desktop:max-w-[1800px] m-auto  flex">
          <div
            className="w-[55%] flex flex-col justify-between h-screen max-h-[808px]
          tablet:w-full tablet:max-w-[500px] tablet:m-auto
          mobile:w-full
        "
          >
            <div className="py-4 ">
              <ul className="flex flex-row items-end  px-14 tablet:px-8 mobile:px-4">
                <Link href={`/`} scroll={true}>
                  <li
                    className=" cursor-pointer mobile:text-[14px] tablet:text-[14px]
       hover:text-blue-700 mx-3 tablet:px-1 my-1 font-bold text-xl  hover:border-b-blue-700 hover:border-b"
                  >
                    memeloper fr who?
                  </li>
                </Link>
              </ul>
            </div>
            <motion.div
              initial={"offscreen"}
              whileInView={"onscreen"}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ staggerChildren: 0.5 }}
              className="px-16 tablet:px-10 mobile:px-8"
            >
              <motion.p
                variants={textAnimate}
                className="text-gray-500 font-proxima text-xl leading-10 mobile:text-[18px] mobile:py-2 "
              >
                Hold on you dumb,
              </motion.p>
              <h1 className=" font-bold font-poppins text-5xl  leading-snug mini-laptop:text-4xl mini-laptop:leading-normal tablet:text-4xl tablet:leading-sung mobile:leading-[1.1]">
                MEMELOPER WhAT??
              </h1>

              <p className="font-proxima text-[22px] max-w-[600px] text-slate-800 mini-laptop:text-[20px] tablet:text-[18px] mobile:text-[18px] mobile:py-2">
                From Code to Comic: Check the Hilarious Journey of a Programmer
                through Memes.
              </p>
              <motion.div
                initial={{ y: 10, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1, transition: { delay: 0.4 } }}
                viewport={{ once: false, amount: 0.6 }}
                className="my-6 text-white  w-fit mobile:px-8  uppercase font-apple rounded-lg
                  flex flex-row justify-center items-center text-center cursor-pointer bg-blue-500 py-1.5 pl-5 pr-2
                   transition-all ease-in-out shadow shadow-blue-400"
              >
                follow on
                <motion.i
                  className={`fa-brands fa-twitter px-3 group-hover:text-blue-700 group-hover:scale-110`}
                ></motion.i>{" "}
              </motion.div>
            </motion.div>
            <div></div>
          </div>
          <div className="w-[60%] h-screen max-h-[808px] tablet:hidden mobile:hidden ">
            <div className=" w-full h-full relative">
              <Image
                src="/memes-intro.png"
                layout="fill"
                objectFit="contain"
                className="object-left h-screen "
                alt="intro"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Intro;
