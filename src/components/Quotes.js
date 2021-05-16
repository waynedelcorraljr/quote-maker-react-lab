import React, { Component } from 'react'
import { connect } from 'react-redux'
import QuoteCard from './QuoteCard'

class Quotes extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                <div className="row title justify-content-center" style={{ paddingTop: '12px' }}>
                    <h3>Quotes</h3>
                </div>
                <hr />
                <div>
                    {this.props.quotes.map(quote => <QuoteCard quote={quote} dispatch={this.props.dispatch} key={quote.id} />)}
                </div>
            </div>
        )
    }
}

export default connect()(Quotes)