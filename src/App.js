import React, { Component } from "react";
import "./App.css";
import Title from "./components/Title";
import Form from "./components/Form";
import WeatherInfo from "./components/WeatherInfo";

const API_KEY = "4633f169bd08ed62d1aeb291d72ed4fe";
//http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=4633f169bd08ed62d1aeb291d72ed4fe

class App extends Component {
  defaultState = {
    data: {
      main: {
        temp: "",
        pressure: "",
        humidity: ""
      }
    },
    errorMessage: ""
  };
  constructor(props) {
    super(props);
    this.state = this.defaultState;
  }

  getWeather = async e => {
    e.preventDefault();
    let api_call = null;
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    if (city !== "") {
      if (country !== "") {
        api_call = await fetch(
          `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`
        );
        const data = await api_call.json();
        if (data.main) {
          this.setState({ data });
          this.setState({ errorMessage: "" });
          console.log(this.state.data);
          console.log(this.state.errorMessage);
        } else {
          this.setState({ errorMessage: "Enter a valid city!" });
          this.setState({ data: this.defaultState.data });
          console.log(this.state.errorMessage);
        }
      } else {
        api_call = await fetch(
          `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
        );

        const data = await api_call.json();
        if (data.main) {
          this.setState({ data });
          this.setState({ errorMessage: "" });
          console.log(this.state.data);
          console.log(this.state.errorMessage);
        } else {
          this.setState({ errorMessage: "Enter a valid city!" });
          this.setState({ data: this.defaultState.data });
          console.log(this.state.errorMessage);
        }
      }
    }
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Title />
        </header>
        <Form getWeather={this.getWeather} message={this.state.errorMessage} />
        <WeatherInfo data={this.state.data} />
      </div>
    );
  }
}

export default App;
