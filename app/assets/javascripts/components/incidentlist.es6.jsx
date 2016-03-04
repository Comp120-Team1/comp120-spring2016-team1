class Incident_list extends React.Component {
    

    render() {
        let onIncidentClick = this.props.onIncidentClick;
        return(
            <div className="col-md-10 col-md-offset-1">
                <ul className="incident-list" id="incidents">
                    {this.props.incidents.map(function(result){
                        return(<Incident incident={result} 
                                        key={result.id}
                                        onIncidentClick={onIncidentClick}/>)})}
                </ul>
            </div>
        );
    } 

}

const Incidentlist = function() { 
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

    const mapDispatchToProps = (dispatch) => {
        return {
            onIncidentClick: (id) => {
                dispatch({
                    type: "TOGGLE_INCIDENT",
                    id: id
                })
            }
        }
    }
    return ReactRedux.connect(mapStateToProps, mapDispatchToProps)(Incident_list);
}();
