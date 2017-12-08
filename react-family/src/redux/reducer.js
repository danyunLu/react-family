import counter from './reducers/counter';
/**
 * 整合reducers
 */
export default function combineReducers(state = {},action){
    return{
        counter:counter(state.counter,action)
    }
}