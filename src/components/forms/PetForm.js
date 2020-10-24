import React from 'react';
import { useForm } from 'react-hook-form';

import {
  Table,
  Button,
  Container,
} from "reactstrap";

  const datos = [
    {id: 1, nombre: "Soy", raza: "un", especie: "Dato", sexo: "de", color:"Prueba", fecha: "de Mascota"}

  ];

const PetForm = () => {
 


  const { register, handleSubmit, errors, getValues  } = useForm();
  const onSubmit = data => {

    var idNueva = datos;
    idNueva.id = datos.length+1;

    alert(JSON.stringify(data));

    console.log(idNueva, data.nombre, data.raza, data.especie, data.sexo, data.color, data.fecha);
    
    datos.push({id: idNueva, nombre: getValues("nombre"), raza: getValues("raza"), especie: getValues("especie"), sexo: getValues("sexo"), color: getValues("color"), fecha: getValues("fecha")});
  
  };
  console.log(errors);
  



  return (
      <div className="container" id="mascotitas">
          <h1>VALIDADO - No Terminado</h1>
      <div className="form-group">
    <form onSubmit={handleSubmit(onSubmit)}>
      <input className="form-control" type="text" placeholder="Nombre - Ej: Fifi" name="nombre" ref={register({required: true, max: 30, min: 3, maxLength: 35, pattern: /(^(?=.{3,35}$)(?=.+[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ0])[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ0 \s\W]+$)/i})} />
      <p> {errors.nombre && "Sólo letras - Ingresa un nombre valido"}</p> <br/>

      <input className="form-control" type="text" placeholder="F. Nac: DD/MM/AAAA" name="fecha" ref={register({required: true, pattern: /^(((0[1-9]|[12]\d|3[01])\/(0[13578]|1[02])\/((19|[2-9]\d)\d{2}))|((0[1-9]|[12]\d|30)\/(0[13456789]|1[012])\/((19|[2-9]\d)\d{2}))|((0[1-9]|1\d|2[0-8])\/02\/((19|[2-9]\d)\d{2}))|(29\/02\/((1[6-9]|[2-9]\d)(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00))))$/i})} />
      <p> {errors.fecha && "Formato de Fecha no valido Ejemplo Dia/Mes/Año"}</p><br/>

      <input className="form-control" type="text" placeholder="Sexo" name="sexo" ref={register({required: true, max: 10, min: 4, maxLength: 10, pattern: /(^(?=.{3,10}$)(?=.+[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ0])[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ0 \s\W]+$)/i})} />
      <p> {errors.sexo && "Sólo letras -> Proximamente Radio Buttons o Select"}</p><br/>

      <input className="form-control" type="text" placeholder="Raza - Ej: Salchicha" name="raza" ref={register({required: true, max: 30, min: 3, maxLength: 35, pattern: /(^(?=.{3,35}$)(?=.+[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ0])[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ0 \s\W]+$)/i})} />
      <p>{errors.raza && "Sólo letras - Ingresa una raza que exista"}</p><br/>

      <input className="form-control" type="text" placeholder="Especie - Ej: Perro" name="especie" ref={register({required: true, max: 30, min: 3, maxLength: 35, pattern: /(^(?=.{3,35}$)(?=.+[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ0])[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ0 \s\W]+$)/i})} />
      <p>{errors.especie && "Sólo letras - Ingresa una especie que exista"}</p><br/>

      <input className="form-control" type="text" placeholder="Color de Pelaje - Marrón" name="color" ref={register({max: 30, min: 3, maxLength: 35, pattern: /(^(?=.{3,35}$)(?=.+[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ0])[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ0 \s\W]+$)/i})} />
      <p>{errors.color && "Sólo letras - Ingresa un color así sea inventado"}</p><br/>

      <textarea className="form-control" name="caracteristicas" placeholder="Caracteristicas - Ej: tamaño, altura, breve descripcion, etc" ref={register({required: true, min: 5})} />
      <br/>
      <input type="submit" />
    </form>
    </div>
    <Container>
        <br/>
        <br/> <br/>

        <Table>
            <thead>
                <tr>

                    <th>Nombre</th>
                    <th>Raza</th>
                    <th>Color</th>
                    <th>Especie</th>
                    <th>Sexo</th>
                    <th>Fecha</th>
                    <th>Acciones</th>
                </tr>
            </thead>

            <tbody>
                        { datos.map( (datitos) => (
                        <tr>
                            <td>{datitos.nombre}</td>
                            <td>{datitos.raza}</td>
                            <td>{datitos.color}</td>
                            <td>{datitos.especie}</td>
                            <td>{datitos.sexo}</td>
                            <td>{datitos.fecha}</td>
                            <td>
                                <Button color="info" onClick={() => alert("Work In Progress!!")} >Editar <ion-icon name="pencil"></ion-icon></Button>
                                {"  "}
                                <Button color="danger" onClick={() => alert("Work In Progress!!")} >Borrar <ion-icon name="trash-bin"></ion-icon> </Button>
                            </td>
                        </tr>
                        ))}
                    </tbody>


        </Table>

    </Container>
    
    </div>
  );
}


export default PetForm