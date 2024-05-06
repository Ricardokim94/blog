/*eslint-disable */
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let post = 'Member'

  let [mem, memChnage] = useState(['오현호', '김창목', '유영인']); //Member이름
  let [count, changeCount] = useState([0]); //최고 카운트수
  let [modal, setModal] = useState(false); //Modal창 초기값 false로 줌.

  
  return (
    <div className="App">
      <div className='black-nav'>
        <h4>OH-COACH CLIMBING CREW</h4>
      </div>

      <div>
        <h4 style={{ textAlign: 'left', paddingLeft: '20px' }}> {post} </h4>
      </div>
     

      {
        modal == true ? <Modal /> : null //react 조건문 if 대신 쓰는 삼항연산자
      }


      {
        mem.map(function (a, i) { //react 에서 for 대신 쓰는 반복문 map
          return (
            <div className="list" key='{i}'>
              <h4>
                {mem[i]}
                  <span onClick={() => { 
                    let copy = [...count];
                    copy[i] = copy[i] + 1;
                    changeCount(copy) 
                    }}>👍</span>{count[i]} 
              </h4>
              <p>Member</p>
            </div>
          )
        })
      }


    </div>
  );
}

function Modal() {
  return (
    <div className="modal">
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}

export default App;


// <div className="list">
// {/* 좋아요클릭시 카운트 숫자 증가 & 이름 누르면 Modal창 나오게*/}
// <h4 onClick={() => { setModal(!modal) }}> {mem[0]} <span onClick={() => { changeCount(count + 1) }}>👍</span> {count} </h4>
// <p>Member</p>
// </div>
// <div className="list">
// <h4>{mem[1]}</h4>
// <p>Member</p>
// </div>
// <div className="list">
// <h4>{mem[2]}</h4>
// <p>Member</p>
// </div>