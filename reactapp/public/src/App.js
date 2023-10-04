import React from 'react';
import ReactDOM from 'react-dom/client';
import Login from './components/Pages/Login';
import './assets/css/App.css';
import Signup from './components/Pages/Signup';
import Dashboard from './components/Pages/Dashboard';
import './assets/css/Dashboard.css';
import Orders from './components/Pages/Orders';
import{BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Menu from './components/Pages/Menu';
import Deserts from './components/Pages/Deserts';
import { UserProvider } from './components/Context/UserContext';
import './assets/css/Signup.css';
import PrivacyPolicy from './components/Pages/PrivacyPolicy';
import './assets/css/PrivacyPolicy.css';
import FAQ from './components/Pages/FAQ';
import './assets/css/FAQ.css';
import { Cart } from './components/Pages/Cart';


export default function RouteApp(){
    return(
      <div className='App'> 
      <UserProvider>
        <Router>
            <Routes>
                <Route path="/" element={<Login/>}></Route>
                <Route path="/sign" element={<Signup/>}></Route>
                <Route path="/dash" element={<Dashboard/>}></Route>
                <Route path="/order" element={<Orders/>}></Route>
                <Route path='/menu' element={<Menu/>}></Route>
                <Route path='/desert' element={<Deserts/>}></Route>
                <Route path='/privacy' element={<PrivacyPolicy/>}></Route>
                <Route path='/faq' element={<FAQ/>}></Route>
                <Route path='/cart' element={<Cart/>}></Route>
            </Routes>
        </Router>
      </UserProvider>
      </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouteApp/>);
