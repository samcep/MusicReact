import axios from 'axios'
import React from 'react'
import img from '../img/img.svg'

const PersonasDetalle = (  {  personita }  ) => {

   
  

    return(
        <div className="row ">
              <div class="col s12 m7">
    <div class="card horizontal">
      <div class="card-image">
        <img src={img}/>
      </div>
      <div class="card-stacked">
        <div class="card-content">
        <span>Titulo: {personita.nombreCancion }  </span>
                        <p>Autor: { personita.nombreAutor  }</p>
                        <p>Genero: { personita.genero  }</p>
                        <p>Duración: { personita.duracion  }</p>
        </div>
        
      </div>
      
    </div>
  </div>
      </div>
    )
}

export default PersonasDetalle
