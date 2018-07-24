import React from 'react';
import Button from '../shared/button';
import './style.css';

export default class Signin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
    }
  }

  handleChange = (e) => {
    this.setState({
      name: e.target.value,
    })
  }

  render () {
    return (
      <div className='container'>
        <h1 className='title'>Please, enter your name</h1>
        <input type='text' id='enterName' className='enter-name' placeholder='Your name' value={this.state.name} onChange={this.handleChange} />
        <Button text='Go!' />
      </div>
    )
  }
}