import React from 'react'
import Tablita from '../components/TableComponent'
import 'bootstrap/dist/css/bootstrap.min.css';

import PetForm from '../components/forms/PetForm'
import ClientForm from '../components/forms/ClientForm'

function Dashboard(props) {
    return (
        <div className="container">
            <p>crud-funcional campos no validados</p><br/>
            <Tablita /> <br/>
            <p>No funciona el redireccionamiento al hacer build por eso todos los componentes a continuacion</p>  <br/>
            <div className="progress progress-bar-striped bg-dark"/>    <br/>
            <p>Formulario validado de mascota (Funciona Insertar)</p> <br/> 
            <PetForm/>  <br/>
            <div className="progress progress-bar-striped bg-dark"/>    <br/>
            <p>formulario validado de cliente</p> <br/> 
            <ClientForm/>   <br/>
        </div>
    )
}

export default Dashboard

