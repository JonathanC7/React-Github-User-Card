import React from 'react';
import axios from 'axios';
import './App.css';
import Card from './components/Card'

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      username : '',
      followers : ''
    }
  }
  componentDidMount(){

    axios
    .get('https://api.github.com/users/JonathanC7')
    .then(res => {
      this.setState({
        username : res.data.login,
      })
    })
    .catch(err => {
      console.log(err)
    })
    axios
    .get('https://api.github.com/users/JonathanC7/followers')
    .then(res => {
      this.setState({
        followers: res.data
      })
    })
    .catch(err => {
      console.log(err);
    })
  }
  render(){
    return (
      <div className="App">
        <Card data={this.state}/>
      </div>
    );
  }
}

export default App;
