import React, { Component } from 'react';
import { reduxForm }  from 'redux-form';
import { createPost } from '../actions/index';
import { Link } from 'react-router';

class PostsNew extends Component {
	render() {
		const {fields:{title,categories,content}, handleSubmit} = this.props;
		// similar to - 
		// const handleSublit = this.props.handleSubmit;
		//const title = this.props.fields.title;


		return (
			<form onSubmit = {handleSubmit(this.props.createPost)}>
				<h3>Create A New Post</h3>

				<div className={`form-group ${title.touched && title.invalid ? 'has-danger' : ''} `}>
					<label>Title</label>
					<input type="text" className="form-control" {...title} /> 
					<div className="text-help">
						{title.touched ? title.error : ''}
					</div>
				</div>

				<div className={`form-group ${categories.touched && categories.invalid ? 'has-danger' : ''} `}>
					<label>Categories</label>
					<input type="text" className="form-control" {...categories} />
					<div className="text-help">
						{categories.touched ? categories.error : ''}
					</div>
				</div>

				<div className={`form-group ${content.touched && content.invalid ? 'has-danger' : ''} `}>
					<label>Content</label>
					<textarea className="form-control" {...content} />
					<div className="text-help">
						{content.touched ? content.error : ''}
					</div>
				</div>

				<button type="submit" className="btn btn-primary">Submit</button>
				<Link to="/" className="btn btn-danger">Cancel</Link>
			</form>
		); 
	}
}
	

function validate(values) {
	const errors = {};

	if (!values.title) {
		errors.title = 'Enter a title';
	}

	if (!values.categories) {
		errors.categories = 'Enter the category';
	}

	if (!values.content) {
		errors.content = 'Enter the content';
	}

	return errors
}




//======================================================================================
//======================================================================================

//connect: first argument is mapStateToProps, second is mapDispatchToProps
//reduxForm: first argument is form config, second is mapStateToProps, and third is mapDispatchToProps


export default reduxForm ({
	form: 'PostsNewForm',
	fields: ['title','categories','content'],
	validate
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