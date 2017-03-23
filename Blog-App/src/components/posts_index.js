import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux'; //we dont need this line anymore
import { fetchPosts } from '../actions/index';

// export default () => {
// 	return <div>List of blog posts.</div>;
// };

//Refactoring a function component to a class component- === 
// ======which ultimately is changed into a container

class PostsIndex extends Component {

	componentWillMount() {
		this.props.fetchPosts();
	}

	render() {
		return (
			<div>List of blog posts.</div>
		);
	}
}

// function mapDispatchToProps(dispatch) {
// 	return bindActionCreators ({ fetchPosts }, dispatch);
// }

// //since first argument should be state in connect, and wwe don't have it yet,
// // we will assign it 'null'

// export default connect (null, mapDispatchToProps) (PostsIndex);

//========================================================
//============================================================

//we can avoid writing boilerplate mapDispatchToProps in following manner -
//just write an export line as follows-

// export default connect (null, { fetchPosts: fetchPosts }) (PostsIndex);

//OR

export default connect (null, { fetchPosts }) (PostsIndex);
