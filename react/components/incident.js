import classNames from 'classnames';
import {Component} from 'react';


class Incident extends Component {
    render () {
        let liClasses = classNames({
            "incident":true
        });
        let iconClasses = classNames({
            "icon":true,
            "high-priority": (this.props.incident.priority === 3),
            "medium-priority": (this.props.incident.priority === 2),
            "low-priority": (this.props.incident.priority === 1)
        });
        let created_at = new Date(this.props.incident.created_at);
        let onIncidentClick = this.props.onIncidentClick;
        let id = this.props.incident.id;
        if (!this.props.incident.expanded) {
            return (
            <li className={liClasses} onClick={() => {onIncidentClick(id)}}>
                <div className="incident-heading"> 
                    <div className={iconClasses}>
                        <span className="glyphicon glyphicon-exclamation-sign"></span>
                    </div>
                    <div className="title">
                        {this.props.incident.subject}
                    </div>
                    <div className="submitted-at">
                        {created_at.toDateString()}
                    </div>
                </div>
            </li>
            );
        } else {
            return (
            <li className={liClasses} onClick={() => { onIncidentClick(id)}}>
                <div className="incident-heading"> 
                    <div className={iconClasses}>
                        <span className="glyphicon glyphicon-exclamation-sign"></span>
                    </div>
                    <div className="title">
                        {this.props.incident.subject}
                    </div>
                    <div className="submitted-at">
                        {created_at.toDateString()}
                    </div>
                </div>
                <div className="incident-body">
                    <div className="details">
                        {this.props.incident.additional_details}
                    </div>
                </div>
            </li>
            );
        }
    }
}

export default Incident;
