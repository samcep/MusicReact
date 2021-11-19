import React from 'react'
import PersonasLista from './Personas/PersonasLista';
import PersonasDetalle from './Personas/PersonasDetalle';
import PersonasForm from './Personas/PersonasForm';
import axios from 'axios';

class App extends React.Component {

  constructor(props){
    super(props)
    this.state = {
       personas : [],
       personaActual: {}
    }
  }

  componentDidMount(){
      const url="http://localhost:5000/contactos"
      axios.get(url)
            .then( (respuesta)=> {   
                this.setState({
                      personas: respuesta.data
                })  
            })
            .catch( (error) => {console.log(error)}  )
  }


  render(){
    return (
      <div className="container-fluid">
          <div className="row">
              <div className="col s12">
                  Menu
              </div>
          </div>
          <div className="row">
              <div className="col s3">
                  <PersonasLista  
                            listapersonas={ this.state.personas } 
                            numero = {1}
                  />
              </div>
              <div className="col s9">
                  <PersonasDetalle />
              </div>
          </div>
          <div className="row">
              <div className="col s12">
                  <PersonasForm />
              </div>
          </div>
      </div>
    ); 
  }
}

export default App;
