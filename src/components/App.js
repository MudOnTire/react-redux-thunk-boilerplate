import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from '../store';
import Posts from './Posts';
import Postform from './Postform';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Postform />
        <hr />
        <Posts />
      </Provider>
    )
  }
}
