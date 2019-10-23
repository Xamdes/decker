import React from 'react';
import { Switch, Route } from 'react-router';
require('babel-register');
const Sitemap = require('react-router-sitemap').default;

const router = (
  <Switch>
    <Route exact path="/" />
    <Route path="/matrix" />
    <Route path="/Error404" />
  </Switch>
);

new Sitemap(router).build('https://cyber-ex.net').save('./build/sitemap.xml');
