import React from 'react';
import './VideoItem.css';


const VideoItem = ({video,onVideoSelect}) => {
	return(
		<div onClick={() => onVideoSelect(video) } className=" video-item item white">
			<img className="ui image" alt={video.snippet.title} src={video.snippet.thumbnails.high.url} />
			<div className="content">
				<div className="header">{video.snippet.title}</div>
			</div>
		</div>
	);
}

export default VideoItem;