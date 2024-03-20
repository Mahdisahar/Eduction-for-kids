import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signin from './component/Signin/Signin';
import Register from './component/Register/Register';
import './App.scss';

function App() {
  return (
    <BrowserRouter>
      <Routes>
		<Route path="/" element={< Register/>} />
		<Route path="/signin" element={< Signin />} />
	  </Routes>
    </BrowserRouter>
  );
}

export default App;
