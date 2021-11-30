import React from 'react'
import {Switch, Route} from 'react-router-dom';

import Dasboard from '../pages/Dasboard'
import Customers from '../pages/Customers';
const Routes = () => {
    return (
        <Switch>
          <Route path='/' exact component={Dasboard} />
          <Route path='/customers' component={Customers} />
        </Switch>
    )
}

export default Routes
