import React from 'react'

export const ComentComp = (props) => {
  const {writer,text, date,id} = props.comment;

  const {deleteComment} = props



  return (
    <div>
      <h5>{writer}</h5>
      <p>{text}</p>
      <span>{date}</span>
      <button
      //메소드를 사용할때, cid전달해야함
      onClick={()=>{
        deleteComment(id)
      }}
      >x</button>
    </div>
  )
}
