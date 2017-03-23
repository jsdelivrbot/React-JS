import React, { Component } from 'react';

// export default () => {
// 	return <div>List of blog posts.</div>;
// };

//Refactoring a function component to a class component-

class PostsIndex extends Component {

	componentWillMount() {
		console.log('this would be a good time to call action creator to fetch posts');
	}

	render() {
		return (
			<div>List of blog posts.</div>
		);
	}
}

export default PostsIndex;