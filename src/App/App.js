import React from 'react';
import firebase from 'firebase/app';

import 'firebase/auth';

import fbConnection from '../helpers/data/connection';

import MyNavbar from '../components/MyNavbar';
import Auth from '../components/Auth';

import GarageContainer from '../components/GarageContainer';

import './App.scss';
import SingleGarageCategory from '../components/SingleGarageCategory';

fbConnection();

class App extends React.Component {
  state = {
    authed: false,
    singleGarageCategoryId: '',
  }

  componentDidMount() {
    this.removeListener = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ authed: true });
      } else {
        this.setState({ authed: false });
      }
    });
  }

  componentWillUnmount() {
    this.removeListener();
  }

  setSingleGarageCategory = (singleGarageCategoryId) => {
    this.setState({ singleGarageCategoryId });
  }

  render() {
    const { authed, singleGarageCategoryId } = this.state;

    const loadComponent = () => {
      if (authed && singleGarageCategoryId.length === 0) {
        return <GarageContainer setSingleGarageCategory={this.setSingleGarageCategory} />;
      }

      if (authed && singleGarageCategoryId.length > 0) {
        return <SingleGarageCategory categoryId={singleGarageCategoryId} setSingleGarageCategory={this.setSingleGarageCategory}/>;
      }

      return '';
    };

    return (
      <div className="App">
        <MyNavbar authed={authed} />
        <h1><sup>MY</sup> | <sub>Garage</sub></h1>
        {loadComponent()}
      </div>
    );
  }
}

export default App;
