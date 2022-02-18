import React from 'react';
import './ListItems.css'

function ListItems(props){
    const items = props.items;
    const listItems = items.map(items =>
        {

       return <div className="list" key="item.key">
           <p>{items.text}</p>

       </div>
        })
        
  return(
    <div>{listItems}</div>
  )

}
export default ListItems;