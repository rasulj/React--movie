

import React from "react"
import Loader from "../components/Loader"
import Movies from "../components/Movies"
import Search from "../components/Search"



export default class Main extends React.Component{

    state ={
        movies:[],
        loading:true,
    }

componentDidMount(){
    fetch(`http://www.omdbapi.com/?apikey=7e9a8bae&s=iron`)
    .then(res => res.json())
        .then(data => this.setState({ movies: data.Search, loading: false}))
}
seachMovies = (str, type ="all")=>{
    this.setState({ loading: true })
    fetch(`http://www.omdbapi.com/?apikey=7e9a8bae&s=${str}${type!=="all"?`&type=${type}`: ''}`)
        .then(res => res.json())
        .then(data => this.setState({ movies: data.Search ,loading:false}))
}

render(){

    return(

        <div className="container content">    
            <Search seachMovies={this.seachMovies}/>
            {this.state.loading ? <Loader/> : (<Movies movies={this.state.movies} />)}
        </div>
    )
}


}







