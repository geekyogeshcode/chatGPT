import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import gptLogo from '../../assets/chatgpt.svg'
import addBtn from '../../assets/add-30.png'
import message from '../../assets/message.svg'
import Home from '../../assets/home.svg'
import Saved from '../../assets/bookmark.svg'
import Rocket from '../../assets/rocket.svg'
import './Sidebar.css'

const Sidebar = () => {
  return (
    <div className='Sidebar'>
        <div className="upper-side">
            <div className="upper-top">
                <img src={gptLogo} alt="Logo" className="logo" />
                <span className="brand">ChatGPT</span>
            </div>
            <div className="midbtn"><button> <img src={addBtn} alt="Add Btn" className='addbtn'/> New Chat</button></div>
            <div className="upper-bottom">
                <button><img src={message} alt="" />What is Programing ?</button>
                <button><img src={message} alt="" />How to use Api ?</button>
            </div>
        </div>
        <div className="lower-side">
            <button><img src={Home} alt="" className='home'/>Home</button>
            <button><img src={Saved} alt="" />Saved</button>
            <button><img src={Rocket} alt="" />Upgdrade to Pro</button>
        </div>
    </div>
  )
}

export default Sidebar
