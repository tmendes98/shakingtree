import { AppleAction, AppleDispatchType } from "../../constants";
import { AppleActionTypes } from "../actionTypes";

export const addApple = () => {
  const action: AppleAction = {
    type: AppleActionTypes.ADD_APPLE,
  };

  return (dispatch: AppleDispatchType) => {
    dispatch(action);
  };
};

export const resetApple = () => {
  const action: AppleAction = {
    type: AppleActionTypes.RESET_APPLE,
  };

  return (dispatch: AppleDispatchType) => {
    dispatch(action);
  };
};
