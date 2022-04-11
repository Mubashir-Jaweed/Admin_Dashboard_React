import React from 'react'
import './list.scss'
import SideBar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import Datatable from '../../components/dataTable/Datatable'

const List = () => {
  return (
    <div className='list'>
      <SideBar/>
      <div className="listContainer">
        <Navbar/> 
        <Datatable/>
      </div>
    </div>
  )
}

export default List