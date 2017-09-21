import React, {Component} from 'react'
import { withRouter } from 'react-router-dom'

class Nav extends Component {
  menuItemClicked(path) {
    this.props.history.push(path)
  
  }
  render() {

    return (
        <div className='nav'>
            <div className="nav-item" onClick={() => { this.menuItemClicked('/') }}> Home</div>
            <div className="nav-item"  onClick={() => { this.menuItemClicked('/qoutes') }}>Quotes</div>
            <div className="nav-item" onClick={() => { this.menuItemClicked('/photos') }}>Photos</div>
        </div>
    )
  }
}



export default withRouter(Nav)