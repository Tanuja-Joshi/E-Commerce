//import logo from './logo.svg';
import './App.css';
import Signup from './components/Signup';
import Login from './components/Login';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './components/Home';
import FashionMale from './components/male/Fashion-male';
import FashionFemale from './components/female/Fashion-female';
import Fashion from './components/Fashion';

const App=()=> {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path='/register' element={<Signup/>}></Route>
      <Route exact path='/' element={<Login/>}></Route>
      <Route exact path='/login' element={<Login/>}></Route>
      <Route exact path='/home' element={<Home/>}></Route>
      <Route exact path="/Men's Fashion" element={<FashionMale/>}></Route>
      <Route exact path="/Women's Fashion" element={<FashionFemale/>}></Route>
      <Route exact path="/fashion" element={<Fashion/>}></Route>

    </Routes>
    </BrowserRouter>
  );
}

export default App;
