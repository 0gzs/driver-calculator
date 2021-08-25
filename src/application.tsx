import React, { useEffect } from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import GoPuffHeader from './components/GoPuffHeader';

import logging from './config/logging';

import routes from './config/routes';
import useValuesReducer from './hooks/useValuesReducer';
import Button from 'react-bootstrap/esm/Button';

const Application: React.FunctionComponent = () => {
  const [state, dispatch] = useValuesReducer();

  useEffect(() => logging.info(`Loading application`));

  useEffect(() => localStorage.setItem('values', JSON.stringify(state)), [state]);

  return (
      <Container>
        <GoPuffHeader />

        <Router>
          <Switch>
            {routes.map((route, index) => {
              return (
                <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  render={() =>
                    <route.component
                      name={route.name}
                      state={state}
                      dispatch={dispatch}
                    />
                  }
                />
              );
            })}
          </Switch>
        </Router>
        <Button
          onClick={() => dispatch({type: 'reset'})}
          size="sm"
          variant="secondary"
          >Reset</Button>
      </Container>
  );
}
      /* {state.page === 0  ?
        <DriverName 
          name={"Driver Name"}
          state={state}
          dispatch={dispatch}
        /> :
      state.page === 1 ?
        <DriverForm
          name={"Driver Form"}
          state={state}
          dispatch={dispatch}
        /> :
      state.page === 2 ?
        <Breakdown
          name={"Breakdown"}
          state={state}
          dispatch={dispatch}
        />: null
      } */
        

export default Application;
