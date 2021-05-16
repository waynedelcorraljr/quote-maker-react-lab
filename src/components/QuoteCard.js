import React from 'react';
import { removeQuote } from '../actions/quotes'
import { upvoteQuote } from '../actions/quotes'
import { downvoteQuote } from '../actions/quotes'

const QuoteCard = (props) =>
  <div>
    {console.log(props)}
    <div className="card card-inverse card-success card-primary mb-3 text-center">
      <div className="card-block">
        <blockquote className="card-blockquote">
          <p>{props.quote.content}</p> 
          <footer>- author <cite title="Source Title">{props.quote.author}</cite></footer> 
        </blockquote>
      </div>
      <div className="float-right">
        <div className="btn-group btn-group-sm" role="group" aria-label="Basic example">
          <button
            type="button"
            className="btn btn-primary"
            onClick={event => props.dispatch(upvoteQuote(props.quote.id))}
          >
            Upvote
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={event => props.dispatch(downvoteQuote(props.quote.id))}
          >
            Downvote
          </button>
          <button
            type="button"
            className="btn btn-danger"
            onClick={event => props.dispatch(removeQuote(props.quote.id))}
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div>Votes: {props.quote.votes}</div> 
      </div>
    </div>
  </div>;

export default QuoteCard;
