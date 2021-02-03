import React, { Component } from 'react'
import './App.css';
// import { Route, Switch } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Sidebar from './Components/Sidebar/Sidebar';
import Backdrop from './Components/Backdrop/Backdrop';
import SignupForm from './Components/SignupForm/SignupForm';

export default class App extends Component {

  state = {
    sidebarOpen: false,
  }

  drawerToggleHandler = () => {
    this.setState(prevState => {
      return { sidebarOpen: !prevState.sidebarOpen }
    })
  }

  backdropHandler = () => {
    this.setState({ sidebarOpen: false })
  }


  render() {

    let backdrop

    if (this.state.sidebarOpen) {
      backdrop = <Backdrop click={this.backdropHandler} />
    }

    return (
      <div className="app-container">
      <div className="nav-view">
        <Navbar drawerHandler={this.drawerToggleHandler}/>
        <Sidebar show={this.state.sidebarOpen}/>
        {backdrop}
       </div>
       <SignupForm/>
      </div>
    )
  }
}
