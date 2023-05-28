import React from 'react'

const PostCard = ({posts}) => {
  return (
    <div>
      <div className='posts'>
      {
        posts.map((post,i)=>(
        
          <div className='post-card'>
            <p>Title : {post.title}</p>
            <p>Post : {post.body}</p>
          </div>
        
        ))
      }
      </div>
    </div>
  )
}

export default PostCard
