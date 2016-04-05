export default (state={}, action) => {
    switch(action.type) {
        case 'TOGGLE_INCIDENT':
            let newState = Object.assign({}, state);
            newState[action.id].expanded = !newState[action.id].expanded;
            return newState;
        case 'ADD_INCIDENTS':
            newState = Object.assign({}, state);
            for (var i =0; i < action.incidents.length; i++) {
                var incident = action.incidents[i];
                newState[incident.id] = incident;
                newState[incident.id].expanded = false;
            }
            return newState;
        default:
            return state;
    }
}
