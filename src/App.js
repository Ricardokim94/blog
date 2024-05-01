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

      <div className="list">
        <h4>{mem[0]} <span onClick={()=>{changeCount(count +1)}}>👍</span> {count} </h4>
        <p>Member ^^</p>
      </div>
      <div className="list">
        <h4>{mem[1]}</h4>
        <p>Member ^^</p>
      </div>
      <div className="list">
        <h4>{mem[2]}</h4>
        <p>Member ^^</p>
      </div>
      
      <Modal></Modal>
      
    </div>
  );
}

function Modal(){
  return(
    <div className="modal">
        <h4>제목</h4>
        <p>날짜</p>
        <p>상세내용</p>
      </div>
  )
}

export default App;
