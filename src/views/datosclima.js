import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import axios from 'axios';
import './clima.css'
const url = "https://api.openweathermap.org/data/2.5/weather?q=";

/*peticionGet(id){
    axios.get(url.concat(id).concat('&appid=72794259f8a9cd3c207f5c31c6c0fa09')).then(response=>{
        this.setState({data: response.data});
        console.log(response.data);
    }).catch(error=>{
        console.log(error.message);
    })
}*/


class DatosClima extends React.Component{
    constructor (
       props
    ){
        super(props);
        this.state={
            id: props,
            datos:[],
            clima:[],
            tempe:[],
        }

    }
  peticionGet(idc){
        axios.get(url.concat(idc).concat('&appid=72794259f8a9cd3c207f5c31c6c0fa09&units=metric')).then(response=>{
            //data= response.data['weather'][0].description;
            this.setState({datos: response.data});
            this.setState({clima: response.data.weather[0]});
            this.setState({tempe: response.data.main});
            console.log(response.data);
            console.log(response.data.main);
            
        }).catch(error=>{
            console.log(error.message);
        })
    }
    componentDidMount() {
        this.peticionGet(this.props.id); 
    }
  render(){
      return(<div>
       
         {this.state.datos.name}
         <div class="col-md-4">
         <div class="card mb-4 text-white bg-dark">
            <img class="card-img-top" src="//placeimg.com/290/180/any" alt="Card image cap"></img>
            <div class="card-body">
               <h5 class="card-title">Card title</h5>
               <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
               <a href="http://www.jquery2dotnet.com/" class="btn btn-outline-light btn-sm">Go somewhere</a>
            </div>
         </div>
      </div>
        
    
      
      </div>);
  }
} 

export default DatosClima;