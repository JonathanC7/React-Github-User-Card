import React from 'react';
import './UserCard.css'

export default function UserCard(props){
    return(
        <div className='user-card'>
            <p className='login line anim-typewriter'>Username: {props.userData.login}</p>\
            <img src={props.userData.avatar_url} className='user-avatar'/>
            <p className='followers'>Followers: {props.userData.followers} -------------------------------------------------------------------------------------</p>
        </div>
    )
}