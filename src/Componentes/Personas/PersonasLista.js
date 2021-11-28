import React from 'react'


const PersonasLista = (props) => {

 
   
    return(
    
            <ul className="collection ">
                            {
                    props.listapersonas.map( ( elemento ) => {
                            return (  
                                    <li 
                                        className="collection-item avatar"
                                        key={ elemento._id }
                                        
                                    >
                                    <i class="material-icons circle green"><box-icon name='album' type='solid' ></box-icon></i>
                                    <span class="title">{ elemento.nombreCancion } </span>  
                                    <p>{elemento.nombreAutor}
                                    
                                        </p>
                                        <a href="#!" className="secondary-content"><i class="material-icons "><box-icon name='info-circle' type='solid'onClick={ props.actualizarPersona.bind(this , elemento   ) } ></box-icon ></i><box-icon name='trash'
                                        onClick={ props.borrarCancion.bind(this,elemento)}
                                        
                                        
                                        ></box-icon></a>
                                        



                                    


                                    </li>
                            ) 
                    } )   

                }
                    

        </ul>
      
    )
}

export default PersonasLista
