import React from 'react'
import { Link } from 'react-router-dom'
const Orders = () => {
  return (
    <div>


<header>
        <h1>Suggestion</h1>
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

    <main>
        <section class="order-list">
            <h2>Suggestion</h2>
            <table>
                <thead>
                    <tr>
                        <th>Suggestion to get hydrated or suggested </th><br/>
                    </tr>
                </thead>
                <tbody id="orderTable">
                    
                </tbody>
            </table>
        </section>
    </main>

    <script src="script.js"></script>
    <footer>
    <div class="footer">@Water Minder</div>
    <div class="footer-r">
     <Link to="/privacy"> Privacy&Policy</Link>
      <Link to="/faq">FAQ</Link>
      </div>
        
    </footer>
    </div>
  )
}

export default Orders