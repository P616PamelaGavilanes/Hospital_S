import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import '../css/form.css'
import axios from 'axios';
import {useParams} from "react-router-dom";
const url = "http://localhost:8080/api/v1/consultas/create";
const url1 = 'http://localhost:8080/api/v1/';
class Formulario extends React.Component{
    constructor (props){
        super(props);
        this.state={
            id: this.props.match.params.id,
            data:[],
            medicos:[],
            especialidades:[],
            ciudad:[],
            idcentro: this.props.match.params.id,
            idespecialidad : '0',
            idempleado:'0',
            fecha:'',
            hora:'',
            paciente:'',
        }
        this.idob = this.props.match.params.id;
        this.handleChange = this.handleChange.bind(this);
        this.handleChange2 = this.handleChange2.bind(this);
        this.handleChangeIn = this.handleChangeIn.bind(this);

    }
    handleChangeIn(event) {this.setState({[event.target.name]: event.target.value});}
    handleChange(event) {this.setState({idespecialidad: parseInt(event.target.value)});}
    handleChange2(event) {this.setState({idempleado: parseInt(event.target.value)});}
    peticionGet=()=>{
        axios.get(url1.concat('centros/').concat(this.state.id).concat('/show')).then(response=>{this.setState({ciudad: response.data});console.log(this.state.ciudad);}).catch(error=>{console.log(error.message);})
        axios.get(url1.concat('/medicos')).then(response=>{this.setState({medicos: response.data});console.log(this.state.medicos);}).catch(error=>{console.log(error.message);})
        axios.get(url1.concat('/especialidades')).then(response=>{this.setState({especialidades: response.data});console.log(this.state.especialidades);}).catch(error=>{console.log(error.message);})
    }
    componentDidMount() {
        this.peticionGet();
    }
    handleSubmit = e =>{
        e.preventDefault();
        const rectangle = {
            fecha:this.state.fecha,
            hora:this.state.hora,
            paciente:this.state.paciente,
            centroByIdCentro: {
            "id": this.state.idcentro
            },
            empleadoByIdEmpleado: {
            "id": this.state.idempleado
            },
            especialidadByIdEspecialidad: {
            "id": this.state.idespecialidad
            }
        };
        console.log(rectangle);
        axios.post(url, rectangle ).then(()=> {
            alert("Cita agendada correctamente");
            e.target.reset();
            this.reiniciar();
        }).catch(err => {console.error(err);alert("Campos llenados incorrectamente o incompletos");e.target.reset(); });
    }
    reiniciar =()=>{
        this.setState({idempleado:0, idespecialidad:0})
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
                    <li class="nav-item">
                        <a class="nav-link" href={`/consultas/${this.state.id}`}>Consultas</a>
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
            <div class="col"><h1>Agendar Cita</h1></div> <br/><br/><br/>
                <form class="form"  onSubmit = {this.handleSubmit}>
                    <div class="container">
                        <div class="row">
                            <div class="col-4">
                                <div class="form-group">
                                    <div class="col-xs-6">
                                    <label> <h4>Especialidad</h4>
                                        <select value={this.state.idespecialidad} onChange={this.handleChange} className="browser-default custom-select">
                                            <option key = {0} value={0} disabled>Select</option>
                                            {this.state.especialidades.map(ele =>(
                                                <option key = {ele.id} value={ele.id}>{ele.nombre}</option>
                                            ))}
                                        </select>
                                    </label>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="col-xs-6">
                                        <label><h4>Doctor</h4>
                                            <select value={this.state.idempleado} onChange={this.handleChange2}
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
                                    </div>
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="form-group">
                                    <div class="col-xs-6">
                                        <label for="fecha"><h4>Fecha:</h4></label>
                                        <input type="text" class="form-control" name="fecha" id="fecha" placeholder="AA:mm:dd" title="AA:mm:dd" required onChange={this.handleChangeIn}/>
                                    </div>
                                </div>
                            </div>
                            <div class="col-4">
                            <div class="form-group">
                                    <div class="col-xs-6">
                                        <label for="hora"><h4>Hora</h4></label>
                                        <input type="text" class="form-control" name="hora" id="hora" placeholder="00:00:00" title="00:00:00" required onChange={this.handleChangeIn}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="form-group">
                            <div class="col-xs-6">
                                <label for="paciente"><h4>Paciente</h4></label>
                                <input type="text" class="form-control"  name="paciente" id="paciente" placeholder="Nombre y apellido" title="Nombre y apellido" required onChange={this.handleChangeIn}/>
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="col-xs-12">
                                <br/>
                                <button class="btn btn-lg btn-success" type="submit"><i class="glyphicon glyphicon-ok-sign"></i> Guardar</button>
                                <a className="btn btn-lg btn-dark" href={`/consultas/${this.state.id}`}>Consultas</a>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        <br></br><br></br>
        <footer class="text-light">
        <div class="container">
            <div class="row">
                <div class="col-md-3 col-lg-4 col-xl-3">
                    <h5>About</h5>
                    <hr class="bg-white mb-2 mt-0 d-inline-block mx-auto w-25"></hr>
                    <p class="mb-0">
                        Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression.
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
                        <li><i class="fa fa-home mr-2"></i> My company</li>
                        <li><i class="fa fa-envelope mr-2"></i> email@example.com</li>
                        <li><i class="fa fa-phone mr-2"></i> + 33 12 14 15 16</li>
                        <li><i class="fa fa-print mr-2"></i> + 33 12 14 15 16</li>
                    </ul>
                </div>
                <div class="col-12 copyright mt-3">
                    <p class="float-left">
                        <a href="/">Back to top</a>
                    </p>
                    <p class="text-right text-muted">Creado por <i class="fa fa-heart"></i> by <a href="https://t-php.fr/43-theme-ecommerce-bootstrap-4.html"><i>PG</i></a> | <span>v. 1.0</span></p>
                </div>
            </div>
        </div>
        </footer>
</div>
);
  }
} 

export default Formulario;