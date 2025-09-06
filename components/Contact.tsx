import Icon from "@/components/Icon";
import Image from "next/image";
import { message, smallContainer } from "pages/_app";
function Contact() {
  return (
    <div
      id="contact"
      className={`${smallContainer} border-t border-b mb-10 py-10`}
    >
      <div className="bg-white pt-[10px] pb-[60px]   border-slate-200 m-auto max-w-[600px] ">
        <div className="">
          <h1 className="font-bold mb-1.5 text-3xl lowercase ">Contact Him:</h1>
          <p className="text-slate-500 text-[18px]  mt-2">
            Leave a message on any of his social media, He&apos;ll reach out to
            you as soon as Possible.
          </p>
        </div>
        <div className="  pt-12 flex flex-row ">
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
        </div>
      </div>

      <div className="my-10 text-[17px] max-w-[600px]   py-2   text-gray-500  mx-auto">
        <p>Message from him:</p>
        <div className={message}>
          <p>
            i usually share my thoughts and daily updates on X (Twitter). that’s
            the best place to reach me!
          </p>

          <br />

          <p>and one last thing:</p>
          <div className="rounded-lg mt-2">
            <Image
              src="/pins/wall15.jpg"
              alt="image"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "auto" }}
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </div>

      <br />
      <p className="text-center mb-8">Thank you! for visiting.</p>

      <div className="py-6 border-t text-center   px-8  max-w-[600px] mx-auto text-[14px] text-slate-500">
        <p>
          © 2025 Ansh Rathod. All rights reserved.
          <br /> last updated: Apr 25, 2025
        </p>
      </div>
    </div>
  );
}

export default Contact;
