import React, { Component } from 'react';
import { connect } from 'react-redux';


class BookList extends Component {
	
	renderList () {
		return this.props.books.map((book) => {
			return (
				<li key = {book.title} className = "list-group-item"> {book.title} </li>
				);
			});
		}

		render () {

			// console.log(this.props.asdf) // -> '123'

			return (
				<ul className = "list-group col-sm-4">
					{this.renderList()}
				</ul>
			)
		}
	}

	//state contains an array of books and an active book

	function mapStateToProps (state) {
		//whatever is returned will show up as props inside BookList

		// return {
		// 	asdf: '123'
		// };

		return {
			books: state.books
		};
	}

	export default connect (mapStateToProps) (BookList);

	// 'connect' takes function and component to produce container. 
	//Container is aware of state contained by Redux