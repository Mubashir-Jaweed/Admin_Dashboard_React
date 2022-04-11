import React from 'react'
import './single.scss'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import Chart from '../../components/chart/Chart'
import List from '../../components/table/Table'
const Single = () => {
  return (
    <div className='single'>
          <Sidebar/>
          <div className="singleContainer">
            <Navbar/>
            <div className="top">
              <div className="left">
                <div className="editButton">Edit</div>
                <h1 className="title">Information</h1>
                <div className="item">
                  <img src="https://tse2.mm.bing.net/th?id=OIP.94TvRs8QDE9ZEjRH8iC_tgHaFj&pid=Api&P=0&w=171&h=128" alt="" className="itemImg" />
                  <div className="details">
                    <h1 className="itemTitle">Jane Doe</h1>
                    <div className="detailItem">
                      <apan className="itemKey">Email:</apan>
                      <apan className="itemValue">janedoe@gmail.com</apan>
                    </div>
                    <div className="detailItem">
                      <apan className="itemKey">Phone:</apan>
                      <apan className="itemValue">+92 310 2462303</apan>
                    </div>
                    <div className="detailItem">
                      <apan className="itemKey">Address:</apan>
                      <apan className="itemValue">(Karachi,Pakistan) New Karachi, Sector 5E, House no.55/2</apan>
                    </div>
                    <div className="detailItem">
                      <apan className="itemKey">Country:</apan>
                      <apan className="itemValue">Pakistan</apan>
                    </div>
                  </div>
                </div>
              </div>
              <div className="right">
                <Chart aspect={3/1} title='User Spending (Last 6 Months)'/>
              </div>
            </div>
            <div className="bottom">
              <h1 className="title">Last Transactions</h1>
              <List/>
            </div>
          </div>
    </div>
  )
}

export default Single