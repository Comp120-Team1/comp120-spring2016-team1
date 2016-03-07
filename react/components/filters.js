import {Component} from 'react';
import {connect} from 'react-redux';
import classNames from 'classnames'

const options = ["priority", "created_at"];

const normalize = (item) => {
    switch (item) {
        case 'priority': return "Priority";
        case 'created_at': return "Created At";
        default: return item;
    }
}

class Filters extends Component {
    render() {
        let revButtonClass = classNames({
            "glyphicon": true,
            "glyphicon-arrow-up": this.props.reverse,
            "glyphicon-arrow-down": !this.props.reverse
        });
        return(
            <div>
                <div className="btn-group">
                    <button className="btn btn-default btn-lg dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        {normalize(this.props.orderedBy)} 
                        <span className="caret"></span>
                    </button>
                    <ul className="dropdown-menu">
                        {options.map((item) => {
                            return (
                                <li key={item} onClick={() => this.props.changeFilter(item)}>{normalize(item)}</li>
                            );
                        })}
                    </ul>
                    <button onClick={this.props.reverseFilter} className="btn btn-default btn-lg" type="button">
                        <span className={revButtonClass}> </span>
                    </button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return state.filters;
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeFilter: (item) => {
            dispatch({
                type: "SET_ORDEREDBY_FILTER",
                orderedBy: item
            });
        },
        reverseFilter: () => {
            dispatch({
                type: "TOGGLE_REVERSE_FILTER"
            });
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Filters);
