import React from 'react'
import PropTypes from 'prop-types'
import WModal from './WModal'



class Heroe extends React.Component{

  render(){
    
    const {Name,Thumbnail,Comic,comics} = this.props
    return(
      <div className="col-md-4">
        <div className="card">
        <a href={Comic}>
          <img src={Thumbnail} className="card-img-top" />
          </a>
            <div className="card-body">
              <h2 className ="card-title">{Name}</h2>
            
            
            </div>
        </div>
      </div>

    )
  }
}



Heroe.propTypes ={
  Name:PropTypes.string.isRequired,
  Thumbnail:PropTypes.string.isRequired,
}
export default Heroe
