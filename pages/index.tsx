import type { NextPage } from "next";

import Head from "next/head";
import Intro from "@/components/intro";
import About from "@/components/About";
import AllProjects from "@/components/AllProjects";
import ModelContext, { ModelProvider } from "../contexts/showModelContext";
import { useContext } from "react";

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
        <title>Ansh Rathod</title>
      </Head>

      <div className={isOpen ? "h-screen overflow-y-hidden" : "h-full"}>
        <Intro />
        <About />
        <AllProjects />
      </div>
    </div>
  );
};

export default Home;
