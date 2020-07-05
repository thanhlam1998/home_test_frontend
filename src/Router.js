import React from 'react'
import { Switch, Route } from 'react-router-dom'
import HomePage from './pages/homePage/homePage'
import DetailPage from './pages/detailPage/detailPage'

const Router = () => {
    return (
        <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route exact path="/items/:id" component={DetailPage}/>
        </Switch>
    )
}

export default Router
