import React, { Component } from 'react';
import Quotes from './components/Quotes'
import QuoteForm from './components/QuoteForm'
import { connect } from 'react-redux'
import { addQuote } from './actions/quotes'
import { removeQuote } from './actions/quotes'
import { upvoteQuote } from './actions/quotes'
import { downvoteQuote } from './actions/quotes'

class App extends Component {

  state = {
    quotes: []
  }

  render() {
    console.log(this.state)
    return (
      <div className="container-fluid">
        <div className="row title justify-content-center" style={{ paddingTop: '12px' }}>
          <h1>Quote Maker</h1>
        </div>
        <QuoteForm />
        <hr />
        <Quotes quotes={this.props.quotes} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    quotes: state.quotes
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addQuote: () => { dispatch(addQuote()) },
    removeQuote: () => { dispatch(removeQuote()) },
    upvoteQuote: () => { dispatch(upvoteQuote()) },
    downvoteQuote: () => { dispatch(downvoteQuote()) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
