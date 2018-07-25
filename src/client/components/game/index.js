import React from 'react';
import RouteButton from '../shared/button/routeButton';

export default class Game extends React.Component {

  render () {
    return (
      <div className='container'>
        <RouteButton text='Finish' route='/ranks' />
      </div>
    )
  }
}