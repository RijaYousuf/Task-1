import React from 'react'
import HorizontalSplitIcon from '@material-ui/icons/HorizontalSplit';
import './ToggleButton.css'

const ToggleButton = (props) => (
  <button className="toggle-button" onClick={props.click}>
       <HorizontalSplitIcon/>
  </button>
)

export default ToggleButton