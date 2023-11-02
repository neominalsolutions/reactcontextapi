import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Outlet, useRoutes } from 'react-router-dom';
import DebouncingSample from './pages/debouncing/debouncingSample';
import customHookSample from './pages/customHook/customHookSample';
import useReducerSample from './pages/useReducer/useReducerSample';
import useContextSample from './pages/useContext/useContextSample';
import reactFormsHookSample from './pages/reactFormsHook/reactFormsHookSample';
import Layout from './layouts/Layout';
import FakeLogin from './pages/customHook/FakeLogin';

function App() {

  const routes = useRoutes([
    {
      path: '',
      Component: Layout,
      children: [{
        path: '/debouncing',
        Component: DebouncingSample
      }, {
        path: '/customHook',
        Component: customHookSample
      }, {
        path: '/useReducer',
        Component: useReducerSample
      }, {
        path: '/useContext',
        Component: useContextSample
      }, {
        path: '/reactFormsHook',
        Component: reactFormsHookSample
      }
    ]
    },
    {
      path: '/auth/login',
      Component: FakeLogin
    },
    {
      path: '/admin',
      element: <>
        <h1>Admin Layout</h1>
        <Outlet /></>,
      children:[{
        path:'users',
        element:<>Users Page</>
      }]
    }
  ]);

  return routes;

}

export default App;
