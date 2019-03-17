import React from 'react'
import CommentInfo from '../commentInfo/CommentInfo'
import { httpGet } from '../../helpers/network'
//import './Comment.css'

class Comment extends React.Component {
  state = {
    data: [],
    isLoading: false,
    error: false,
  }

  componentDidMount() {
    this.loadData()
  }
  loadData = () => {
    const endUrl = 'comments'
    this.setState({ isLoading: true, error: false })

    httpGet(endUrl)
      .then(json => this.setState({ data: json, isLoading: false }))
      .catch(e => this.setState({ isLoading: false, error: true }))
  }

  renderTemplate = () => {
    const { error, isLoading, data } = this.state

    if (error) {
      return (
        <p>
          Во время загрузки данных произошла ошибка{' '}
          <button onClick={this.loadData}>Перезагрузка</button>
        </p>
      )
    }

    if (isLoading) {
      return <p>Загружаю...</p>
    } else {
      return data.map((item, index) => {
        return <CommentInfo key={index} data={item} />
      })
    }
  }

  render() {
    return <div>{this.renderTemplate()}</div>
  }
}

export default Comment
