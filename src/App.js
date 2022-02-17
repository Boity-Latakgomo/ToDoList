import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      items:[],
      currentItem:{
        text:'',
        key:''
      }
     
    }
    this.handleInput = this.handleInput.bind(this);
    this.addItem = this.addItem.bind(this);
  }
  handleInput(e){
    this.setState({
      currentItem:{
        text: e.target.value,
        key: Date.now()
      }

    })
  }
    addItem(e){
      e.preventDefault();
      const newItem = this.state.currentItem;
      console.log(newItem);
      if(newItem.text!=="") {
        const newItems=[...this.state.items, newItems];
        this.setState({
          items:newItems,
          currentItem:{
            text:'',
            key:''
          }
        })
      }
    }

  render() { 
    return (
      <div className="App">

      <header>
         <form id="to-do-form" onSubmit={this.addItem}>
           <input type="text" placeholder="Enter Text"
            value={this.state.currentItem.text}
            onChange={this.handleInput}/>
           
           <button type="submit">Add</button>

        </form>
      </header>
      </div>
    
    );
  }
}
 
export default App;


{/* <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div> */}
