if (document.getElementById("incidents")) {
    React.render(<Incidentlist incidents={window.__incidents}/>, document,getElementById("incidents"));
}
