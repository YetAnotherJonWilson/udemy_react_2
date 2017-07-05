import React, { Component } from 'react';
import { connect } from 'react-redux';

class MovieDetail extends Component {
    render() {
        if(!this.props.movie) {
            return <div>Select a movie.</div>
        }

        return(
            <div>
                <h3>Details for:</h3>
                <div>{this.props.movie.title}</div>
                <div>Length: {this.props.movie.length}</div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        movie: state.activeMovie
    };
}

export default connect(mapStateToProps)(MovieDetail);