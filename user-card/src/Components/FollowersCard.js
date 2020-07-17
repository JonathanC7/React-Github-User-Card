import React from 'react';
import './UserCard.css'


export default function FollowerCard(props){
    return(
        <div className='follower-container'>
            {props.followerData.map(follower => {
                return <div className='follower-card' key={follower.id}>
                        <img src={follower.avatar_url} className='follower-avatar'/>
                        <p className='login'>Username: {follower.login}</p>
                    </div>
            })}
        </div>
    )
}