import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Icon from "../Icon";

const textAnimate = {
  offscreen: { y: 50, opacity: 0 },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: { type: "spring" as const, bounce: 0.4, duration: 1 },
  },
};

const Intro = () => (
  <div>
    <div
      id="home"
      className="box-border  bg-no-repeat 
      bg-cover  bg-center border-b "
    >
      <div className=" backdrop-blur-3xl bg-white/70  ">
        <div className=" m-auto  flex">
          <div
            className="w-[55%] flex flex-col justify-between h-screen max-h-[808px]
            
          
        "
          >
            <div className="py-4 ">
              <ul className="flex flex-row items-end  px-14  ">
                <Link href={`/`} scroll={true}>
                  <li
                    className=" cursor-pointer 
       hover:text-blue-700 mx-3  my-1 font-bold text-xl  hover:border-b-blue-700 hover:border-b"
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
              className="px-16  
            >
              <motion.p
                variants={textAnimate}
                className="text-gray-500 text-xl leading-10 
              >
                Hold on,
              </motion.p>
              <h1 className=" font-bold text-5xl  leading-snug     
                MEMELOPER WhAT??
              </h1>

              <p className="text-[22px] max-w-[600px] text-slate-800   
                Don&rsquo;t know? You should find out. Check the Hilarious
                Journey of a Programmer through Memes.
              </p>
            </motion.div>
            <motion.div
              initial={{ y: 10, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1, transition: { delay: 0.4 } }}
              viewport={{ once: false, amount: 0.6 }}
              className="px-14  py-12 flex flex-row 
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
                i={4}
                url="https://discordapp.com/users/768376622243119114"
                classes="fa-brands fa-discord"
              />
              <Icon
                i={5}
                url="mailto:anshrathod29@gmail.com"
                classes="fa-solid fa-envelope"
                name="Email"
              />
              <Icon
                i={6}
                url="https://www.instagram.com/anshrathodfr"
                name="Instagram"
                classes="fa-brands fa-instagram"
              />
            </motion.div>
          </div>
          <div className="w-[60%] h-screen max-h-[808px]  
            <div className=" w-full h-full relative">
              <Image
                src="/memes-intro.png"
                fill
                className="object-contain object-left"
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
