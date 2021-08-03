import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
class ConsultasM extends React.Component{
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
            <div class="col"><h1>Consultas</h1></div> <br/><br/><br/>
            <main class="container pt-5">
                <div class="card mb-5">
                    <div class="card-header">Fearures</div>
                    <div class="card-block p-0">
                        <table class="table table-bordered table-sm m-0">
                            <thead class="">
                                <tr>
                                    <th>#</th>
                                    <th>Name</th>
                                    <th>Registration Date</th>
                                    <th>E-mail address</th>
                                    <th>Premium Plan</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <label class="custom-control custom-checkbox">
                                            <input type="checkbox" class="custom-control-input"/>
                                            <span class="custom-control-indicator"></span>
                                        </label>
                                    </td>
                                    <td>John Lilki</td>
                                    <td>September 14, 2013</td>
                                    <td>jhlilk22@yahoo.com</td>
                                    <td>No</td>
                                </tr>
                            
                               
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

export default ConsultasM;