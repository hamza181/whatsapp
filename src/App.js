import './App.css';
import Sidebar from './Sidebar';
import Chat from './Chat';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useState } from 'react';
import Login from './Login';

function App() {
	const [ user, setUser ] = useState(null);

	return (
		<div className="app">
			{!user ? (
				<Login />
			) : (
				<div className="app_body">
					<Router>
						<Sidebar />
						<Switch>
							<Route path="/rooms/:roomId">
								<Chat />
							</Route>
							<Route path="/" />
						</Switch>
					</Router>
				</div>
			)}
		</div>
	);
}

export default App;
