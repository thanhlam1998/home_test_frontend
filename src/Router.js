import React from 'react'
import { Switch, Route } from 'react-router-dom'
import HomePage from './pages/homePage/homePage'

const Router = () => {
    return (
        <Switch>
            <Route exact path="/" component={HomePage}/>
        </Switch>
    )
}

export default Router
