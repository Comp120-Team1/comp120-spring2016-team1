import {Component} from 'react';
import {connect} from 'react-redux';

class Filters extends Component {
    handleChange (event) {
        console.log(event);        
        console.log(event.target);
        console.log(event.target.value);
    }

    render() {
        return(
            <select onChange={this.props.handleChange} value={this.props.orderedBy}>
                <option value="priority">Priority</option>
                <option value="created_at">Date Created</option>
            </select>
        );
    }
}

const mapStateToProps = (state) => {
    return state.filters;
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleChange: (event) => {
            dispatch({
                type: "SET_ORDEREDBY_FILTER",
                orderedBy: event.target.value
            });
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Filters);
