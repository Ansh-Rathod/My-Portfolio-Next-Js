import Contact from "@/components/Contact";
import NavBar from "@/components/NavBar";
import MemesComponent from "@/components/memes/memes";
import Head from "next/head";

function Memes() {
  return (
    <div>
      <Head>
        <meta property="og:title" content="memeloper fr who?" />
        <meta property="og:site_name" content="memeloper.fr" />
        <meta property="og:url" content="https://www.anshrathod.com" />

        <meta
          property="og:description"
          content="From Code to Comic: Check the Hilarious Journey of a Programmer through Memes."
        />

        <meta
          property="og:image"
          itemProp="image"
          content="https://anshrathod.com/intro_image_meta.png"
        />

        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@anshrathodfr" />
        <meta name="twitter:creator" content="@anshrathodfr" />
        <meta name="twitter:title" content="memeloper fr who?" />
        <meta
          name="twitter:description"
          content="From Code to Comic: Check the Hilarious Journey of a Programmer through Memes."
        />
        <meta
          name="twitter:image"
          itemProp="image"
          content="https://anshrathod.com/memes_intro_image_meta.png"
        />
        <title>memeloper fr who?</title>
      </Head>
      <div>
        {/* <LandingPage /> */}
        <NavBar />

        <MemesComponent />
        <Contact />
      </div>
    </div>
  );
}

export default Memes;
