import React, { Component } from 'react';


// functional component making -

// const SearchBar = () => {
// 	return <input /> //JSX here means in javascript React.createElement
// };


// export default SearchBar;


// =====================================================================
// class component making -

// class SearchBar extends Component {
// 	render () {
// 		return <input onChange = {this.onInputChange} />;
// 	}


// 	//declare event handler

// 	onInputChange(event) {
// 		console.log (event.target.value)
// 	}

// }

// export default SearchBar;



//=======================================================================
//other method in ES6-



// class SearchBar extends Component {
// 	render () {
// 		return <input onChange = {event => console.log (event.target.value)} />;
// 	}

// }

// export default SearchBar;



//========================================================================
//using State



// class SearchBar extends Component {
// 	constructor(props) {
// 		super(props);

// 		this.state = { term: '' };
// 	}

// 	render () {
// 		return ( 
// 			<div>
// 			<input onChange = {event => this.setState ({ term: event.target.value })} />
// 			Value of the input: {this.state.term}
// 			</div>
// 			);
// 	}
// }

// export default SearchBar;


// class SearchBar extends Component {
// 	constructor(props) {
// 		super(props);

// 		this.state = { term: '' };
// 	}

// 	render () {
// 		return ( 
// 			<div>
// 			<input onChange = {event => this.setState ({ term: event.target.value })} />
// 			</div>
// 			);
// 	}
// }

// export default SearchBar;




//==============================================================================
//Contolled Components -


class SearchBar extends Component {
	constructor(props) {
		super(props);

		this.state = { term: '' };
	}


	render () {
		return (
			<div className="search-bar">
			<input 
				value = {this.state.term}
				onChange = {event => this.onInputChange(event.target.value)} 
			/>
			</div>
			);
	}


	onInputChange(term) {
		this.setState({term});
		this.props.onSearchTermChange(term);
	}
}
export default SearchBar;
