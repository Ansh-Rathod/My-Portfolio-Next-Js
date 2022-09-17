const About = () => {
  return (
    <div
      id="about"
      className="bg-white py-[100px] w-screen max-w-full desktop:container"
    >
      <div className=" flex flex-row max-w-[900px] mx-auto tablet:block mobile:block mobile:px-3">
        <div className="flex-grow my-auto text-right uppercase px-6 tablet:text-center mobile:text-center">
          <h1 className="font-poppins text-3xl font-bold">About</h1>
          <p>Me, Myself and I</p>
          <div className="h-52 tablet:h-8 mobile:h-8"></div>
        </div>

        <div className=" font-proxima text-[18px] w-[65%] px-6 py-2 tablet:w-full mobile:w-full mobile:px-2">
          <p>
            Hello! My name is <b>Ansh Rathod</b>, i love to build mobile
            applications to hang on internet. My intrest in app development
            started back in <b>2020</b> when lockdown and covid was effected --
            Turns out i was very curious to know about it and passionate about
            the Building apps with new technology.
          </p>
          <br />
          <p>
            Fast-Forward to today. i have been working on mobile applications
            for almost 2 years now. And recently i have build a new project
            called
            <a href="https://app.cineast.in">
              <b> Cineast </b>
            </a>
            which is a social media application for movie enthusiasts. it was
            quite jurney to build this app because i coded it all alone in 2
            months with flutter, nodejs and postgreSQL.
          </p>
          <br />
          <p>
            What&apos;s next? Well, Planing to build new Platform for
            developers/designers (desktop, web and mobile) it will take a while.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
