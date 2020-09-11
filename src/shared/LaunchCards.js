import React from "react";
import { Card, CardBody, CardTitle, CardImg } from 'reactstrap';

const LaunchCards = ({launchData}) =>{
    return(
        <section className="card-section">
          {launchData.map((item) => {
            return (
              <Card key={item.flight_number}>
                <CardImg top src={item.links.mission_patch_small} alt="mission patch" />
                <CardBody>
                  <CardTitle className="card_values">{item.mission_name + " #" + item.flight_number}</CardTitle>
                  <div className="card_text">
                    <strong>Mission Ids:</strong>
                    <ul>
                      {item.mission_id.map((item, index) => {
                        return <li key={index}>{item}</li>
                      })}
                    </ul>
                  </div>
                  <div className="card_text">
                    <strong>Launch Year:</strong>
                    <span  className="card_values">{item.launch_year}</span>
                  </div>
                  <div className="card_text">
                    <span><strong>Successful Launch:</strong></span>
                    <span  className="card_values">{item.launch_success ? "true" : "false"}</span>
                  </div>
                  <div className="card_text">
                    <span><strong>Successful Landing:</strong></span>
                    <span  className="card_values">{item.launch_landing ? "true" : "false"}</span>
                  </div>

                </CardBody>
              </Card>
            )
          })}
        </section>
    )
}

export default LaunchCards;