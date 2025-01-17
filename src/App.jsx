import { BrowserRouter } from 'react-router-dom';
import { GlobalStyles } from './styles/GlobalStyles';
import FormPage from './pages/formPage/FormPage';

const App = () => {
	return (
		<BrowserRouter>
			<GlobalStyles />
			{/* <Router></Router> */}
			<FormPage />
		</BrowserRouter>
	);
};

export default App;
