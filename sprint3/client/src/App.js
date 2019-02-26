import React, { Component } from 'react'
import './App.scss'
import Header from './components/Header/Header'
import Main from './container/Main/Main'
import Upload from './container/Upload/Upload'

import { BrowserRouter as Router, Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Route exact path="/" component={Main} />
          <Route exact path="/upload" component={Upload} />
          <Route exact path="/videos/:id" component={Main} />
        </div>
      </Router>
    )
  }
}

export default App
