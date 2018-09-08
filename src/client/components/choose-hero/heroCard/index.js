import React from 'react';
import RouteButton from '../../shared/button/routeButton';
import './style.css';

export default class HeroCard extends React.Component {
  handleClick = (e) => {
    e.preventDefault();
  }

  render() {
    const { avatar, name, description } = this.props.hero;
    return (
      <article className='card'>
        <header className='avatar'>
          <div className='picture'>
            <img src={avatar} alt={name} />
          </div>
          <p className='name'>{name}</p>
        </header>
        <main className='description'>
          {description}
        </main>
        <footer className='actions'>
          <RouteButton text='Choose' route='/game' />
        </footer>
      </article>
    )
  }
}