import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import Welcome from './Welcome';
import KegList from './KegList';
import NewKegForm from './NewKegForm';

const App = () => {
  return (
    <div>
      App Works!
      <Header/>
      <KegList/>
      <Switch>
        <Route exact path='/' component={Welcome} />
        <Route exact path='/keglist' component={KegList} />
        <Route exact path='/newkeg' component={NewKegForm} /> 
      </Switch>
    </div>
  );
}

export default App;