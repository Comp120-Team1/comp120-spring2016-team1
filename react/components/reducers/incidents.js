export default (state={}, action) => {
    switch(action.type) {
        case 'TOGGLE_INCIDENT':
            let newState = Object.assign({}, state);
            newState[action.id].expanded = !newState[action.id].expanded;
            return newState;
    }
    return state;
}
