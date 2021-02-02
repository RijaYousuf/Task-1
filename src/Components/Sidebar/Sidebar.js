import React from 'react'
import './Sidebar.css'
import {SidebarData} from '../../Components/SideabarData/SidebarData'


const Sidebar = (props) => {
    let sidebarClass = ['sidebar-container']

    if(props.show){
        sidebarClass =  ['sidebar-container open']
    }

    return (
        <nav className={sidebarClass}>
            <ul className="Sidebar-list">
                {SidebarData.map((val, key) => {
                    return(
                        <li key={key} className="row"
                        onClick={() => {
                            window.location.pathname = val.link
                        }} >
                            <div id="icon-div">{val.icon}</div>
                            <div id="title-div">{val.title}</div>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}

export default Sidebar
