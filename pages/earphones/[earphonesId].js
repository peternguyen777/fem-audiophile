import React from "react";
import data from "../../public/data.json";

function Earphones({ projectData }) {
  return (
    <div>
      <h1>{projectData.name}</h1>
    </div>
  );
}

export default Earphones;

export const getStaticPaths = () => {
  const categoryData = data.filter((item) => item.category === "earphones");

  const posts = categoryData;

  const paths = posts.map((post) => ({
    params: {
      earphonesId: post.slug.toString(),
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

export async function getStaticProps({ params }) {
  const post = data.find((item) => item.slug === params.earphonesId);

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
