class Incidentlist extends React.Component {
    render() {
        return(
            <ul>
                {this.props.incidents.map(function(result){
                                            return(<Incident incident={result}></Incident>)})}
            </ul>
        );
    } 

}
