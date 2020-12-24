import React from 'react'
import Home from 'containers/Home'
import Search from 'containers/Search'
import { Route, Switch } from 'react-router-dom'

const MainRouter: React.FC = () => {
  return (
    <Switch>
      <Route path='/search' component={Search} />
      <Route path='/' component={Home} />
    </Switch>
  )
}

export default MainRouter
