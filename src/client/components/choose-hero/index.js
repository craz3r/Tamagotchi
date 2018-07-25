import React from 'react';
import { IconUndo } from '../shared/icons';
import HeroCard from './heroCard';
import './style.css';

export default class ChooseHero extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      entities: [
        {
          name: 'Бомж Елена',
          avatar: 'http://via.placeholder.com/100x100',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        },
        {
          name: 'Книжный червь Петр',
          avatar: 'http://via.placeholder.com/100x100',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        },
        {
          name: 'Аристократ Венеамин',
          avatar: 'http://via.placeholder.com/100x100',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        },
      ]
    }
  }

  render() {
    return (
      <div className='container'>
        <h1 className='title'>
          <IconUndo color='#000' />
          &nbsp;
          Choose your hero
        </h1>
        <ul className='list'>
          {
            this.state.entities.map((e, idx) => {
              return <li key={idx}><HeroCard hero={e}/></li>
            })
          }
        </ul>
      </div>
    )
  }
}