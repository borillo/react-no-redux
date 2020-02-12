import { PeopleService } from "./service";

export const OBTAIN_LIST_START = "OBTAIN_LIST_START";
export const OBTAIN_LIST_SUCCESS = "OBTAIN_LIST_SUCCESS";

const service = new PeopleService()

const obtainList = async dispatch => {
  dispatch({ type: OBTAIN_LIST_START });

  const items = await service.whoIsThere();
  
  dispatch({ type: OBTAIN_LIST_SUCCESS, payload: items });
};

export { obtainList };
