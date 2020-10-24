import React from 'react';
import { useForm } from 'react-hook-form';


export default function ClientForm() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  
  return (
    <div className="container" id="mascotitas">
      <h1>NO TERMINADO</h1>
      <div className="form-group">
    <form onSubmit={handleSubmit(onSubmit)}>
      <input className="form-control" type="text" placeholder="V-1234567" name="cedula" ref={register({required: true, pattern: /^[vV|eE][-][0-9]{5,9}$/i})} />
      <p> {errors.cedula && "Formato de CI debe ser V|E-12345..."}</p> <br/>

      <input className="form-control" type="text" placeholder="Nombre" name="nombre" ref={register({required: true, max: 30, min: 3, maxLength: 35, pattern: /^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ0 \s\W]/i})} />
      <p> {errors.nombre && "Sólo letras - Ingresa un nombre valido"}</p> <br/>

      <input className="form-control" type="text" placeholder="Apellido" name="apellido" ref={register({required: true, max: 30, min: 3, maxLength: 35, pattern: /^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ0 \s\W]/i})} />
      <p> {errors.apellido && "Sólo letras - Ingresa un Apellido"}</p> <br/>

      <input className="form-control" type="text" placeholder="usuario@dominio.com" name="email" ref={register({required: true, pattern: /\S+@\S+\.\S+/i})} />
      <p> {errors.email && "Por favor ingresa un email valido uuu@ddd.xx"}</p> <br/>

      <input className="form-control" type="tel" placeholder="Teléfono" name="telefono" ref={register({required: true, maxLength: 15, pattern: /^\s*(?:\+?(\d{1,3}))?([-. (]*(\d{3})[-. )]*)?((\d{3})[-. ]*(\d{2,4})(?:[-.x ]*(\d+))?)\s*$/i})} />
      <p> {errors.telefono && "Formato de Telefono invalido: EJ: +01234567890"}</p> <br/>
      
      <input type="submit" />
    </form>
    </div>
    </div>
  );
}