import React from 'react'
import Heroe from './Heroe'
import Buscarheroe from './Buscarheroe'


class HeroeContainer extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      cargando: true,
      heroes:[]


    }
  }
   componentDidMount () {


     const url = "https://gateway.marvel.com:443/v1/public/characters";
     const api_key = "c42b896f79b9c16420e2b14b6d06fbde";
     const hash = "4c4feae17775caa29756cce5949451d3";
     const ts="1";
     const api_query = `${url}?ts=${ts}&apikey=${api_key}&hash=${hash}`;

     fetch(api_query)
    .then(res => res.json())
    .then(heroeJson => this.setState({heroes: heroeJson.data.results, cargando: false}))
  }

  fetchHeroe(buscar){
      const url = "https://gateway.marvel.com:443/v1/public/characters";
      const api_key = "c42b896f79b9c16420e2b14b6d06fbde";
      const hash = "4c4feae17775caa29756cce5949451d3";
      const ts="1";
      const api_query = `${url}?nameStartsWith=${buscar}&ts=${ts}&apikey=${api_key}&hash=${hash}`;
      fetch(api_query)
      .then(res => res.json())
      .then(heroesJson => this.setState({heroes:heroesJson.data.results}))

}


  buscadorHeroe = (buscar)=>{
      this.fetchHeroe(buscar);

  }

  render () {
    const { cargando, heroes} = this.state
    if(cargando){
      return'Cargando..'
    }

    return (
      
      <>
      <Buscarheroe buscadorHeroe={this.buscadorHeroe}/>
      <div className="container">
        <div className="row">
          {
            heroes.map((heroe) => <Heroe
            Comic= {heroe.urls[0].url}
            Name = {heroe.name}
            Thumbnail={heroe.thumbnail.path + '.' + heroe.thumbnail.extension}
            comics={heroe.comics.items.map((com => com.name))}
            key={heroe.id}/>)
          
          
            

          }

        </div>

      </div>
    

    </>
    )


  }
}
export default HeroeContainer
