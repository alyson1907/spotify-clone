import React from 'react'
import Main from 'containers/Main'
import { Route, Switch } from 'react-router-dom'

const MainRouter: React.FC = () => {
  return (
    <Switch>
      <Route path='/' component={Main} />
    </Switch>
  )
}

export default MainRouter
