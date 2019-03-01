import React, { Component } from 'react'
import './App.scss'
import Header from './components/Header/Header'
import Main from './container/Main/Main'
import Upload from './components/Upload/Upload'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/upload" component={Upload} />
            <Route exact path="/videos/:id" component={Main} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App
