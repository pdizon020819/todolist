import React from 'react';
import './App.css';
import ListItems from './ListItems'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrashAlt, faEdit } from '@fortawesome/free-solid-svg-icons';

library.add( faTrashAlt, faEdit );

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      items:[],
      currentItem:{
        text:'',
        key:'',
      },
    }
    this.handleInput = this.handleInput.bind(this);
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.setUpdate = this.setUpdate.bind(this);
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
  if(newItem.text !== ""){
    const items = [...this.state.items, newItem];
    this.setState({
      items: items,
      currentItem: {
        text: '',
        key: '',
      }
    })
  }
}
deleteItem(key){
  const filteredItems = this.state.items.filter(item =>
    item.key !== key);
    this.setState({
      items:filteredItems
    })
}
setUpdate(text, key){
  const items = this.state.items;
  items.map(item =>{
    if(item.key === key){
      item.text = text;
    }
  })
  this.setState({
    items: items
  })
}
  render () {
    return (
      <div className="App">

        <header className="holder-lists">
            <ListItems items = {this.state.items}
              deleteItem = {this.deleteItem}
              setUpdate = {this.setUpdate}>
             </ListItems>
        </header>

        <form id="to-do-form" onSubmit={this.addItem}>
          <input type="text" placeholder="Enter Task"
            value={this.state.currentItem.text} 
            onChange={this.handleInput}
          />
          <button type="submit">
            <span>ADD</span>
          </button>
        </form>

      </div>
    );
  }
 
}
 export default App;
