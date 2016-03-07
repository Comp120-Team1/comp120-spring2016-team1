export default (state={}, action) => {
    switch (action.type) {
        case 'SET_ORDEREDBY_FILTER':
            let newState = Object.assign({}, state);
            newState.orderedBy = action.orderedBy;
            return newState;
        default:
            return state;
    }
}
