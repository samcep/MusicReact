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

    //vincular la funcion actualizarPErsona al objeto
    this.actualizarPersona = this.actualizarPersona.bind(this)
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


  //funcion para asignar personaActual
  actualizarPersona(persona) {
      this.setState({
          personaActual: persona
      })
  }


  render(){
    return (
      <div className="container-fluid">
          <div className="row">
              <div className="col s12">
                <nav>
                    <div className="nav-wrapper blue darken-4">
                    <a href="#!" className="brand-logo ">persona CRM</a>
                   
                    </div>
                </nav>
              </div>
          </div>
          <div className="row">
              <div className="col s3">
                  <PersonasLista  
                            listapersonas={ this.state.personas } 
                            actualizarPersona = { this.actualizarPersona }
                  />
              </div>
              <div className="col s9">
                  <PersonasDetalle  personita={ this.state.personaActual }  />
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
