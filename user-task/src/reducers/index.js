import changeTheNumber from "./IncDec";
import { combineReducers } from "redux";

const reducer = combineReducers({
    changeTheNumber: changeTheNumber
})

export default reducer;
