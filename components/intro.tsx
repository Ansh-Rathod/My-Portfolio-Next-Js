import { motion } from "framer-motion";
import Image from "next/image";
import Icon from "../components/Icon";
import NavbarItem from "../components/NavbarItem";

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
    <div id="home" className="box-border  bg-no-repeat ">
      <div className=" backdrop-blur-3xl bg-white/70    ">
        <div className="desktop:max-w-[1800px] m-auto  flex">
          <div
            className=" flex flex-col 
          tablet:w-full  tablet:m-auto
          mobile:w-full align-center  mx-auto
        "
          >
            <div className="py-4 ">
              <ul className="flex flex-row justify-between px-14 tablet:px-8 mobile:px-4">
                <NavbarItem name="home" />
                <NavbarItem name="About" />
                <NavbarItem name="skills" />

                <NavbarItem name="projects" />
              </ul>
            </div>
            <div>
              <motion.div
                initial={"offscreen"}
                whileInView={"onscreen"}
                viewport={{ once: false, amount: 0.5 }}
                transition={{ staggerChildren: 0.5 }}
                className="px-16 tablet:px-10 mobile:px-8 text-center mt-32"
              >
                <motion.p
                  variants={textAnimate}
                  className="font-proxima text-xl leading-10 mobile:text-[22px] mobile:py-2 text-slate-500 "
                >
                  HELLO👋, THIS WEBSITE IS ABOUT SOMEONE NAMED
                </motion.p>
                <h1 className=" font-bold font-poppins text-5xl  leading-snug mini-laptop:text-4xl mini-laptop:leading-normal tablet:text-4xl tablet:leading-sung mobile:leading-[1.1]">
                  ANSH RATHOD
                </h1>
                <p className="font-proxima text-[18px] max-w-[600px] text-slate-500 mini-laptop:text-[20px] tablet:text-[18px] mobile:text-[18px] mobile:py-2">
                  Who is A full-stack developer, Building apps for mobile,
                  desktop and web platforms.
                </p>
              </motion.div>
              <motion.div
                initial={{ y: 10, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1, transition: { delay: 0.4 } }}
                viewport={{ once: false, amount: 0.6 }}
                className="py-12 flex flex-row  align-center justify-center text-center mobile:px-8 "
              >
                <Icon
                  i={1}
                  url="https://github.in/Ansh-Rathod"
                  name="Github"
                  classes="fa-brands fa-github"
                />

                <Icon
                  i={2}
                  url="https://twitter.com/anshrathodfr"
                  classes="fa-brands fa-twitter"
                  name="Twitter"
                />
                <Icon
                  i={3}
                  url="https://www.linkedin.com/in/ansh-rathod-478a81210/"
                  classes="fa-brands fa-linkedin"
                  name="Linkedin"
                />

                <Icon
                  i={5}
                  url="https://t.me/anshrathodfr"
                  name="Instagram"
                  classes="fa-brands fa-telegram"
                />
                <Icon
                  i={6}
                  url="mailto:anshrathod29@gmail.com"
                  classes="fa-solid fa-envelope"
                  name="Email"
                />
                <Icon
                  i={7}
                  url="https://www.instagram.com/anshrathodfr"
                  name="Instagram"
                  classes="fa-brands fa-instagram"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Intro;
