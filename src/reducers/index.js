import {combineReducers} from "@reduxjs/toolkit";
import gamesReducer from "./gamereducer"
import detailReducer from "./detailreducer";

const rootReducer = combineReducers({
    games: gamesReducer,
    detail: detailReducer
});
export default rootReducer
