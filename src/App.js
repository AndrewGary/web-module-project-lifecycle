import React from 'react';
import axios from 'axios';
import User from './components/User.js';
import FollowerList from './components/FollowerList';



class App extends React.Component {

  state ={
    user: "",
    userInfo: {},
    followers: []
  }

  componentDidMount() {
    axios.get('https://api.github.com/users/andrewgary')
    .then(resp => {
      console.log(resp);
      this.setState({
       ...this.state,
       user: resp.data.name,
       userInfo: resp.data,
      })
    })
    .catch(error => {
      console.error(error);
    })

    axios.get('https://api.github.com/users/andrewgary/followers')
    .then(resp => {
      console.log(resp);
      this.setState({
        ...this.state,
        followers: resp.data
      })
    })
    .catch(error => {
      console.error(error);
    })
  }

  handleChanges = e => {
    this.setState({
      ...this.state,
      user: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault();

    axios.get(`https://api.github.com/users/${this.state.user}`)
    .then(resp => {
      this.setState({
        ...this.state,
        userInfo: resp.data
      })
    })
    .catch(error => {
      console.error(error);
    })

    axios.get(`https://api.github.com/users/${this.state.user}/followers`)
    .then(resp => {
      // console.log('crazzzzzyyy', resp);
      this.setState({
        ...this.state,
        followers: resp.data
      })
    })
    .catch(error => {
      console.error(error);
    })

    // this.setState({
    //   ...this.state,

    // })
  }

  render() {
    return(
      <div>
        <h1>Github Info</h1>
        <form onSubmit={this.handleSubmit}>
          <input 
            type='text'
            name='userNameInput'
            onChange={this.handleChanges}
          />
          <button>Search</button>
        </form>
        <User userInfo={this.state.userInfo}/>

        <FollowerList followers={this.state.followers}/>
      </div>
    );
  }
}

export default App;
