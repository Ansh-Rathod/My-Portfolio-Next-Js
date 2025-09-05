import { motion } from "framer-motion";
import { smallContainer, textBody } from "pages/_app";
import Icon from "../components/Icon";

const Intro = () => (
  <div>
    <div
      id="home"
      className={`${smallContainer} mt-32 border-t border-b py-10`}
    >
      <div className={` flex flex-col align-center`}>
        <div>
          <motion.div
            initial={"offscreen"}
            whileInView={"onscreen"}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ staggerChildren: 0.5 }}
            className="  "
          >
            <motion.div
              // variants={textAnimate}
              className="text-[18px]    text-slate-500 "
            >
              <p className="mt-1">Hello 👋, This page is about someone named</p>
            </motion.div>
            <h1 className="my-2 font-bold text-5xl leading-snug     ">
              ANSH RATHOD
            </h1>
            <p className={`${textBody} text-slate-500 `}>
              Who is a full-stack developer, Builds apps for mobile, desktop and
              web platforms. He stays quite active on X/Twitter shares journey
              of building apps and other random things, plays chess ♟️ somedays,
              does cycling 🚴, gym, watches movies, tvshows.
            </p>
          </motion.div>
          <motion.div
            initial={{ y: 10, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1, transition: { delay: 0.4 } }}
            viewport={{ once: false, amount: 0.6 }}
            className="  pt-12 flex flex-row  text-center "
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
);

export default Intro;
