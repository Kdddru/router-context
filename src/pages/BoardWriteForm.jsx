import React, { useContext, useState } from 'react'
import DataContext from '../context/DataContext';
import { useNavigate } from 'react-router-dom';

export const BoardWriteForm = () => {

  const navigate = useNavigate();

  const[title, setTitle] = useState(``);

  const[content, setContent] = useState(``);

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

  const addBoard = () =>{

    
    const newBoard = {
      id: state.id,
      title: title,
      content: content,
      date:'2023-04-18',
      writer: state.user.writer
    }
    
    action.setId(state.id+1);

    const newBoardlist = state.boardlist.concat(newBoard);

    action.setBoardlist(newBoardlist);

    navigate(`/boardlist`);

  }
  


  return (
    <div>
      <h3>BoardWriteForm</h3>
      <label>제목</label>
      <input type='text'
        onChange={(e)=>{
          setTitle(e.target.value)
        }}
      />
      <br/>
      <textarea name='' id='' cols={30} rows={10}
        onChange={(e)=>{
          setContent(e.target.value)
        }}
      />
      <br/>
      <button
      onClick={addBoard}
      >게시</button>
    </div>
  )
}
