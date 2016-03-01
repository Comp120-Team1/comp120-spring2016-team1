class Incidentlist extends React.Component {
    constructor(props) {
        super(props);
        
        let initialState = {};

        for (var i = 0; i < props.incidents.length; i++) {
            var incident = props.incidents[i];
            initialState[incident.id] = incident;
            initialState[incident.id].expanded = false;
        }
        const incidents = (state=initialState, action) => {
            switch(action.type) {
                case 'TOGGLE__INCIDENT': 
                    state.incidents[action.id].expanded = action.expand;
                default:
            }
            return state;
        }

        const mapStateToProps = (state) => {
            let incidents = [];
            for (var key in state.incidents) {
              if (state.incidents.hasOwnProperty(key)) {
                  incidents.push(state.incidents[key]);
                }
            }

            return {
                incidents: incidents
            }
        }

    }

    render() {
        return(
            <div className="col-md-10 col-md-offset-1">
                <ul className="incident-list" id="incidents">
                    {this.props.incidents.map(function(result){
                        return(<Incident incident={result} key={result.id}></Incident>)})}
                </ul>
            </div>
        );
    } 

}
