import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './navbar.scss'
const Navbar = () => {

  const dispatch = useDispatch()
  const theme = useSelector((state) => state.darkMode)
  return (
    <div className='navbar'>
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder='Search...'/>
          <i class="fa-solid fa-magnifying-glass"></i>
        </div>
        <div className="items">
          <div className="item" onClick={()=>dispatch({type:"TOOGLE"})}>
          {
            theme ? 
            (<i class="icon fa-solid fa-sun sun" ></i>):
            (<i class="icon fa-solid fa-moon moon"></i>)
          }
          </div>
          <div className="item">
          <i class="icon fa-solid fa-arrows-to-circle"></i>
          </div>
          <div className="item">
          <i class="icon fa-solid fa-bell"></i>
          <div className="counter">3</div>
          </div>
          <div className="item">
          <i class="icon fa-solid fa-message"></i>
          <div className="counter">7</div>
          </div>
          <div className="item">
          <i class="icon fa-solid fa-list"></i>         
           </div>
          <div className="item">
            <img src="https://tse3.mm.bing.net/th?id=OIP.kcaJsnMsMsFRdU6d1m2v6AHaHa&pid=Api&P=0&w=159&h=159" 
             className="avatar" />
           </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar