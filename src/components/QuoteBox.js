import React from 'react'
import  '../styles/quoteBox.css'

const QuoteBox = ({ quote, author, handleQuote, color }) => {
    return (
        <div className='cardQuote'>
            <div className='phraseContainer'>
                <i style={{color}} className="fas fa-quote-left"></i>
                <p style={{color}} className='phrase'>{ quote }</p>
            </div>
            <div className='content'>
                <p style={{color}}>{ author }</p>
                <div className='btnChangeQuote' >
                    <button style={{color}} onClick={handleQuote}> <i class="fas fa-arrow-circle-right"></i> </button>
                </div>
            </div>
        </div>
    )
}

export default QuoteBox
