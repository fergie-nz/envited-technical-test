import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom'


import Home from './Home'
import Create from './Create'
import Event from './Event'

const App = () => {

  return (

    <div>
      <Router>
        <Route path='/create'  component={Create}/>
        <Route path='/event'  component={Event}/>
        <Route exact path='/'  component={Home}/>
      </Router>
    </div>
  )
}

export default App