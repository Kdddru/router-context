import React, { useContext, useState } from 'react'
import DataContext from '../context/DataContext';
import { useLocation, useNavigate } from 'react-router-dom';





/**
 * id값,객체를 가져와서 boardlist의 객체값을 수정해서 작성하는 공간 
 * 아래 내용은 객체를 가져와서 진행
 * 객체를 가져올떄는 주소(params)를 이용 할 수 없다
 * uselocation을 통해서 값을 받아 올 수 있다
 */

export const BoardModifyForm = () => {

  const navigate = useNavigate();
  const location = useLocation();
  // 수정버튼을 누른 board에서 받아온 객체
  const boardData = location.state;

  const[title, setTitle] = useState(boardData.title);

  const[content, setContent] = useState(boardData.content);
  //context에서 작성한 value의 state의 boardlist의 값을 추가
  //value의 action의 setBoardlist에 접근해서 작성한 새로운 값 추가
  /** 
   * >>todolist에서 값을 추가할때 생각, 이전의 배열을 들고와서
   * concat()을 통해 새로운 배열을 만들어 추가
   * 위와 같이 데이터를 쓰는 이유: 서버의 데이터베이스를 사용하지않고
   * 자바스크립트로 값을 저장하고 있기 때문
   * */ 

  //글 추가
  const value = useContext(DataContext);
  const {state, action}= value;

  const modifyBoard = () =>{
    
    const newBoard = {
      //boardDate의 모든값을 들고 올 수있음
      ...boardData,
      title, //덮어 씌운다
      content //덮어 씌운다
    }

    const newBoardlist = state.boardlist.map((board)=>(
      board.id === boardData.id ? newBoard:board
    ))

    action.setBoardlist(newBoardlist);

    navigate(`/boardlist/${newBoard.id}`);

  }

  return (
    <div>
      <h3>BoardWriteForm</h3>
      <label>제목</label>
      <input type='text'
        onChange={(e)=>{
          setTitle(e.target.value)
        }}
        value={title}
      />
      <br/>
      <textarea name='' id='' cols={30} rows={10}
      value={content}
        onChange={(e)=>{
          setContent(e.target.value)
        }}
      />
      <br/>
      <button
      onClick={()=>{
        modifyBoard()
      }}
      >수정</button>
    </div>
  )
}
