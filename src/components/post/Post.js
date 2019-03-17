import React from 'react'
import './Post.css'
import Comment from '../comments/Comment'

class Post extends React.Component {
  render() {
    return (
      <div>
        <div className="post">
          <h2 className="post-title">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.{' '}
          </h2>
          <div className="post-subtitle">
            <span className="post-subtitle__date">MARCH 2, 2016</span>
            <span className="post-subtitle__place">TRAVEL</span>
          </div>
          <p className="post-description">
            Nulla lacinia, sapien nec mollis pharetra, neque diam sodales ipsum,
            suscipit commodo magna quam id felis. Morbi pulvinar venenatis
            elementum. Etiam est ex, accumsan eu pellentesque nec, maximus id
            sem. Nulla facilisi. Donec malesuada aliquet diam, in porta ex
            condimentum nec.
          </p>
          <Comment />
        </div>
      </div>
    )
  }
}

export default Post
