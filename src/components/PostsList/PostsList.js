import React from 'react';
import Post from '../Post/Post';

function PostsList({posts}) {

  return(
      <div>
        {
          posts && posts.map((post, index) => {
            return <Post key={index} post={post} />
          })
        }
      </div>
  )
}

export default PostsList
