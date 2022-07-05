import logo from './logo.svg';
import './App.css';
import NavBar from './components/navbar';
import { Outlet } from 'react-router-dom';
// import { UserContext } from './components/context';

function App() {
  return (
    <div>
    
      {/* The outlet tag allows the router to render whatever I'm linking to */}
      <NavBar/>
      <br/>
      <div className="centered">
      <Outlet />
      </div>
    </div>
  );
}

export default App;
