//GoogleMap integration

import React, { Component } from 'react';

class GoogleMap extends Component {
	componentDidMount() { //3rd party libraries  like googlemap dont have render method
		new google.maps.Map(this.refs.map, { //render embedded google map
			zoom: 12,
			center: {
				lat: this.props.lat,
				lng: this.props.lon
			}
		});
	}


	render() {
		//this.refs.map
		return <div ref="map" />;
	}

}
//ref =  direct reference to html elemnet rendered to the page
export default GoogleMap;