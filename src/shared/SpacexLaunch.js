import React, { Component } from "react";
import "isomorphic-fetch";
import axios from "axios"
import Filters from "./filters";
import LaunchCards from "./LaunchCards";

class SpacexLaunch extends Component {
  constructor(props) {
    super(props);

    let initialData;
    if (__isBrowser__) {
      initialData = window.__initialData__;
      delete window.__initialData__;
    } else {
      initialData = props.staticContext.initialData;
    }
    this.state = {
      launchData: initialData,
      selectedYearOption: "",
      selectedLaunchSuccessFilter: { value: false, isSelected: false },
      selectedLandingSuccessFilter: { value: false, isSelected: false }
    };
  }

  componentDidMount() {
    if (!this.state.launchData) {
      launchData.fetchInitialData().then(data => this.setState({ launchData: data }));
    }
  }

  static fetchInitialData() {
    return fetch("https://api.spaceXdata.com/v3/launches?limit=100")
      .then(response => response.json())
      .catch(error => console.log(error));
  }

  serialize = obj => Object.keys(obj).map(key => `${key}=${encodeURIComponent(obj[key])}`).join('&')

  changeUrl = () => {
    var params = {}
    if (this.state.selectedLaunchSuccessFilter.isSelected) {
      params.launch_success = this.state.selectedLaunchSuccessFilter.value
    }
    if (this.state.selectedLandingSuccessFilter.isSelected) {
      params.land_success = this.state.selectedLandingSuccessFilter.value
    }
    if (this.state.selectedYearOption.length > 0) {
      params.launch_year = this.state.selectedYearOption
    }

    this.props.history.push({
      pathname: `${this.props.match.url}filter`,
      search: this.serialize(params)
    })
    axios.get('https://api.spaceXdata.com/v3/launches?limit=100', { params: params }).then((response) => {
      this.setState({ launchData: response.data })

    }).catch((error) => {
      console.log(error);
    })
  }

  handleClickOnYear = (label) => {
    this.setState({ selectedYearOption: label }, () => { this.changeUrl() })
  }

  handleClickOnLaunchSuccessFilter = (value) => {
    var selectedLaunchSuccessFilter = Object.assign({}, this.state.selectedLaunchSuccessFilter)
    selectedLaunchSuccessFilter.value = value
    selectedLaunchSuccessFilter.isSelected = true
    this.setState({ selectedLaunchSuccessFilter }, () => { this.changeUrl() })
  }


  handleClickOnLandingSuccessFilter = (value) => {
    var selectedLandingSuccessFilter = Object.assign({}, this.state.selectedLandingSuccessFilter)
    selectedLandingSuccessFilter.value = value
    selectedLandingSuccessFilter.isSelected = true
    this.setState({ selectedLandingSuccessFilter }, () => { this.changeUrl() })
  }

  render() {
    const { launchData,selectedYearOption,selectedLaunchSuccessFilter,selectedLandingSuccessFilter } = this.state;
    return (
      <main>
      <h2>SpaceX Launch Programs</h2>
      <section className="container">
        <Filters selectedYearOption={selectedYearOption} handleClickOnYear={this.handleClickOnYear} 
          selectedLaunchSuccessFilter={selectedLaunchSuccessFilter} handleClickOnLaunchSuccessFilter={this.handleClickOnLaunchSuccessFilter}
          selectedLandingSuccessFilter={selectedLandingSuccessFilter} handleClickOnLandingSuccessFilter={this.handleClickOnLandingSuccessFilter}/>
        <LaunchCards launchData={launchData}/>
        </section>
        <div className="footer">
          <span><strong>Developed by : </strong></span>
          <span>Shahbaz Khan</span>
        </div>
      </main>
    );
  }
}

export default SpacexLaunch;
