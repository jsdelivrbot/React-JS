import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux'; //we dont need this line anymore
import { fetchPosts } from '../actions/index';
import { Link } from 'react-router';

// export default () => {
// 	return <div>List of blog posts.</div>;
// };

//Refactoring a function component to a class component- === 
// ======which ultimately is changed into a container

class PostsIndex extends Component {

	componentWillMount() {
		this.props.fetchPosts();
	}

	renderPosts() {
		return this.props.posts.map((post) => {
			return (
				<li className="list-group-item" key={post.id}>
				<Link to={"posts/" + post.id}>
				<span className="pull-xs-right">{post.categories}</span>
				<strong>{post.title}</strong>
				</Link>
				</li>
			);
		});
	}


	render() {
		return (
			<div>
				<div className="text-xs-right">
				<Link to="/posts/new" className="btn btn-primary">
					Add a post
				</Link>
				</div>
				<h3>Posts</h3>
				<ul className="list-group">
				{this.renderPosts()}
				</ul>
				
			</div>
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
//======================================================================

// export default connect (null, { fetchPosts }) (PostsIndex);


function mapStateToProps(state) {
	return {posts : state.posts.all};
}

export default connect (mapStateToProps, { fetchPosts }) (PostsIndex);
