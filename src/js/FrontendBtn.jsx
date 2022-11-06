import React from 'react'
import ButtonIcon from "./ButtonIcon";


const FrontendBtn = (props) => {
  return (
    <div className="btn-front">
        <ButtonIcon
          setStatus={props.setFrontStatus}
          status={props.frontStatus}
          text={"frontend"}
        />
        {props.iconsFront.map((iconFront) => {
          return (
            
              <ButtonIcon
                setStatus={iconFront.setStatusFront}
                status={iconFront.statusFront}
                text={iconFront.text}
              />
            
          );
        })}
      </div>
  )
}

export default FrontendBtn