import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Dashboard from '../pages/Dashboard'
import Barra from '../components/NavbarComponent'
import PetForm from '../components/forms/PetForm'
import ClientForm from '../components/forms/ClientForm'



function Routes() {
  return (
    <>
    <Barra/>
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Dashboard} />
        <Route path="/mascota" component={PetForm}/>
        <Route path="/cliente" component={ClientForm}/>
      </Switch>
    </BrowserRouter>
    </>
  );
}

export default Routes;
