import React, { useEffect, useState } from "react";
import {Redirect} from "react-router-dom";

import Card from "react-bootstrap/Card";
import { Accordion, Button } from 'react-bootstrap';

import { IPage } from "../interfaces/page";
import logging from "../config/logging";


const Breakdown: React.FC<IPage> = (props) => {
  const [greater, setGreater] = useState("");
  const { name, state } = props;

  useEffect(() => logging.info(`Logging ${name}`));

  useEffect(() => {
    if (state.commissionEarnings === state.greaterVal) {
      setGreater("commission");
    } else {
      setGreater("guaranteedAmount")
    }
  }, [state])

  if (state.newSession) {
    return <Redirect to="/" />
  }

  if (isNaN(state.adjustments) || isNaN(state.finalPay)) {
    return <Redirect to="/driver-form" />
  }

  return (
    <Card>
      <Card.Header>
        <h4>{`${state.driverName}'s Pay`}</h4>
      </Card.Header>
      <Card.Body>
        <Accordion defaultActiveKey="0">
            
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              Base Earnings 
            </Accordion.Header>
            <Accordion.Body>
              {greater === "commission" ?
                "This amount includes commission, weekly rewards, tips, and mileage" :
                "This amount includes the guaranteed amount (higher than commission), weekly rewards, tips and mileage"
              }
              <br />
              <Button variant="success" disabled>
                {greater === 'commission' ?
                  <div>
                    Commission Earnings: ${state.commissionEarnings.toFixed(2)}
                  </div> :
                  <div>
                    Guaranteed Amount: ${state.guaranteedAmount.toFixed(2)}
                  </div>
                }
              </Button>
                <br />
              <Button variant="success" disabled>
                Weekly Rewards: ${state.weeklyRewards.toFixed(2)}
              </Button>
                <br />
              <Button variant="success" disabled>
                Tips: ${state.tips.toFixed(2)}
              </Button>
                <br />
              <Button variant="success" disabled>
                Mileage: ${state.mileageEarnings.toFixed(2)}
              </Button>
              <Button variant="outline-success" disabled>
                Week Pay: ${state.weekPay.toFixed(2)}
              </Button>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="1">
            <Accordion.Header>
              Final Pay
            </Accordion.Header>
            <Accordion.Body>
              The final pay includes the base pay from above, as well as adjustments payed by Gopuff:
              <br />
              <Button variant="success" disabled>
                Adjustments: ${state.adjustments.toFixed(2)}
              </Button>
              <Button variant="outline-success" disabled>
                Final Pay: ${state.finalPay.toFixed(2)}
              </Button>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>

      </Card.Body>
    </Card>
  );
};

export default Breakdown;
