
import React from "react";

export default class Search extends React.Component{
state={
    search:'iron',
    type: 'all'
}

    hanleKey = (e)=>{
        if( e.key === "Enter"){
            this.props.seachMovies( this.state.search,this.state.type
      )}    }
             
        

     handelFilter = (e)=>{
        this.setState(()=>({type: e.target.dataset.type}),
              ()=>{
                  this.props.seachMovies(this.state.search ,this.state.type)
        })
     }
render(){

    return(
        <div class="row">
            <div class="col s12">
               
                <div class="input-field ">
                    <input 
                     type="search"
                      class="validate"
                      placeholder="search"
                      value={this.state.search}
                      onChange={(e)=> this.setState({search:e.target.value})}
                     onKeyDown={this.hanleKey}
                       
                      />
                    <button className="btn search-btn" 
                        onClick={() => this.props.seachMovies(this.state.search, this.state.type)}>SEARCH MOVIES</button>  
                    
                </div>
                <div className="container-label">
                    <label >
                        <input
                           class="with-gap "
                           name="type"
                           type="radio" 
                           data-type="all"
                            onChange={this.handelFilter}
                            checked={this.state.type === "all"}
                        />
                        <span>All</span>
                    </label>
                </div>
                <div className="container-label">
                    <label >
                        <input 
                           class="with-gap " 
                           name="type"
                            type="radio"
                            data-type="movie" 
                            onChange={this.handelFilter}
                            checked={this.state.type === "movie"}
                            />
                        <span>Movies only</span>
                    </label>
                </div>
                <div className="container-label">
                    <label >
                        <input 
                        class="with-gap "
                         name="type" 
                         type="radio" 
                         data-type="series" 
                         onChange={this.handelFilter}
                            checked={this.state.type === "series"}   
                           />
                        <span>Series only</span>
                    </label>
                </div>
               
                </div>
                </div>
    )
}

}


