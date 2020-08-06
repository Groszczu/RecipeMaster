import { combineEpics } from "redux-observable";
import { logInEpic } from "../features/user/userEpic";

export default combineEpics(logInEpic);