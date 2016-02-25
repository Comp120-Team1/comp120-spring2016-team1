class Incident extends React.Component {
  render () {
    return (
      <div>
        <div>Subject: {this.props.incident.subject}</div>
        <div>Location Of Incident: {this.props.incident.location_of_incident}</div>
        <div>Created At: {this.props.incident.created_at}</div>
        <div>Time Of Incident: {this.props.incident.time_of_incident}</div>
        <div>Incident Category: {this.props.incident.incident_category}</div>
        <div>Progress: {this.props.incident.progress}</div>
      </div>
    );
  }
}
/*
Subject:string.propTypes = {
  locationOfIncident: React.PropTypes.string,
  createdAt: React.PropTypes.string,
  timeOfIncident: React.PropTypes.string,
  incidentCategory: React.PropTypes.string,
  progress: React.PropTypes.string
  };
*/
