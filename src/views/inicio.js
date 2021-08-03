import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { Link } from 'react-router-dom';
import request from "superagent";
import axios from "axios";
const url = "http://localhost:8080/api/v1/";
class Inicio extends React.Component{
    constructor (props){
        super(props);
        this.state={
            id: this.props.match.params.id,
            data:[],
            medicos:[],

        }

    }
    peticionGet=()=>{
        axios.get(url.concat('/medicos')).then(response=>{this.setState({medicos: response.data});console.log(this.state.medicos);}).catch(error=>{console.log(error.message);})
        request.get(url.concat('centros/')+this.state.id.concat('/show')).end((err, res) => {
            const users = JSON.parse(res.text);
            this.setState({data:users})
            console.log(this.state.data)
        });
    }
    componentDidMount() {
        this.peticionGet();
    }
    render() {
        const newVar = parseInt(this.state.id);
        return(
            <div>
                <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css"></link>
                <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
                <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
                <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous"></link>
                <nav class="navbar navbar-expand-md navbar-dark bg-dark">
                    <div class="container">
                        <a class="navbar-brand" href="/">Helse Hospital - {this.state.data.nombre}</a>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>

                        <div class="collapse navbar-collapse justify-content-end" id="navbarsExampleDefault">
                            <ul class="navbar-nav m-auto">
                                <li class="nav-item active">
                                    <a class="nav-link" href={`/inicio/${this.state.id}`} >Principal<span class="sr-only">(current)</span></a>
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
                <section class="jumbotron text-center">
                    <div class="container">
                        <h1 class="jumbotron-heading"> HELSE Hospital  </h1>
                        <p class="lead text-muted mb-0"> Sucursal - {this.state.data.nombre}</p>
                        <p > {this.state.data.direccion} - {this.state.data.telefono} </p>
                    </div>
                </section>

                <div class="container">
                    <div class="row">
                        <div class="col">
                            <div class="container">
                                <div class="row">
                                    {this.state.medicos.map(function (ele){
                                        if(ele.empleadoByIdEmpleado.centroByIdCentro.id=== newVar){
                                            return(<div className="col-12 col-sm-6 col-md-4 col-lg-3">
                                                <div className="our-team">
                                                    <div className="picture">
                                                        <img className="img-fluid"
                                                             src="https://previews.123rf.com/images/mrcocoa/mrcocoa1605/mrcocoa160500900/55927435-icono-del-trabajador-de-personal-adecuado-para-la-informaci%C3%B3n-de-gr%C3%A1ficos-p%C3%A1ginas-web-y-medios-impresos-e-i.jpg"/>
                                                    </div>
                                                    <div className="team-content">
                                                        <h3 className="name">{ele.empleadoByIdEmpleado.nombre}</h3>
                                                        <h4 className="title">{ele.funcion}</h4>
                                                    </div>
                                                    <ul className="social">
                                                        <li><a href="https://codepen.io/collection/XdWJOQ/"
                                                               className="fa fa-facebook" aria-hidden="true"></a></li>
                                                        <li><a href="https://codepen.io/collection/XdWJOQ/"
                                                               className="fa fa-twitter" aria-hidden="true"></a></li>
                                                        <li><a href="https://codepen.io/collection/XdWJOQ/"
                                                               className="fa fa-google-plus" aria-hidden="true"></a>
                                                        </li>
                                                        <li><a href="https://codepen.io/collection/XdWJOQ/"
                                                               className="fa fa-linkedin" aria-hidden="true"></a></li>
                                                    </ul>
                                                </div>
                                            </div>);
                                        }else{
                                            return (null);
                                        }
                                    })}
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-sm-4">
                            <div class="card bg-light mb-3">
                                <Link className= 'btn btn-dark' to={`/add/${this.state.id}`}>Agendar Cita</Link>
                            </div>
                            <div class="card bg-light mb-1">
                                <div class="card-header bg-success text-white text-uppercase"><i class="fa fa-home"></i> Direccion</div>
                                <div class="card-body">
                                    <p>{this.state.data.nombre}</p>
                                    <p>{this.state.data.direccion}</p>
                                    <p>Email : {this.state.data.nombre}@example.com</p>
                                    <p>Tel. {this.state.data.telefono}</p>
                                </div>
                            </div>
                        </div>

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
                                <p class="text-right text-muted">created with <i class="fa fa-heart"></i> by <a href="https://t-php.fr/43-theme-ecommerce-bootstrap-4.html"><i>t-php</i></a> | <span>v. 1.0</span></p>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        );
    }


  }


export default Inicio;