import React, { useContext, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { Outlet, useRoutes } from 'react-router-dom';
import DebouncingSample from './pages/debouncing/debouncingSample';
import customHookSample from './pages/customHook/customHookSample';
import useReducerSample from './pages/useReducer/useReducerSample';
import Layout from './layouts/Layout';
import FakeLogin from './pages/customHook/FakeLogin';
import ProductListSample from './pages/useContext/ProductListSample';
import CartSummarySample from './pages/useContext/CartSummarySample';
import {
	CartContext,
	CartContextType,
	CartItem,
} from './pages/useContext/CartStore';
import ReactFormsHookSample from './pages/reactFormsHook/ReactFormsHookSample';
import ReactFormsHookTest from './pages/test/test';

function App() {
	const loadFromApiPromise = new Promise((resolve, reject) => {
		const cartItems: CartItem[] = [
			{
				productId: 1,
				name: 'Ürün-1',
				quantity: 3,
				unitPrice: 300,
			},
		];

		resolve(cartItems);
	});

	const { loadFromApi } = useContext(CartContext) as CartContextType;

	useEffect(() => {
		console.log('useEffect App');

		setTimeout(() => {
			loadFromApiPromise.then((data: any) => {
				loadFromApi(data);
			});
		}, 1000);
	}, []);

	const routes = useRoutes([
		{
			path: '',
			Component: Layout,
			children: [
				{
					path: '/debouncing',
					Component: DebouncingSample,
				},
				{
					path: '/customHook',
					Component: customHookSample,
				},
				{
					path: '/useReducer',
					Component: useReducerSample,
				},
				{
					path: '/reactFormsHook',
					Component: ReactFormsHookSample,
				},
				{
					path: '/products',
					Component: ProductListSample,
				},
				{
					path: '/cartSummary',
					Component: CartSummarySample,
				},
			],
		},
		{
			path: '/auth/login',
			Component: FakeLogin,
		},
		{
			path: '/admin',
			element: (
				<>
					<h1>Admin Layout</h1>
					<Outlet />
				</>
			),
			children: [
				{
					path: 'users',
					element: <>Users Page</>,
				},
			],
		},
	]);

	return routes;
}

export default App;
