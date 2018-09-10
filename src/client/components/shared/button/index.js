import React, { Component } from 'react';
import styles from './button.css';

export default class Button extends Component {
  render() {
    return (
      <button
        onClick={this.props.handleClick || null}
        className={`${styles.buttonPrimary} ${this.props.className}`}
        type={this.props.type || 'submit'}
      >
        {this.props.label}
      </button>
    );
  }
}
