import React, { Component } from 'react';
import { connect } from 'react-redux';

class WeatherList extends Component {
	
	renderWeather(cityData) {
		const name = cityData.city.name;

		return (
			<tr key={name}>
			<td>{name}</td>
			</tr>
		);
	}

	render() {
		return (
			<table className="table table-hover">

				<thead>
					<tr>
						<th>City</th>
						<th>Temperature</th>
						<th>Pressure</th>
						<th>Humidity</th>
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
