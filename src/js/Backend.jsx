import React,{useState} from 'react'
import style from "./styles/End.module.css"

import GoIcon from "./GoIcon";


const Backend = (props) => {
  
  
  return (
    <span className={props.backStatus ? style.visible:style.hidden} >
          <GoIcon goStatus={props.goStatus}/>
          </span>
  )
}

export default Backend