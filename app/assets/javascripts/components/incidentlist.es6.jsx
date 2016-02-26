class Incidentlist extends React.Component {
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
