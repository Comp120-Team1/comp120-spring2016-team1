class Incident extends React.Component {
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
        return (
            <li className={liClasses}>
                
                <div className="incident-heading"> 
                    <div className={iconClasses}>
                        <span className="glyphicon glyphicon-exclamation-sign"></span>
                    </div>
                    <div className="title">
                        {this.props.incident.subject}
                    </div>
                    <div className="submitted-at">
                        {this.props.incident.created_at}
                    </div>
                </div>
            </li>
    );
}
}
/*

.title {
    flex: 3;
        display: flex;
            justify-content: center;
                flex-direction: column;
                }

                .high-priority {
                    color: #e74c3c;
                    }

                    .medium-priority {
                        color: #e67e22;
                        }

                        .low-priority {
                            color: #f1c40f;
                            }

                            .submitted-at {
                                color: black;
                                    flex: 1;
                                        text-align: right;
                                            display: flex;
                                                justify-content: center;
                                                    flex-direction: column;
                                                    }

                                                    .incident > .panel-heading {
                                                        display: flex;
                                                        }

                                                        ul > .incident {
                                                            margin-bottom: 10px;
                                                                padding: 10px;
                                                                    background-color: #efefef;
                                                                    }

                                                                    .incident-list {
                                                                        list-style: none;
                                                                            padding: 10px;
                                                                            }

                                                                            .incident-heading {
                                                                                display: flex;
                                                                                    min-height: 50px;
                                                                                    }

                                                                                    .icon {
                                                                                        font-size: 2em;
                                                                                            margin-right: 10px;
                                                                                                display: inline-block;
                                                                                                    display: flex;
                                                                                                        justify-content: center;
                                                                                                            flex-direction: column;
                                                                                                            }
Subject:string.propTypes = {
locationOfIncident: React.PropTypes.string,
createdAt: React.PropTypes.string,
timeOfIncident: React.PropTypes.string,
incidentCategory: React.PropTypes.string,
progress: React.PropTypes.string
};
*/
