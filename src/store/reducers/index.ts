import { AppleAction, ShakingTreeState } from "../../constants";
import { AppleActionTypes } from "../actionTypes";

const INITIAL_STATE: ShakingTreeState = {
  appleCount: 0,
};

const reducer = (
  state: ShakingTreeState = INITIAL_STATE,
  action: AppleAction
): ShakingTreeState => {
  switch (action.type) {
    case AppleActionTypes.ADD_APPLE:
      return {
        ...state,
        appleCount: state.appleCount + 1,
      };
    case AppleActionTypes.RESET_APPLE:
      return {
        ...state,
        appleCount: 0,
      };
  }
  return state;
};

export default reducer;
