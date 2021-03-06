import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './App.css'
import TodoList from './TodoList'
import TodoForm from './TodoForm'

class App extends Component {
  state = {
    isLoading: true,
    items: ["something"]
  }
  // constructor(props){
  //   super(props)
  //   this.state = {
  //     user: this.props.user
  //   }
  //   this.handleSubmit = this.handleSubmit.bind(this)
  //   const isLoggedIn = false
  // }
  componentWillMount(){
    console.log(" 1:componentWillMount")
    const apiURL = 'http://api.icndb.com/jokes/random'
    fetch(apiURL)
    .then( resp => resp.json())
    .then( jsonObject => {
      console.log("data from api", jsonObject)
      this.setState({
        items: [...this.state.items, jsonObject.value.joke]
      })
    })
  }
  //initial mounting
  componentDidMount(){
   console.log("3: componentDidMount")
  }

  componentWillUpdate(){
    console.log("componentWillUpdate")
  }
  handleSubmit(newItem){
    this.setState({items: [...this.state.items, newItem]})
  }

  handleDelete(clickedItem){
    console.log("deleting")
    const items = this.state.items.filter(item => item !== clickedItem)
    this.setState({items})
  }
  render () {
    console.log("2: rendering items")
    return (
      <div>
        <div className='header'>
          <marquee>
            <h1>Chuck Norris Quotes</h1>
          </marquee>
        </div>
        <div className='main'>
          <div className='list'>
            <TodoList deleteItem={this.handleDelete.bind(this)} items={this.state.items}/>
          </div>
          <TodoForm  handleSubmit={this.handleSubmit.bind(this)}/>
        </div>
      </div>
    )
  }
}

export default App
