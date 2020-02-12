import { CounterService } from "./service";

export const INCREMENT_START = "INCREMENT_START";
export const INCREMENT_SUCCESS = "INCREMENT_SUCCESS";

const incrementCount = async dispatch => {
  dispatch({ type: INCREMENT_START });

  await CounterService.costlyIncrement();

  dispatch({ type: INCREMENT_SUCCESS });
};

export { incrementCount };
