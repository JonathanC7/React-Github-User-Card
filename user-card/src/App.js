import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import UserCard from './Components/UserCard'
import FollowersCard from './Components/FollowersCard';
import { render } from '@testing-library/react';

class App extends React.Component{
  constructor(){
    super()
    this.state = {
      user : {},
      followers : []
    }
  }
  componentDidMount(){
    axios('https://api.github.com/users/JonathanC7')
    .then(res => {
      this.setState({
        user : res.data
      })
      console.log('user data response', res)
    })
    .catch(err => {
      console.log('user data error',err)
    })
    axios('https://api.github.com/users/JonathanC7/followers')
    .then(res => {
      this.setState({
        followers : res.data
      })
      console.log('follower data response', res)
    })
    .catch(err => {
      console.log('follower data error', err)
    })
  }
  render(){
    return(
      <div className='page-wrapper'>
        <UserCard userData={this.state.user}/>
        <FollowersCard followerData={this.state.followers}/>
      </div>
    )
  }
}

export default App;
