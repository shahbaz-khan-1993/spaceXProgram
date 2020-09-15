import React from 'react';
import { Card, CardBody, CardTitle, Button } from 'reactstrap';

class Filters extends React.Component{


  handleClickOnLandingSuccessFilter=(flag)=>{
    console.log('on method : ' + flag);
    this.props.handleClickOnLandingSuccessFilter(flag);
  }

  render(){
    const yearsFilterOptions= ['2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016','2017', '2018', '2019', '2020']
    const{selectedYearOption,selectedLaunchSuccessFilter,selectedLandingSuccessFilter}=this.props;
    return(
      <section className="filter-section">
          <Card>
            <CardTitle>Filters</CardTitle>
            <CardBody>
              <div className="filter_title">Launch Year</div>
              <div className="year_list">
                {yearsFilterOptions.map((item, index) => {
                  return (
                    <div key={index} className="filter_option">
                      <button onClick={() => { this.props.handleClickOnYear(item) }} className={(selectedYearOption==item)?"filter_option_button selected":"filter_option_button"}>{item}</button>
                    </div>
                  )
                })}
              </div>
              <div className="filter_title">Successful Launch</div>
              <div className="year_list">
                <div className="filter_option">
                  <button onClick={() => { this.props.handleClickOnLaunchSuccessFilter(true) }} className={(selectedLaunchSuccessFilter.value && selectedLaunchSuccessFilter.isSelected)?"filter_option_button selected":"filter_option_button"}>True</button>
                </div>
                <div className="filter_option">
                  <button onClick={() => { this.props.handleClickOnLaunchSuccessFilter(true) }} className={(!selectedLaunchSuccessFilter.value && selectedLaunchSuccessFilter.isSelected)?"filter_option_button selected":"filter_option_button"}>False</button>
                </div>
              </div>
              <div className="filter_title">Successful Landing</div>
                  <Button onClick={this.handleClickOnLandingSuccessFilter(true)}>True</Button>
                  <Button onClick={this.handleClickOnLandingSuccessFilter(false)} >False</Button>
            </CardBody>
          </Card>
        </section>
  );}
}

export default Filters;