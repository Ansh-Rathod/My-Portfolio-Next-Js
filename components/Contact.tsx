import Icon from "@/components/Icon";
import { motion } from "framer-motion";
function Contact() {
  return (
    <motion.div
      initial={{ y: 10, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1, transition: { delay: 0.4 } }}
      viewport={{ once: true, amount: 0.4 }}
      id="contact"
    >
      <div className="bg-white pt-[130px] pb-[60px] tablet:px-8 mini-laptop:px-8 laptop:px-8  mobile:px-4 border-slate-200 m-auto max-w-[1000px] desktop:container">
        <div className="px-2">
          <h1 className="font-poppins font-bold mb-1.5 text-3xl uppercase text-center">
            Contact Him
          </h1>
          <p className="font-proxima text-slate-500 text-[18px] text-center mt-2">
            Leave a message on any of his social media, He&apos;ll reach out to
            you as soon as Possible.
            <br /> Thank you! for visiting.
          </p>
        </div>
        <motion.div
          initial={{ y: 10, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1, transition: { delay: 0.4 } }}
          viewport={{ once: false, amount: 0.6 }}
          transition={{ staggerChildren: 0.5 }}
          className="px-14 tablet:px-10 py-12 flex flex-row mobile:px-8 justify-center items-center"
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

      <div className="py-6 border-t-[0.6px] mobile:px-6 tablet:px-8 border-slate-200 text-center text-[14px] text-slate-500">
        <p>
          © 2024 Ansh Rathod. All rights reserved. last updated: Dec 9, 2024
        </p>
      </div>
    </motion.div>
  );
}

export default Contact;
