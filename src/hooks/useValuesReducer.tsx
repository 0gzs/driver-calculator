import { Reducer, useReducer } from "react";
import { IState } from "../interfaces/state";
import calculate from '../utils/calculate';

type Action =
  | { type: "calc" | "skip" | "reset" }
  | { type: "name"; payload: string }
  | { type: "variables"; key: string; payload: number };

export type TReducer = Reducer<IState, Action>;

export const initialState: IState = {
  totalHours: 0,
  engagedTime: 0,
  tips: 0,
  weeklyRewards: 0,
  miles: 0,
  orders: 0,
  activeHours: 0,
  guaranteedAmount: 0,
  earnings: 0,
  mileageEarnings: 0,
  commissionEarnings: 0,
  weekPay: 0,
  difference: 0,
  adjustments: 0,
  finalPay: 0,
  payPerHour: 0,
  guaranteedRate: 22.00,
  subsidyRate: 17.23,
  mileageRate: 0.3,
  commissionRate: 3.0,
  driverName: "",
  newSession: true
};

const valuesReducer: TReducer = (state: IState, action: Action) => {
  switch (action.type) {
    case "variables": {
      return {
        ...state,
        [action.key]: action.payload,
      };
    }
    case "name": {
      const name =
        action.payload.charAt(0).toUpperCase() + action.payload.slice(1);
      return {
        ...state,
        driverName: name,
        newSession: false
      };
    }
    case "skip": {
      return {
        ...state,
        newSession: false
      }
    }
    case "calc": {
      const [ah, ga, e, me, ce, wp, diff, adj, fp, pph] = calculate(state);
      return {
        ...state,
        'activeHours': ah,
        'guaranteedAmount': ga,
        'earnings': e,
        'mileageEarnings': me,
        'commissionEarnings': ce,
        'weekPay': wp,
        'difference': diff,
        'adjustments': adj,
        'finalPay': fp,
        'payPerHour': pph,
      };
    }
    case "reset": {
      return {
        ...initialState
      }
    }
    default:
      return state;
  }
};

const useValuesReducer = () => {
  const [state, dispatch] = useReducer(valuesReducer, initialState, () => {
    const localState = localStorage.getItem('values');
    return localState ? JSON.parse(localState) : initialState;
  });
  
  return [state, dispatch] as const;
};

export default useValuesReducer;
