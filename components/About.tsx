import { motion } from "framer-motion";
const textAnimate = {
  offscreen: { x: 50, opacity: 0 },
  onscreen: {
    x: 0,
    opacity: 1,
    transition: { type: "spring", bounce: 0.4, duration: 1 },
  },
};
const textUpAnimate = {
  offscreen: { y: 50, opacity: 0 },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", bounce: 0.4, duration: 1 },
  },
};

const About = () => {
  return (
    <div
      id="about"
      className="bg-white py-[100px] w-screen max-w-full desktop:container"
    >
      <div className=" flex flex-row max-w-[900px] mx-auto tablet:block mobile:block mobile:px-3">
        <motion.div
          variants={textAnimate}
          initial={{ y: 20, opacity: 0 }}
          whileInView={{
            y: 0,
            opacity: 1,
            transition: { type: "spring", bounce: 0.2, duration: 1 },
          }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ staggerChildren: 1 }}
          className="flex-grow my-auto text-right uppercase px-6 tablet:text-center mobile:text-center"
        >
          <h1 className="font-poppins text-3xl font-bold ">About</h1>
          <p className="text-gray-500">Me, Myself and I</p>
          <div className="h-52 tablet:h-8 mobile:h-8"></div>
        </motion.div>

        <motion.div
          variants={textAnimate}
          initial={{ y: 20, opacity: 0 }}
          whileInView={{
            y: 0,
            opacity: 1,
            transition: { type: "spring", bounce: 0.2, duration: 1 },
          }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ staggerChildren: 1 }}
          className=" font-proxima text-[17px] w-[65%] px-6 py-2 tablet:w-full mobile:w-full mobile:px-2 text-gray-500"
        >
          <motion.p variants={textUpAnimate}>
            Hello! My name is <b>Ansh Rathod</b>, I have been interested in app
            development for many years and have been actively working on
            building mobile/desktop applications for the past three years. 
          </motion.p>
          <br />
          <motion.p variants={textUpAnimate}>
            Fast-Forward to 2022. I built an android application called
            <a href="https://play.google.com/store/apps/details?id=com.cineast.android&hl=en">
              <b> &quot;Cineast&quot; </b>
            </a>
            Which is a social media platform that I built specifically for movie
            enthusiasts. It allows users to connect with other movie fans, share
            their favorite films and recommendations.   
          </motion.p>
          <br />

          <motion.p variants={textUpAnimate}>
          What I did in 2023? realised that distributing/marketing your shiney apps is harder than building it. learned too many lessions, well i&apos;m not gonna put all up here. oh I remember i won that supabase hacakthon with my tweet scheduling desktop app (that app is still super good).
          </motion.p>

          <motion.p variants={textUpAnimate}>
          2024 is it? I am building desktop apps now! It&apos;s hard to keep updating the website. might built better website soon because this is very outdated/most of the stuff is missing.
          Better you should follow me on Twitter/X. I am quite active there.          
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
