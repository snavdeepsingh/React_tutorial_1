import React from 'react';


class SearchBar extends React.Component {
// Three ways to assign this function in React
// First bind inside constructor
    // constructor(){
    //     super()
    //     this.onInputChange = this.onInputChange.bind(this);
    // }
    state = {term: ''};

    // Second arrow function
    onInputChange = (e) =>{
        this.setState({term: e.target.value})
    }

    onFormSubmit(e) {
        e.preventDefault();
        console.log(this.state)

        this.props.onSubmit(this.state.term)
    }

    render(){
        return (
            <div className="ui segment">
                {/* third - Wrap the method with an arrow function and invoke the function  */}
                <form onSubmit={(e) =>this.onFormSubmit(e)} className="ui form">
                    <div className="field">
                        <label>Image Search</label>
                        <input 
                        value={this.state.term}
                        placeholder="Search"
                        // onChange={(e) => this.setState({term: e.target.value})}
                        onChange={this.onInputChange} 
                        
                        type="text"/>
                    </div> 
                </form>
            </div>
        )
    }
}

export default SearchBar;