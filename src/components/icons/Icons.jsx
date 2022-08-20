import React from 'react'
import { AiOutlineCluster, AiOutlineDatabase, AiOutlineGateway, AiOutlineNodeCollapse, AiOutlineCode } from "react-icons/ai";
import './icons.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faTerminal, faCode, faCodeFork, faLaptopCode,faComputer } from "@fortawesome/free-solid-svg-icons";

const Icons = () => {
  return (
    <div className='box'>
        <div className='icon'>
          <span><FontAwesomeIcon icon={faTerminal}></FontAwesomeIcon></span>
        </div>
        <div className='icon2'>
          <span><FontAwesomeIcon icon={faCode}></FontAwesomeIcon></span>
        </div>
        <div className='icon'>
          <span><FontAwesomeIcon icon={faCodeFork}></FontAwesomeIcon></span>
        </div>
        <div className='icon2'>
          <span><FontAwesomeIcon icon={faLaptopCode}></FontAwesomeIcon></span>
        </div>
        <div className='icon'>
          <span><FontAwesomeIcon icon={faComputer}></FontAwesomeIcon></span>
        </div>
    </div>
  )
}

export default Icons;