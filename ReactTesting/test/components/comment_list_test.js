import { renderComponent, expect } from '../test_helper';
import CommentList from '../../src/components/comment_list';

describe ('CommentList', () => {
	let component;

	beforeEach (() => {
		const props = { comment:['New comment', 'Other new comment'] };
		component = renderComponent(CommentList, null, props);
	});

	it ('shows an LI for each comment', () => {
		expect (component.find('li').length).to.equal(2);
	});

	it ('shows each comment that is provided', () => {
		expect (commponent).to.contain('New comment');
		expect (commponent).to.contain('Other new comment');
	});
});