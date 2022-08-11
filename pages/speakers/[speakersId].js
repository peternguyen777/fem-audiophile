import React from "react";
import data from "../../public/data.json";
import DetailProduct from "../../components/UI/DetailProduct";
import Action from "../../components/Action";
import Footer from "../../components/Footer";
import HomeMenu from "../../components/HomeMenu";

function Speakers({ projectData }) {
  return (
    <>
      <main className='w-full max-w-[1190px] px-6 md:px-10 lg:mx-auto'>
        <DetailProduct projectData={projectData} />
        <div className='mt-[172px] lg:mt-[240px]'>
          <HomeMenu />
        </div>
        <Action />
      </main>
      <Footer />
    </>
  );
}

export default Speakers;

export const getStaticPaths = () => {
  const categoryData = data.filter((item) => item.category === "speakers");

  const posts = categoryData;

  const paths = posts.map((post) => ({
    params: {
      speakersId: post.slug.toString(),
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

export async function getStaticProps({ params }) {
  const post = data.find((item) => item.slug === params.speakersId);

  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      projectData: post,
      key: post.id,
    },
    revalidate: 60, //after 60s it will update the old cached version.
  };
}
