import { useState } from 'react';
import './App.css';
import QuoteBox from './components/QuoteBox';
import quotes from './quotes.json'

function App() {

  const colors = ["#845EC2","#2C73D2","#0089BA","#008E9B","#008F7A","#C34A36","#FFC75F"]
  const [background, setBackground] = useState(colors[getQuoteRandom(colors.length)])
  const [quote, setQuote] = useState(quotes[getQuoteRandom(quotes.length)])

  const handleQuote = () => {
    setQuote(quotes[getQuoteRandom(quotes.length)])
    setBackground(colors[getQuoteRandom(colors.length)])
  }
    

  return (
    <div className="App" style={{background}}>
      <QuoteBox quote={quote.quote} author={quote.author} handleQuote={handleQuote} color={background} />
    </div>
  );
}

const getQuoteRandom = max => Math.floor(Math.random() * max) 

export default App;
