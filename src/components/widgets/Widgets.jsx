import React from 'react'
import './widgets.scss'
const Widgets = ({type}) => {
    let data;

    const amount = 100
    const diff = 20
    switch(type){
        case"user":
        data={
            title:'USERS',
            isMoney:false,
            link:'See all users',
            icon:(
                <i class="fa-solid fa-user icon" style={{color:'crimson',backgroundColor:'rgba(255,0,0,0.2)'}}></i>
            )
        }
        break;
        case"order":
        data={
            title:'ORDERS',
            isMoney:false,
            link:'View all orders',
            icon:(
                <i class="fa-solid fa-bag-shopping icon" style={{color:'goldenrod',backgroundColor:'rgba(218,165,32,0.2)'}}></i>
            )
        }
        break;
        case"earning":
        data={
            title:'Earnings',
            isMoney:true,
            link:'View net earnings',
            icon:(
                <i class="fa-solid fa-sack-dollar icon" style={{color:'green',backgroundColor:'rgba(0,128,0,0.2)'}}></i>
            )
        }
        break;
        case"balance":
        data={
            title:'BALANCE',
            isMoney:true,
            link:'See details',
            icon:(
                <i class="fa-solid fa-pen-to-square icon"style={{color:'purple',backgroundColor:'rgba(128,0,128,0.2)'}}></i>
            )
        }
        break;
        default:
            break;
    }
  return (
    <div className='widget'>
        <div className="left">
            <span className="title">{data.title}</span>
            <span className="counter">{data.isMoney && "$"}{amount}</span>
            <span className="link">{data.link}</span>
        </div>
        <div className="right">
            <div className="percentage positive">
                <i class="fa-solid fa-angle-up"></i>
                {diff}%
            </div>
            {data.icon}
        </div>
    </div>
  )
}

export default Widgets