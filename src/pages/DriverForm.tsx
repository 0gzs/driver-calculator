import React, { useEffect, useState} from "react";

import {Link, Redirect} from 'react-router-dom';

import logging from "../config/logging";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Input from "../components/Input";
import {IPage} from "../interfaces/page";

const DriverForm: React.FunctionComponent<IPage> = (props) => {
  const [wR, setWR] = useState(true);

  const { name, state, dispatch } = props;

  useEffect(() => logging.info(`Loading ${name}`));

  const next = () => dispatch({ type: 'calc' });

  if (state.newSession) {
    return <Redirect to="/" />;
  }

  return (
    <div>
      <h3>Calculating Weekly Pay</h3>
      <Form>
        <Form.Group className="form-group">
          <Form.Label>Total Hours Scheduled</Form.Label>
          <Input
            updateFunc={dispatch}
            oKey={'totalHours'}
            val={state.totalHours}
          />
        </Form.Group>

        <Form.Group className="form-group">
          <Form.Label>Active Engage Time</Form.Label>
          <Input
            updateFunc={dispatch}
            oKey={'engagedTime'}
            val={state.engagedTime}
          />
        </Form.Group>

        <Form.Group className="form-group">
          <Form.Label>Number of Orders</Form.Label>
          <Input
            updateFunc={dispatch}
            oKey={'orders'}
            val={state.orders}
          />
        </Form.Group>

        <Form.Group className="form-group">
          <Form.Label>Actual Miles</Form.Label>
          <Input
            updateFunc={dispatch}
            oKey={'miles'}
            val={state.miles}
          />
        </Form.Group>

        <Form.Group className="form-group">
          <Form.Label>Weekly Rewards</Form.Label>
          <Input
            updateFunc={dispatch}
            oKey={'weeklyRewards'}
            val={state.weeklyRewards}
            wR={wR}
          />
          <Form.Check
            onChange={() => setWR(!wR)}
            type="checkbox"
            label="Does the driver have any weekly rewards?"
          />
        </Form.Group>

        <Form.Group className="form-group">
          <Form.Label>Tips</Form.Label>
          <Input
            updateFunc={dispatch}
            oKey={'tips'}
            val={state.tips}
          />
        </Form.Group>

    {/*<div className="d-grid">
          <Button variant="danger" size="sm" onClick={() => ""}>
            Edit Local and Guaranteed Rate's
          </Button>
        </div>*/}
        <Link to="/breakdown">
          <Button
            onClick={next}
            variant="primary"
            type="submit"
          >
            Next
          </Button>
        </Link>
      </Form>
    </div>
  );
};

export default DriverForm;
