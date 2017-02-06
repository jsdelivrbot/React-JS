import React from 'react';
import VideoListItem from './video_list_item';

//define function
const VideoList = (props) => {
	//similar to const videos = props.videos; (this is an array of videos)
	 
	const videoItems = props.videos.map ((video) => {
		return <VideoListItem video = {video} />
	});


	return (
		<ul className = "col-md-4 list-group">
		    {videoItems} 
		</ul>
		);
};

export default VideoList;