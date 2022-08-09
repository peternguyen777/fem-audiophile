import React from "react";
import Head from "next/head";
import Footer from "../../components/Footer";
import Action from "../../components/Action";
import HomeMenu from "../../components/HomeMenu";
import data from "../../public/data.json";
import Banner from "../../components/Headphones/Banner";
import CardProduct from "../../components/UI/CardProduct";

function SpeakersHome() {
  const headphones = data
    .filter((item) => item.category === "speakers")
    .reverse();

  return (
    <>
      <Head>
        <title>Audiophile</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/assets/favicon-32x32.png' />
      </Head>
      <Banner category='SPEAKERS' />
      <main className='w-full max-w-[1190px] px-6 md:px-10 lg:mx-auto'>
        <div className='mt-16 space-y-[120px] md:mt-[120px] lg:mt-[160px]'>
          {headphones.map((item) => (
            <CardProduct item={item} key={item.id} />
          ))}
        </div>
        <div className='mt-[172px] lg:mt-[240px]'>
          <HomeMenu />
        </div>
        <Action />
      </main>
      <Footer />
    </>
  );
}

export default SpeakersHome;
