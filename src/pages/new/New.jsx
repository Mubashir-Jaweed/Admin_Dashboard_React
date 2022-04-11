import React, { useState } from 'react'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import './new.scss'

const New = ({inputs ,title}) => {


  const [file ,setFile] = useState('')

  return (
    <div className='new'>
      <Sidebar/>
      <div className="newContainer">
        <Navbar/>
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img src={file ? URL.createObjectURL(file) 
              : 'https://tse4.mm.bing.net/th?id=OIP._S6CWPvqlA5exNtObCij-QAAAA&pid=Api&P=0&w=163&h=163'} alt="" />
          </div>
          <div className="right">
            <form action="">
              <div className="formInput">
                <label htmlFor='file'>
                 Image : <i class="fa-solid fa-upload icon"></i>
                </label>
                <input type="file" id='file' onChange={e=>setFile(e.target.files[0])} style={{display:"none"}}/>
              </div>

              {inputs.map(input=>(
                <div className="formInput" key={input.id}>
                <label>{input.label}</label>
                <input type={input.type} placeholder={input.placeholder} />
              </div>
              ))}
              <button>Send</button>
            </form>
            </div>
        </div>
      </div>
    </div>
  )
}

export default New