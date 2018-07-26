import React from 'react';
import Spinner from 'react-svg-spinner';
import { withRouter } from 'react-router-dom';
import './style.css';

export default ({ loading = false, text, icon = null, route, handleClick }) => {
  return (
    <Button loading={loading} text={text} icon={icon} route={route} handleClick={handleClick} />
  )
}

const Button = withRouter(({ history, loading, text, icon, route, handleClick }) => (
  <button className='btn'
    onClick={() => {
      if (handleClick) {
        handleClick();
      }
      history.push(route)
    }} 
    disabled={loading}>
    {loading ? <Spinner /> : null}
    {icon}
    {text}
  </button>
));