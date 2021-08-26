import React, { useEffect } from "react";
import {Redirect} from "react-router-dom";

import { IPage } from "../interfaces/page";

import logging from "../config/logging";
import Card from "react-bootstrap/Card";
import { Accordion } from 'react-bootstrap';

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
              Base Earnings: ${state.weekPay}
            </Accordion.Header>
            <Accordion.Body>
              This amount includes commission, weekly rewards, tips, and mileage:
              <br />
              <strong>Commission Earnings</strong>: ${state.commissionEarnings}
              <br />
              <strong>Weekly Rewards</strong>: ${state.weeklyRewards}
              <br />
              <strong>Tips</strong>: ${state.tips}
              <br />
              <strong>Mileage</strong>: ${state.mileageEarnings}
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="1">
            <Accordion.Header>
              Final Pay: ${state.finalPay}
            </Accordion.Header>
            <Accordion.Body>
              The final pay includes the base pay from above, as well as adjustments payed by Gopuff:
              <br/>
              <strong>Adjustments</strong>: ${state.adjustments}
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>

      </Card.Body>
    </Card>
  );
};

export default Breakdown;
