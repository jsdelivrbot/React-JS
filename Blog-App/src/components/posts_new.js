import React, { Component } from 'react';
import { reduxForm }  from 'redux-form';

class PostsNew extends Component {
	render() {
		const {fields:{title,categories,content}, handleSubmit} = this.props;
		// similar to - 
		// const handleSublit = this.props.handleSubmit;
		//const title = this.props.fields.title;


		return (
			<form onSubmit = {handleSubmit}>
				<h3>Create A New Post</h3>
				<div className="form-group">
					<label>Title</label>
					<input type="text" className="form-control" {...title} /> //Destructuring of object
					//We are destructuring the object, so Redux form can entirely control input tag 
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
	
export default reduxForm ({
	form: 'PostsNewForm',
	fields: ['title','categories','content']
}) (PostsNew);


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
