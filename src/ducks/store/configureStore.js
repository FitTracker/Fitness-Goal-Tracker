import { createStore, applyMiddleware } from "redux"; //Notice redux, not react-redux
import promiseMiddleware from "redux-promise-middleware";
import reducer from "../reducer";

export default createStore(reducer, applyMiddleware(promiseMiddleware()));
