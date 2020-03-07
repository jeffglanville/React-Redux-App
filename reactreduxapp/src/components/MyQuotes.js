import React from 'react';
import { connect } from 'react-redux';
import {getQuote} from '../store/actions/Quote';

const Quotes = ({ getQuote, quote, isFetching, error }) => {
    if (isFetching) {
        return<h2>Fetching your quote at this moment :P</h2>;
    }

    if (error) {
        return <h2>{error}</h2>;
    }

    return(
        <div>
            <h2>Quote: {quote}</h2>
            <button onClick={getQuote}>Click for a Different Quote</button>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        quote: state.quote,
        isFetching: state.isFetching,
        error: state.error
    };
};

export default connect(mapStateToProps, {getQuote})(Quotes);