export default (state={}, action) => {
    let newState = {};
    switch (action.type) {
        case 'SET_ORDEREDBY_FILTER':
            newState = Object.assign({}, state);
            newState.orderedBy = action.orderedBy;
            return newState;
        case 'TOGGLE_REVERSE_FILTER':
            newState = Object.assign({}, state);
            newState.reverse = !newState.reverse;
            return newState;
        default:
            return state;
    }
}
