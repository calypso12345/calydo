import './App.css';
import {  store } from './store/store';
import { FirstPage } from './components/firstPage';
import { SecondPage } from './components/secondPage';
import { ThirdPage } from './components/thirdPage';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" index element={<FirstPage store={store}/>} />
      <Route path="/secondPage" index element={<SecondPage store={store}/>} />
      <Route path="/thirdPage" index element={<ThirdPage store={store}/>} />
    </Routes>
    </Router>
);
}

export default App;
