import React, { useContext} from 'react'
import { Link } from 'react-router-dom';
import DataContext from '../context/DataContext';

export const Boardlist = () => {
  //const [dataList, setDataList] = useState(data);

  const value = useContext(DataContext);
  
  const likeClick = (board) =>{
    //값이 있을때 제거
    if(value.state.likelist.find((like)=>(like.boardId === board.id))){
      
      const newlikelist = value.state.likelist.filter((like)=>(
        like.boardId !== board.id
      ));
      value.action.setLikelist(newlikelist);

    }
    //값이 없을때 추가
    else{
      const newlike = {
        boardId : board.id ,
        title : board.title,
      }
      
        const newLikelist = value.state.likelist.concat(newlike);
        value.action.setLikelist(newLikelist);
    }
    
    
  }

  return (
    <div>
      <h3>boardlist</h3>
      {value.state.boardlist.map((data)=>(
        <li key={data.id}>
        <span onClick={()=>{likeClick(data)}}>
          { 
            //삼항연산자 &&연산자 사용(참일때 화면출력)
            //find()값을 통해 하트색 결정
            
            //로그인 됫을때 하트 출력!
            value.state.user.login &&(
            value.state.likelist.find((like)=>(
              like.boardId === data.id
            ))? <span>🧡</span> : <span>🤍</span>)
          }
        </span>
          <Link to={`/boardlist/${data.id}`}>{data.title}</Link>
        </li>
      ))}
    </div>
  )
}


