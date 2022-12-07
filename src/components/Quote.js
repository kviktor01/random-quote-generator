import React from 'react'
import { useSelector } from 'react-redux'
import { getCurrentQuote } from '../reducers/QuoteReducer'

export default function Quote({quote}) {
    //const quote = useSelector(getCurrentQuote);
    
  return (
    <div className="quote">
        {quote?
        quote.content:""
}
    </div>
  )
}
