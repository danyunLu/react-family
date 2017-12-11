import { combineReducers } from "redux";
import counter from 'reducers/counter';
import userInfo from 'reducers/userInfo';
/**
 * 整合reducers
 */
export default combineReducers({
        counter,
        userInfo
    }
)