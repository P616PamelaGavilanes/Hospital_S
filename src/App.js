
import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './css/prin.css'

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Inicio from './views/inicio';
import LoginPag from './views/login';
import Formulario from './views/formulario';
import TablasM from './views/especialidades';
import ConsultasM from './views/consultaM';

function App() {
  /*let histy =useHistory();
  const [dropdown, setDropdown] = useState("");
  const eleSucursal=(l)=>{
    
    //alert("elejecion 2"+ l
    if (l==='G') {
      alert("elejecion 2"+ l);
      //return histy.push('/inicio');
      //this.props.history.push('/inicio');
    }
  }*/

  return (
      <div>
        <Router>
          <Switch>
          <Route exact path="/" component={LoginPag}/>
          <Route exact path = '/inicio/:id' component={Inicio}/>
          <Route exact path = '/add/:id' component={Formulario}/>
          <Route exact path = '/tablas/:id' component={TablasM}/>
          <Route exact path = '/consultas/:id' component={ConsultasM}/>
          </Switch>
        </Router>   
    </div>
  );
}
export default App;

/**
 * 
 *  { showC1 ? <DatosClima  id = 'Latacunga,Ecuador'/>:null }
                    { showC2 ? <DatosClima  id = 'Quito,Ecuador'/>:null }
                    { showC3 ? <DatosClima  id = 'Ambato,Ecuador'/>:null }
                    { showC4 ? <DatosClima  id = 'Cuenca,Ecuador'/>:null }
                    { showC5 ? <DatosClima  id = 'Riobamba,Ecuador'/>:null }
                                    <a class="btn btn-success btn-sm ml-3" href="cart.html">
                    <i class="fa fa-shopping-cart"></i> Cart
                    <span class="badge badge-light">3</span>
                </a>

 */
