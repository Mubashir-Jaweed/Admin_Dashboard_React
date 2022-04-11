import React from 'react'
import './sidebar.scss'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
const Sidebar = () => {

  const dispatch = useDispatch()

  return (
    <div className='sidebar'>
      <div className="top">
        <Link to='/' style={{textDecoration:"none"}}>
          <span className="logo">HelloAdmin</span>     
        </Link>
       </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <i class="icon fa-solid fa-bars"></i>
            <span>Dashboard</span>         
          </li>
          <p className="title">LIST</p>
          <Link to='/users' style={{textDecoration:"none"}}>
          <li>
          <i class="icon fa-regular fa-user"></i>
            <span>Users</span>          
          </li>
          </Link>
         <Link to={'/products'} style={{textDecoration:"none"}}>
         <li>
          <i class="icon fa-solid fa-bag-shopping"></i>
            <span>Products</span>          
          </li>
         </Link>
          <li>
          <i class="icon fa-solid fa-clipboard-list"></i>
            <span>Orders</span>          
            </li>
          <li>
          <i class="icon fa-solid fa-truck"></i>
            <span>Delivery</span>          
          </li>
          <p className="title">USEFUL</p>
          <li>
          <i class="icon fa-solid fa-chart-column"></i>
            <span>Stats</span>          
              </li>
          <li>
          <i class="icon fa-regular fa-bell"></i>
            <span>Notifications</span>          
              </li>
          <p className="title">SERVICE</p>
          <li>
          <i class="icon fa-solid fa-book-medical"></i>
            <span>System Health</span>          
              </li>
          <li>
          <i class="icon fa-solid fa-brain"></i>
            <span>Logs</span>          
            </li>
          <li>
          <i class="icon fa-solid fa-gear"></i>
            <span>Settings</span>          
              </li>
          <p className="title">USER</p>
          <li>
          <i class="icon fa-solid fa-address-card"></i>
            <span>Profile</span>          
              </li>
          <li>
          <i class="icon fa-solid fa-arrow-right-from-bracket"></i>
            <span>Logout</span>         
          </li>
        </ul>
      </div>
      <div className="bottom">
        <button onClick={()=>dispatch({type:"LIGHT"})} className="colorOption"></button>
        <button onClick={()=>dispatch({type:"DARK"})} className="colorOption"></button>
      </div>
    </div>
  )
}

export default Sidebar