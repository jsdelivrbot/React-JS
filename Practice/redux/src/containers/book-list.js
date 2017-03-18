import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators} from 'redux'; //makes sure action creator flows thru all the reducers

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


//Anything returned from this function will end up as props on the BookList container
	function mapDispatchToProps (dispatch) {
		//whenever selectBook is called, result should be passed
		//to all the reducers

		return bindActionCreators ({selectBook: selectBook}, dispatch)
	}

	export default connect (mapStateToProps, mapDispatchToProps) (BookList);

	// 'connect' takes function and component to produce container. 
	//Container is aware of state contained by Redux