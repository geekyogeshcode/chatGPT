import React, { useState } from 'react'
import './Mainbar.css'
import sendImage from '../../assets/send.svg'
import userIcon from '../../assets/user-icon.png'
import gptLogo from '../../assets/chatgptLogo.svg'

const Mainbar = () => {

  return (
    <div className='Mainbar'>
        <div className="chats">
            <div className="chat">
                <img src={userIcon} alt="" />
                <p className="txt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi fugiat sunt culpa unde aperiam sed a sint, nostrum deserunt quis.</p>
            </div>
            <div className="chat bot">
                <img src={gptLogo} alt="" />
                <p className="txt">Lorem ipsum dolor si recusandae reprehenderit, vel doloremque? Reprehenderit porro distinctio reiciendis dolores. Placeat voluptates quidem ut qui voluptatum reiciendis architecto maxime molestias illum, non repudiandae nemo laboriosam minima veniam ipsam libero quibusdam incidunt commodi ad perferendis quod temporibus nulla. Ad ipsa similique, vitae reprehenderit non error itaque, a architecto iusto, tenetur aut velit optio eligendi nostrum corrupti eos distinctio eius explicabo in quidem porro provident et laudantium debitis. Libero ipsam, dolores inventore numquam vel adipisci natus harum aut aliquam blanditiis, nobis obcaecati, delectus id at hic consectetur debitis. Mollitia quia assumenda accusamus distinctio, dolorum facilis. Eaque atque debitis modi placeat veniam sunt unde quae pariatur deserunt laborum in, facere sed expedita, neque veritatis? Dolorem corporis qui eligendi quas voluptatem excepturi enim. Officia iste aliquam natus recusandae assumenda officiis deleniti quam dolor possimus, sequi culpa architecto sit, perferendis unde animi eveniet!</p>
            </div>
            
        </div>

        <div className="chatFooter">
            <div className="inp">
                <input type="text"  placeholder='Message ChatGPT...'/>
                <button className="send" ><img src={sendImage } alt=""  /></button>
            </div>
            <p>ChatGPT can make mistakes. Consider checking important information.</p>
        </div>
    </div>
  )
}

export default Mainbar
