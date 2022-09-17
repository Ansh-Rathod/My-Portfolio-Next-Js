import React from "react";
import Icon from "@/components/Icon";

function Contact() {
  return (
    <div id="contact">
      <div className="bg-white pt-[60px] pb-[40px] border-t-[0.6px] border-slate-200 m-auto max-w-[1000px] desktop:container">
        <div className="px-2">
          <h1 className="font-poppins font-bold mb-1.5 text-3xl uppercase">
            Contact
          </h1>
          <p className="font-proxima text-[20px]">
            Reach me out on any platform.
          </p>
        </div>

        <div className="py-8 flex flex-row">
          <Icon
            url="https://www.instagram.com/anshrathodd"
            classes="fa-brands fa-instagram"
          />
          <Icon
            url="https://github.in/Ansh-Rathod"
            classes="fa-brands fa-github"
          />
          <Icon
            url="https://twitter.com/AnshhRathod"
            classes="fa-brands fa-twitter"
          />
          <Icon
            url="https://www.linkedin.com/in/ansh-rathod-478a81210/"
            classes="fa-brands fa-linkedin"
          />
          <Icon
            url="mailto:anshrathod29@gmail.com"
            classes="fa-solid fa-envelope"
          />
        </div>
      </div>

      <div className="py-6 border-t-[0.6px] border-slate-200 text-center text-[14px]">
        <p>© Septenmber 2022 Ansh Rathod. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Contact;
