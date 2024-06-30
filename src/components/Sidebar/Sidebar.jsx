import React, { useContext, useState } from "react";
import './Sidebar.css'
import {assets} from '../../assets/assets'
import { Context } from "../../Context/Context";

const Sidebar = () => {

    const [extended,setExtended] = useState(false)
    const {onSent,prevPrompts,setRecentPrompt,newChat} = useContext(Context)

    const loadPrompt = async (prompt) => {
      setRecentPrompt(prompt)
      awaitonSent(prompt)
    }
   return (
    <div className="sidebar">
      <div className="top">
          <img onClick={()=>setExtended(prev=>!prev)}className="menu" src={assets.menu_icon} alt="" />
          <div onClick={()=>newChat()} className="new-chat">
            <img src={assets.plus_icon} alt="" />
            {extended?<p>New Chat</p>:null}
          </div>
          {extended?<div className="recent">
            <p className="recent-title">Recent</p>
            {prevPrompts.map((item,index)=>{
                return(
                  <div className="recent-entry">
                  <img src={assets.message_icon} alt="" />
                  <p>{item} ...</p>
                </div>
                )
            })}
            
          </div>
          :null}
          
      </div>

      <div className="bottom">
            <div className="bottom-item recent-entry">
              <img src={assets.question_icon} alt="" />
              {extended?<p>Help</p>:null}
            </div>

            <div className="bottom-item recent-entry">
              <img src={assets.history_icon} alt="" />
              {extended?<p>Activity</p>:null}
            </div>

            <div onClick={()=>loadPrompt(item)} className="bottom-item recent-entry">
              <img src={assets.setting_icon} alt="" />
              {extended?<p>Setting</p>:null}
            </div>

      </div>
    </div>
   )
}

export default Sidebar;