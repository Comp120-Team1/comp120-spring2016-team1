import {Component} from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import Incidentlist from './incidentlist';

class App extends Component {
    constructor(props) {
        super(props);
        
        let initialStore = {
            incidents: {}
        };

        for (var i = 0; i < props.incidents.length; i++) {
            var incident = props.incidents[i];
            initialStore.incidents[incident.id] = incident;
            initialStore.incidents[incident.id].expanded = false;
        }
        let reducer = (state={}, action) => {
            switch(action.type) {
                case 'TOGGLE_INCIDENT':
                    let newState = Object.assign({}, state);
                    newState.incidents[action.id].expanded = !newState.incidents[action.id].expanded;
                    return newState;
            }
            return state;
        }

        
        this.state = {};

        this.state.store = createStore(reducer, initialStore);
    }

    render() {
        return (<Provider store={this.state.store}>
            <Incidentlist />
        </Provider>);
    }
}

export default App;
