import {createStore} from "redux";
const reducers = (state = { count: 0 }, action) => {

    switch (action.type) {
        case "add":
            return {
                count: state.count + 1
            }
        case "del":
            return {
                count: state - 1,
            }
        case "reset":
            return {
                count: 0,
            }
        default:
            return state;
    }
}

const action = {
    add:"add",
    del:"del",
    reset:"reset"
}

const store = createStore(reducers);


store.subscribe(()=>{
    console.log(store.getState());
})
store.dispatch("add");
