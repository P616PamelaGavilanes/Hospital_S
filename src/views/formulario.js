import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import '../css/form.css'
//import axios from 'axios';
//const url = "https://api.openweathermap.org/data/2.5/weather?q=";
class Formulario extends React.Component{
    constructor (
       props
    ){
        super(props);
        this.state={
            id: this.props.match.params.id,
            datos:[],
            clima:[],
            tempe:[],
        }
    }
  render(){
      return(<div>
        <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css"></link>
        <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
        <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
        <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous"></link>

        <nav class="navbar navbar-expand-md navbar-dark bg-dark">
        <div class="container">
            <a class="navbar-brand" href="/">Helse Hospital - {this.state.id}</a>
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
                <form class="form" action="##" method="post" id="registrationForm">
                    <div class="container">
                        <div class="row">
                            <div class="col-4">
                                <div class="form-group">
                                    <div class="col-xs-6">
                                    <label> <h4>Especialidad</h4>
                                        <select value={this.state.value} onChange={this.handleChange} className="browser-default custom-select">
                                            <option value="Quito">Quito</option>
                                            <option value="Cuenca">Cuenca</option>
                                            <option value="Guayaquil">Guayaquil</option>
                                        </select>
                                    </label>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label> <h4>Doctor</h4>
                                        <select value={this.state.value} onChange={this.handleChange} className="browser-default custom-select">
                                            <option value="Quito">Quito</option>
                                            <option value="Cuenca">Cuenca</option>
                                            <option value="Guayaquil">Guayaquil</option>
                                        </select>
                                    </label>
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="form-group">
                                    <div class="col-xs-6">
                                        <label for="phone"><h4>Fecha:</h4></label>
                                        <input type="text" class="form-control" name="phone" id="phone" placeholder="enter phone" title="enter your phone number if any."/>
                                    </div>
                                </div>
                            </div>
                            <div class="col-4">
                            <div class="form-group">
                                    <div class="col-xs-6">
                                        <label for="email"><h4>Hora</h4></label>
                                        <input type="email" class="form-control" name="email" id="email" placeholder="you@email.com" title="enter your email."/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="form-group">
                            <div class="col-xs-6">
                                <label for="password"><h4>Paciente</h4></label>
                                <input type="text" class="form-control" placeholder="Nombre y apellido" title="Nombre y apellido"/>
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="col-xs-12">
                                <br/>
                                <button class="btn btn-lg btn-success" type="submit"><i class="glyphicon glyphicon-ok-sign"></i> Guardar</button>
                                <button class="btn btn-lg" type="reset"><i class="glyphicon glyphicon-repeat"></i> Limpiar</button>
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