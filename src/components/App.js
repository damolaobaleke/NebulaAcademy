import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom' //v6 Switch replaced with Routes
import LandingPage from './LandingPage/LandingPage'
import AuthPage from './Auth/Auth'
import '../components/App.css'

function App() {
  return (
	<div className= "App">
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<LandingPage/>} />
				<Route path="/auth" element={<AuthPage/>} />
			</Routes>
		</BrowserRouter>  
	</div>
  );
}

export default App;
