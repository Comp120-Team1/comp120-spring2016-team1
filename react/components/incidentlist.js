import {Component} from 'react';
import {connect} from 'react-redux';
import Incident from './incident';


class Incidentlist extends Component {
    

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

export default connect(mapStateToProps, mapDispatchToProps)(Incidentlist);
