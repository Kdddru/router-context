import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import DataContext from '../context/DataContext'

export const NavHeader = () => {
  const {state} =useContext(DataContext); 
  return (
    <div>
      <Link to={`/`}>Home / </Link>
      <Link to={`/boardlist`}>Board / </Link>
      <Link to={`/boardwriteform`}>boardwriteform / </Link>
      {
        state.user.login ? <span>{state.user.writer}</span>
        :<Link to={`/loginForm`}>Login</Link>
      }
      <Link to={`/image`}>/ Img</Link>
    </div>
  )
}
