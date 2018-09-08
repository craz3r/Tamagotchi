import { connect } from 'react-redux';
import * as actionCreators from '../actions';
import Component from '../components/signin';

const SigninContainer = connect(
  ({ match }) => {
    return {
      initialValues: localStorage.getItem('user')
        ? JSON.parse(localStorage.getItem('user'))
        : ''
    };
  },
  actionCreators
)(Component);

export default SigninContainer;
