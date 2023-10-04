import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { selectUser } from '../redux/UserSlice'





const Dashboard = () => {
 const user=useSelector(selectUser);
 const email=user.user && user.user.email?user.user.email:'Guest';

    
  return (
    <div>
            <header>
        <h1>Welcome {email}</h1>
       
    </header>
  
    <aside class="sidebar">
        <nav>
            <ul>
                <br/><br/><br/><br/><br/>
                <li><Link to="/dash">Dashboard</Link></li>
                <li><Link to="/order">Suggestion</Link></li>
                <li><Link to="/menu">History</Link></li>
                <li><Link to="/desert">Today</Link></li>
                <li><Link to="/setting">Settings</Link></li>
            </ul>
        </nav>
    </aside>

    

    <footer>
        <div class="footer">@Water Minder</div>
        <Link to="/privacy">
    
        <div class="footer-r">
     <Link to="/privacy"> Privacy&Policy</Link>
      <Link to="/faq">FAQ</Link>
      </div>
</Link>
        
    </footer>
        
    </div>
          
  )
}

export default Dashboard