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
            Hello! My name is <b>Ansh Rathod</b>, I have been interested in app
            development for many years and have been actively working on
            building mobile applications for the past two years. I am constantly
            seeking out new technologies and techniques to enhance my skills and
            stay up-to-date in this field.
          </p>
          <br />
          <p>
            Fast-Forward to today. recently I have build an application called
            <a href="https://app.cineast.in">
              <b> &quot;Cineast&quot; </b>
            </a>
            Which is a social media platform that I built specifically for movie
            enthusiasts. It allows users to connect with other movie fans, share
            their favorite films and recommendations. I put a lot of thoughts
            and effort into the building functionality of the app.
          </p>
          <br />
          <p>
            It was a lot of hard work to build full-stack applications and I was
            able to learn and grow as a developer through the building process.
            I am excited to continue improving and expanding the app in the
            future.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
