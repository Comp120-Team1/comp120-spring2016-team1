import {Component} from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import Incidentlist from './incidentlist';
import Reducers from './reducers';

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
        
        this.state = {};

        this.state.store = createStore(Reducers, initialStore);
    }

    render() {
        return (<Provider store={this.state.store}>
            <Incidentlist />
        </Provider>);
    }
}

export default App;
