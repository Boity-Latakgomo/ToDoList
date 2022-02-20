import React from 'react';
import logo from './logo.svg';
import './App.css';
import ListItems from './ListItems';
import { library } from '@fortawesome/fontawesome-svg-core';
import {faTrash, faHeart} from '@fortawesome/free-solid-svg-icons';

library.add(faTrash);
library.add(faHeart);


class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      items:[],
      currentItem:{
        text:'',
        key:'',
        favorite: false,
      }
     }
    this.handleInput = this.handleInput.bind(this);
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.setUpdate = this.setUpdate.bind(this);
    this.favorite = this.favorite.bind(this);
  }
  handleInput(e){
    this.setState({
      currentItem:{
        text: e.target.value,
        key: Date.now(),
        favorite: false,
      }
    })
  }
    addItem(e){
      e.preventDefault();
      const newItem = this.state.currentItem;
      console.log(newItem);
      if(newItem.text!=="") {
        const newItems=[...this.state.items, newItem];
        this.setState({
          items:newItems,
          currentItem:{
            text:'',
            key:''
          }
        })
      }
    }
     deleteItem(key){
       const filteredItems = this.state.items.filter(item =>
        item.key!==key);
        this.setState({
        items:filteredItems
        })
     }
     favorite(key){
       const list = this.state.items.map(item => {
         if(item.key == key){
           if(item.favorite){
             return {...item, favorite : false};
           }
           return {...item, favorite : true}
         }else{
           return item;
         }
         
       });
       this.setState({items : list})
     }
     setUpdate(text, key){
       const items = this.state.items;
       items.map(item =>{
         if(item.key===key){
           item.text=text;
         }
       })

       this.setState({
        items: items
       })
       
     }
  render() { 
    return (
      <div className="App">
        <h1 className='Title'> TODO LIST </h1>
      <header>
         <form id="to-do-form" onSubmit={this.addItem}>
           <input type="text" placeholder="Enter Text"
            value={this.state.currentItem.text}
            onChange={this.handleInput}/>
           
           <button type="submit">Add</button>

        </form>
      </header>

      <ListItems items= {this.state.items}
      deleteItems = {this.deleteItem}
      setUpdate = {this.setUpdate }
      favorite = {this.favorite}
      >
      
      </ListItems>
      </div>
    
    );
  }
}
 
export default App;


{}
