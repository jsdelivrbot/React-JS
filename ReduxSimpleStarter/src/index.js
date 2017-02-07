import React, {Component} from 'react';
import ReactDOM from 'react-dom';
// added Component above

//Import youtubeAPIsearch
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyDo8CRg7nfVDp5JdvN5Om3vaRQv_6nqNQI';


// 1. Create a new component. This component should produce some HTML.
//App is a component class here.
//In ES6, function() is similar to () =>
/*const App = () => {
	return (
		<div>
			<SearchBar />
		</div>
		);
	}
	*/
//After adding fucntion YT search, App => functional component to a class component
// so that App can keep track of list of videos by recording it on its state

class App extends Component {
	constructor(props) {
		super(props);

		this.state = { 
			videos: [],
			selectedVideo: null
		};

		YTSearch({key: API_KEY, term: 'Michael Jackson'},  (videos) => {
			this.setState ({ 
				videos: videos,
				selectedVideo: videos[0]

				 });
			//In ES6, if key:value pair has common name, we can substitute like above.
			//It means -- this.setState({ videos: videos });
		});
	}

	render() {
		return (
			<div>
				<SearchBar />
				<VideoDetail video = {this.state.selectedVideo} /> 
				<VideoList videos = {this.state.videos} />
			</div>
			);	
	}
}

//<VideoDetail video = {this.state.videos [0]} /> 

// 2.Take this component's generated HTML and put it on the page (in the DOM).
// <App/> turns it into component instance for rendering it.

ReactDOM.render(<App />, document.querySelector('.container'));
