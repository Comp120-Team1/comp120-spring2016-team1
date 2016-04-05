import classNames from 'classnames';
import {Component} from 'react';
import moment from 'moment';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const IncidentHeader = (props) => {
        let iconClasses = classNames({
            "icon":true,
            "high-priority": (props.incident.priority === 3),
            "medium-priority": (props.incident.priority === 2),
            "low-priority": (props.incident.priority === 1)
        });
        return (
            <div className="incident-heading"> 
                <div className={iconClasses}>
                    <span className="glyphicon glyphicon-exclamation-sign"></span>
                </div>
                <div className="title">
                    {props.incident.subject}
                </div>
                <div className="submitted-at">
                    {moment(props.incident.created_at).fromNow()}
                </div>
            </div>);
}

class Incident extends Component {
    render () {
        let liClasses = classNames({
            "incident":true,
            "clickable": true
        });
        let onIncidentClick = this.props.onIncidentClick;
        let id = this.props.incident.id;
        if (!this.props.incident.expanded) {
            return (
            <li className={liClasses} onClick={() => {onIncidentClick(id)}}>
                <IncidentHeader incident={this.props.incident} />
            </li>
            );
        } else {
            return (
            <li className={liClasses} onClick={() => { onIncidentClick(id)}}>
                <IncidentHeader incident={this.props.incident} />
                <ReactCSSTransitionGroup transitionName="incident" transitionEnterTimeout={500} transitionLeaveTimeout={300}>
                    <div key={this.props.incident.id} className="incident-body">
                        <div className="details">
                            {this.props.incident.additional_details}
                        </div>
                        <div className="location">Location: 
                            {this.props.incident.location_of_incident}
                        </div>
                        <div className="time">Incident occured at: 
                            {this.props.incident.time_of_incident}
                        </div>
                        <div className="incident_progress">Progress: 
                            {this.props.incident.progress}
                        </div>
                        <div className="picture">
                            <img src={this.props.incident.picture_url} width='30%' height='30%' alt='No Uploaded Image'></img>
                        </div>
                        <div className="btn btn-success">
                            <a href={'/incidents/' + this.props.incident.id + '/edit'}>Edit</a>
                        </div>

                    </div>
                </ReactCSSTransitionGroup>
            </li>
            );
        }
    }
}

export default Incident;
