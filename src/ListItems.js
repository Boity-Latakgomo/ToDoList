import React from 'react';
import './ListItems.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function ListItems(props){
    const items = props.items;
    const listItems = items.map(items =>
        {

       return <div className="list" key="item.key">
           <p>{items.text}
           <span>
               <FontAwesomeIcon className="faicons" icon="trash"/>
           </span>
           </p>
           

       </div>
        })
        
  return(
    <div>{listItems}</div>
  )

}
export default ListItems;