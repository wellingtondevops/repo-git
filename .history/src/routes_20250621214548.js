import React from "react";
import {BrowserRouter,Route,Switch} from "react-router-dom"
import Main from "./pages/Main";
import Repositorio from "./Repositorio";



export default function Routes(){

return(
    <BrowserRouter>
    <Switch>
        <Route exact path="/" component={Main}/>
        <Route exact path="/repositorio" component={Repositorio}/>
    </Switch>
    </BrowserRouter>
)

}