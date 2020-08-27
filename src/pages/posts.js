import React from 'react';
import Layout from '../components/Layout/Layout';
import PostsList from '../components/PostsList/PostsList';

function PostPage({ posts }) {
  return (
      <Layout pageTitle="Product List">
        <PostsList posts={ posts }/>
      </Layout>
  );
}

export async function getServerSideProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await res.json();
  return {
    props: {
      posts: posts
    }
  };
}

export default PostPage;

