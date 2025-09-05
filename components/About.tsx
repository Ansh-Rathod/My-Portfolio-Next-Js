import Link from "next/link";
import { useEffect, useState } from "react";

function calculateAge(year: number, month: number, day: number) {
  const today = new Date();
  const birthDate = new Date(year, month - 1, day);
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}

const About = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    <div
      id="about"
      className="bg-white py-[100px] w-screen max-w-full desktop:container"
    >
      {" "}
      <div className=" px-6  max-w-[600px] mx-auto mb-20">
        <h1 className="font-poppins text-3xl font-bold mb-5 ">Basic Info:</h1>
        <p className="text-gray-500 text-[18px]">
          <span className="text-black font-bold">Name:</span> Ansh Rathod
          <br />
          <span className="text-black font-bold">
            Other names given by family:
          </span>{" "}
          appii
          <br />
          <span className="text-black font-bold">Born on:</span> 2 may 2003
          <br />
          <span className="text-black font-bold">Age:</span>{" "}
          {isClient ? (
            <span suppressHydrationWarning>{calculateAge(2003, 5, 2)}</span>
          ) : (
            "21"
          )}
          <br />
          <span className="text-black font-bold">Location:</span> 127.0.0.1
          <br />
          <span className="text-black font-bold">Weight:</span> ~77 kg
          <br />
          <span className="text-black font-bold">Height:</span> 178 cm
          (5&apos;10&quot;)
          <br />
          <span className="text-black font-bold">Goal:</span> to build digital
          products that will help people.
          <br />
          <span className="text-black font-bold">Fav phrase:</span> nerd today,
          boss tomorrow!
          <br />
          <span className="text-black font-bold">Writes code on:</span> 13 inch
          Macbook air (2020) 16GB RAM, 256 SSD, M1 Chip.(no monitors)
          <br />
          <span className="text-black font-bold">
            Receives notifications on:
          </span>{" "}
          iPhone 16 pro (2025)
          <br />
          <span className="text-black font-bold">
            Subscriptions he pays:
          </span>{" "}
          Spotify Premium, chatgpt, grok, twitter(x), digital ocean droplet,
          vercel
          <br />
          <span className="text-black font-bold">Fav apps he uses:</span> Hevy,
          strava, screen studio, warp
          <br />
          <span className="text-black font-bold">Fav exercise:</span> bench
          press
          <br />
        </p>
      </div>
      <div className=" flex flex-col justify-center max-w-[600px] mx-auto tablet:block mobile:block ">
        <div className=" px-6  ">
          <h1 className="font-poppins text-3xl font-bold ">HIS Story</h1>
          <p className="text-gray-500 text-[18px]">He wrote this section BTW</p>
        </div>

        <div className="mt-10 font-proxima  max-w-[600px]  px-6  py-2 tablet:w-full mobile:w-full  text-[18px] text-slate-500 mini-laptop:text-[20px] tablet:text-[18px] mobile:text-[18px]">
          <p>
            Hello! My name is <b>Ansh Rathod</b>, I&apos;m a self-taught
            full-stack developer who wrote the first line of code in the 2020
            Corona lockdown. I think I&apos;m a fast learner & implementor so I
            have tried many trendy frameworks, and languages that come and gone
            since I started.
          </p>
          <br />
          <p>
            I started for the passion and was building & completing apps like
            madmen till 2023, most of my 25+ apps are open source on my Github
            which are just <b className="text-black">hard-to-build</b> but{" "}
            <i>fun </i>
            projects (but not directly useful).
          </p>
          <br />
          {/* <p>
            Then realized that life is more than writing code and mindlessly
            gaining skills I should start earning with these skills too.
          </p> */}
          <br />
          <p>
            I always wanted to build something of my own so I started observing
            indie makers on X/Twitter [still observing] and I have learned so
            much about what kind of product would buy and actually be useful for
            a person. [well I have made all apps that are good for resume only
            till now🙈 you can check the list somewhere on this site].
          </p>
          <br />

          <p>
            As i design mine own apps and spend so much time building and
            observing i decided to build the my own product, In June 2024 I
            started building a desktop app{" "}
            <Link href="https://pimosa.app">
              <span className="text-blue-500">https://pimosa.app</span>
            </Link>{" "}
            where user will have a number of editing tools for video, photo, and
            music files in one desktop app.
          </p>
          <br />
          <p>
            I tweeted about the paid beta version of it and turned out it is
            very simple & useful for some people I ended up making $300+ in the
            first few hours of my tweet. realized &quot;Huh I made something
            good&quot;.
          </p>
          <br />
          <p>This is how i started monetizing my apps.</p>
        </div>
      </div>
    </div>
  );
};

export default About;
