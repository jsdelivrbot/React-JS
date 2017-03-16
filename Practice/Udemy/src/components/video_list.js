import React from 'react';


//define function
const VideoList = (props) => {
	//similar to const videos = props.videos; (this is an array of videos)
	return (
		<ul className = "col-md-4 list-group"> 
		{props.videos.length}
		</ul>
		);
	};


	export default VideoList;