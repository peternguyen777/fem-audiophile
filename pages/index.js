import Head from "next/head";
import Banner from "../components/Home/Banner";
import HomeMenu from "../components/HomeMenu";
import Zx9 from "../components/Home/Zx9";
import Zx7 from "../components/Home/Zx7";
import Yx1 from "../components/Home/Yx1";
import Action from "../components/Action";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Audiophile</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/assets/favicon-32x32.png' />
      </Head>

      <Banner />
      <main className='w-full max-w-[1190px] px-6 md:px-10 lg:mx-auto'>
        <div className='mt-[92px] md:mt-[148px] lg:mt-[200px]'>
          <HomeMenu />
        </div>
        <Zx9 />
        <Zx7 />
        <Yx1 />
        <Action />
      </main>

      <Footer />
    </>
  );
}
