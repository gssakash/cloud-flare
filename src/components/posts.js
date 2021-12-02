import React, { useState, useEffect } from 'react'
import { Link } from '@reach/router'

const Posts = () => {
  const [posts, setPosts] = useState([])
  useEffect(() => {
    const getPosts = async () => {
      const response = await fetch(
        'https://social-media-worker.gsaisriram-akash3039.workers.dev/api/posts',
      )
      const ApiResponse = await response.json()
      setPosts(ApiResponse)
    }

    getPosts()
  }, [])

  return (
    <div>
      <h1>Posts from API...</h1>
      {posts.map((individualPost) => (
        <div key={individualPost}>
          <h2>
            <Link to={`/posts/${individualPost.id}`}>
              {individualPost.title}
            </Link>
          </h2>
        </div>
      ))}
    </div>
  )
}

export default Posts
