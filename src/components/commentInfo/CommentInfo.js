import React from 'react'
import PropTypes from 'prop-types'
import './CommentInfo.css'
import Comment from '../comments/Comment'
import { Cat } from '../Icons'

class CommentInfo extends React.Component {
  render() {
    const { data } = this.props
    return (
      <div>
        <div className="wrapper">
          <div>
            <Cat />
          </div>
          <div className="commentinfo">
            <h2 className="commentinfo-title">{data.name}</h2>
            <span className="commentinfo-title__date">USER E-MAIL</span>
            <span className="commentinfo-title__place">{data.email}</span>
            <p className="commentinfo-description">{data.body}</p>
          </div>
        </div>
      </div>
    )
  }
}

// CommentInfo.data = {
//   userId: PropTypes.number.isRequired,
//   id: PropTypes.number.isRequired,
//   title: PropTypes.string.isRequired,
//   body: PropTypes.bool.isRequired,
// }

export default CommentInfo
