import React, { Component } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Table,
  Button,
  Container,
  Modal,
  ModalHeader,
  ModalBody,
  FormGroup,
  ModalFooter,
} from "reactstrap";


const data = [
    {id: 1, nombre: "Fifi", raza: "Poodle", especie: "Perro", sexo: "Hembra", color:"Blanco"},
    {id: 2, nombre: "Pluto", raza: "Ragdoll", especie: "Gato", sexo: "Macho", color:"Negro"},
    {id: 3, nombre: "Galore", raza: "Lori Arcoiris", especie: "Loro", sexo: "Macho", color:"Arcoiris"}

  ];

export class Mycomponent extends Component {
    state = {
        data: data,
        form: {
            id: '',
            nombre: '',
            raza: '',
            especie: '',
            sexo: '',
            color: ''
        },
        modalInsert: false,
        modalEdit: false,
    };

    handleChange = e => {
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value,
            }
        });
    }

    showAddModal = () => {
        this.setState({modalInsert: true});
    }

    hideAddModal = () => {
        this.setState({modalInsert: false});
    }

    showEditModal = (registro) => {
        this.setState({modalEdit: true, form: registro});
    }

    hideEditModal = () => {
        this.setState({modalEdit: false});
    }

    insertar = () => {
        var idNueva = {...this.state.form};
        idNueva.id = this.state.data.length+1;
        var lista = this.state.data;
        lista.push(idNueva)
        this.setState({data: lista, modalInsert: false})

    }

    guardar = (dato) => {
        var contador=0;
        var lista=this.state.data;
        lista.map((registro) => {
            if (dato.id == registro.id) {
                lista[contador].nombre = dato.nombre;
                lista[contador].raza = dato.raza;
                lista[contador].especie = dato.especie;
                lista[contador].sexo = dato.sexo;
                lista[contador].color = dato.color;

            }
            contador++;
        })
        this.setState({data: lista, modalEdit: false});
        
    }

    eliminar = (dato) => {
        var opcion = window.confirm("Realmente deseas eliminar " + dato.nombre + "?");
        if (opcion) {
            var contador=0;
            var lista = this.state.data;
            lista.map((registro) => {
                if (dato.id ==registro.id ) {
                    lista.splice(contador, 1)
                }
                contador++;
            });
            this.setState({data: lista})
        } 
    }

    render() {
        return (
            <>
            <Container>
                <br/>
                <Button color="success" onClick={ () => this.showAddModal() }><ion-icon name="add"></ion-icon> Nuevo</Button>   
                <br/> <br/>

                <Table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nombre</th>
                            <th>Raza</th>
                            <th>Color</th>
                            <th>Especie</th>
                            <th>Sexo</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>

                    <tbody>
                        { this.state.data.map( (datitos) => (
                        <tr>
                            <td>{datitos.id}</td>
                            <td>{datitos.nombre}</td>
                            <td>{datitos.raza}</td>
                            <td>{datitos.color}</td>
                            <td>{datitos.especie}</td>
                            <td>{datitos.sexo}</td>
                            <td>
                                <Button color="info" onClick={ () => this.showEditModal(datitos) } >Editar <ion-icon name="pencil"></ion-icon></Button>
                                {"  "}
                                <Button color="danger" onClick={ () => this.eliminar(datitos) } >Borrar <ion-icon name="trash-bin"></ion-icon> </Button>
                            </td>
                        </tr>
                        ))}
                    </tbody>

                </Table>

            </Container>  

            <Modal isOpen={this.state.modalInsert}>

                <ModalHeader>
                    <div>
                        <h1>Ingresar Mascota</h1>
                        <p>No validado - Solo Crud</p>
                        <Button color="warning" href="/mascota"> Form Validado - Sin Estilos {' '}<i class="fas fa-bullhorn"></i></Button>
                    </div>
                </ModalHeader>

                <ModalBody>

                    <FormGroup>
                        <label>ID: </label>
                        <input className="form-control" readOnly type="text" value={this.state.data.length+1}/>
                    </FormGroup>

                    <FormGroup>
                        <label>Nombre </label>
                        <input pattern="/(^(?=.{3,35}$)(?=.+[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ0])[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ0 \s\W]+$)/i" className="form-control" name="nombre" type="text" onChange={this.handleChange} />
                    </FormGroup>

                    <FormGroup>
                        <label>Raza </label>
                        <input className="form-control" name="raza" type="text"onChange={this.handleChange} />
                    </FormGroup>

                    <FormGroup>
                        <label>Color </label>
                        <input className="form-control" name="color" type="text"onChange={this.handleChange} />
                    </FormGroup>

                    <FormGroup>
                        <label>Especie </label>
                        <input className="form-control" name="especie" type="text"onChange={this.handleChange} />
                    </FormGroup>

                    <FormGroup>
                        <label>Sexo </label>
                        <input className="form-control" name="sexo" type="text"onChange={this.handleChange} />
                    </FormGroup>

                </ModalBody>

                <ModalFooter>
                    <Button color="success" onClick={ () => this.insertar() }> Guardar <ion-icon name="checkmark"></ion-icon></Button>
                        {"  "}
                    <Button color="danger" onClick={ () => this.hideAddModal() }><ion-icon name="close"></ion-icon> Cancelar </Button>
                </ModalFooter>

            </Modal>  


            <Modal isOpen={this.state.modalEdit}>

                <ModalHeader>
                    <div>
                        <h5>Editar datos para {this.state.form.nombre}</h5>
                    </div>
                </ModalHeader>

                <ModalBody>

                <FormGroup>
                        <label>Nombre </label>
                        <input pattern="/(^(?=.{3,35}$)(?=.+[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ0])[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ0 \s\W]+$)/i" className="form-control" name="nombre" type="text" onChange={this.handleChange} />
                    </FormGroup>

                    <FormGroup>
                        <label>Raza </label>
                        <input className="form-control" name="raza" type="text"onChange={this.handleChange} />
                    </FormGroup>

                    <FormGroup>
                        <label>Color </label>
                        <input className="form-control" name="color" type="text"onChange={this.handleChange} />
                    </FormGroup>

                    <FormGroup>
                        <label>Especie </label>
                        <input className="form-control" name="especie" type="text"onChange={this.handleChange} />
                    </FormGroup>

                    <FormGroup>
                        <label>Sexo </label>
                        <input className="form-control" name="sexo" type="text"onChange={this.handleChange} />
                    </FormGroup>

                </ModalBody>

                <ModalFooter>
                    <Button color="success" onClick={ () => this.guardar(this.state.form) }> Confirmar <ion-icon name="checkmark"></ion-icon></Button>
                        {"  "}
                    <Button color="danger" onClick={ () => this.hideEditModal() }><ion-icon name="close"></ion-icon> Cancelar </Button>
                </ModalFooter>

            </Modal>  

            </>
        )
    }
}

export default Mycomponent