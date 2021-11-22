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
        axios.post('http://localhost:5000/contactos' , {
                                                           nombre: this.refs.nombre.value,
                                                           apellido:  this.refs.apellido.value,
                                                           email:  this.refs.email.value,
                                                           telefono:  this.refs.telefono.value,
                                                           empresa:  this.refs.empresa.value,
                                                       }
        ).then(  respuesta => console.log(respuesta.data))
         .catch( error => console.log(error)  )

    }

    render(){
       return(
        <div className="row">
            <h5 className="center"> Nuevo Contacto  </h5>  
            <form className="col s12" onSubmit={ this.submitNuevaPersona.bind(this) }>
                <div className="row">
                    <div className="input-field col s6">
                        <input id="nombre" ref="nombre" type="text"  />
                        <label htmlFor="nombre">Nombre</label>
                    </div>
                    <div className="input-field col s6">
                        <input id="apellido" ref="apellido" type="text" />
                        <label htmlFor="apellido">Apellido</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s6">
                        <input id="email" ref="email" type="text" />
                        <label htmlFor="email">Email</label>
                    </div>
                    <div className="input-field col s6">
                        <input id="telefono" ref="telefono" type="text" />
                        <label htmlFor="telefono">Telefono</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s6">
                        <input id="empresa" ref="empresa" type="text" />
                        <label htmlFor="empresa">Empresa</label>
                    </div>
                    <div className="input-field col s6">
                        <button type="submit" className="btn waves-effect waves-light" name="action">
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