import React from 'react'
import { useState } from 'react';
import dummy from '../data/dummy.json'

const DataContext = React.createContext(``);

//데이터 값을 가진 Provider컴포넌트 작성
//DataContext에 들어갈 value값의 특징
// 2개이상의 페이지 컴포넌트에서 사용할 때 작성
//:페이지 컴포넌트 - path로 연결된 컴포넌트

const DataProvider = ({children}) =>{
  //데이터 들고오기
  const[boardlist, setBoardlist] = useState(dummy);

  //id
  const[id, setId] = useState(4);

  //user값 을 사용하기 위해 useState() 작성
  const [user, setUser] = useState(
    {writer:'익명', login:false}
  );

  //comentlist 값 저장
  const [commentlist, setCommentList] = useState([
    {
      id: 1,
      boardId : 1,
      text: "첫번째 게시글의 코멘트입니다",
      date: "2023-04-19",
      writer: "키랄",
    },
  ]);

  const [likelist, setLikelist] = useState(
    [
      {
        boardId : 1,
        title : '첫번째 게시물입니다'
      }
    ]
  );

  const value ={
    state : {boardlist ,id, user, commentlist, likelist},
    action : {setBoardlist, setId, setUser, setCommentList, setLikelist}
  }



  return(
    <DataContext.Provider value={value}>
      {children}
    </DataContext.Provider>
  )
}

export {DataProvider}

export default DataContext