import React, {useEffect, useState} from 'react';
import Form from 'react-bootstrap/Form';

interface IProps {
  updateFunc: Function;
  oKey: string;
  val: number;
  wR?: boolean;
};

const Input: React.FC<IProps> = (props) => {
  const {updateFunc, oKey, val, wR} = props;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const parsed = parseFloat(e.target.value);
    updateFunc({ type: 'variables', key: oKey, payload: parsed })
  };

  return (
    <Form.Control
      onChange={onChange}
      value={val}
      placeholder="0"
      type="number"
      disabled={wR ? wR : false}
    />
  );
};

export default Input;
