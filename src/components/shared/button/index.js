import React from 'react';
import Spinner from 'react-svg-spinner';
import './style.css';

export default ({ loading = false, text }) => {
  return (
    <button className='btn' disabled={ loading }>
      { loading ? <Spinner />  : text }
    </button>
  )
}