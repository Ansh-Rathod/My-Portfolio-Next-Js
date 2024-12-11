import { motion } from "framer-motion";
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
      <div className=" mx-auto  flex">
        <div
          className=" flex flex-col 
          tablet:w-full  tablet:m-auto
          mobile:w-full align-center  mx-auto
          px-6 mobile:px-8   max-w-[600px]
        "
        >
          <div>
            <motion.div
              initial={"offscreen"}
              whileInView={"onscreen"}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ staggerChildren: 0.5 }}
              className="  mt-32"
            >
              <motion.p
                variants={textAnimate}
                className="font-proxima text-[18px]  mobile:text-[18px] mobile:py-2 text-slate-500 "
              >
                <p className="mt-1">
                  Hello 👋, This page is about someone named
                </p>
              </motion.p>
              <h1 className="my-2 font-bold font-poppins text-5xl leading-snug  mini-laptop:leading-normal  tablet:leading-sung mobile:leading-[1.1]">
                ANSH RATHOD
              </h1>
              <p className="font-proxima text-[18px] text-slate-500 mini-laptop:text-[20px] tablet:text-[18px] mobile:text-[18px] mobile:py-2">
                Who is a full-stack developer, Builds apps for mobile, desktop
                and web platforms. He stays quite active on X/Twitter shares
                journey of building apps and other random things, plays chess ♟️
                somedays, does cycling 🚴, gym, watches movies, tvshows, also
                hates linkedin.
              </p>
            </motion.div>
            <motion.div
              initial={{ y: 10, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1, transition: { delay: 0.4 } }}
              viewport={{ once: false, amount: 0.6 }}
              className="  py-12 flex flex-row  text-center "
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
                i={5}
                url="https://discord.com/users/768376622243119114"
                name="discord"
                classes="fa-brands fa-discord"
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
);

export default Intro;
