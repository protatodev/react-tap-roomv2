import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import Welcome from './Welcome';
import KegList from './KegList';
import Admin from './Admin';
import { connect } from 'react-redux';
import { addKeg, removeKeg, removeAllKegs } from '../actions/actions';

class App extends React.Component {

  render() {
    console.log(this.props);
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' component={Welcome} />
          <Route exact path='/keglist' component={KegList} />
          <Route exact path='/admin' component={Admin} /> 
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state
};

const mapActionsToProps = {
  onUpdateUser: updateUser
}

export default connect(mapStateToProps, mapActionsToProps)(App);