import React from 'react'
import {Button, Modal, ModalBody, ModalFooter,  Row, Col} from 'react-bootstrap'
import ModalHeader from 'react-bootstrap/ModalHeader'
import Comics from './Comics'

class WModal extends React.Component{
    
  constructor(props){
    super(props);

    this.state={
        show:false,
        cargando: true,
      comics:[]
    }
  }
  componentDidMount () {

    
    const url = "https://gateway.marvel.com:443/v1/public/characters";
    const api_key = "c42b896f79b9c16420e2b14b6d06fbde";
    const hash = "4c4feae17775caa29756cce5949451d3";
    const ts="1";
    const api_query = `${url}/1011334/comics?ts=${ts}&apikey=${api_key}&hash=${hash}`;

    fetch(api_query)
   .then(res => res.json())
   .then(heroeJson => this.setState({comics: heroeJson.data.results, cargando: false}))
 }


  handleModal(){
      this.setState({show:!this.state.show})
  }
render()

{
    
    const { cargando, comics} = this.state
    if(cargando){
      return'Cargando..'
    }
   return(
    <>
    <Button variant="danger" onClick={()=>{this.handleModal()}}>
      Comics
    </Button>

    <Modal show ={this.state.show}>
      <ModalHeader>Lista de Comics</ModalHeader>
      <ModalBody > 
        
            <Row>
                <Col xs={6} md={4}>
                    {
                    comics.map((heroe) => <Comics
                    Comic= {heroe.urls[0].url}
                    Nombre= {heroe.title}
                    Imagen={heroe.thumbnail.path + '.' + heroe.thumbnail.extension}
                    />)
                    }        
                </Col>
                
            </Row>
           
            
    
      </ModalBody>
      <ModalFooter>
        <Button variant="danger" onClick={()=>{this.handleModal()}} >
          Cerrar
        </Button>
      </ModalFooter>
    </Modal>
    
  </>
   )
}

}

export default WModal;
