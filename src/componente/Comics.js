import React from 'react'
import PropTypes from 'prop-types'
import {Card} from 'react-bootstrap'


class Comics extends React.Component{
 
  render(){
    
    const {Nombre,Imagen} = this.props
    return(
      
        <Card style={{ width: '10rem' }}>
        <Card.Img variant="top" src={Imagen} />
        <Card.Body>
          <Card.Title>{Nombre}</Card.Title>          
        </Card.Body>
      </Card>
    )
  }
}



Comics.propTypes ={
  Nombre:PropTypes.string.isRequired,
  Imagen:PropTypes.string.isRequired,
}
export default Comics