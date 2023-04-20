import React from 'react'
import logo from '../logo.svg'

export const ImagePage = () => {
  return (
    <div>
      <h3>ImagePage</h3>
      <div>
        <img src='/logo192.png' alt=''/>
        <img src='/img/logo192.png' alt=''/>
        <p>public에서 가져오는 방법</p>
        <p>build 할때 그 내용을 함께 가져감</p>
      </div>
      <div>
        <img src={logo} alt='' width={100} height={100}/>
        <p>require로 들고온 이미지</p>
        <img src={require('../logo.svg').default} alt='' width={100} height={100}></img>
      </div>
      <div>
        <p>style 백그라운드 이미지 확인</p>
        <div style={
          {width:`100px`, 
          height:`100px`, 
          backgroundImage :`url('/logo192.png')`,
          backgroundSize : `cover`
          }
          }></div>
      </div>
    </div>
  )
}
