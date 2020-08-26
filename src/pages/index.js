import React from 'react';
import Head from 'next/head'
import PostsList from '../components/PostsList/PostsList';
import styles from '../styles/Home.module.css'

export default function Index(props) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
          <PostsList posts={props.posts}/>
      </main>
    </div>
  )
}

export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const posts = await res.json();

  return {
    props: {
      posts: posts
    }
  };
}
