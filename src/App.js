import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let post = 'Member'
  let [mem, a] = useState(['오현호','김창목','유영인']);
  
  return (
    <div className="App">
      <div className='black-nav'>
        <h4>OH-COACH CLIMBING CREW</h4>
      </div>
      
      <div>
        <h4 style={{textAlign : 'left', paddingLeft : '20px'}}>{post}</h4>
      </div>

      <div className="list">
        <h4>{mem[0]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{mem[1]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{mem[2]}</h4>
        <p>2월 17일 발행</p>
      </div>
    </div>
  );
}

export default App;
