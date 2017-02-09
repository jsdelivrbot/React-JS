import React, { Component } from 'react';

/*functional component making -

const SearchBar () => {
	return <input /> // JSX here means in javascript React.createElement
};

=====================================================================
//class component making -

class SearchBar extends React.Component {
	render () {
		return <input onChange = {(event) => console.log (event.target.value)} />;
	}

}

//declare event handler

onInputChange(event) {
	console.log (event.target.value)
}

export default SearchBar;

==============================================================
other method

class SearchBar extends Component {
	render () {
		return <input onChange = {event => console.log (event.target.value)} />;
	}

}

export default SearchBar;

=====================================================
*/

//using State

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
// Value = {this.state.term}

export default SearchBar;
