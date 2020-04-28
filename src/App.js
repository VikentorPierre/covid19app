import React from 'react';
import styles from './App.module.css';
import { Cards, Chart, CountryPicker } from './components';
import { fetchData } from './api';
import imgLogo from './img/image.png';

class App extends React.Component {
  state = {
    data: {},
    currentCountry: '',
  };

  async componentDidMount() {
    const data = await fetchData();
    this.setState({ data: data });
  }

  handleCountryChange = async (country) => {
    const fetchUpdate = await fetchData(country);
    this.setState({ data: fetchUpdate, currentCountry: country });
    console.log(fetchUpdate);
  };

  render() {
    const { data, currentCountry } = this.state;
    return (
      <div className={styles.container}>
        <img src={imgLogo} alt='covid-19' className={styles.image} />
        <Cards covidData={data} />
        <CountryPicker handleCountryUpdate={this.handleCountryChange} />
        <Chart data={data} country={currentCountry} />
      </div>
    );
  }
}

export default App;
