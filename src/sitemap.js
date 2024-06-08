import React from 'react';
import { Switch, Route } from 'react-router';
require('@babel/register');
const Sitemap = require('react-router-sitemap').default;

const router = (
  <Switch>
    <Route exact path="/" />
    <Route exact path="/matrix" />
    <Route exact path="/character"/>
    <Route exact path="/skills"/>
    <Route path="/Error404" />
  </Switch>
);

new Sitemap(router).build('https://shadowrunfans.net').save('./build/sitemap.xml');
