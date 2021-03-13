import React from 'react'
import Logo from "../componente/imagenes/Logo-Marvel.png"
import PropTypes from 'prop-types'

class Buscarheroe extends React.Component{

constructor(props){
  super(props)

  this.state = { buscar : ''}
}
handleChange = (e) =>{
  this.setState({ buscar: e.target.value})
}
handlSubmit = (e) =>{
  e.preventDefault()

}


render(){
  const { buscadorHeroe } = this.props
  const { buscar} = this.state
  return(
    <div>
    <nav className="navbar navbar-dark bg-dark">
      <a  href="#" className="navbar-brand">
        <img src={Logo} className="d-block"width="100" height="50"/>
      </a>
        <form onSubmit={this.handlSubmit} className="form-inline mt-2 mt-md-0">
          <div className="input-group mb-3">
            <input
            value={buscar}
            onChange={this.handleChange}
            aria-label="Recipient's username"
             aria-describedby="button-addon2"
              className="form-control mr-sm-2"
               type='text' placholder='Buscar Heroe'
                 />
              <div className="input-group-append">
                <button className="btn btn-danger"  onClick={() => buscadorHeroe(buscar)}>Buscar</button>

            </div>
          </div>
        </form>
    </nav>

    </div>

  )
}
}
Buscarheroe.propTypes={
  buscadorHeroe:PropTypes.func.isRequired
}
export default Buscarheroe
