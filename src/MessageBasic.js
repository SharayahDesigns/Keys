import React from 'react'
import {useState} from 'react'
import moniter from './moniter.png';


const MessageBasic = () => {

  const [message, setMessage] = useState('')
  const handleClicked = (char) => {
    console.log('${char} clicked')
    setMessage(message + char)
    
    //This way is the shortest Method
    // const renderAlphabet = ()=>
    // let alp = ['a','b','c','d']
    // let jsx = alp.map(char => {
    //   return <button key={char} onClick={() => handleClicked(char)}>{char}</button>
    // })
    // return jsx
    
 
    // THIS IS ONE WAY TO DO THE SAME THING
    //   console.log('a clicked')
    //   setMessage(message + 'a')
    // }
    // const handleSclicked = () => {
    //   console.log('s clicked')
    //   setMessage(message + 's')
    // }
  }
  return (
    <div className="App">
      <header className="App-header"> 
        
        <h1>KeyBoard</h1>
        
        <div id='container' >
          <img id='comp' src={moniter} width='600' />
          <div id='wrap'>
        
            <p id='text'>{message}Type Here</p>
            </div>
        </div>
       
        
        <div className='keyboard'>
          <button onClick={()=> handleClicked('q')}>q</button>
          <button onClick={()=> handleClicked('w')}>w</button>
          <button onClick={() => handleClicked('e')}>e</button>
          <button onClick={() => handleClicked('r')}>r</button>
          <button onClick={()=> handleClicked('t')}>t</button>
          <button onClick={()=> handleClicked('y')}>y</button>
          <button onClick={()=> handleClicked('u')}>u</button>
          <button onClick={()=> handleClicked('i')}>i</button>
          <button onClick={() => handleClicked('o')}>o</button>
          <button onClick={()=> handleClicked('p')}>p</button>
         
          <br></br>
          <button onClick={()=> handleClicked('a')}>a</button>
          <button onClick={()=> handleClicked('s')}>s</button>
          <button onClick={()=> handleClicked('d')}>d</button>
          <button onClick={()=> handleClicked('f')}>f</button>
          <button onClick={()=> handleClicked('d')}>d</button>
          <button onClick={()=> handleClicked('f')}>f</button>
          <button onClick={()=> handleClicked('g')}>g</button>
          <button onClick={()=> handleClicked('h')}>h</button>
          <button onClick={()=> handleClicked('j')}>j</button>
          <button onClick={()=> handleClicked('k')}>k</button>
          <button onClick={() => handleClicked('l')}>l</button>
          
          <br></br>
          <button onClick={()=> handleClicked('z')}>z</button>
          <button onClick={()=> handleClicked('x')}>x</button>
          <button onClick={()=> handleClicked('c')}>c</button>
          <button onClick={() => handleClicked('v')}>v</button>
          <button onClick={()=> handleClicked('b')}>b</button>
          <button onClick={() => handleClicked('n')}>n</button>
          
          <button onClick={() => handleClicked('m')}>m</button>
          
          <br></br>
          <button onClick={() => handleClicked(String.fromCharCode(32))}className='space'>Space</button>
          
          
          
        
        </div>
       
      </header>
    </div>
  );
}

  export default MessageBasic
  
