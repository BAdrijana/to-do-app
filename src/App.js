import React, { Component } from 'react';

import './App.css';

 import ListItem from './components/listItem';

class App extends Component {
  state = {
    list : [],
    currentTask: 
      {key:'',
       task:''}
    }
  onChangeHandler = (e) => {
     this.setState({
       currentTask:{
         task: e.target.value,
         key:Date.now()
       }
     })
  }  

  onSubmit = (e) => {
    e.preventDefault();
    if(this.state.currentTask.task  !== ""){
      this.setState( ( prevState ) => {
                return { list: prevState.list.concat(this.state.currentTask), 
                        currentTask: {
                          task: '',
                          key: '' ,
                        }
                }
            } );

    }
  }
  onDelete = (taskKey) => {
        this.setState( ( prevState ) => {
            return { list: prevState.list.filter(item => item.key !== taskKey)}
        } );
    }

    onEdit = (value, taskKey) => {
      const newlist = this.state.list;
      newlist.map(task => {
        if(task.key === taskKey){
          task.task = value
        }
      })
      this.setState({list : newlist})

    }
  render() {
    return (
      <div className="App">
      <header className="App-header">

        <form className={`form-inline`} onSubmit={this.onSubmit}>

          <input type="text" 
              value={this.state.currentTask.task}
              onChange={this.onChangeHandler}
              placeholder="Enter Text" className="InputType" />

          <button type="submit"
           className={`btn btn-success `}  >SAVE</button>
        </form>

        
        {this.state.list.map(task => (
          <ListItem
            key={task.key}
            name={task.task}
            deleted = {() => this.onDelete(task.key)}
            edited =  {(e)=>{this.onEdit(e.target.value, task.key)}}
          />
        ))}     
     
      </header>
      
      
    </div>
    );
  }
}

export default App;
