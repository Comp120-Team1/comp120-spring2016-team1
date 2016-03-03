class App extends React.Component {
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
        reducer = (state={}, action) => {
            switch(action.type) {
                case 'TOGGLE_INCIDENT': 
                    state.incidents[action.id].expanded = !state.incidents[action.id].expanded;
                default:
            }
            return state;
        }

        
        this.state = {};

        this.state.store = Redux.createStore(reducer, initialStore);
        
    }

    render() {
        return (<Provider store={this.state.store}>
            <Incidentlist />
        </Provider>);
    }
}
