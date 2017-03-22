import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { Sparklines, SparklinesLine } from 'react-sparklines'; //shift the code to chart.js
import Chart from '../components/chart';
import GoogleMap from '../components/google_map'

class WeatherList extends Component {
	
	renderWeather(cityData) {
		const name = cityData.city.name;
		const temps = cityData.list.map(weather=>weather.main.temp);
		// console.log(temps); //confirms an array of number(temp)
	//================================================================================
		//for conversion of unit of temp -
		// const temps = _.map(cityData.list.map(weather=>weather.main.temp), (temp) => temp-273);
		const pressures = cityData.list.map(weather=>weather.main.pressure);
		const humidities = cityData.list.map(weather=>weather.main.humidity);
	
	//for Googlemap data -	
		// const lon = cityData.city.coord.lon;
		// const lat = cityData.city.coord.lat;

		//OR in ES6 condense the code -
		const { lon, lat } = cityData.city.coord;

		return (
			<tr key={name}> 
				// <td>{name}</td>//replace by googlemap
				<td><GoogleMap lon={lon} lat={lat}/></td>
				<td><Chart data={temps} color="orange" units="K" /></td>
				<td><Chart data={pressures} color="green" units="hPa" /></td>
				<td><Chart data={humidities} color="black" units="%" /></td>
			</tr>
		);
	}

	render() {
		return (
			<table className="table table-hover">

				<thead>
					<tr>
						<th>City</th>
						<th>Temperature (K)</th>
						<th>Pressure (hPa)</th>
						<th>Humidity (%)</th>
					</tr>
				</thead>

				<tbody>
					{this.props.weather.map(this.renderWeather)}
				</tbody>
			</table>
		);
	}
}

// function mapStateToProps(state) {
// 	return {weather: state.weather};
// }


// WeatherReducer is assigned to weather and combineReducer key in index file of reducers
//since function mapStateToProps(state) has
//state - one argument
//state.weather - one property

// we can summ it up in es6 as mapStateToProps(weather)
// which means const weather = state.weather

// =========================================================

// or 

// function mapStateToProps(weather) {
// 	return {weather: weather};
// }

// since key:value is same we can condense the code
//{weather} === {weather: weather}

function mapStateToProps( {weather} ) {
	return {weather};
}


export default connect (mapStateToProps) (WeatherList);
