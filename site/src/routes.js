import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home'
import Admin from './pages/Admin'
import Users from './pages/Admin/Users'
import Products from './pages/Admin/Products'

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/home' component={Home} />
      <Route path='/dashboard' component={Admin} />
      <Route path='/admin/users' component={Users} />
      <Route path='/admin/products' component={Products} />
    </Switch>
  </BrowserRouter>
)

export default Routes