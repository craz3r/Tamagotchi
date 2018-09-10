import React from 'react';
import { Field, reduxForm } from 'redux-form';
import Button from '../shared/button';
import styles from './style.css';

class Signin extends React.Component {
  enterName = values => {
    this.props.enterName(values);
    this.props.history.push('/choose');
  };

  render() {
    return (
      <div className="container">
        <h1 className="title">Please, enter your name</h1>
        <form onSubmit={this.props.handleSubmit(this.enterName)}>
          <Field
            component="input"
            type="text"
            name="currentUserName"
            id="name"
            className={styles.enterName}
            placeholder="Your name"
          />
          <Button type="submit" label="Go!" className="block" />
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: 'signin'
})(Signin);
