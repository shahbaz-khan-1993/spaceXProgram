import React from 'react';
import { Card, CardBody, CardTitle } from 'reactstrap';

const Filters = ({selectedYearOption,handleClickOnYear,selectedLaunchSuccessFilter,handleClickOnLaunchSuccessFilter,
        selectedLandingSuccessFilter,handleClickOnLandingSuccessFilter}) =>{
    const yearsFilterOptions= ['2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016','2017', '2018', '2019', '2020']
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
                      <div onClick={() => { handleClickOnYear(item) }} className={(selectedYearOption==item)?"filter_option_button selected":"filter_option_button"}>{item}</div>
                    </div>
                  )
                })}
              </div>
              <div className="filter_title">Successful Launch</div>
              <div className="year_list">
                <div className="filter_option">
                  <div onClick={() => { handleClickOnLaunchSuccessFilter(true) }} className={(selectedLaunchSuccessFilter.value && selectedLaunchSuccessFilter.isSelected)?"filter_option_button selected":"filter_option_button"}>True</div>
                </div>
                <div onClick={() => { handleClickOnLaunchSuccessFilter(false) }} className="filter_option">
                  <div onClick={() => { handleClickOnLaunchSuccessFilter(true) }} className={(!selectedLaunchSuccessFilter.value && selectedLaunchSuccessFilter.isSelected)?"filter_option_button selected":"filter_option_button"}>False</div>
                </div>
              </div>
              <div className="filter_title">Successful Landing</div>
              <div className="year_list">
                <div className="filter_option">
                  <div onClick={() => { handleClickOnLandingSuccessFilter(true) }} className={(selectedLandingSuccessFilter.value && selectedLandingSuccessFilter.isSelected)?"filter_option_button selected":"filter_option_button"}>True</div>
                </div>
                <div className="filter_option">
                  <div onClick={() => { handleClickOnLandingSuccessFilter(false) }} className={(!selectedLandingSuccessFilter.value && selectedLandingSuccessFilter.isSelected)?"filter_option_button selected":"filter_option_button"}>False</div>
                </div>
              </div>
            </CardBody>
          </Card>
        </section>
    )
}

export default Filters;