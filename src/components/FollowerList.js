import React from 'react';
import Follower from './Follower';
import styled from 'styled-components';

const StyledFollowerList = styled.div`
    display: flex;
    flex-wrap: wrap;
    
    h1{
        width: 100%;
        padding-left: 20px;
    }
`


class FollowerList extends React.Component{


    render(){
        return(
            <>
            <StyledFollowerList>
                <h1>Followers</h1>
                {this.props.followers.map(item => 
                    <Follower item={item}/>
                )}
            </StyledFollowerList>
            </>
        )
    }
}

export default FollowerList;