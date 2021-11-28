import React from 'react'
import axios from 'axios'

class PersonasForm extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            
        }
    }


    //funcion para enviar request POST a endpoint
    submitNuevaPersona( event ){
        //anular comportamiento por defecto del form
        event.preventDefault()
        //peticion con axios
        axios.post('http://localhost:5000/canciones' , {
                                                           nombreCancion: this.refs.nombreCancion.value,
                                                           nombreAutor:  this.refs.nombreAutor.value,
                                                           genero:  this.refs.genero.value,
                                                           duracion:  this.refs.duracion.value,
                                                           
                                                       }
        ).then(  respuesta => console.log(respuesta.data))
         .catch( error => console.log(error)  )

    }

    render(){
       return(
        <div className="row">
            <h5 className="center"> Agregar Canción  </h5>  
            <form className="col s12" onSubmit={ this.submitNuevaPersona.bind(this) }>
                <div className="row">
                    <div className="input-field col s6">
                        <input id="nombreCancion" ref="nombreCancion" type="text"  />
                        <label htmlFor="nombreCancion">Nombre Canción</label>
                    </div>
                    <div className="input-field col s6">
                        <input id="nombreAutor" ref="nombreAutor" type="text" />
                        <label htmlFor="nombreAutor">Nombre  Autor</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s6">
                        <input id="genero" ref="genero" type="text" />
                        <label htmlFor="genero">Genero</label>
                    </div>
                    <div className="input-field col s6">
                        <input id="duracion" ref="duracion" type="text" />
                        <label htmlFor="duracion">Duracion</label>
                    </div>
                </div>
                <div className="row">
                 
                    <div className="input-field col s6">
                        <button type="submit" className="btn waves-effect green waves-light" name="action">
                            Guardar
                        </button>
                    </div>
                </div>
            </form>
        </div>
       )     
    }

}

export default PersonasForm