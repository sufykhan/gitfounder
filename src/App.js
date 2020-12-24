import React from 'react'
import {Route, Switch} from "react-router-dom"
import CharacterDetail from './Screen/CharacterDetail'
import MainPage from './Screen/MainPage'
import Error from "./Screen/Error"
const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <MainPage/>
        </Route>
        <Route exact path="/details/:id">
          <CharacterDetail/>
        </Route>
        <Route path="*">
          <Error/>
        </Route>
        </Switch>
    </div>
  )
}

export default App
