import React, { Component } from 'react';

//child component of app is Greeting
export default class App extends Component {
  render() {
    return (
      <div>
      	{this.props.children} 
      </div>
    );
  }
}

