import React from 'react'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Home from './pages/Home'
import Submit from './pages/Submit'

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/submit" component={Submit}/>
      </Switch>
    </Router>
  )
}
