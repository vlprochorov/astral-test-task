import React from 'react'
import PropTypes from 'prop-types'
import './PostInfo.css'
import { BrowserRouter as Route, Link } from 'react-router-dom'
import Post from '../post/Post'

class PostInfo extends React.Component {
  render() {
    const { data } = this.props
    return (
      <div>
        <div className="postinfo">
          <h2 className="postinfo-title">{data.title}</h2>
          <span className="postinfo-title__date">MARCH 2, 2016</span>
          <span className="postinfo-title__place">TRAVEL</span>
          <p className="postinfo-description">{data.body}</p>
          <button className="postinfo-button">
            <Link className="link" to={`/posts/${data.id}`}>
              Continue reading
            </Link>
          </button>
        </div>

        <Route to={`/posts/${data.id}`} component={Post} />
      </div>
    )
  }
}

PostInfo.data = {
  userId: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.bool.isRequired,
}

export default PostInfo
