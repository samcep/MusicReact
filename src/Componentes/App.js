import React from 'react'
import PersonasLista from './Personas/PersonasLista';
import PersonasDetalle from './Personas/PersonasDetalle';
import PersonasForm from './Personas/PersonasForm';

class App extends React.Component {

  constructor(props){
    super(props)
    this.state = {
       personas : [],
       personaActual: {}
    }
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
                  <PersonasLista />
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
