import type { NextPage } from "next";

import Head from "next/head";
import Intro from "@/components/intro";
import About from "@/components/About";
import AllProjects from "@/components/AllProjects";
import ModelContext, { ModelProvider } from "../contexts/showModelContext";
import { useContext } from "react";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

const Home: NextPage = () => {
  const { isOpen } = useContext(ModelContext);

  return (
    <div className="font-apple">
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
          integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <meta property="og:title" content="Ansh Rathod | Portfolio" />

        <meta property="og:url" content="https://anshrathod1.vercel.app" />

        <meta
          property="og:description"
          content="A full-stack developer, Building Seamless mobile & web applications."
        />

        <meta
          property="og:image"
          content="https://anshrathod1.vercel.app/intro_image_meta.png"
        />

        <meta property="og:type" content="article" />
        {/* <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@AnshhRathod" />
        <meta name="twitter:creator" content="@AnshhRathod" />
        <meta name="twitter:title" content="Ansh Rathod | Portfolio" />
        <meta
          name="twitter:description"
          content="A full-stack developer, Building Seamless mobile & web applications."
        />
        <meta
          name="twitter:image"
          content="https://anshrathod1.vercel.app/intro_image_meta.png"
        /> */}
        <title>Ansh Rathod | Portfolio</title>
      </Head>

      <div className={isOpen ? "h-screen overflow-y-hidden" : "h-full"}>
        <Intro />
        <About />
        <Skills />
        <AllProjects />
        <Contact />
      </div>
    </div>
  );
};

export default Home;
