import './App.css';
import Homepage from './Homepage';
import Login from './Login';
import { BrowserRouter as Router, Routes, Route ,Link } from 'react-router-dom';


function App() {
  
  return (
   
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' Component={Login}></Route>
          <Route path='/home' Component={Homepage}></Route>
        </Routes>
      </Router>
     
    </div>
  );
}

export default App;
