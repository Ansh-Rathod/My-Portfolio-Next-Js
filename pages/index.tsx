import type { NextPage } from "next";

import Head from "next/head";
import Intro from "@/components/intro";
import About from "@/components/About";
import AllProjects from "@/components/AllProjects";
import ModelContext, { ModelProvider } from "../contexts/showModelContext";
import { useContext } from "react";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import GithubCard from "@/components/GithubCard";
import redis from "lib/redis";

const Home: NextPage = ({ data }: any) => {
  const { isOpen } = useContext(ModelContext);

  return (
    <div className="font-apple">
      <Head>
        <meta property="og:title" content="Ansh Rathod | Portfolio" />
        <meta property="og:site_name" content="Ansh Rathod | Portfolio" />
        <meta property="og:url" content="https://www.anshrathod.com" />

        <meta
          property="og:description"
          content="A full-stack developer, Building Seamless mobile & web applications."
        />

        <meta
          property="og:image"
          itemProp="image"
          content="https://anshrathod.com/intro_image_meta.png"
        />

        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@AnshhRathod" />
        <meta name="twitter:creator" content="@AnshhRathod" />
        <meta name="twitter:title" content="Ansh Rathod | Portfolio" />
        <meta
          name="twitter:description"
          content="A full-stack developer, Building Seamless mobile & web applications."
        />
        <meta
          name="twitter:image"
          itemProp="image"
          content="https://anshrathod.com/intro_image_meta.png"
        />
        <title>Ansh Rathod | Portfolio</title>
      </Head>

      <div className={isOpen ? "h-screen overflow-y-hidden" : "h-full"}>
        <Intro />
        <About />
        {/* <GithubCard data={data} /> */}
        <Skills />
        <AllProjects />
        <Contact />
      </div>
    </div>
  );
};

export async function getStaticProps() {
  try {
    const cache = await redis.get("Ansh-Rathod");
    if (cache == null) {
      const res = await fetch(`https://api.github.com/users/Ansh-Rathod`);
      const repos = await fetch(
        `https://api.github.com/users/Ansh-Rathod/repos`
      );
      const repoData = await repos.json();
      const data = await res.json();
      var totalStars = 0;
      repoData.forEach((repo: any) => {
        totalStars += repo.stargazers_count;
      });
      const cache = {
        username: data.login,
        avatar: data.avatar_url,
        repos: data.public_repos,
        followers: data.followers,
        stars: totalStars,
      };
      await redis.setex("Ansh-Rathod", 86400, JSON.stringify(cache));
      return {
        props: {
          data: cache,
        },
      };
    } else {
      return {
        props: {
          data: JSON.parse(cache),
        },
      };
    }
  } catch (error) {
    return {
      props: {
        data: {
          username: "Ansh-Rathod",
          avatar: "https://avatars.githubusercontent.com/u/67627096?v=4",
          repos: 28,
          followers: 109,
          stars: 360,
        },
      },
    };
  }
}

export default Home;
