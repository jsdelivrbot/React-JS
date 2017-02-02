import React from 'react'
import ReactDOM from 'react-dom'
//import CommentBox from './scripts/components/CommentBox.js'

var data = [
  {id: 1, author: "Pete Hunt", text: "This is one comment"},
  {id: 2, author: "Jordan Walke", text: "This is *another* comment"}
];

var CommentBox = React.createClass({
  render: function() {
    return (
      <div className="commentBox" >
        <h1>Hello, world! I am a CommentBox.</h1>
        <h3>Comments</h3>
        /*<CommentList/>
        <CommentForm/>*/
      </div>
    );
  }
});

ReactDOM.render(
  <CommentBox />,
  document.getElementById('content')
);
