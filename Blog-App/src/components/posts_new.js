import React, { Component } from 'react';
import { reduxForm }  from 'redux-form';
import { createPost } from '../actions/index';

class PostsNew extends Component {
	render() {
		const {fields:{title,categories,content}, handleSubmit} = this.props;
		// similar to - 
		// const handleSublit = this.props.handleSubmit;
		//const title = this.props.fields.title;


		return (
			<form onSubmit = {handleSubmit(this.props.createPost)}>
				<h3>Create A New Post</h3>
				<div className="form-group">
					<label>Title</label>
					<input type="text" className="form-control" {...title} /> 
				</div>

				<div className="form-group">
					<label>Categories</label>
					<input type="text" className="form-control" {...categories} />
				</div>

				<div className="form-group">
					<label>Content</label>
					<textarea className="form-control" {...content} />
				</div>

				<button type="submit" className="btn btn-primary">Submit</button>
			</form>
		); 
	}
}
	

//======================================================================================
//======================================================================================

//connect: first argument is mapStateToProps, second is mapDispatchToProps
//reduxForm: first argument is form config, second is mapStateToProps, and third is mapDispatchToProps


export default reduxForm ({
	form: 'PostsNewForm',
	fields: ['title','categories','content']
}, null, {createPost}) (PostsNew);




//===============================================================================
//===============================================================================
//user types something, which gets recorded on state
// state === {
// 	form: {
// 		PostsNewForm: {
// 			title: '.....'
// 			categories: '....'
// 			content: '......'
// 			}
// 		}
// }


//Destructuring of object {...title}
//We are destructuring the object, so Redux form can entirely control input tag 