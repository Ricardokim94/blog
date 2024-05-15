/*eslint-disable */
import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react'; 

function App() {

  let post = 'Member'

  let [mem, memChange] = useState(['오현호', '김창목', '유영인']); //Member이름
  let [count, changeCount] = useState([0, 0, 0]); //최고 카운트수
  let [modal, setModal] = useState(false); //Modal창 초기값 false로 줌.
  let [modalIndex, setModalIndex] = useState(null); // Modal에 해당하는 인덱스
  let [userWrite, userWriteChange] = useState('');


  const openModal = (index) => {
    setModalIndex(index);
    setModal(true);
  }

  return (
    <div className="App">
      <div className='black-nav'>
        <h4>OH-COACH CLIMBING CREW</h4>
      </div>

      <div>
        <h4 style={{ textAlign: 'left', paddingLeft: '20px' }}> {post} </h4>
      </div>

      {
        mem.map((member, index) => (
          <div className="list" key={index}>
            <h4 onClick={() => openModal(index)}>
              {member}
              <span onClick={(e) => {
                e.stopPropagation(); // 부모 요소로 이벤트 전파 방지
                let copy = [...count];
                copy[index] = copy[index] + 1;
                changeCount(copy);
              }}>👍</span>{count[index]}
            </h4>
            <p>Member {index + 1}
              {/* 삭제 */}
              <button onClick={()=>{
                let copy = [...mem];
                copy.splice(index,1);
                memChange(copy)
              }} style={{ float: 'right', marginRight: '20px' }
              }> Delete</button> </p>

          </div>
        ))}

      {/* input tag 사용해서 사용자 입력 값 넣기 */}
      <input onChange={(e) => {
        console.log('----- : ', e.target.value);
        userWriteChange(e.target.value)
      }} />
      <button onClick={() => {
        let copy = [...mem];
        copy.unshift(userWrite);
        memChange(copy)
      }}> Member 추가</button>

      {modal && <Modal memChange={memChange} mem={mem[modalIndex]} index={modalIndex} />}
    </div>
  );
}

//Modal 창
function Modal(props) {
  return (
    <div className="modal">
      <h4>{props.mem}</h4>
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