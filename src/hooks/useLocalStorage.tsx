import {useEffect, useState} from 'react';
import {IState} from '../interfaces/state';
import {initialState} from './useValuesReducer';

interface IProps {
  state?: IState;
};

const useLocalStorage = (props?: IProps) => {
  const [values, setValues] = useState<IState>(initialState);

  useEffect(() => {
    if (props) {
      window.localStorage.setItem('values', JSON.stringify(props.state))
    }
  }, [props])

  useEffect(() => {
    if (window.localStorage.getItem('values')) {
      setValues(JSON.parse(window.localStorage.getItem('values') || ''))
    }
  }, [])

  return values;
};

export default useLocalStorage;
