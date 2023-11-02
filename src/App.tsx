import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useRoutes } from 'react-router-dom';

function App() {

  const routes = useRoutes([
    {
      path: '',
      Component: null,
      children: [{
        path: '/deboucing',
        Component: null
      }, {
        path: '/customHook',
        Component: null
      }, {
        path: '/useReducer',
        Component: null
      }, {
        path: '/useContext',
        Component: null
      }, {
        path: '/reactFormsHook',
        Component: null
      }]
    }
  ]);

  return routes;

}

export default App;
