import Modal from './Modal';
import MainPageEN from './MainPage';
import PunCla from './lessons/punctuation-clauses';
import MlaFormat from './lessons/mla-format';
import {Head, Foot} from './HeadFoot';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Modal />
  );
}

function Ap() {
  return (
    <Router>
      <Routes>
        <Route exact path='/zh-cn' />
        <Route exact path='/en-us' />
      </Routes>
    </Router>
  )
}

export default App;
