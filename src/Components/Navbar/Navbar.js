import React from 'react';
import './Navbar.css'
import ToggleButton from '../../Components/ToggleButton/ToggleButton'

const Navbar = (props) => {
    return (
        <header className="navbar">
              <div className='left'>
                       <ToggleButton className="bar" click={props.drawerHandler}/>
               </div> 
                  <div className="nav-div">
               <div className='middle'>
                   <h3>Home</h3>
               </div>
               <div className='right'>
                   <h3>About</h3>
               </div>
                  </div>
                   
        </header>
             
    )
}

export default Navbar
