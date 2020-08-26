import Link from 'next/link';
import React from 'react';
import PostsList from '../components/PostsList/PostsList';

function PostPage({posts}) {
  return(
      <div>
        <div>
          <Link href="/">
            <a>Products</a>
          </Link>
          <Link href="/posts">
            <a>Posts</a>
          </Link>
        </div>
        <h3>POSTS</h3>
        <PostsList posts={posts}/>
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
