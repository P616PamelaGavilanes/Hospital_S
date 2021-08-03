
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { Link } from 'react-router-dom';
class LoginPag extends React.Component{
    
    constructor ( props){
    super(props);
    this.state = {value: 'Quito'};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
     }
     handleChange(event) {this.setState({value: event.target.value});}
      handleSubmit(event) { event.preventDefault(); }

render(){

    return(
      <div>
            <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css"></link>
        <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>
        <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>


<div class="container register">
                <div class="row">
                    <div class="col-md-3 register-left">
                        <img src="https://image.flaticon.com/icons/png/512/33/33777.png" alt=""/>
                        <h3>Bienvenido</h3>
                        <p>Hersel Hospital</p>
                        <br/>
                    </div>
                    <div class="col-md-9 register-right">
                        <ul class="nav nav-tabs nav-justified" id="myTab" role="tablist">
                            <li class="nav-item">
                                <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Tarea</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Administrador</a>
                            </li>
                        </ul>
                        <div class="tab-content" id="myTabContent">
                            <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                <h3 class="register-heading">Gestionar</h3>
                                <div class="row register-form">
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <input type="text" class="form-control" placeholder="Nombre de usuario" />
                                        </div>
                                        <div class="form-group">
                                            <input type="text" class="form-control" placeholder="Codigo de usuario"/>
                                        </div>
                                        <div class="form-group">
                                            <input type="password" class="form-control" placeholder="Contraseña"  />
                                        </div>
                                        <div class="form-group">
                                            <input type="password" class="form-control"  placeholder="Confirmar contraseña"  />
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                    <form  onSubmit={this.handleSubmit}>
                                      <label> Sucursal :
                                    <br></br> <br></br> 
                                        <select value={this.state.value} onChange={this.handleChange} className="browser-default custom-select">
                                          <option value="Quito">Quito</option>
                                          <option value="Cuenca">Cuenca</option>
                                          <option value="Guayaquil">Guayaquil</option>
                                        </select>
                                       </label>
                                    <br></br> <br></br> <br></br>
                                       <div class="container">
                                            <div class="row">
                                                <div class="col-3"> Accion: </div>
                                                <div class="col-3">
                                                {this.state.value === "Quito"?<Link className= 'btn btn-primary' to={`/inicio/${this.state.value}`}>Iniciar</Link>:null}
                                                {this.state.value === "Cuenca"?<Link className= 'btn btn-primary' to={`/inicio/${this.state.value}`}>Iniciar</Link>:null}
                                                {this.state.value === "Guayaquil"?<Link className= 'btn btn-primary' to={`/inicio/${this.state.value}`}>Iniciar</Link>:null}

                                                </div>
                                            </div>
                                            </div>
                                       
                                    </form>

                                    </div>
                                </div>
                            </div>
                           
                        </div>
                    </div>
                </div>

            </div>
      </div>
    );
}
}

export default LoginPag;

