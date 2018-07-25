import React from 'react';
import Spinner from 'react-svg-spinner';
import './style.css';

export default ({ loading = false, text, handleClick, icon = null }) => {
  return (
    <button className='btn' disabled={ loading } onClick={ handleClick }>
      { loading ? <Spinner />  : null }
      { icon }
      { text }
    </button>
  )
}