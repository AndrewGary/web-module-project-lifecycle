import React from 'react';
import styled from 'styled-components';

const StyledUser = styled.div`
    display: flex;

    div{
        width: 50%;
    }

    img{
        width: 300px;
    }

    .imgContainer{
        display: flex;
        justify-content: center;
    }

    .infoContainer{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
    }
`

class User extends React.Component{


    render(){
        return(
            <StyledUser>
                <div className='imgContainer'>
                    <img src={`${this.props.userInfo.avatar_url}`} />
                </div>
                <div className='infoContainer'>
                    <h2>{this.props.userInfo.name}</h2>
                    <h4>Total Repos: {this.props.userInfo.public_repos}</h4>
                    <h4>Total Followers: {this.props.userInfo.followers}</h4>
                </div>
            </StyledUser>
        )
    }
}

export default User;