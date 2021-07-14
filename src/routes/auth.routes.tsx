import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Sign from 'views/Sign';
import Signup from 'views/Signup';

const Routes: React.FC = () => (
  <Switch>
    <Route path='/' exact component={Sign} />
    <Route path='/signup' component={Signup} />
  </Switch>
);

export default Routes;
