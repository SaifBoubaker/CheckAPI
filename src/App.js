import './App.css';
import UserListe from './component/userList';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Home from './component/home';
import Navb from './page/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import PostUser from './component/users';


function App() {
  return (
    <div className="App">
      <Router>
        <Navb></Navb>
        <Routes>
        <Route path='/' element={<Home/>} ></Route>
        <Route path='/UserListe/:idd' element={<UserListe/>} ></Route>
        <Route path='/PostUser' element={<PostUser/>} ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
