import React, { useEffect } from "react";
import {Redirect} from "react-router-dom";

import Card from "react-bootstrap/Card";
import { Accordion, Button } from 'react-bootstrap';

import { IPage } from "../interfaces/page";
import logging from "../config/logging";


const Breakdown: React.FC<IPage> = (props) => {
  const { name, state } = props;

  useEffect(() => logging.info(`Logging ${name}`));

  if (state.newSession) {
    return <Redirect to="/" />
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
              Base Earnings: ${state.weekPay.toFixed(2)}
            </Accordion.Header>
            <Accordion.Body>
              This amount includes commission, weekly rewards, tips, and mileage:
              <br />
              <Button variant="success" disabled>
                Commission Earnings: ${state.commissionEarnings.toFixed(2)}
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
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="1">
            <Accordion.Header>
              Final Pay: ${state.finalPay.toFixed(2)}
            </Accordion.Header>
            <Accordion.Body>
              The final pay includes the base pay from above, as well as adjustments payed by Gopuff:
              <br />
              <Button variant="success" disabled>
                Adjustments: ${state.adjustments.toFixed(2)}
              </Button>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>

      </Card.Body>
    </Card>
  );
};

export default Breakdown;
