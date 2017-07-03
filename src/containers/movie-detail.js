import React, { Component } from 'react';
import { connect } from 'react-redux';

class MovieDetail extends Component {
    render() {
        return(
            <div>Movie Detail</div>
        );
    }
}

function mapStateToProps(state) {
    return {
        movie: state.activeMovie
    };
}

export default connect(mapStateToProps)(MovieDetail);