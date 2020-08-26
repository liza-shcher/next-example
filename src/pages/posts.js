import Link from 'next/link';
import React from 'react';
import Head from 'next/head';
import PostsList from '../components/PostsList/PostsList';
import styles from '../styles/Home.module.css';

function PostPage({posts}) {
  return(
      <div className={ styles.container }>
        <Head>
          <title>Create Next App</title>
        </Head>

        <main className={ styles.main }>
          <div>
            <Link href="/">
              <a>Products</a>
            </Link>
            <Link href="/posts">
              <a>Posts</a>
            </Link>
          </div>
          <PostsList posts={ posts }/>
        </main>
      </div>
  )
}

export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await res.json();

  return {
    props: {
      posts: posts,
    }
  };
}

export default PostPage;
