import React from 'react';
import { uniqueId } from 'lodash';
import Button from '../shared/button/commonButton';
import { IconRetry } from '../shared/icons'
import './style.css';

export default class Ranks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 42,
      users: [
        {
          name: 'Petr Petrov',
          score: 90,
          rate: 3,
        },
        {
          name: 'Ivan Superhacker',
          score: 76,
          rate: 2,
        },
        {
          name: 'Lazy Djo',
          score: 101,
          rate: 4,
        },
        {
          name: 'Stupid faggot',
          score: 74,
          rate: 1
        }
      ]
    }
  }

  renderTable = () => {
    const { users } = this.state;
    return (
      <table className='results'>
        <thead>
          <tr>
            <th>Rating</th>
            <th>Name</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {
            users.map((u) => {
              return (
                <tr key={uniqueId()}>
                  <td>{u.rate}</td>
                  <td>{u.name}</td>
                  <td>{u.score}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    )
  }

  render() {
    return (
      <div className='container'>
        <h1 className='title'>Your score - {this.state.score}</h1>
        { this.renderTable() }
        <Button text='Try again' icon={ <IconRetry/> }/>
      </div>
    )
  }
}