import { Dispatch, ReducerAction } from "react";
import { TReducer } from "../hooks/useValuesReducer";
import {IState} from "./state";

export interface IPage {
  name: string;
  state: IState;
  dispatch: Dispatch<ReducerAction<TReducer>>;
}
