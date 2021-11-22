import axios from 'axios'
import React from 'react'


const PersonasDetalle = (  {  personita }  ) => {

   

    return(
        <div className="row">
            <div className="col s12 m6">
                <div className="card blue darken-4">
                    <div className="card-content white-text">
                        <span className="card-title"> { personita.nombre }  { personita.apellido } </span>
                        <p>Email: { personita.email  }</p>
                        <p>Email: { personita.telefono  }</p>
                        <p>Email: { personita.empresa  }</p>
                    </div>
                    <div className="card-action">
                   
                    <a href="#!">This is a link</a>
                    </div>
                </div>
            </div>
      </div>
    )
}

export default PersonasDetalle
