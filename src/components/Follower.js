import React from 'react';
import styled from 'styled-components';

const StyledFollower = styled.div`
    width: 30%;
    text-align: center;
    img{
        width: 200px;
    }
`

class Follower extends React.Component{


    render(){
        return(
            <StyledFollower>
                {console.log(this.props.item)}
                <img src={`${this.props.item.avatar_url}`}/>
                <h3>{this.props.item.login}</h3>
            </StyledFollower>
        )
    }
}

export default Follower;