import React from 'react';
import './Card.css'

function Card(props){
      const cName = 'card ' + props.className;
      return (
            <div className={cName}>{props.children}</div>
      );
}

export default Card;