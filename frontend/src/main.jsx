import React from 'react'
import ReactDOM from 'react-dom/client'

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from './App';
import Modal from './Components/Modal';
import Login from './Components/Login';

import Layout from './Components/loyout';
import Derecho from './Components/expert/juridic';
import PsicolAyu from './Components/expert/psicolog';

import { AuthProvider } from './Components/authen/authContext';
import ProtectedRoute from './Components/routes/ProtectedRoute';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<AuthProvider>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<App />} />
					<Route path='/user/registry' element={<Modal />} />
					<Route path='/user' element={<Login />} />

					{/* Rutas para usuarios */}
					<Route path='/user/home' element={
						<ProtectedRoute rol="usuario">
							<Layout />
						</ProtectedRoute>
					} />

					{/* Rutas para expertos */}
					<Route path='/user/juridico' element={
						<ProtectedRoute rol="abogado">
							<Derecho />
						</ProtectedRoute>
					} />

					<Route path='/user/psicologico' element={
						<ProtectedRoute rol="psicolo">
							<PsicolAyu />
						</ProtectedRoute>
					} />


				</Routes>
			</BrowserRouter>
		</AuthProvider>
	</React.StrictMode>,
)
