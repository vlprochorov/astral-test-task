import React from 'react'
import './App.css'
import './Reset.css'
import { FacebokIcon, GithubIcon, InstagramIcon, TwitterIcon } from './Icons'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Home from './home/Home'
import About from './about/About'
import Post from './post/Post'

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="main">
          <div className="sidebar">
            <h1 className="sidebar-header">My personal blog</h1>
            <p className="sidebar-content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit
              amet sodales ipsum. Aenean felis nibh, dignissim eu tortor ut,
              pulvinar commodo tortor. Pellentesque gravida sapien velit, in
              pellentesque sapien sagittis nec.
            </p>

            <div className="sidebar-navigation">
              <div>
                <Link className="sidebar-link" to="/">
                  Home
                </Link>
              </div>
              <div>
                <Link className="sidebar-link" to="/about">
                  About
                </Link>
              </div>
            </div>

            <div className="sidebar-icons">
              <FacebokIcon />
              <GithubIcon />
              <InstagramIcon />
              <TwitterIcon />
            </div>
          </div>

          <div>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/posts" component={Post} />
          </div>
        </div>
      </Router>
    )
  }
}

export default App
