import Link from "next/link";

const About = () => {
  return (
    <div
      id="about"
      className="bg-white py-[100px] w-screen max-w-full desktop:container"
    >
      <div className=" flex flex-col justify-center max-w-[600px] mx-auto tablet:block mobile:block mobile:px-3">
        <div className="uppercase px-6 ">
          <h1 className="font-poppins text-3xl font-bold ">HIS Story</h1>
          <p className="text-gray-500">He wrote this section BTW</p>
        </div>

        <div className="mt-10 font-proxima text-[17px] max-w-[600px]  px-6 mobile:px-2 py-2 tablet:w-full mobile:w-full  text-gray-500">
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
            crazy till 2023, most of my 25+ apps are open source on my Github
            which are just <b className="text-black">hard-to-build</b> but{" "}
            <i>fun </i>
            projects (but not directly useful).
          </p>
          <br />
          <p>
            Then realized that life is more than writing code and mindlessly
            gaining skills I should start earning with these skills too.
          </p>
          <br />
          <p>
            I always wanted to build something of my own so I started observing
            indie makers here on X/Twitter [and still observing] and I have
            learned so much about what kind of product would buy and actually be
            useful for a person. [well I have made all useless apps till now🙈
            you can check the list somewhere on this site].
          </p>
          <br />

          <p>
            In June 2024 I started building a desktop app{" "}
            <Link href="https://pimosa.app">
              <span className="text-blue-500">https://pimosa.app</span>
            </Link>{" "}
            where user will have a number of editing tools for video, photo, and
            music files in one desktop app.
          </p>
          <br />
          <p>
            I tweeted about the paid beta version of it and turned out it is
            very useful for some people I ended up making $300+ in the first few
            hours of my tweet. realized &quot;Huh I made something good&quot;.
          </p>
          <br />
          <p>This is how i started building apps and started earning.</p>
        </div>
      </div>
    </div>
  );
};

export default About;
