import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import request from 'superagent';
import {  Alert} from 'react-st-modal';
import {FormGroup, Modal, ModalBody, ModalHeader,ModalFooter,Button} from "reactstrap";
import axios from "axios";
const url = 'http://localhost:8080/api/v1/consultas/';
const url1 = 'http://localhost:8080/api/v1/';
class ConsultasM extends React.Component{
    constructor (
       props
    ){
        super(props);
        this.state={
            idCentro:this.props.match.params.id,
            id: this.props.match.params.id,
            data: [],
            medicos:[],
            ciudad:[],
            especialidades:[],
            form:{
                id:'',
                idcentro: 5,
                idespecialidad : '0',
                idempleado:'0',
                fecha:'',
                hora:'',
                paciente:'',
                centroDireccion:'',
                empleadodireccion:'',
                especialidaddescripcion:'',especialidadnobre:'',

            },
            modalEditar:false,
            modalVer:false,
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleChange2 = this.handleChange2.bind(this);
        this.handleChangeIn = this.handleChangeIn.bind(this)
    }
    handleChange(event) {this.setState({form:{
        ...this.state.form,
            [event.target.name]: event.target.value
        }});}
    handleChange2(event) {this.setState({form:{
    ...this.state.form,
            [event.target.name]: event.target.value
    }});}
    handleChangeIn(event) {this.setState({form:{
        ...this.state.form,
            [event.target.name]: event.target.value
        }});}
    peticionGet=()=>{
        axios.get(url1.concat('centros/').concat(this.state.id).concat('/show')).then(response=>{this.setState({ciudad: response.data});console.log(this.state.ciudad);}).catch(error=>{console.log(error.message);})
        request.get(url).end((err, res) => {const users = JSON.parse(res.text);this.setState({data: users});console.log(this.state.data);});
        axios.get(url1.concat('/medicos')).then(response=>{this.setState({medicos: response.data});console.log(this.state.medicos);}).catch(error=>{console.log(error.message);})
        axios.get(url1.concat('/especialidades')).then(response=>{this.setState({especialidades: response.data});console.log(this.state.especialidades);}).catch(error=>{console.log(error.message);})
    }
    componentDidMount() {
        this.peticionGet();
    }
    async eliminar(consulta) {
        console.log(consulta.id);
        this.setState();
        await Alert('Esta seguro de eliminar este registro?','Eliminar');
        try {
            await fetch(url.concat(consulta.id).concat('/delete'), { method: 'DELETE' })
                .then(() => {
                        this.peticionGet();
                        this.setState();
                    }
                );
             await Alert('Eliminado con exito');
        }catch (e) {
            Alert("Error eliminando. Intenta de nuevo");
        }
    }
    mostrarModalEditar= async (consulta)=>{
        this.setState({modalEditar:true,
            form: {id: consulta.id,hora:consulta.hora, fecha:consulta.fecha,paciente:consulta.paciente,
            idespecialidad: consulta.especialidadByIdEspecialidad.id,idempleado:consulta.empleadoByIdEmpleado.id}})
    }
    ocultarModalEditar=()=>{
        this.setState({modalEditar:false})
    }

    mostrarModalVer= async (consulta)=>{
        console.log(consulta);
        this.setState({modalVer:true,
            form: {id: consulta.id,hora:consulta.hora, fecha:consulta.fecha,paciente:consulta.paciente,
                idespecialidad: consulta.especialidadByIdEspecialidad.id,idempleado:consulta.empleadoByIdEmpleado.id,
                centroDireccion:consulta.centroByIdCentro.direccion,
                empleadodireccion:consulta.empleadoByIdEmpleado.direccion,empleadonombre:consulta.empleadoByIdEmpleado.nombre,
                especialidaddescripcion:consulta.especialidadByIdEspecialidad.descripcion,especialidadnombre:consulta.especialidadByIdEspecialidad.nombre,
                empleadofuncion:consulta.empleadoByIdEmpleado.direccion

        }})
    }
    ocultarModalVer=()=>{
        this.setState({modalVer:false})
    }

    async editarConsulta(formulario){
        console.log(formulario.id);
        const consultaAct = {
            fecha:formulario.fecha,
            hora:formulario.hora,
            paciente:formulario.paciente,
            centroByIdCentro: {
                "id": this.state.idCentro,
            },
            empleadoByIdEmpleado: {
                "id": formulario.idempleado
            },
            especialidadByIdEspecialidad: {
                "id": formulario.idespecialidad
            }
        };
        console.log(consultaAct);
        try {
            await axios.put(url+formulario.id+'/update', consultaAct).then(response=>{
                this.peticionGet();
            }).catch(err => {console.error(err);alert("Campos llenados incorrectamente o incompletos"); });
            this.setState({modalEditar:false})
            await Alert('Guardado');
        }catch (e) {
            await Alert('No se pudo realizar el cambio');
        }
        /**/
    }
  render(){
      const newVar = parseInt(this.state.id);
    return(<div>
        <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css"></link>
        <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
        <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
        <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous"></link>

        <nav class="navbar navbar-expand-md navbar-dark bg-dark">
        <div class="container">
            <a class="navbar-brand" href="/">Helse Hospital - {this.state.ciudad.nombre}</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-end" id="navbarsExampleDefault">
                <ul class="navbar-nav m-auto">
                    <li class="nav-item">
                        <a class="nav-link" href={`/inicio/${this.state.id}`}>Principal</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href={`/tablas/${this.state.id}`}>Info</a>
                    </li>
                    <li class="nav-item active">
                        <a class="nav-link" href={`/consultas/${this.state.id}`}>Consultas<span class="sr-only">(current)</span></a>
                    </li>
                </ul>
                <form class="form-inline my-2 my-lg-0">
                    <div class="input-group input-group-sm">
                        <input type="text" class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" placeholder="Buscar..."></input>
                        <div class="input-group-append">
                            <button type="button" class="btn btn-secondary btn-number">
                                <i class="fa fa-search"></i>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        </nav>
        <br></br><br></br>
        <div class="container">
        <div class="row">
            <div class="col"><h1>Consultas - {this.state.ciudad.nombre}</h1></div> <br/><br/><br/>
            <main class="container pt-5">
                <div class="card mb-5">
                    <div class="card-block p-0">
                        <table class="table table-striped table-bordered table-list">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Especialidad</th>
                                    <th>Doctor</th>
                                    <th>Paciente</th>
                                    <th>Fecha</th>
                                    <th>Hora</th>
                                    <th>Opciones</th>
                                </tr>
                            </thead>
                            <tbody>
                            {this.state.data.map((consulta, i) => {
                                return(
                                    <tr>
                                        <td>{consulta.id}</td>
                                        <td>{consulta.especialidadByIdEspecialidad.nombre}</td>
                                        <td>{consulta.empleadoByIdEmpleado.nombre}</td>
                                        <td>{consulta.paciente}</td>
                                        <td>{consulta.fecha}</td>
                                        <td>{consulta.hora}</td>
                                        <td>
                                            <div>
                                                <button  className="btn btn-success" onClick={ () => {this.mostrarModalEditar(consulta) }} >Editar </button>
                                                {"     "}
                                                <button className="btn btn-danger" onClick={ () => {this.eliminar(consulta) }} >Eliminar</button>
                                                {"     "}
                                                <button className="btn btn-dark"  onClick={ () => {this.mostrarModalVer(consulta) }}>Ver</button>
                                            </div>
                                        </td>
                                    </tr>
                                );
                            })}
                            </tbody>
                        </table>
                    </div>
                    <div class="card-footer p-0">
                        <nav aria-label="...">
                            <ul class="pagination justify-content-end mt-3 mr-3">
                                <li class="page-item disabled">
                                    <span class="page-link">Previous</span>
                                </li>
                                <li class="page-item"><a class="page-link" href="#">1</a></li>
                                <li class="page-item active">
                                    <span class="page-link">2<span class="sr-only">(current)</span>
                                    </span>
                                </li>
                                <li class="page-item"><a class="page-link" href="#">3</a></li>
                                <li class="page-item">
                                    <a class="page-link" href="#">Next</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
                
            </main>
            </div>
        </div>
        <br></br><br></br>
        <footer class="text-light">
        <div class="container">
            <div class="row">
                <div class="col-md-3 col-lg-4 col-xl-3">
                    <h5>Sobre nosotros</h5>
                    <hr class="bg-white mb-2 mt-0 d-inline-block mx-auto w-25"></hr>
                    <p class="mb-0">
                        Sucursal : {this.state.ciudad.nombre} <br/>
                        Ubicacion: {this.state.ciudad.direccion}
                    </p>
                </div>

                <div class="col-md-2 col-lg-2 col-xl-2 mx-auto">
                    <h5>Integrantes</h5>
                    <hr class="bg-white mb-2 mt-0 d-inline-block mx-auto w-25"></hr>
                    <ul class="list-unstyled">
                        <li>Pamela Gavilanes</li>
                        <li>LA</li>
                        <li>DC</li>
                        <li>VC</li>
                    </ul>
                </div>
                <div class="col-md-4 col-lg-3 col-xl-3">
                    <h5>Contact</h5>
                    <hr class="bg-white mb-2 mt-0 d-inline-block mx-auto w-25"></hr>
                    <ul class="list-unstyled">
                        <li><i class="fa fa-home mr-2"></i> Aplicaciones Distribuidas</li>
                        <li><i class="fa fa-envelope mr-2"></i> Sucursal{this.state.ciudad.direccion}@gmail.com</li>
                        <li><i class="fa fa-phone mr-2"></i>  {this.state.ciudad.telefono}</li>
                        <li><i class="fa fa-print mr-2"></i> + 33 12 14 15 16</li>
                    </ul>
                </div>
                <div class="col-12 copyright mt-3">
                    <p class="float-left">
                        <a href="/">Iniciar</a>
                    </p>
                    <p class="text-right text-muted">Creado por <i class="fa fa-heart">PG</i> by <a href="https://t-php.fr/43-theme-ecommerce-bootstrap-4.html"><i>PG</i></a> | <span>v. 1.0</span></p>
                </div>
            </div>
        </div>
        </footer>
        <Modal isOpen = {this.state.modalEditar}>
            <ModalHeader><div><h6>Editar registro</h6></div></ModalHeader>
            <ModalBody>
                <FormGroup><div className="col-xs-6">
                    <label htmlFor="paciente"><h6>Numero : {this.state.form.id} </h6></label>
                    <input type="hidden" className="form-control" readOnly value={this.state.form.id}/>
                </div></FormGroup>
                <FormGroup>
                        <label><h6>Especialidad</h6>
                            <select value={this.state.form.idespecialidad} name='idespecialidad' onChange={this.handleChange}
                                    className="browser-default custom-select">
                                <option key={0} value={0} disabled>Select</option>

                                {this.state.especialidades.map(ele => (
                                    <option key={ele.id} value={ele.id}>{ele.nombre}</option>
                                ))}
                            </select>
                        </label>
                </FormGroup>
                <FormGroup>
                    <label><h4>Doctor</h4>
                        <select value={this.state.form.idempleado} name='idempleado'  onChange={this.handleChange2}
                                className="browser-default custom-select">
                            <option key={0} value={0} disabled>Select</option>
                            {this.state.medicos.map(function (ele){
                                if(ele.empleadoByIdEmpleado.centroByIdCentro.id=== newVar){
                                    return(<option key={ele.empleadoByIdEmpleado.id}
                                                   value={ele.empleadoByIdEmpleado.id}>{ele.empleadoByIdEmpleado.nombre} - {ele.funcion}</option>
                                    );
                                }else{
                                    return (null);
                                }
                            })}
                        </select>
                    </label>
                </FormGroup>
                <FormGroup>
                    <label htmlFor="fecha"><h6>Fecha:</h6></label>
                    <input type="text" className="form-control" name="fecha" id="fecha"
                           placeholder="AA:mm:dd" title="AA:mm:dd" required
                           onChange={this.handleChangeIn} value={this.state.form.fecha}/>
                </FormGroup>
                <FormGroup>
                    <label htmlFor="hora"><h6>Hora</h6></label>
                    <input type="text" className="form-control" name="hora" id="hora"
                           placeholder="00:00:00" title="00:00:00" required
                           onChange={this.handleChangeIn} value={this.state.form.hora}/>
                </FormGroup>
                <FormGroup>
                    <label htmlFor="paciente"><h6>Paciente</h6></label>
                    <input type="text" className="form-control" name="paciente" id="paciente"
                           placeholder="Nombre y apellido" title="Nombre y apellido" required
                           onChange={this.handleChangeIn} value={this.state.form.paciente}/>
                </FormGroup>
            </ModalBody>
            <ModalFooter>
                <Button color="success" onClick={ () => {this.editarConsulta(this.state.form)}}>Editar</Button>
                <Button color="danger" onClick={ () => {this.ocultarModalEditar()}}>Cancelar</Button>
            </ModalFooter>
        </Modal>
        <Modal isOpen = {this.state.modalVer}>
                <ModalHeader><div><h6>Consulta N: {this.state.form.id}</h6></div> </ModalHeader>
                <ModalBody>
                    <div className="container">
                        <label><h4>Consulta</h4></label>
                        <div>
                            <b>Lugar:</b> {this.state.form.centroDireccion}
                        </div>
                        <div className="row">
                            <div className="col">
                                <b>Fecha:</b> {this.state.form.fecha}
                            </div>
                            <div className="col">
                                <b>Hora:</b> {this.state.form.hora}
                            </div>
                        </div> <br/>
                        <div>
                            <b>Paciente:</b> <br/>{this.state.form.paciente}
                        </div>
                    </div><br/>
                    <div className="container">
                        <label><h5>Especialista: </h5></label>
                        <div className="row">
                            <div className="col">
                               <b>Nombre: </b>{this.state.form.empleadonombre}
                            </div>
                            <div className="col">
                                <b>Ubicación: </b>{this.state.form.empleadodireccion}
                            </div>
                        </div>
                    </div>
                    <br/>
                    <div className="container">
                        <label><h5>Tema: </h5></label>
                        <div className="row">
                            <div >
                                <b>Especialidad en: </b>{this.state.form.especialidadnombre}
                            </div><br/><br/>
                            <div>
                                <b>Descripción: </b>{this.state.form.especialidaddescripcion}
                            </div>
                        </div>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button color="danger" onClick={ () => {this.ocultarModalVer()}}>Ok</Button>
                </ModalFooter>
            </Modal>
</div>
    );
  }
} 

export default ConsultasM;