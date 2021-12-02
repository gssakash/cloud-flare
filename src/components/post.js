import React, { useEffect, useState } from 'react'
import { Link } from '@reach/router'

const Post = ({ id }) => {
  const [post, setPost] = useState({})
  useEffect(() => {
    const getPost = async () => {
      const response = await fetch(
        'https://social-media-worker.gsaisriram-akash3039.workers.dev/api/posts',
      )
      const ApiResponse = await response.json()
      setPost(ApiResponse)
    }

    getPost()
  }, [id])

  return (
    <div>
      <h1>{post.title}</h1>
      <p>
        <em>{post.content}</em>
      </p>
      <p>
        <Link to="/">Go Back</Link>
      </p>
    </div>
  )
}

export default Post
