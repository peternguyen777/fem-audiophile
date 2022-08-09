import React from "react";
import data from "../../public/data.json";

function Speakers({ projectData }) {
  return (
    <div>
      <h1>{projectData.name}</h1>
    </div>
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
    },
    revalidate: 60, //after 60s it will update the old cached version.
  };
}
