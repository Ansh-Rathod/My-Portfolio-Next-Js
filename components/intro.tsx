import Image from "next/image";
import NavbarItem from "../components/NavbarItem";
import Icon from "../components/Icon";

const Intro = () => (
  <div>
    <div
      id="home"
      className="box-border  bg-no-repeat 
      border-t-[0.6px] border-slate-200
      bg-cover bg-[url('/daniel-huniewicz-iQaFCjuMTfo-unsplash.jpg')]"
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
              <ul className="flex flex-row justify-between px-14 tablet:px-8 mobile:px-4">
                <NavbarItem name="home" />
                <NavbarItem name="About" />
                <NavbarItem name="skills" />
                <NavbarItem name="projects" />
              </ul>
            </div>
            <div className="px-16 tablet:px-10 mobile:px-8">
              <p className="font-proxima text-xl leading-10 mobile:text-[18px] mobile:py-2 ">
                HELLO👋, I AM
              </p>
              <b className=" font-bold font-poppins text-5xl  leading-snug mini-laptop:text-4xl mini-laptop:leading-normal tablet:text-4xl tablet:leading-sung mobile:leading-[1.1]">
                ANSH RATHOD
              </b>
              <p className="font-proxima text-[22px] text-slate-800 mini-laptop:text-[20px] tablet:text-[18px] mobile:text-[18px] mobile:py-2">
                A full-stack developer, Building Seamless mobile & web
                applications.
              </p>
            </div>
            <div className="px-14 tablet:px-10 py-12 flex flex-row mobile:px-8">
              <Icon
                url="https://github.in/Ansh-Rathod"
                name="Github"
                classes="fa-brands fa-github"
              />

              <Icon
                url="https://twitter.com/AnshhRathod"
                classes="fa-brands fa-twitter"
                name="Twitter"
              />
              <Icon
                url="https://www.linkedin.com/in/ansh-rathod-478a81210/"
                classes="fa-brands fa-linkedin"
                name="Linkedin"
              />
              <Icon
                url="https://discordapp.com/users/768376622243119114"
                classes="fa-brands fa-discord"
              />
              <Icon
                url="mailto:anshrathod29@gmail.com"
                classes="fa-solid fa-envelope"
                name="Email"
              />
              <Icon
                url="https://www.instagram.com/anshrathodd"
                name="Instagram"
                classes="fa-brands fa-instagram"
              />
            </div>
          </div>
          <div className="w-[45%] h-screen max-h-[808px] tablet:hidden mobile:hidden ">
            <div className=" w-full h-full relative">
              <Image
                src="/intro (1123 × 1123 px).png"
                layout="fill"
                objectFit="cover"
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
