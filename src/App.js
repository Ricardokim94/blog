/*eslint-disable */ 
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let post = 'Member'
  let [mem, memChnage] = useState(['오현호','김창목','유영인']);
  let [count, changeCount] = useState(0);
  
  return (
    <div className="App">
      <div className='black-nav'>
        <h4>OH-COACH CLIMBING CREW</h4>
      </div>
      
      <div>
        <h4 style={{textAlign : 'left', paddingLeft : '20px'}}>{post}</h4>
      </div>

      {/* 버튼 눌렀을때 값 바뀌게 하는 방법 */}
      <div style={{textAlign : 'left', paddingLeft : '20px'}}>
        <button onClick={()=>{
          let change = [...mem];
          change[3] = ['김경원'];
          change[4] = ['명소은'];
          memChnage(change);
        }}>AddMember</button>
      </div>

      <div className="list">
        <h4>{mem[0]} <span onClick={()=>{changeCount(count +1)}}>👍</span> {count} </h4>
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
      <div className="list">
        <h4>{mem[3]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{mem[4]}</h4>
        <p>2월 17일 발행</p>
      </div>
    </div>
  );
}

export default App;
