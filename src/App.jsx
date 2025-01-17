import { BrowserRouter } from 'react-router-dom';
import { GlobalStyles } from './styles/GlobalStyles';
import Router from './router/Router';

const App = () => {
	return (
		<BrowserRouter>
			<GlobalStyles />
			<Router>
				</Router>	
				</BrowserRouter>
	);
};

export default App;
