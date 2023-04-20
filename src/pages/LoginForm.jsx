import React, { useContext, useState } from 'react'
import DataContext from '../context/DataContext';
import { useNavigate } from 'react-router-dom';

export const LoginForm = () => {
  const navigate = useNavigate();
  const [writer, setWriter] = useState(``);
  const {action} = useContext(DataContext);


  const onLogin = () =>{
    
    const newUser={
      writer: writer,
      login : true
    }

    action.setUser(newUser);
    navigate(`/`);
    
  }


  return (
    <div>
      <h3>LoginForm</h3>
      <label>id를 입력해주세요</label>
      <input type='text'
        onChange={(e)=>{
          setWriter(e.target.value)
        }}
      />
      <button
      onClick={onLogin}>
        로그인
      </button>
    </div>
  )
}
