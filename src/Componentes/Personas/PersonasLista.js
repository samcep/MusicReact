import React from 'react'


const PersonasLista = (props) => {
    return(
        <ul className="collection with-header">
            <li className="collection-header"><h4>Contactos</h4></li>
            {
                 props.listapersonas.map( ( elemento ) => {
                           return (  
                                <li 
                                    className="collection-item"
                                    key={ elemento._id }
                                >
                                    { elemento.nombre }  {elemento.apellido}
                                </li>
                           ) 
                 } )   

            }
      </ul>
    )
}

export default PersonasLista
